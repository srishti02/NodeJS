import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
routes(app);

app.get('/', (req,res) =>
res.send(`Node and express server running on port ${port}`)
);

app.listen(port, () =>
console.log(`Your server is running on port ${port}`)
);
