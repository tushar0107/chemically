import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../components/vars";
import { Loader } from "../components/Loader";


export const AddItems = ()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [name,setName] = useState('');
    const [rackNo,setRackNo] = useState('');
    const [labName,setLabName] = useState('');
    const [type,setType] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');

    const addChemicals = ()=>{
        console.log(name);
        console.log(rackNo);
        console.log(labName);
        console.log(type);
        console.log(description);
        console.log(image);
        // setIsLoading(true);
        // axios.post(apiUrl+'add-chemical').then((res)=>{
        //     if(res.data.status === true){
        //         alert(res.data.message);
        //         setIsLoading(false);
        //     }else{
        //         alert(res.data.message || 'Unable to add chemical');
        //         setIsLoading(false);
        //     }
        // }).catch(e=>{
        //     alert(e.message);
        //     setIsLoading(false);
        // });
    }

    useEffect(()=>{
        // axios.get()
    },[]);

    return(
        <>
            {isLoading?<Loader/>:null}
            <div id="dashboard-page">
                <div id="dashboard-head">
                    <span>All Items</span>
                    <button>Add New</button>
                </div>
                <div id="dashboard-body">
                    <div className="item-container">
                        <div className="item-head">
                        <img src="logo192.png" alt="" className="item-img" />
                        <input type="file" value=""></input>
                        <button type="button" onClick={()=>addChemicals()}>Add</button>
                        </div>
                        <div className="item-details">
                            <p>Name: <input type="text" className="item-name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/></p>
                            <p>Rack No.:<input type="text" className="rack-no" value={rackNo} onChange={(e)=>{setRackNo(e.target.value)}} /><br/></p>
                            <textarea onChange={(e)=>{setDescription(e.target.value)}} placeholder="Add Description">{description}</textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}