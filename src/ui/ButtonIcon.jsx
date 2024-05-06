
function ButtonIcon({onClick,children}) {
  return (
    <button
      onClick={onClick}
      className="text-2xl md:text-3xl hover:shadow-md hover:border-white border-[1px] border-transparent transition-all duration-300  p-2 rounded-md">
      {children}
    </button>
  );
}

export default ButtonIcon