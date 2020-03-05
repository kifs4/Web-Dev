var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'My Demo Prog'
    });
});

router.post('/', function(req, res) {;
    var a = parseInt(req.body.firstnumber) + parseInt(req.body.lastnumber);
    var b = parseInt(req.body.firstnumber) * parseInt(req.body.lastnumber);
    var c = parseInt(req.body.firstnumber) - parseInt(req.body.lastnumber);

    if (isNaN(req.body.firstnumber) && isNaN(req.body.lastnumber) == false)
        res.render('index', {
            title: 'Method POST result:',
            Greeting: 'Not a Numbers, '
        });

    else

        res.render('index', {
        title: 'Method POST result:',
        Greeting: 'Hello, ' + ' ' + a + ' ' + b + ' ' + c + ' '

    });

});

module.exports = router;