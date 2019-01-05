import SendAPI from '../utils/SendAPI';
import { MessengerAction } from '../modules/MessageModels';

const sendAPI = new SendAPI();

export default async (recipient, actionType) => {
  const message = new MessengerAction(recipient, actionType);
  try {
    await sendAPI.send(message);
  } catch (e) {
    console.log(e.response.data);
  }
};
