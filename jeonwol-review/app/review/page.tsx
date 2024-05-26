import Header from "../components/Header";
import ReviewForm from "./components/ReviewForm";

export default function Review() {
  return (
    <>
      <Header IsUser={true} />
      <div className="flex flex-col items-center p-12">
        <ReviewForm />
      </div>
    </>
  );
}
