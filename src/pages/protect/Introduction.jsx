import Constants from "../../constants";
import Button, {LinkButton} from "../../shared/Button";

function Introduction({ onNext }) {
  return (
    <div className="fixed p-4 top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-blue-500 font-bold mb-3">Protect Your Messages.</h1>
      <p className="text-gray-500 mb-8 max-w-xl text-center">Protect your messages with a private key. You only need to enter your created private key every time you need to chat.</p>
      <Button onClick={onNext} className="mb-3">
        Let's do it!
      </Button>
      <LinkButton to={Constants.Path.Main} variant="outlined" colors={'bg-transparent text-blue-500 outline-blue-500 hover:bg-blue-500 hover:text-white'}>
        Maybe later
      </LinkButton>
    </div>
  );
}

export default Introduction;
