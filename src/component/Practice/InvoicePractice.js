import React, { useEffect, useState } from 'react';
import {MultiplefileUpload} from '../../api/index'
import { GetLrdata } from '../../api/index';
import NavPage from '../Navbar/NavBar';

const InvoicesPractice = ()=>{

    const [show,setShow] = useState(false)

    const [formValues,setFormValues] = useState([])

    const [totalImages,setTotalImages] = useState([1])

    const [showImage,setShowImage] = useState('')

    const [value,setValues] = useState([])

    const [typees,setTypees] = useState('')

    const [refernace_no,setRefernace_no] = useState('')
    const [lr,setLr] = useState([])

    const send = async(e)=>{
        e.preventDefault()

        console.log(typees)
        const values = [...value,typees]
        // setValues([...value,typees])
        const lrvalues = [...lr,refernace_no]

        console.log(values)
        console.log('send',formValues)

        const data = new FormData();
        formValues.forEach((pic,i) =>{
            data.append('images',pic)
        })
        console.log(data)
       const result = await MultiplefileUpload(data)  
       console.log(result)

       console.log('Aman',result,values)

         result.map(async(url, index) => {

              const result =  await GetLrdata(values[index],url,lrvalues[index])   
              console.log(result) 
              if(result){
                  window.location.href='/Supporting'
              }
      });
                }

    const handleAdd = (e) => {
        e.preventDefault()
        setValues([...value,typees])
        setLr([...lr,refernace_no])
        setTotalImages([...totalImages, 1])
        console.log('handleAdd',formValues, totalImages)
        setShow(false)
    }

    const handleClick= () =>{
            setShow(show => !show)
    }

    const handleDelete = (index) =>{
        let newFormValues = [...formValues];
        if(totalImages.length < 2){
            alert('Cannot delete further')
        }
        else{
         newFormValues.splice(index,1);
         setFormValues(newFormValues)
         totalImages.pop()
         setTotalImages(totalImages)
         console.log('totalImages.length',totalImages.length)
         setShow(false)
        }
    }

    const handleClickselect = (e) => {
        const data = e.target.value
        if(data === 'LR/AWB'){
              console.log(data)
              setRefernace_no(data)
            }
        else if( data=== 'Other'){
            console.log(data)
            setRefernace_no(data)
        }else{
            console.log('Select')
        }
   }

  
    return (
        <div className="Add-Supporting-page">
            <NavPage/>
            <div className="row d-flex justify-content-center align-items-center" style={{overflow:"hidden"}}>
            <div className="col col-md-6 ">
            <h2>Add Supporting</h2>
            <div className="card p-3 my-5">


    
         <div>
        {totalImages.map((element,index) => (
                <div>
                    <div className="mb-3">
                                            <label htmlFor="Reference_no" className="form-label">Reference Number</label>
                                            <input className="form-control" type="text" id="Reference_no" onChange={(e)=>{
                            const id = e.target.value
                            setTypees(id)
                    }} />
                                        </div>

                                <div className="mb-3">                            
                                        <select className="form-select w-100 p-2 border border-light" onClick={handleClickselect}>
                                        <option selected>Open this select menu</option>
                                        <option value="LR/AWB" >LR/AWB</option>
                                        <option value="Other">Other</option>
                                         </select>
                                        </div>


                    <div className="mb-3">
                        <label htmlFor="Upload_Date" className="form-label">Upload Document</label>
                                <input className="form-control" type="file" name='images'  id="Upload_Document" 
                                onChange={event=>{ 
                                    const files = event.target.files[0];
                                    setShowImage(URL.createObjectURL(files))
                                    setFormValues([...formValues,files])
                                }} />
                                        </div>
                    {/* <button onClick={handleClick}>Preview</button> */}
                    </div>
            ))}
             <button type="button" class="btn btn-primary" style={{marginRight:"8%"}} onClick={handleAdd}>Add</button>
            <button type="button" class="btn btn-danger" onClick={handleDelete}>Cancel</button>
            <br/>
            {show && (
            <img src={showImage} width="10%" height="10%"/> )}
            <br/>
            <button type="button" class="btn btn-success"  style={{marginRight:"5%"}} onClick={send}>Submit</button>
            <button type="button" class="btn btn-danger" onClick={(e)=>{ e.preventDefault(); window.location.href='/Supporting'}}>Return</button>


        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
        

    


export default InvoicesPractice