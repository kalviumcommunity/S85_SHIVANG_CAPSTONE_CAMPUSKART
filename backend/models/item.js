const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  name: {type: String,required: true,trim: true,  },
  description: {type: String,required: true,},
  price: {type: Number,required: true,min: 0,  },
  category: {type: String,required: true,  },
  stock: {type: Number,required: true,min: 0,  },
  createdAt: {type: Date,default: Date.now,  },
});
module.exports = mongoose.model('Item', itemSchema);