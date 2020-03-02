const Post = require('../models/post');
const user = require('../models/users');

module.exports.home = function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',25);
    // Post.find({}, function(err, posts){
    //     console.log(posts);
    //     return res.render('home', {
    //         title: "Codeial: Home",
    //         posts: posts
    //     });
    // })

    Post.find({})
    .populate('user')
    .populate({
    path: 'comments',
    populate: {
        path:'user'
    }
})
.exec(function(err, posts){

    if (err){
        console.log(err);
    }
        console.log(posts);
        return res.render('home', {
            title: "Codeial: Home",
            posts: posts
        });
});

// return res.json('12345');


}

// the users.js file should be named as user.js