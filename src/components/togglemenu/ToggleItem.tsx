type props = {
  children?: React.ReactNode;
  className?: string;
};

function ToggleItem(props: props) {
  return (
    <>
      <div className="w-1/2">{props.children}</div>
    </>
  );
}
export default ToggleItem;
