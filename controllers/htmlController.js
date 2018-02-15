const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const logger = require('morgan');
const ex_messages = require('express-messages');
const session = require('express-session');
const ex_validator = require('express-validator');
const passport = require('passport');
const passport_http = require('passport-http');
const passport_local = require('passport-local');
const connect_flash = require('connect-flash');
const multer = require('multer');
var UserDatas = require('../models/user');
const mongoDb = require('mongodb');



module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'work hard',
        resave: true,
        saveUninitialized: false
    }));


	app.get('/', function(req, res) {
	    console.log('homepage init');
		res.render('index');
	});

    app.post('/register', function(req, res) {
        var user_data =  req.body;
        console.log(user_data);
        var users = new UserDatas();
        users.username=user_data.username;
        users.email=user_data.email;
        users.password =user_data.passwd;
        users.fist_name =user_data.firstname;
        users.last_name=user_data.lastname ;
        users.date_of_birth=user_data.dob;

        users.save(function(err) {
            if(err){
                console.log(err);
                return;
            }else{
            	console.log("successfully registerd");
                res.redirect('/success-login');
            }
        });
    });

    app.get('/success-login', function(req, res) {
        res.render('success');
    });
    app.post('/signin', function(req, res) {
        var user_data =  req.body;
        console.log(user_data);
        var users = new UserDatas();
        users.username=user_data.username;
        users.email=user_data.email;
        users.password =user_data.passwd;
        users.fist_name =user_data.firstname;
        users.last_name=user_data.lastname ;
        users.date_of_birth=user_data.dob;

        users.save(function(err) {
            if(err){
                console.log(err);
                return;
            }else{
                console.log("successfully registerd");
                res.redirect('/success-login');
            }
        });
    });

    // app.get('/all-notes', function(req, res) {
		// NoteDatas.find({}, function(err,note_data) {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             // console.log(note_data);
    //             res.render('note_all',{
    //                 NOTES:note_data
    //             });
    //         }
    //     })
    // });
    //
    //
    //
    // app.get('/single-note/:id', function(req, res) {
	 //    console.log(req.params.id);
    //     NoteDatas.findById(req.params.id,function (err,note) {
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log(note);
    //             res.render(
    //                 'single_note',
    //                 {
    //                     NOTE: note
    //                 }
    //             );
    //         }
    //     })
    //
    //
    // });
    //
    //
    // app.post('/date-wise-note',function(req,res){
    //     let st_Date = Date.parse(req.body.first_date);
    //     let en_date = Date.parse(req.body.second_date);
    //     let date_range = req.body.first_date+"----"+req.body.second_date;
    //     NoteDatas.find({"note_date":{'$gte':st_Date,'$lte':en_date}}
    //     ,function(err,note_query_data){
    //         if(err){
    //             console.log(err);
    //         }else{
    //             res.render('note_all',{
    //                 Date_Range:date_range,
    //                 NOTES:note_query_data
    //             });
    //         }
    //     })
    // });
    //


	
}