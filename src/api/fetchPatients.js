import axios from "axios";
// I was about moving to .env file luck of time
const URL_GET_PATIENTS = "https://cerber.pixel.com.pl/api/patients";

export const getPatientsData = async () => {
    const { data } = await axios.get(URL_GET_PATIENTS).catch(function (error) {
        throw new Error(`Something goes wrong... ${error.message}`);
    });
    return { data };
};
