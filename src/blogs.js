

const blogsArray = [
    {
        id: "t01",
        title: "Title 01",
        des: `meta mask turned into flowing smoke.`,
        img:'https://rxi.iscdn.net/2024/01/280560_dsc01196.jpg?auto=format,compress&q=50&w=182'
    },
    {
        id: "t02",
        title: "Title 02",
        des: `meta mask turned into flowing smoke.`,
        img:'https://rxi.iscdn.net/2024/02/282905_privateersalignmediasmx23losangeles034.jpg?auto=format,compress&q=50&w=156'
    },
    {
        id: "t03",
        title: "Title 03",
        des: `meta mask turned into flowing smoke.`,
        img:'https://rxi.iscdn.net/2024/02/282904_unnamed-9.jpg?auto=format,compress&q=50&w=926'
    },
    {
        id: "t04",
        title: "Title 04",
        des: `meta mask turned into flowing smoke.`,
        img:'https://rxi.iscdn.net/2024/02/282825_a44y6885-copy.jpg?auto=format,compress&q=50&w=244'
    }
    

];

function getProductData(id) {
    let productData = blogsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { blogsArray, getProductData };