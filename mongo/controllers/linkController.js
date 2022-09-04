const Link = require('../models/Link')

const redirect = async (req, res) => {
        let title = req.params.title;
        try{
            let doc = await Link.findOne({title})
            console.log(doc.url)
            res.redirect(doc.url);
        }catch(error){
            console.log(error);
    }
}

module.exports = {redirect};

