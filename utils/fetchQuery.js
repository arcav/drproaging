import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:1337";


const fetchQuery =(path, params=null )  => {
    
    let url;


    if (params !== null) {
        url = `${baseUrl}/${path}/${params}`;
    } else {
        url = `${baseUrl}/${path}`;
    }

    const res = axios(`${url}`);
    const posts = res
    return posts
}

export  {baseUrl , fetchQuery } ;
