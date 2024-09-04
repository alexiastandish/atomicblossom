import CollectionsHero from "./components/CollectionsHero";
import HomeBanner from "./components/HomeBanner";
// import CollectionsHero from "./components/CollectionsHero";

export default function Home() {
  return (
    <div className="m-0 overflow-x-hidden">
      <HomeBanner />
      <CollectionsHero />
      {/* <div className="hero bg-base-200 min-h-screen relative">
        <div
          className="bg-white absolute top-0 w-screen h-20 z-3"
          style={{
            background:
              "linear-gradient(to bottom, white 0%, transparent 100%)",
          }}
        />
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      {/* </Container> */}
    </div>
  );
}
