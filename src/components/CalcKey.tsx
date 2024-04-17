type props = {
  name?: string;
  className?: string;
  children?: React.ReactNode;
};

function CalcKey(props: props) {
  return (
    <>
      <div className={props.className}>
        {props.name} {props.children}
      </div>
    </>
  );
}
export default CalcKey;
