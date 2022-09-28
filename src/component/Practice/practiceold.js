import React, { useEffect, useState } from 'react';
import {MultiplefileUpload} from '../../api/index'
import { GetLrdata } from '../../api/index';

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
                await GetLrdata(values[index],url,lrvalues[index])    
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

  
    return (
        <div  style={{width:"20rem",float:"right",overflow:"hidden",marginTop:"0"}}>
        <div className="col "></div>
        <div className="card">
    <div>
        {totalImages.map((element,index) => (
                <div>
                    <input type="text" placeholder="Enter data" id="datas" onChange={(e)=>{
                            const id = e.target.value
                            setTypees(id)
                    }} />
                     <input type="text" placeholder="Enter data" id="datas" onChange={(e)=>{
                            const id = e.target.value
                            setRefernace_no(id)
                    }} />
                     <br/>
                       <input type='file' name='images' onChange={event=>{
                           console.log(event.target.files)
                        const files = event.target.files[0];
                        console.log('file',files)
                        setShowImage(URL.createObjectURL(files))
                        setFormValues([...formValues,files])
                    }}/>
                    <button onClick={handleClick}>Preview</button>
                    </div>
            ))}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleAdd}>Add</button>
            <br/>
            {show && (
            <img src={showImage} width="10%" height="10%"/> )}
            <br/>
            <button onClick={send}>Submit</button>

        </div>
        </div>
        </div>
        

    )
}

export default InvoicesPractice