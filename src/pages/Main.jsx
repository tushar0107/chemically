import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiUrl from "../components/vars";
import { Loader } from "../components/Loader";

export const Main = ()=>{
    const [chemicals, setChemicals] = useState();
    const [inputValue,setInputValue] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    const findChemical = ()=>{
        setIsLoading(true);
        axios.get(apiUrl+'find-chemicals/?chemical='+inputValue).then((res)=>{
            if(res.data.status === true){
                setChemicals(JSON.parse(res.data.chemicals));
            }else{
                alert(res.data.message);
            }
            setIsLoading(false);
        }).then(()=>{
            console.log(chemicals);
        }).catch(e=>{
            setIsLoading(false);
            alert(e.message);
        });
    }

    return(
        <>
            {isLoading?<Loader/>: null}
            <div id="search-bar">
                <form>
                    <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Type here.." />
                    <button type="button" onClick={()=>{findChemical()}}>Find</button>
                </form>
            </div>
            <div id="search-result-container">
                {
                    Array.isArray(chemicals) ? 
                        chemicals.map((ele,key)=>{
                            return(
                                <Link className="result-item" to={'/popimage/'+ele.pk} key={key}>
                                    <div className="item-head">
                                        <img src={"http://127.0.0.1:8000/media/"+ele.fields.image} alt="" />
                                        <div className="item-details">
                                            <p>Name: <strong>{ele.fields.name}</strong></p>
                                            <p>Rack: <strong>{ele.fields.rack_no}</strong></p>
                                            <p>Chemical Type: <strong>{ele.fields.chemical_type}</strong></p>
                                            <p>Lab: <strong>{ele.fields.lab_name}</strong></p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    : <h3>No chemicals found for {inputValue}</h3>
                }
                
            </div>
        </>
    );
}