export function ProgressBar({ progress }) {
  return (
    <div className="bg-[#0E464F] rounded-[5px] w-full">
      <div
        style={{ width: `${progress}%` }}
        className={` transition-all duration-300 h-1 bg-[#24A0B5]`}
      ></div>
    </div>
  );
}
