type props = {
  number: number;
  className?: string;
};

function ToggleNumber(props: props) {
  return (
    <>
      <div className="w-4 h-4 text-xs text-center">{props.number}</div>
    </>
  );
}
export default ToggleNumber;
