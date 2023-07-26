import Constants from "../../constants";
import {LinkButton} from "../../shared/Button";

function TryIt() {
  return (
    <div className="fixed p-4 top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-blue-500 font-bold mb-3">All done!</h1>
      <p className="text-gray-500 mb-4">Your messages have been protected by your newly created key.</p>
      <LinkButton to={Constants.Path.Check}>
        Try It!
      </LinkButton>
    </div>
  );
}

export default TryIt;
