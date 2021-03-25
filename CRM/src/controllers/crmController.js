import mongoose from 'mongoose';
import {contactSchema} from '../models/crmModel'

const contact = mongoose.model('Contact', contactSchema);

export const addNewContact = (req,res) => {
  let newContact  = new contact(req.body);
  newContact.save((err,contactToAdd) => {
    if(err){
      res.send(err);
    }
    res.json(contactToAdd);
  });
}
export const getContacts = (req,res) => {
  contact.find({},(err,contactToAdd) => {
    if(err){
      res.send(err);
    }
    res.json(contactToAdd);
  });
}
export const getContactWithId = (req,res) => {
  contact.findById(req.params.ContactID,(err,contactToAdd) => {
    if(err){
      res.send(err);
    }
    res.json(contactToAdd);
  });
}
export const updateContact = (req,res) => {
  contact.findOneAndUpdate({ _id: req.params.ContactID},req.body,{new: true, useFindAndModify: false},(err,contactToAdd) => {
    if(err){
      res.send(err);
    }
    res.json(contactToAdd);
  });
}
export const deleteContact = (req,res) => {
  contact.remove({ _id: req.params.ContactID},(err,contactToAdd) => {
    if(err){
      res.send(err);
    }
    res.json({message:'successfully deleted contact'});
  });
}
