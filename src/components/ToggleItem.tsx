type props = {
  children?: React.ReactNode;
  className?: string;
};

function ToggleItem(props: props) {
  return (
    <>
      <div className="w-4 h-4 text-center">{props.children}</div>
    </>
  );
}
export default ToggleItem;
