import axios from "axios";

const URL_GET_MEDICINES = "https://cerber.pixel.com.pl/api/medicine";

export const getMedicinesData = async () => {
    const { data } = await axios.get(URL_GET_MEDICINES).catch(function (error) {
        throw new Error(`Something goes wrong... ${error.message}`);
    });
    return { data };
};
