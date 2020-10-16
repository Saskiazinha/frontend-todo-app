import React from "react";
import axios from "axios";

export default function deleteItem(id){

    const url = "/api/todo/" + id;
    return axios.delete(url)
        .catch(error => console.log(error));

}