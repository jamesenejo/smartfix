import MessengerTypes from './MessengerTypes';

/**
 * Creates object for sending a basic text.
 * @param {string} recipient: The Id of the receiver.
 * @param {string} message: The message to be sent.
 * @returns {object} an object.
 */
// eslint-disbale-next-line
export class MessengerModel {
  constructor(recipient) {
    this.messaging_type = MessengerTypes.response;
    this.recipient = { id: recipient };
  }
}

export class MessengerAction extends MessengerModel {
  constructor(recipient, actionType = MessengerTypes.typingOn) {
    super(recipient);
    this.sender_action = actionType;
  }
}

export class MessengerModelForTextAndQuickReply extends MessengerModel {
  constructor(recipient, text, quickReplyElements) {
    super(recipient);
    this.message = { text, quick_replies: quickReplyElements };
  }
}

// to be revisited
export class MessengerModelForAttachment extends MessengerModel {
  constructor(recipient, payload, type = MessengerTypes.template) {
    super(recipient);
    this.message = { attachment: { type, payload } };
  }
}

export class Payload {
  constructor(text, buttons, type = MessengerTypes.button) {
    this.template_type = type;
    this.text = text;
    this.buttons = buttons;
  }
}

export class Buttons {
  constructor(title, url) {
    this.type = MessengerTypes.webUrl;
    this.title = title;
    this.url = url;
  }
}

export class Element {
  constructor(title, imageUrl) {
    this.title = title;
    this.image_url = imageUrl;
  }
}

export class QuickReplyElement extends Element {
  constructor(title, payload, imageUrl, type = MessengerTypes.text) {
    super(title, imageUrl);
    this.content_type = type;
    this.payload = payload;
  }
}

export class PayloadElement extends Element {
  constructor(title, subtitle, imageUrl) {
    super(title, imageUrl);
    this.subtitle = subtitle;
  }

  addProperties(buttons, defaultAction) {
    if (buttons) this.buttons = buttons;
    if (defaultAction) this.default_action = defaultAction;
  }
}
