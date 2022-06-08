import { NextFunction, Request, Response } from 'express';
import { CardModel } from '../models/CardDetails';

// const UsersModel = require("../models/UserDetails");

// Get all CardUserDetail
const getAllCardUserInfo = async (_req:Request, res:Response) => {
  try {
    const CardUserDetails = await CardModel.find();
    res.json({
      CardUserDetails,
      message: console.log('getAllCardUserDetails route is working'),
    });
  } catch (error) {
    res.json({ message: console.log(`This is the main error ${error}`) });
  }
};

// Single userDetail
const getSingleCardUserInfo = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    // eslint-disable-next-line eqeqeq
    if (id == ' ' || undefined || null) {
      console.log('You can not access a user detail without sending a valid id.');
      return res.json({
        message: 'Send a valid id.',
      });
    }
    // if( !mongoose.Types.ObjectId.isValid(req.params.userId) ) return false;
    const CardUser = await CardModel.findById(req.params.id);

    res.json({
      CardUser,
      message: console.log('getSingleCardUserInfo route is working.'),

    });
  } catch (error:any) {
    res.status(500).json({ message: `${error.message}` });
  }
};

// Add new CardUserDetail
const addNewCardUserInfo = async (req:Request, res:Response) => {
  if (req.body == ' ' || undefined || null) {
    res.json('Send data in all the paramenters');
    return;
  }
  const addCardNewUser = new CardModel({
    FullName: req.body.FullName,
    CardNumber: req.body.CardNumber,
    CVC: req.body.CVC,
    ZipCode: req.body.ZipCode,
  });

  try {
    const savedCardUser = await addCardNewUser.save();
    res.send(savedCardUser);
    console.log('New card user info added successfully.');
  } catch (error) {
    res.status(400).send(error);
    console.log('Something went wrong');
  }
};

// Update CardUserDetail
const UpdateCardUserByID = async (req:Request, res:Response, _next:NextFunction) => {
  try {
    const { id } = req.params;
    if (id == ' ' && undefined && null) {
      console.log('Send a valid id.');
      return;
    }
    const updatedData = req.body;
    const options = { new: true };

    const result = await CardModel.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error:any) {
    res.status(500).json({ message: `${error.message}` });
  }
};

// Delete CarduserDetail
const DeleteCardUserDetailByID = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    if (id == ' ' && undefined && null) {
      console.log('Send a valid id.');
      return;
    }
    const removeUserDetail = await CardModel.findByIdAndDelete(req.params.id);
    res.json(removeUserDetail);
  } catch (error) {
    res.json({ message: error });
  }
};

export {
  getAllCardUserInfo,
  getSingleCardUserInfo,
  addNewCardUserInfo,
  UpdateCardUserByID,
  DeleteCardUserDetailByID,
};
