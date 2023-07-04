import Image404 from "../../src/assets/404.jpg";

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 sm:flex-row sm:gap-16 sm:justify-center">
      <img
        src={Image404}
        alt="404 Not Found"
        className="w-32 sm:w-40 lg:w-60"
      />
      <div className="flex flex-col items-center gap-2 lg:gap-3">
        <h1 className="font-bold text-8xl lg:text-9xl">404</h1>
        <p className="font-bold text-xl lg:text-2xl">Uh-oh! Page not found!</p>
        <p className="text-sm text-gray lg:text-xl">
          The page you are looking for does not exist.
        </p>
        <button className="selected-tab sm:w-36 sm:py-2 sm:text-base mx-auto mt-8 lg:w-40 lg:py-3 lg:text-xl">
          <a href="/">Go Home</a>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
