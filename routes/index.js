var express = require('express');
var router = express.Router();
 var POSTS= [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/creat-post', function(req, res, next) {
  res.render('creat-post');
});

router.post('/creat-post', function(req, res, next) {
  const post ={ ...req.body, date: new Date(), like:0 }
POSTS.push(post)
res.redirect('/read-post')
});

router.get('/read-post', function(req, res, next) {
  res.render('read-post',{post:POSTS} );
  
});


 
router.get('/delete/:index',function(req,res,next){
  POSTS.splice(req.params.index, 1)
  res.redirect('/read-post');

})  

router.get('/update/:index', function(req, res, next) {
  const SHOW =POSTS [ req.params.index];
  res.render('update',{post : SHOW, index:req.params.index  });
});

router.post('/update/:index', function(req, res, next) {
  POSTS[req.params.index]=req.body;
  res.redirect('/read-post');
  
});


router.get('/like/:index', function(req, res, next) {
 const post= POSTS[req.params.index];
 post.like += 1;
 POSTS[req.params.index]=post;
  res.redirect('/read-post');
  
});



module.exports = router;
