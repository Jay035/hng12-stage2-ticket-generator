import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CLOUDINARY_UPLOAD_PRESET = "ticketing-generator";
const CLOUDINARY_CLOUD_NAME = "dx5zusyom";

export function ImageUploader({ errors, setFormDetails, setErrors }) {
  const [imageUrl, setImageUrl] = useState(
    localStorage.getItem("uploadedImage") || ""
  );
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setErrors((prev) => ({ ...prev, avatar: "" }));
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImageUrl(data.secure_url);
      console.log(data);
      setFormDetails((prev) => ({ ...prev, avatar: data.secure_url }));
    } catch (error) {
      console.error("Upload failed:", error);
      setErrors((prev) => ({ ...prev, avatar: `Upload failed: ${error}` }));
    } finally {
      setLoading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    handleFileUpload(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // useEffect(() => {
  //   if (imageUrl) {
  //     localStorage.setItem("uploadedImage", imageUrl);
  //   }
  // }, [imageUrl]);

  useEffect(() => {
    const storedData = localStorage.getItem("ticketGenerationForm");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setImageUrl(parsedData.avatar);
    }
  }, []);

  return (
    <div className="bg-[#052228] mb-8 p-6 rounded-3xl border border-[#07373F]">
      <p>Upload Profile Photo</p>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`bg-[#000000]/20 mt-8 cursor-pointer ${
          dragging && "border-2 border-[#07373F]"
        }`}
      >
        <div className="bg-[#0E464F] group relative rounded-[32px] w-[240px] h-[240px] p-6 mx-auto gap-4 flex items-center flex-col justify-center">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleChange}
            className="hidden"
            aria-describedby={errors.avatar ? "avatarError" : undefined}
          />

          {imageUrl ? (
            <div>
              <Image
                className="rounded-[32px]"
                width={240}
                height={240}
                src={imageUrl}
                alt="upload"
              />
              <div
                className={`gap-4 w-full h-full rounded-[32px] bg-[#000000]/30 absolute left-0 top-1/2 -translate-y-1/2 backdrop-blur-[2px] hidden group-hover:flex justify-center p-6 items-center flex-col`}
              >
                <Image
                  className={`w-[27px] transition-all duration-200 ${
                    loading && "rotate-180"
                  }`}
                  width="0"
                  height="0"
                  src="/upload.svg"
                  alt="upload"
                />
                {loading ? (
                  <p className="mt-4 text-[#FAFAFA] animate-pulse">
                    Uploading...
                  </p>
                ) : (
                  <p className="text-center">Drag & drop or click to upload</p>
                )}
              </div>
            </div>
          ) : (
            <div className="gap-4 flex items-center flex-col">
              <Image
                className={`w-[27px] transition-all duration-200 ${
                  loading && "rotate-180"
                }`}
                width="0"
                height="0"
                src="/upload.svg"
                alt="upload"
              />
              {loading ? (
                <p className="mt-4 text-[#FAFAFA] animate-pulse">
                  Uploading...
                </p>
              ) : (
                <p className="text-center">Drag & drop or click to upload</p>
              )}
            </div>
          )}
        </div>
      </div>
      {errors.avatar && (
        <p
          id="avatarError"
          aria-live="assertive"
          className="text-red-500 text-sm pt-1"
        >
          {errors.avatar}
        </p>
      )}
    </div>
  );
}
