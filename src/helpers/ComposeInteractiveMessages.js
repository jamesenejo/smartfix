import {
  MessengerModelForTextAndQuickReply, QuickReplyElement, PayloadElement,
  Payload, MessengerModelForAttachment, Buttons
} from '../modules/MessageModels';

const initialOptions = [
  new QuickReplyElement('Make an enquiry', 'enquiries'),
  new QuickReplyElement('Never mind', 'cancel')
];

class ComposeInteractiveMessages {
  static default(recipient) {
    const message = 'What would you like to do next?';
    const quickReplyButtons = initialOptions;

    return new MessengerModelForTextAndQuickReply(recipient, message, quickReplyButtons);
  }

  static cancel(recipient, firstName) {
    const message = `Okay.

It was nice chatting with you, ${firstName}.

I would always be here; when you need me, just say 'Hello'.`;

    return new MessengerModelForTextAndQuickReply(recipient, message);
  }

  static welcomeMessage(recipient, firstName) {
    const greeting = `Hi ${firstName}! I am Feexer, your SmartFix buddy. What would you like to do?

Scroll the buttons below to your left to see more options.`;
    const quickReplyButtons = initialOptions;
    return new MessengerModelForTextAndQuickReply(recipient, greeting, quickReplyButtons);
  }

  static enquiryList(recipient) {
    const message = 'My creators are currently working to ensure I serve you better. I would be able to respond to all your enquiries once I am fully functional.';
    // const quickReplyButtons = [
    //   new QuickReplyElement('Apptitude tests', 'enquiries apptitudeTests'),
    //   new QuickReplyElement('Office address', 'enquiries officeLocation'),
    //   new QuickReplyElement('Upcoming events', 'enquiries upcomingEvents'),
    // ];

    return new MessengerModelForTextAndQuickReply(recipient, message/*, quickReplyButtons*/);
  }
}

export default ComposeInteractiveMessages;
