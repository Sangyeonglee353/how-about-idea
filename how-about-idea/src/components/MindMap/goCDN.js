import { useEffect } from "react";
import useScript from "./useScript";

const GoCDN = () => {
    const status = useScript("https://cdnjs.cloudflare.com/ajax/libs/gojs/1.7.1/go.js");
    useEffect(() => {
        if(status === "ready"){
            return window.go;
        }
    }) 
}

export default GoCDN;