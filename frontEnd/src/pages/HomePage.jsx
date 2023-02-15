import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="mt-44 mx-auto justify-center  text-center text-2xl px-8">
        <h3 className="text-blue-600">Anonymous Feedback made Easy</h3>

        <Link to="/feedback">
          <button className="bg-blue-600 rounded-xl text-white  py-2 px-3 text-xl mt-10">
            Give Feedback
          </button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
