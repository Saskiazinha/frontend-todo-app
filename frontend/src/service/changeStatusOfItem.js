import React, {useState} from "react";
import axios from "axios";
import AddToDoForm from "../components/AddToDoForm";
import setStatus from "../App";

export default function changeStatusOfItem(item, setStatus, status) {

    const url = "/api/todo/" + item.id;

    //console.log(status);
    setStatus(item.status);
    //console.log(status);

    if (status == "OPEN") {
        console.log("Status is open")
        setStatus("IN_PROGRESS");
        item.status=status;
        console.log(status)
    } else {
        setStatus("DONE");
        item.status=status;
    }


    return axios.put(url[item]).catch(error => console.log(error))
}
