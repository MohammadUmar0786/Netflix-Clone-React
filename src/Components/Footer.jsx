export default function Footer() {
  const cardStyle = "bg-[#1E172C] p-5 rounded-xl";
  const h3Style = "text-[24px] mb-3 font-bold";
  const pStyle = "text-[18px] text-gray-400";
  return (
    <div className="py-12">
      <h2 className="w-[90%] sm:w-[80%] container mx-auto mb-8 text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
        More reasons to join
      </h2>
      <div className="w-[90%] sm:w-[80%] container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        <div className={cardStyle}>
          <div>
            <h3 className={h3Style}>Enjoy on your TV</h3>
          </div>
          <div>
            <p className={pStyle}>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
        </div>

        <div className={cardStyle}>
          <div>
            <h3 className={h3Style}>Download your shows to watch offline</h3>
          </div>
          <div>
            <p className={pStyle}>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>

        <div className={cardStyle}>
          <div>
            <h3 className={h3Style}>Watch everywhere</h3>
          </div>
          <div>
            <p className={pStyle}>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>

        <div className={cardStyle}>
          <div>
            <h3 className={h3Style}>Create profiles for kids</h3>
          </div>
          <div>
            <p className={pStyle}>
              Send kids on adventures with their favourite characters in a space
              made just for them — free with your membership.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2026 MoviesAdda. All rights reserved.
      </div>
    </div>
  );
}
