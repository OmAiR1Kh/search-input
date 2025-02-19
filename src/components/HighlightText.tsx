const HighlightText = ({
  text,
  searchQuery,
  title,
}: {
  text: string;
  searchQuery: string;
  title?: string;
}) => {
  if (!searchQuery) {
    return (
      <div className="flex flex-col gap-3">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <span>{text}</span>
      </div>
    );
  }
  const regex = new RegExp(`(${searchQuery})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      <div className="flex flex-col gap-3">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <span>
          {parts.map((part, i) =>
            regex.test(part) ? (
              <span className="bg-yellow-300" key={i}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </span>
      </div>
    </>
  );
};

export default HighlightText;
