import { Schema, model } from 'mongoose';

const CardDetailSchema = new Schema({
  FullName: {
    type: String,
    required: true,
    max: 50,
  },
  CardNumber: {
    type: Number,
    min: 16,
    required: true,
    unique: true,
  },
  CVC: {
    type: Number,
    min: 3,
    required: true,
    unique: true,
  },
  ZipCode: {
    type: Number,
    required: true,
  },
});

// We are creating a new collection.
const CardModel = model('CardDetail', CardDetailSchema);

// var comment1 = new CardModel({
//     FullName: 'Nitin Malik',
//     CardNumber: '9855422469',
//     CVC: '669',
//     ZipCode:'0000'
// });

// comment1.save(function (err: any, comment: any) {
//     if (err) console.log(err);
//     else console.log('fallowing comment was saved:', comment);
// });

export { CardModel };
