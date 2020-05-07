const router = require('express').Router();
let Res = require('../models/reservation.model');

router.route('/get').get((req,res) => {
  Res.find()
    .then(reservation => res.json(reservation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getByEmail').get((req,res) => {
    Res.find( {stuResEmail: req.body.formEmailStu } )
      .then(reservation => res.json(reservation))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { 
    const stuResName = req.body.formNameStu;
    const stuResEmail = req.body.formEmailStu;
    const stuResPhone = req.body.formPhoneStu;
    const stuResDate = Date.parse(req.body.formDateStu);
    const stuResHours = Number(req.body.formHoursStu);
    
    const newRes = new Res({
        stuResName,
        stuResEmail,
        stuResPhone,
        stuResDate,
        stuResHours,
    });

    newRes.save()
      .then(() => res.json('Reservation made!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;