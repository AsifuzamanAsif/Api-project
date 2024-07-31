const Home = () => {
  return (
    <section className=" bg-slate-600">
      <div className="container">
        <div className="py-20">
          <div className="pb-10">
            <h1 className=" text-slate-50 text-2xl font-medium">Home page :-</h1>
          </div>
          <div className="flex gap-5 mb-10">
            <div className="w-1/3">
              <img className="w-full h-[483px]" src="api 1.png" alt="api 1.png" />
            </div>
            <div className="w-1/3">
              <img className="w-full" src="api 2.png" alt="api 2.png" />
            </div>
            <div className="w-1/3 h-96">
              <img className="w-full h-[483px]" src="api 3.png" alt="api 3.png" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/3">
              <img className="w-full h-[483px]" src="api 4.jpeg" alt="api 4.png" />
            </div>
            <div className="w-1/3">
              <img className="w-full h-[483px]" src="api 5.jpeg" alt="api 5.png" />
            </div>
            <div className="w-1/3">
              <img className="w-full h-[483px]" src="api 6.png" alt="api 6.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
