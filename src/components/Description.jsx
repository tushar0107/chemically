import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiUrl from './vars';
import { Loader } from "./Loader";

export const Description = ()=>{
    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [chemical,setChemical] = useState({});

    useEffect(()=>{
        console.log(id);
        axios.get(apiUrl+'get-chemical/'+id).then((res)=>{
            console.log(res.data);
            if(res.data.status === true){
                setChemical(res.data.chemical);
                setIsLoading(false);
            }else{
                alert(res.data.message || 'Unable to fetch details');
                setIsLoading(false);
            }
        }).then(()=>{
            console.log(chemical);
        }).catch(e=>{
            setIsLoading(false);
            alert(e.message);
        });
    },[id,chemical]);

    return(
        <>
            {isLoading?<Loader/>: null}
            <div id="description-container">
                <div className="description-image">
                    <img src={"https://tushar07.pythonanywhere.com"+chemical.image} alt=""></img>
                    <span>{chemical.name}</span>
                </div>
                <div className="description">
                    <span><strong>Lab: </strong>{chemical.lab_name}</span><br></br>
                    <span><strong>Rack no.: </strong>{chemical.rack_no}</span>
                    <p>{chemical.description}</p>
                </div>
            </div>
        </>
    );
}