const post = require('../data/posts')

function index(req, res){
    res.json({
        data: post,
        count: post.length
    });
}

module.exports = {
    index
}