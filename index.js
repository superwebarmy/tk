const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ttdl =  require("tiktok-video-downloader");
const port = process.env.port || 5001;
app.use(bodyParser.json());

app.post('/tkdownload', (req,res)=>{
    const link = req.body.link;
    ttdl.getInfo(link)
    .then((result) => {
      res.status(200).send(result);
    }).catch((error)=>{
        res.send(500).send({error: 'something went wrong'});
    })
  });

app.listen(port, ()=>{
    console.log('listening');
});