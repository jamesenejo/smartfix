import ComposeInteractiveMessages from '../../helpers/ComposeInteractiveMessages';
import SendAPI from '../../utils/SendAPI';

const sendAPI = new SendAPI();

class InteractiveMessages {
  static async welcomeMessage(recipient, firstName) {
    const message = ComposeInteractiveMessages.welcomeMessage(recipient, firstName);
    await sendAPI.send(message);
  }
}

export default InteractiveMessages;
