function HeroCompo() {
  return (
    <>
      <div className="hero bg-cover bg-[position:60%] bg-no-repeat min-h-screen text-white lg:bg-center">
        <div className="flex items-center min-h-screen lg:px-11 lg:bg-gradient-to-r from-black from-20% to-70%">
          <div className="flex-col mx-4 bg-black bg-opacity-70 p-3 rounded lg:w-2/5 lg:text-left lg:mx-0 lg:bg-transparent">
            <p className=" text-2xl my-3 text-slate-400 font-bold">
              SHOOTING STAR
            </p>
            <p className=" text-xl my-1 text-slate-400 font-bold">
              Make your dream come true
            </p>
            <p>
              Do you have a dream of publishing your own game ? Or do you want
              to make a game that you can play with your friends ? Or do you
              simply want to make your own fantasy world where you immerse
              yourself in it ? Don't worry ! Shooting Star will make all of
              those things come true !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroCompo;
