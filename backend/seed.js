const Meds = require('./models/Meds');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/health-edit")
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log(err);
})

const arr = [
    {
        name: "Atrest",
        image: "https://www.netmeds.com/images/product-v1/600x600/851936/atrest_12_5mg_tablet_10s_0_0.jpg",
        description: "ATREST 12.5MG TABLET contains Tetrabenazine which belongs to the group of medicines called Vesicular monoamine transporter 2 inhibitors. ATREST 12.5MG TABLET is used to treat diseases that cause hyperkinetic motor disorders (such as jerky, irregular, uncontrollable movements) associated with Huntington's chorea (an inherited neurodegenerative disease) in affected individuals.",
        price: 1500
    },
    {
        name: "Calpol",
        image: "https://www.netmeds.com/images/product-v1/600x600/45285/calpol_500mg_tablet_15s_558789_1_0.jpg",
        description: "CALPOL 500MG TABLET contains Paracetamol which belongs to the group of medicines called Analgesics and Antipyretics. It is used to relieve mild to moderate pain (including headaches, backache, toothache, severe nerve pain, sore throat, period pain, low back and leg pain, muscle, connective tissue and joint pain, symptomatic relief of sprains, strain, joint swelling and stiffness). It is also used to lower fever (high body temperature) and relieve cold or flu symptoms.",
        price: 50
    }
];

(function addMeds() {
    Meds.insertMany(arr)
    .then(() => {
        console.log("Data added");
    })
    .catch(() => {
        console.log("Error");
    })
})();