const Spinner = () => {
  let circleCommonClasses = "h-5 w-5 bg-primary rounded-full";

  return (
    <div className="flex items-center justify-center min-w-full min-h-screen">
      <div className="flex align-center gap-1">
        <div className={`${circleCommonClasses} animate-bounce`}></div>
        <div className={`${circleCommonClasses} animate-bounce100`}></div>
        <div className={`${circleCommonClasses} animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

export default Spinner;
