const Keyboard = () => {
  return (
    <div className="absolute top-0 left-[10%] right-[10%] bottom-0 bg-white shadow-2xl px-4">
      <button className="absolute top-4 right-8  text-4xl">x</button>
      <div className="text-4xl">Акции</div>
      <div className="w-full h-[10%] bg-grey-400 absolute z-10">
        <input type="text" value="fds" className=" bg-inherit " />
      </div>
    </div>
  );
};
export default Keyboard;
