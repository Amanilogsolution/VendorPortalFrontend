import axios from 'axios';

export const getLoginData = async (name, password) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/vendordetails`;
    return axios.post(url, { name, password }).then(res => res.data).catch(err => console.log(err))
}

export const getVendor = async (id) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/trans?id=` + id;
    return axios.get(url).then(res => res.data).catch(err => console.log(err))
}

export const InvoicesOffset = async ( cid) => {
    console.log(cid)
    const url = `https://vendorportalbackend.awlworldwide.com/api/InvoicesOffset`;
    return axios.post(url, { cid }).then(res => res.data).catch(err => console.log(err))
}

export const PendingInvoices = async (cust_id) => {
    console.log( cust_id)
    const url = `https://vendorportalbackend.awlworldwide.com/api/PendingInvoices`;
    return axios.post(url, { cust_id }).then(res => res.data).catch(err => console.log(err))
}

export const Updatevendor = async (tid, tname, temail, Tcontactno, tadd, tcity, Tstate, Tpin) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/UpdateVendor`
    return axios.put(url, { tid, tname, temail, Tcontactno, tadd, tcity, Tstate, Tpin }).then(res => res.data).catch(err => console.log(err))
}

export const InvoicePractice = async (array, pageNumber, cid) => {
    console.log(array)
    const url = `https://vendorportalbackend.awlworldwide.com/api/InvoicesPractice`;
    return axios.post(url, { Inv_Date: array[0], Inv_Amt: array[1], pageNumber, cid }).then(res => res.data).catch(err => console.log(err))
}

export const UploadData = async (data) => {
    console.log(data, 'abcd')
    const url = `https://vendorportalbackend.awlworldwide.com/api/FileUpload`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}

export const SearchData = async (INV_NO) => {
    console.log(INV_NO)
    const url = `https://vendorportalbackend.awlworldwide.com/api/SearchInvoice`
    return axios.post(url, { INV_NO }).then(res => { console.log(res); return res.data }).catch(err => console.log(err))
}

export const TotalInvoices = async (cid) => {
    console.log('Entered Data ' + cid)
    const url = `https://vendorportalbackend.awlworldwide.com/api/TotalInvoices?cid=` + cid;
    return axios.get(url).then(res => res.data).catch(err => console.log(err))
}

export const InvoicesTotal = async (cid, pageNumber) => {
    console.log('hello' + cid, pageNumber)
    const url = `https://vendorportalbackend.awlworldwide.com/api/InvoicesTotal`;
    return axios.post(url, { cid, pageNumber }).then(res => res.data).catch(err => console.log(err))
}

export const AddSupportingData = async (data) => {
    console.log(`Axios ` + data)
    const url = `https://vendorportalbackend.awlworldwide.com/api/Supporting`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}

export const ViewSupportingData = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/ViewSupporting`
    return axios.post(url).then(res => res.data).catch(err => console.log(err))
}

export const UpdateSupportingDocument = async (Sno, Upload_Document) => {
    console.log(`Axios`, Sno, Upload_Document)
    const url = `https://vendorportalbackend.awlworldwide.com/api/UpdateDocument`
    return axios.post(url, { Sno, Upload_Document }).then(res => res.data).catch(err => console.log(err))
}

export const DeleteSupportingDocument = async (Sno) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/DeleteSupporting`
    return axios.post(url, { Sno }).then(res => res.data).catch(err => console.log(err))
}

export const InsertInvoicesData = async (Invoice_Number, Invoice_Amount, Upload_Document, Upload_CoverLetter) => {
    console.log(`data`, Invoice_Number, Invoice_Amount, Upload_Document, Upload_CoverLetter)
    const url = `https://vendorportalbackend.awlworldwide.com/api/AddInvoice`
    return axios.post(url, { Invoice_Number, Invoice_Amount, Upload_Document, Upload_CoverLetter }).then(res => res.data).catch(err => console.log(err))
}

export const GetInvoicesData = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/Getinvoices`
    return axios.post(url).then(res => res.data).catch(err => console.log(err))
}

export const DeleteInvoicesData = async (sno) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/DeleteInvoices`
    return axios.post(url, { sno }).then(res => res.data).catch(err => console.log(err))
}

export const DeleteBlobData = async (link) => {
    console.log(link)
    const url = `https://vendorportalbackend.awlworldwide.com/api/DeleteBlob`
    return axios.post(url, { link }).then(res => res.data).catch(err => console.log(err))
}

export const GetInvoicesDataUpdate = async (Sno) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/UpdateInvoicesData`
    return axios.post(url, { Sno }).then(res => res.data).catch(err => console.log(err))
}

export const UpdateInvoicesdetails = async (sno, Invoice_date, Invoice_Amount, Invoice_time) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/UpdateAddedInvoices`
    return axios.post(url, { sno, Invoice_date, Invoice_Amount, Invoice_time }).then(res => res.data).catch(err => console.log(err))
}

export const MultiplefileUpload = async (data) => {
    console.log(data)
    const url = `https://vendorportalbackend.awlworldwide.com/api/FileUploadmultiple`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}

export const GetLrdata = async (refernace_no,lr,Referance_type) => {
    console.log(refernace_no,lr)
    const url = `https://vendorportalbackend.awlworldwide.com/api/InsertLR`
    return axios.post(url, { refernace_no,lr,Referance_type }).then(res => res.data).catch(err => console.log(err))
}

export const ShowSupporting = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/ShowSupportingdata`
    return axios.post(url).then(res => res.data).catch(err => console.log(err))
}

export const UpdateInvoiceSupporting = async (invoiceNo, ReferanceNo) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/UpdateInvoiceSupporting`
    return axios.post(url, { invoiceNo, ReferanceNo }).then(res => res.data).catch(err => console.log(err))
}

export const SupportingEdit = async (ReferanceNo) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/SupportingEdit`
    return axios.post(url, { ReferanceNo }).then(res => res.data).catch(err => console.log(err))
}

export const LrStatus = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/LrStatus`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const LrData = async (user_name) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/LRData`
    return axios.post(url,{user_name}).then(response => response.data).catch(error => console.log(error));
}
export const LRInsert = async (GPNo,LRNo,ShipmentStatus) => {
    console.log(GPNo,LRNo,ShipmentStatus)
    const url = `https://vendorportalbackend.awlworldwide.com/api/LRInsert`
    return axios.post(url,{GPNo,LRNo,ShipmentStatus}).then(response => response.data).catch(error => console.log(error));
}
export const LRDeliveredData = async (user_name) => {
    console.log(user_name)
    const url = `https://vendorportalbackend.awlworldwide.com/api/LRDeliveredData`
    return axios.post(url,{user_name}).then(response => response.data).catch(error => console.log(error));
}
export const LRDeliverUpdate = async (GPNo,LRNo,ShipmentStatus,StatusDate) => {
    console.log(GPNo,LRNo,ShipmentStatus,StatusDate)
    const url = `https://vendorportalbackend.awlworldwide.com/api/LRDeliverUpdate`
    return axios.post(url,{GPNo,LRNo,ShipmentStatus,StatusDate}).then(response => response.data).catch(error => console.log(error));
}

export const LRUpload = async (OutLRNo,UploadLink) => {
    console.log(OutLRNo,UploadLink)
    const url = `https://vendorportalbackend.awlworldwide.com/api/LRUpload`
    return axios.post(url,{OutLRNo,UploadLink}).then(response => response.data).catch(error => console.log(error));
}

export const insertguard = async (location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName,DateOfBirth,Shift) => {
    console.log('API',location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName)
    const url = `https://vendorportalbackend.awlworldwide.com/api/insertguard`
    return axios.post(url,{location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName,DateOfBirth,Shift}).then(response => response.data).catch(error => console.log(error));
}

export const TotalGuard = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/totalguard`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeactiveGuards = async (sno,status) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/deactiveguards`
    return axios.post(url,{sno,status}).then(response => response.data).catch(error => console.log(error));
}

export const ActiveLocation = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/activelocation`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const InsertGuardLogin = async (Location,Guardname,date,time,status,guardid,userid,locationname) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/insertGuardLogin`
    return axios.post(url,{Location,Guardname,date,time,status,guardid,userid,locationname}).then(response => response.data).catch(error => console.log(error));
}

export const GetguardmasterLogout = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/getguardmasterlogout`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const GetguardmasterLogin = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/getguardmasterlogin`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateGuard = async (Location,Guardname,date,time,status,guardid,userid) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/updateguard`
    return axios.post(url,{Location,Guardname,date,time,status,guardid,userid}).then(response => response.data).catch(error => console.log(error));
}
