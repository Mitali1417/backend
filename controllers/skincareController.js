const brandsData = require('../data/brands.json');

const getBrands = (req, res) => {
    res.json(brandsData);
};

module.exports = {
    getBrands
};


