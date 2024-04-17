type props = {
  children?: React.ReactNode;
  className?: string;
};

function OutputField(props: props) {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
}
export default OutputField;
