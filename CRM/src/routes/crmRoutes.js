import {addNewContact,getContacts,getContactWithId,updateContact,deleteContact} from '../controllers/crmController'

const routes = (app) => {
  app.route('/contact')
  .get((req,res,next) => {
    //middleware
    console.log(`Request from ${req.originalUrl}`)
    console.log(`Request type ${req.method}`)
    next();
  }, getContacts)
  //post endpoint
  .post(addNewContact);

  app.route('/contact/:ContactID')
  // get specific contact
  .get(getContactWithId)
  //update specific contact
  .put(updateContact)
  //deleting a specific contact
  .delete(deleteContact);
}

export default routes;
