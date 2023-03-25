import CopyButton from "./ui/copy-button"

const CardBox = ({ copyIcon, value, title }) => {
  return (
    <div className="card bg-white/5 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2">
      <div className="text-zinc-400 flex gap-4 m-0 justify-between items-center">
        <p>{title}</p>
        {copyIcon && (
          <CopyButton value={value} />
        )}
      </div>
      <h3 className="text-zinc-200 m-0 truncate">{value || "-"}</h3>
    </div>
  );
};

export default CardBox;
