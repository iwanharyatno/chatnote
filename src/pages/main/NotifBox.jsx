import Button from "../../shared/Button";

function NotifBox({ show, message, action, onAction, onClose, className }) {
  return (
    <div className={['p-2 border-b gap-x-4 border-b-gray-100 shadow-md flex items-center', className, show ? 'block' : 'hidden'].join(' ')}>
      <button className="p-2 text-lg" onClick={onClose}>
        &times;
      </button>
      <p className="text-gray-500">{message}</p>
      <Button onClick={onAction} size="sm" className="ml-auto">
        {action}
      </Button>
    </div>
  );
}

export default NotifBox;
