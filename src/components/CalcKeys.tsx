type props = {
  children?: React.ReactNode;
  className?: string;
};

function CalcKeys(props: props) {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
}
export default CalcKeys;
