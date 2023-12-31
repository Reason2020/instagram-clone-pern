import axios from 'axios';

//store this in environment variableslater
const BASE_URL = 'http://localhost:3001/api/v1/users';

export const signUpNewUser = async (username, email, password) => {
    const response = await axios.post(
        `${BASE_URL}`,
        {
            username,
            email,
            password
        }
    );
    console.log("Response from signing up: ", response);
    return response.data;
}