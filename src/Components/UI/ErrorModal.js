import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

const ErrorModal = props => {
   return (
      <div className="error" onClick={props.onConfirm}>
         <Card className="error__modal">
            <div className="error__header">
               <h2>{props.title}</h2>
            </div>

            <div className="error__message">
               <p>{props.message}</p>
            </div>

            <div className="error__button">
               <Button onClick={props.onConfirm}>Understood</Button>
            </div>
         </Card>
      </div>
   )
};
export default ErrorModal;
