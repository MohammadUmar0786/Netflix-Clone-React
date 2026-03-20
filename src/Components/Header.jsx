export default function HomeHeader() {
  return (
    <>
        <div className="flex flex-col justify-center items-center mt-16 sm:mt-24 md:mt-32 px-4 text-white text-center">

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unlimited movies, <br className="hidden sm:block" />
              shows, and more
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">Starts at ₹149. Cancel at any time.</p>
          </div>

          <div className="mt-5">
            <h3 className="text-sm sm:text-base md:text-lg text-gray-400">Ready to watch? Check below.</h3>
          </div>
        </div>
    </>
  );
}
