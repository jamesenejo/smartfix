import enquiries from './enquiries';
import ComposeInteractiveMessages from '../../../helpers/ComposeInteractiveMessages';
import SendAPI from '../../../utils/SendAPI';

const sendAPI = new SendAPI();

export default async (reqMessage) => {
  const { message: { quick_reply: { payload } }, sender: { id } } = reqMessage;
  const enquirySubType = payload.split(' ')[1];

  if (!enquirySubType) {
    const message = ComposeInteractiveMessages.enquiryList(id);
    try {
      await sendAPI.send(message);
    } catch (e) {
      console.log(e.response.data);
    }
    return;
  }
  const message = enquiries[enquirySubType](id);
  try {
    await sendAPI.send(message);
  } catch (e) {
    console.log(e.response.data);
  }
};
