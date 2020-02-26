const User = require('../models/users');

module.exports.profile = function(req,res){
    return res.render('users', {
        title: "profile"
    });
}
module.exports.posts = function(req,res){
    return res.end('<h1>User Posts</h1>');
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial : Sign Up"
    });
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial : Sign In"
    });
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating the user');return;}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
    

}

module.exports.createSession = function(req,res){
    return res.redirect('/');
}