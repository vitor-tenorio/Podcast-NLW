import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/base-backend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.Promise = global.Promise;

export default mongoose;
