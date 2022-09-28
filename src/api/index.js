import axios from 'axios';

export const getLoginData = async (name, password) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/vendordetails`;
    return axios.post(url, { name, password }).then(res => res.data).catch(err => console.log(err))
}

export const getVendor = async (id) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/trans?id=` + id;
    return axios.get(url).then(res => res.data).catch(err => console.log(err))
}

export const InvoicesOffset = async ( cid) => {
    console.log(cid)
    const url = `https://awlvendorportal.azurewebsites.net/api/InvoicesOffset`;
    return axios.post(url, { cid }).then(res => res.data).catch(err => console.log(err))
}

export const PendingInvoices = async (cust_id) => {
    console.log( cust_id)
    const url = `http://awlvendorportal.azurewebsites.net/api/PendingInvoices`;
    return axios.post(url, { cust_id }).then(res => res.data).catch(err => console.log(err))
}

export const Updatevendor = async (tid, tname, temail, Tcontactno, tadd, tcity, Tstate, Tpin) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/UpdateVendor`
    return axios.put(url, { tid, tname, temail, Tcontactno, tadd, tcity, Tstate, Tpin }).then(res => res.data).catch(err => console.log(err))
}

export const InvoicePractice = async (array, pageNumber, cid) => {
    console.log(array)
    const url = `https://awlvendorportal.azurewebsites.net/api/InvoicesPractice`;
    return axios.post(url, { Inv_Date: array[0], Inv_Amt: array[1], pageNumber, cid }).then(res => res.data).catch(err => console.log(err))
}

export const UploadData = async (data) => {
    console.log(data, 'abcd')
    const url = `https://awlvendorportal.azurewebsites.net/api/FileUpload`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}

export const SearchData = async (INV_NO) => {
    console.log(INV_NO)
    const url = `https://awlvendorportal.azurewebsites.net/api/SearchInvoice`
    return axios.post(url, { INV_NO }).then(res => { console.log(res); return res.data }).catch(err => console.log(err))
}

export const TotalInvoices = async (cid) => {
    console.log('Entered Data ' + cid)
    const url = `https://awlvendorportal.azurewebsites.net/api/TotalInvoices?cid=` + cid;
    return axios.get(url).then(res => res.data).catch(err => console.log(err))
}

export const InvoicesTotal = async (cid, pageNumber) => {
    console.log('hello' + cid, pageNumber)
    const url = `https://awlvendorportal.azurewebsites.net/api/InvoicesTotal`;
    return axios.post(url, { cid, pageNumber }).then(res => res.data).catch(err => console.log(err))
}

export const AddSupportingData = async (data) => {
    console.log(`Axios ` + data)
    const url = `https://awlvendorportal.azurewebsites.net/api/Supporting`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}

export const ViewSupportingData = async () => {
    const url = `http://awlvendorportal.azurewebsites.net/api/ViewSupporting`
    return axios.post(url).then(res => res.data).catch(err => console.log(err))
}

export const UpdateSupportingDocument = async (Sno, Upload_Document) => {
    console.log(`Axios`, Sno, Upload_Document)
    const url = `https://awlvendorportal.azurewebsites.net/api/UpdateDocument`
    return axios.post(url, { Sno, Upload_Document }).then(res => res.data).catch(err => console.log(err))
}

export const DeleteSupportingDocument = async (Sno) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/DeleteSupporting`
    return axios.post(url, { Sno }).then(res => res.data).catch(err => console.log(err))
}

export const InsertInvoicesData = async (Invoice_Number, Invoice_Amount, Upload_Document, Upload_CoverLetter) => {
    console.log(`data`, Invoice_Number, Invoice_Amount, Upload_Document, Upload_CoverLetter)
    const url = `https://awlvendorportal.azurewebsites.net/api/AddInvoice`
    return axios.post(url, { Invoice_Number, Invoice_Amount, Upload_Document, Upload_CoverLetter }).then(res => res.data).catch(err => console.log(err))
}

export const GetInvoicesData = async () => {
    const url = `http://awlvendorportal.azurewebsites.net/api/Getinvoices`
    return axios.post(url).then(res => res.data).catch(err => console.log(err))
}

export const DeleteInvoicesData = async (sno) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/DeleteInvoices`
    return axios.post(url, { sno }).then(res => res.data).catch(err => console.log(err))
}

export const DeleteBlobData = async (link) => {
    console.log(link)
    const url = `https://awlvendorportal.azurewebsites.net/api/DeleteBlob`
    return axios.post(url, { link }).then(res => res.data).catch(err => console.log(err))
}

export const GetInvoicesDataUpdate = async (Sno) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/UpdateInvoicesData`
    return axios.post(url, { Sno }).then(res => res.data).catch(err => console.log(err))
}

export const UpdateInvoicesdetails = async (sno, Invoice_date, Invoice_Amount, Invoice_time) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/UpdateAddedInvoices`
    return axios.post(url, { sno, Invoice_date, Invoice_Amount, Invoice_time }).then(res => res.data).catch(err => console.log(err))
}

export const MultiplefileUpload = async (data) => {
    console.log(data)
    const url = `https://awlvendorportal.azurewebsites.net/api/FileUploadmultiple`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}

export const GetLrdata = async (refernace_no,lr,Referance_type) => {
    console.log(refernace_no,lr)
    const url = `http://awlvendorportal.azurewebsites.net/api/InsertLR`
    return axios.post(url, { refernace_no,lr,Referance_type }).then(res => res.data).catch(err => console.log(err))
}

export const ShowSupporting = async () => {
    const url = `https://awlvendorportal.azurewebsites.net/api/ShowSupportingdata`
    return axios.post(url).then(res => res.data).catch(err => console.log(err))
}

export const UpdateInvoiceSupporting = async (invoiceNo, ReferanceNo) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/UpdateInvoiceSupporting`
    return axios.post(url, { invoiceNo, ReferanceNo }).then(res => res.data).catch(err => console.log(err))
}

export const SupportingEdit = async (ReferanceNo) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/SupportingEdit`
    return axios.post(url, { ReferanceNo }).then(res => res.data).catch(err => console.log(err))
}

export const LrStatus = async () => {
    const url = `https://awlvendorportal.azurewebsites.net/api/LrStatus`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const LrData = async (user_name) => {
    const url = `https://awlvendorportal.azurewebsites.net/api/LRData`
    return axios.post(url,{user_name}).then(response => response.data).catch(error => console.log(error));
}
export const LRInsert = async (GPNo,LRNo,ShipmentStatus) => {
    console.log(GPNo,LRNo,ShipmentStatus)
    const url = `https://awlvendorportal.azurewebsites.net/api/LRInsert`
    return axios.post(url,{GPNo,LRNo,ShipmentStatus}).then(response => response.data).catch(error => console.log(error));
}
export const LRDeliveredData = async (user_name) => {
    console.log(user_name)
    const url = `https://awlvendorportal.azurewebsites.net/api/LRDeliveredData`
    return axios.post(url,{user_name}).then(response => response.data).catch(error => console.log(error));
}
export const LRDeliverUpdate = async (GPNo,LRNo,ShipmentStatus,StatusDate) => {
    console.log(GPNo,LRNo,ShipmentStatus,StatusDate)
    const url = `https://awlvendorportal.azurewebsites.net/api/LRDeliverUpdate`
    return axios.post(url,{GPNo,LRNo,ShipmentStatus,StatusDate}).then(response => response.data).catch(error => console.log(error));
}

export const LRUpload = async (OutLRNo,UploadLink) => {
    console.log(OutLRNo,UploadLink)
    const url = `https://awlvendorportal.azurewebsites.net/api/LRUpload`
    return axios.post(url,{OutLRNo,UploadLink}).then(response => response.data).catch(error => console.log(error));
}