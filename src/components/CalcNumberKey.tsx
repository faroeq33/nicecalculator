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
        className="text-center rounded-md shadow-sm text-themeonedarkblueshadow key bg-themeonelightgreyorange shadow-themeonegreyorange"
      >
        <span className="text-3xl font-bold text-themeonedarkblue">
          {props.name}
        </span>
      </div>
    </>
  );
}
export default CalcNumberKey;
