const router = require('express').Router();
let Seg = require('../models/segment.model');

router.route('/get').get((req, res) => {
    Seg.find().sort( {segDate: -1} )
      .then(segment => res.json(segment))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const segName = req.body.segmentName;
    const segArtist = req.body.segmentArtist;
    const segDesc = req.body.segmentDesc;
    const segDate = Date.parse(req.body.segmentDate);
    const segLink = req.body.segmentLink;

    const newSeg = new Seg({
        segName,
        segArtist,
        segDesc,
        segDate,
        segLink,
    });

    newSeg.save()
      .then(() => res.json('Segment added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;