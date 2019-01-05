import express from 'express';
import messengerController from '../messengerController';

const webhookRouter = express.Router();

webhookRouter.post('/', messengerController);

webhookRouter.get('/', (req, res) => {
  // Your verify token. Should be a random string.
  const VERIFY_TOKEN = 'wertyuioiuy';

  // Parse the query params
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

export default webhookRouter;
