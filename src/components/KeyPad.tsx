type props = {
  children?: React.ReactNode;
  className?: string;
};

function Keypad(props: props) {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
}
export default Keypad;
