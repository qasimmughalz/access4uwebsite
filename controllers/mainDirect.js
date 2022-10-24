exports.getHomePage = (req,res,next) => {
    res.render('index',{
        pageTitle:'עושים שיוויון',
        path:'index'
    });
};

exports.getAbout = (req,res,next) => {
    res.render('about',{
        pageTitle:'עושים שיוויון- אודות',
        path:'about'
    });
};

exports.getContact = (req,res,next) => {
    res.render('contact',{
        pageTitle:'עושים שיוויון- צור קשר',
        path:'contact'
    });
};

exports.getAllBlogsPage = (req,res,next) => {
    res.render('allblogs',{
        pageTitle:'All Blogs',
        path:'allblogs'
    });
};

exports.getBlog1 = (req,res,next) => {
    res.render('blog1',{
        pageTitle:'All Blogs',
        path:'blog1'
    });
};
exports.getAboutProject = (req,res,next) => {
    res.render('aboutProject',{
        pageTitle:'About Project',
        path:'AboutProject'
    });
};

exports.getProcess = (req,res,next) => {
    res.render('process',{
        pageTitle:'Process',
        path:'process'
    });
};

exports.getPricing = (req,res,next) => {
    res.render('pricing',{
        pageTitle:'pricing',
        path:'pricing'
    });
};
exports.getClients = (req,res,next) => {
    res.render('clients',{
        pageTitle:'clients',
        path:'clients'
    });
};




