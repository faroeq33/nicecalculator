type props = {
  style: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
};

function ScreenBackground(props: props) {
  return (
    <>
      <div className={props.className} style={props.style}>
        {props.children}
      </div>
    </>
  );
}
export default ScreenBackground;
