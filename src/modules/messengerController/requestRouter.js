import generalEnquiries from '../features/generalEnquiries';
import cancel from '../features/cancel';

export default {
  enquiries: reqMessage => generalEnquiries(reqMessage),
  cancel: (reqMessage, firstName) => cancel(reqMessage, firstName)
};
