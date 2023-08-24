export default function CustomButton({
  classNames,
  text,
  onClickFunc,
}: {
  classNames: string;
  text: string;
  onClickFunc: () => void;
}) {
  return (
    <button className={classNames} onClick={onClickFunc}>
      {text}
    </button>
  );
}
