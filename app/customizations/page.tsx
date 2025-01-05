import CreateCustomBtn from "@/components/CreateCustomBtn";
import { getDndForms } from "@/actions/getDndForms";
import OverlayText from "@/components/OverlayText";
import FormsList from "@/components/FormsList/FormsList";
import CustomRequestForm from "@/components/CustomRequestForm/CustomRequestForm";
import getCurrentUser from "@/actions/getCurrentUser";
export const dynamic = "force-dynamic";

export default async function page(props) {
  const dndForms = await getDndForms();
  const currentUser = await getCurrentUser();

  // TODO add color of shelf
  // xl:bg-yellow-500 lg:bg-green-500 md:bg-blue-500 sm:bg-red-500
  return (
    <div className="flex flex-col ">
      <section className="h-screen hero flex items-center justify-center ">
        <div className="hero-content lg:text-left lg:flex-row sm:max-md:flex-col flex-col text-center justify-between p-12">
          <div className="flex flex-col lg:items-start	md:items-center sm:items-center lg:w-1/2 w-full z-10">
            <OverlayText
              textSize={8}
              textColor="primary"
              style={{ fontSize: "3em" }}
            >
              Custom Creations
            </OverlayText>
            <p className="py-6">
              Design your own flower shelf to be custom made with your design or
              submit a custom request for jewlery pieces. // TODO: add something
              about submissions status (Drafts are aditable)
            </p>
            <div className="flex w-full lg:justify-start justify-center">
              <CreateCustomBtn />
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2 w-full">
            <div className="relative w-full">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-neutral rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-0"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-neutral bg-opacity-60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 z-0"></div>
              <div className="absolute -bottom-2 left-20 w-72 h-72  bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 z-0"></div>
              {dndForms.length === 0 ? (
                <div className="lg:w-full w-1/2 mx-auto	my-3 z-10 relative">
                  <img
                    src="/images/shelf-dnd-hero-image.png"
                    alt="shelf-dnd-hero-image"
                    className={`object-cover rounded-md shadow-md`}
                  />
                </div>
              ) : (
                <div
                  className="m-8 bg-white bg-opacity-60 relative space-y-4 max-h-96 overflow-y-auto shadow-lg rounded-lg
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-transparent
    dark:[&::-webkit-scrollbar-thumb]:bg-primary"
                >
                  <FormsList forms={dndForms} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CustomRequestForm currentUser={currentUser} />
    </div>
  );
}

{
  /* <div className="flex flex-row items-center justify-between min-h-screen px-8 bg-gray-100">
  <div className="w-1/2 pr-8">
    <h1 className="text-5xl font-bold mb-4 text-gray-800">
      Welcome to Our Site
    </h1>
    <p className="text-lg text-gray-600 mb-6">
      Discover amazing features and join our community. Sign up below to get
      started!
    </p>
  </div>

  <div className="w-1/2 bg-white shadow-md rounded-lg p-8">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up</h2>
    <form className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="w-full border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          className="w-full border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</div>; */
}
