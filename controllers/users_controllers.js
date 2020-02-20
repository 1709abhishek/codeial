module.exports.profile = function(req,res){
    return res.render('users', {
        title: "profile"
    });
}
module.exports.posts = function(req,res){
    return res.end('<h1>User Posts</h1>');
}