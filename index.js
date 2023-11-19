import axios from "axios";

export const baseURL = "http://localhost:5001/se-project-58135/us-central1/app";

export const validateUserJWTToken = async (token) => {
    try {
        const res = await axios.get(`${baseURL}/api/users/jwtVerfication`, {
            headers: {Authorization: "Bearer " + token},
        });
        return res.data.data;
    } catch (err) {
        return (null);
    }
};

// add new product
export const addNewProduct = async (data) => {
    try{
        const res = await axios.post(`${baseURL}/api/products/create`, {...data});
        return res.data.data;
    } catch (err) {
        return null;
    }
};

// get all the products
export const getAllProducts = async () => {
    try{
        const res = await axios.get(`${baseURL}/api/products/all`);
        return res.data.data;
    } catch (err) {
        return null;
    }
};

// delete a product
export const deleteAProduct = async (productId) => {
    try{
        const res = await axios.delete(`${baseURL}/api/products/delete/${productId}`);
        return res.data.data;
    } catch (err) {
        return null;
    }
};

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/users/all`);
        console.log('Full API Response:', res);
        console.log('Data from API:', res.data.data); // Log the data
        return res.data.data;
    } catch (err) {
        console.error('Error fetching data:', err);
        return null;
    }
};

// add an item to cart
export const addNewItemToCart = async (user_Id, data) => {
    try {
        const res = await axios.post(`${baseURL}/api/products/addToCart/${user_Id}`,{...data});
        console.log('Full API Response:', res);
        console.log('Data from API:', res.data.data); // Log the data
        return res.data.data;
    } catch (err) {
        //console.error('Error fetching data:', err);
        return null;
    }
};

// get all cart items
export const getAllCartItems = async (user_Id) => {
    try {
        const res = await axios.get(`${baseURL}/api/products/getCartItems/${user_Id}`);
        console.log('Full API Response:', res);
        console.log('Data from API:', res.data.data); // Log the data
        return res.data.data;
    } catch (err) {
        //console.error('Error fetching data:', err);
        return null;
    }
};

// cart increment
export const increaseItemQuantity = async (user_Id, productId, type) => {
    console.log(user_Id, productId, type);
    try {
        const res = await axios.post(`${baseURL}/api/products/updateCart/${user_Id}`, null, {params: {productId: productId, type: type}});
        console.log('Full API Response:', res);
        console.log('Data from API:', res.data.data); // Log the data
        return res.data.data;
    } catch (err) {
        //console.error('Error fetching data:', err);
        return null;
    }
};

// get all orders
export const getAllorder = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/products/orders`);
        console.log('Full API Response:', res);
        console.log('Data from API:', res.data.data); // Log the data
        return res.data.data;
    } catch (err) {
        //console.error('Error fetching data:', err);
        return null;
    }
};