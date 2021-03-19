import axios from "axios";

const API = "https://cerber.pixel.com.pl/api/medicine";

export const getMedicinesData = async () => {
    const { data } = await axios.get(API).catch(function (error) {
        throw new Error(`Something goes wrong... ${error.message}`);
    });
    return data;
};
