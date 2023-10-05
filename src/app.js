// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/testdb').then(() => console.log('DB CONNECTED!')).catch(err => console.log(err));

// const newSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     } ,
//     mobileNo: {
//         type: Number,
//         required: true
//     } ,
//     birthDate: {
//         type: String,
//         required: false
//     } ,
//     date: {
//         type: Date,
//         default: Date.now(),
//         required: false
//     }
// });

// const User = new mongoose.model('User', newSchema);

// const newUser = new User({
//     name: "RAKESH SITI1",
//     mobileNo: 6533265963,
//     birthDate: '10/02/55'
// });

// const ajayData = new User({
//     name: "AJAY VIJAY",
//     mobileNo: 6533265963,
//     birthDate: '10/04/45'
// });

// const vijayData = new User({
//     name: "VIJAY AJAY",
//     mobileNo: 6533265963,
//     birthDate: '10/04/45'
// });

// const kartikData = new User({
//     name: "KARTIK BHAI",
//     mobileNo: 6533265963,
//     birthDate: '10/04/45'
// });

// // newUser.save().then(() => console.log("inseted")).catch(err => console.log(err));

// const createDocument = async () => {
//     try {
//         const result = await User.insertMany([ajayData, vijayData, kartikData]);
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function getDocument() {
//     const result = await User.find().select({ name: 1, mobileNo: 1, _id:0 }).limit(2);
//     console.log("🚀🚀🚀=========> : result-", result)
// }

// getDocument();
// // createDocument();

const mongoose = require('mongoose');

async function pagesFunc() {
    mongoose.connect('mongodb://localhost:27017/testdb')
        .then(() => console.log('DB CONNECTED!')).catch(err => console.log(err));

    const pageSchema = mongoose.Schema({
        pageTitle: { type: String, required: true },
        pageDescription: { type: String, required: false },
        homePage: { type: Boolean, reqired: true },
        content: { type: Number, default: 0 }
    });

    const Page = mongoose.model('Page', pageSchema, 'page');

    const aboutPageData = new Page({
        pageTitle: 'About',
        pageDescription: 'Info about company.',
        homePage: false
    });

    const contactPageData = new Page({
        pageTitle: 'Contact Us',
        pageDescription: 'Reach at us.',
        homePage: false,
        content: 2
    });

    const blogPageData = new Page({
        pageTitle: 'Blog',
        pageDescription: 'Blog Page.',
        homePage: false,
        content: 4
    });

    const contentPageData = new Page({
        pageTitle: 'Content',
        pageDescription: 'Content Page.',
        homePage: false,
        content: 56
    });

    // const aboutPage = await Page.insertMany([aboutPageData]);
    // const data = await Page.insertMany([aboutPageData, contactPageData, blogPageData, contentPageData]);

    const results = await Page.findOne({ content: 6 }).select({_id: 1 });
    // console.log("🚀🚀🚀=========> : results-", results._id);
    
    // const result = await Page.findByIdAndUpdate({ _id: results._id }, { content: 8 }, { new: true });
    // console.log("🚀🚀🚀=========> : result-", result);
}

pagesFunc();