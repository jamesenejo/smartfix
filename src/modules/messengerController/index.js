import requestRouter from './requestRouter';
import MessengerTypes from '../MessageModels/MessengerTypes';
import InteractiveMessages from '../InteractiveMessages';
import sendSenderAction from '../../helpers/sendSenderAction';
import SendAPI from '../../utils/SendAPI';

const sendAPI = new SendAPI();

export default async (req, res) => {
  const reqMessage = req.body.entry[0].messaging[0];
  console.log(reqMessage);
  const { message: { quick_reply }, sender: { id } } = reqMessage;

  await sendSenderAction(id, MessengerTypes.markSeen); // mark message as seen
  await sendSenderAction(id); // send typing font
  const { data: { first_name } } = await sendAPI.fetchUserProfile(id);

  if (!quick_reply) {
    try {
      await InteractiveMessages.welcomeMessage(id, first_name);
    } catch (e) {
      console.log(e.response.data);
    }
    return res.status(200).send('EVENT_RECEIVED');
  }

  const handler = quick_reply.payload.split(' ')[0];
  await requestRouter[handler](reqMessage, first_name);
  return res.status(200).send('EVENT_RECEIVED');
};
