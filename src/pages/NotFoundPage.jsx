import NotFoundImage from "../assets/404-page-not-found.svg";
function NotFoundPage() {
  return (
    <div className="container min-h-[80vh] flex justify-center items-center ">
        {" "}
        <img src={NotFoundImage} alt="not-found" className="w-full sm:w-[600px]" />
    </div>
  );
}

export default NotFoundPage