/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable eqeqeq */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */

import { NextFunction, Request, Response } from 'express';
import { UsersModel } from '../models/UserDetails';

// Get all userDetail
const getAllUserDetails = async (req:Request, res:Response) => {
  try {
    const userDetails = await UsersModel.find();
    res.json({
      userDetails,
      message: console.log('getAllUserDetails route is working'),
    });
  } catch (error) {
    res.json({ message: console.log(`This is the main error ${error}`) });
  }
};

// Single userDetail
const getSingleUserDetail = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    if (id == ' ' || undefined || null) {
      console.log('You can not access a user detail without sending a valid id.');
      return res.json({
        message: 'Send a valid id.',
      });
    }
    // if( !mongoose.Types.ObjectId.isValid(req.params.userId) ) return false;
    const user = await UsersModel.findById(req.params.id);

    res.json({
      user,
      message: console.log('getSingleUserDetail route is working.'),

    });
  } catch (error:any) {
    res.status(500).json({ message: `${error.message}` });
  }
};

// Add new userDetail
const addNewUserDetail = async (req:Request, res:Response) => {
  if (req.body == ' ' || undefined || null) {
    res.json('Send data in all the paramenters');
    return;
  }
  
  const addNewUser = new UsersModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Organization: req.body.Organization,
    Role: req.body.Role,
    Departmennt: req.body.Departmennt,
    Country: req.body.Country,
    City: req.body.City,
    Email: req.body.Email,
  });

  try {
    const savedUser = await addNewUser.save();
    res.send(savedUser);
    console.log('New user added successfully.');
  } catch (error) {
    res.status(400).send(error);
    console.log('Something went wrong');
  }
};

// Update userDetail
const updateUserDetail = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    if (id == ' ' && undefined && null) {
      console.log('Send a valid id.');
      return;
    }
    const updatedData = req.body;
    const options = { new: true };

    const result = await UsersModel.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error:any) {
    res.status(500).json({ message: `${error.message}` });
  }

  // try{
  //     const UpdateDetails = new UsersModel({

  //         FirstName: req.body.FirstName,
  //         LastName: req.body.LastName,
  //         Organization: req.body.Organization,
  //         Role: req.body.Role,
  //     Departmennt: req.body.Departmennt,
  //         Country: req.body.Country,
  //         City: req.body.City,
  //         Email: req.body.Email,

  //     });
  //     const options = { new: true };

  //     const id = req.params.id;
  //     const updatedUser=await UsersModel.findByIdAndUpdate(id, UpdateDetails, options);
  //     //    {_id: req.params.id },
  //     res.json(updatedUser);
  //     res.json("User details updated successfully.")
  //    }catch(error:any){
  //     res.status(500).json({message: `${error.message}`})
  // }
};

// Delete userDetail
const deleteUserDetail = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    if (id == ' ' && undefined && null) {
      console.log('Send a valid id.');
      return;
    }
    const removeUserDetail = await UsersModel.findByIdAndDelete(req.params.id);
    res.json(removeUserDetail);
  } catch (error) {
    res.json({ message: error });
  }
};

export {
  getAllUserDetails,
  getSingleUserDetail,
  addNewUserDetail,
  updateUserDetail,
  deleteUserDetail,
};
