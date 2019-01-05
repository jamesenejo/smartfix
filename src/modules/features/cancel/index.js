import ComposeInteractiveMessages from '../../../helpers/ComposeInteractiveMessages';
import SendAPI from '../../../utils/SendAPI';

const sendAPI = new SendAPI();

export default async (reqMessage, firstName) => {
  const { message: { quick_reply: { payload } }, sender: { id } } = reqMessage;
  const message = ComposeInteractiveMessages.cancel(id, firstName);

  try {
    await sendAPI.send(message);
  } catch (e) {
    console.log(e.response.data);
  }
};
