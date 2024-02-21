// Coffee: price_1MmvnHHxDDAs7PRCf4B5lGe5
// Sunglasses: price_1MmvoSHxDDAs7PRCW4ZjQsko
// Camera: price_1MmvpOHxDDAs7PRC7Sv9vNyo

// kush: price_1MsecjHxDDAs7PRCE2EyWbJl
// mangga: price_1MseenHxDDAs7PRCkEaETY0a
// kalinga: price_1MsegIHxDDAs7PRCDgt2Bxbj

const productsArray = [
    {
        id: "price_1OgLY5HxDDAs7PRC39nCZKp3",
        category: 'categ01',
        title: "Tee Mask",
        price: 1100.00,
        des: `meta mask turned into flowing smoke.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dw013c205e/images/large/bell-qualifier-street-motorcycle-helmet-conduit-gloss-blue-retina-right.jpg?sw=400&sh=400&sm=fit'
    },
    {
        id: "price_1MseenHxDDAs7PRCkEaETY0a",
        category: 'categ01',
        title: "Tee Skunk",
        price: 1200.00,
        des: `meta skunk reply to what's the unit open valued index.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dwa36b6e79/images/large/bell-eliminator-street-motorcycle-helmet-gt-gloss-black-white-right.jpg?sw=400&sh=400&sm=fit'
    },
    {
        id: "price_1MsecjHxDDAs7PRCE2EyWbJl",
        category: 'categ01',
        title: "Tee Cost-Line",
        price: 1300.00,
        des: `Line under it must be together as one provided the Cost Line.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dw694c5014/images/large/bell-moto-3-dirt-motorcycle-helmet-rsd-saddleback-satin-gloss-white-black-right.jpg?sw=400&sh=400&sm=fit'
    },
    {
        id: "p1",
        title: "Tee Cost-Line",
        category: 'categ02',
        price: 1300.00,
        des: `Line under it must be together as one provided the Cost Line.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dw42cc631b/images/large/bell-race-star-dlx-flex-le-street-motorcycle-helmet-beaubier-24-gloss-white-blue-front-right.jpg?sw=400&sh=400&sm=fit'
    },
    {
        id: "p2",
        title: "Tee Cost-Line",
        category: 'categ02',
        price: 1300.00,
        des: `Line under it must be together as one provided the Cost Line.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dwca3c5a1b/images/large/bell-srt-modular-street-motorcycle-helmet-velo-gloss-black-orange-front-right.jpg?sw=400&sh=400&sm=fit'
    },
    {
        id: "p3",
        title: "Tee Cost-Line",
        category: 'categ02',
        price: 1300.00,
        des: `Line under it must be together as one provided the Cost Line.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dw98e87556/images/large/bell-qualifier-dlx-mips-street-motorcycle-helmet-blitz-gloss-retina-black-camo-right.jpg?sw=400&sh=400&sm=fit'
    },
    {
        id: "p4",
        title: "Tee Cost-Line",
        category: 'categ03',
        price: 1300.00,
        des: `Line under it must be together as one provided the Cost Line.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dwd8a42bd1/images/large/bell-mag-9-cruiser-motorcycle-helmet-gloss-titanium-right.jpg?sw=400&sh=400&sm=fit'
    },
    {
        id: "p5",
        title: "Tee Cost-Line",
        category: 'categ03',
        price: 1300.00,
        des: `Line under it must be together as one provided the Cost Line.`,
        img:'https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dwf626290f/images/large/bell-bullitt-carbon-culture-classic-motorcycle-helmet-tt-gloss-black-gold-right.jpg?sw=400&sh=400&sm=fit'
    }

];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };