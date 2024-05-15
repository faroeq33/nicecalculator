type props = {
  key?: number;
  name: number | string;
  className?: string;
};

function CalcNumberKey(props: props) {
  return (
    <>
      <div
        key={props.key}
        className="p-4 text-center rounded-md shadow-sm shadow-themeone-grayish-orange bg-themeone-light-grayish-orange"
      >
        {" "}
        <span className="text-4xl font-bold text-themeone-very-dark-grayish-blue">
          {props.name}
        </span>
      </div>
    </>
  );
}
export default CalcNumberKey;
