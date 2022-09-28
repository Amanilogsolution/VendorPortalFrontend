import React, { useState, useEffect } from "react";
import "./Invoices.css";
import { InvoicePractice } from '../../api/index';
import {SearchData} from '../../api/index'
import ReactPagination from 'react-paginate'
import NavPage from "../Navbar/NavBar";
import {FcSearch} from "react-icons/fc";
import {BsPrinter} from "react-icons/bs";
import CsvDownloader from 'react-csv-downloader';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { TotalInvoices } from '../../api/index';



const columns = [
    {
        id: "INV_AMT",
        displayName: "Invoice_No",
      },
      {
        id: "INV_DATE",
        displayName: "Date",
      },
      {
        id: "INV_NO",
        displayName: "Invoice Amount",
      }, 
       {
          id: "tds_amt",
          displayName: "TDS Amount",
        }
]

function InvoicesPractice() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastpage, SetLastPage] = useState('')
    const [sort,setSort] = useState('Inv_Amt')
    const [totalInvoices,setTotalInvoices]= useState([])
    

    useEffect(() => {
        const fetchPosts = async () => {
            const sortParam = sort === 'Inv_Amt' ? ['', 'Inv_Amt'] : ['Inv_Date', '']
            const cid = localStorage.getItem('inputname')
            const data = await InvoicePractice(sortParam,currentPage,cid) 
            console.log(data.data)
            setPosts(data.data);
             const res = await TotalInvoices(cid)
             console.log(res)
             setTotalInvoices(res)
            const totalData = data.Count[0]['total_row']
            SetLastPage(Math.ceil(totalData / 10)) 
             };

        fetchPosts();
    }, [ sort,currentPage]);



    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1)
        console.log(currentPage)
    }

    const handleChange = async(e)=>{
        const val = e.target.value
        setSort(val)
        setCurrentPage(1);
    }

    const handlePrint= (e) =>{
        e.preventDefault()
        var backup = document.body.innerHTML;
        var divcontent = document.getElementById('pagination').innerHTML;
        document.body.innerHTML = divcontent;
        window.print();
        document.body.innerHTML = backup;
        window.location.reload()
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        const value1= document.getElementById('search').value
        console.log(value1,'searchs')
        const data = await SearchData(value1)
        setPosts(data || []);
         }
   

    return (
        <div className="  InvoicesinProgress">
          <NavPage/>
          <h1 className="text-dark mn-3">Processed Invoices</h1>
          <div className="datatable">
              <div className="datatableExtension">
              <label className="form-label" onClick={handleClick} htmlFor="search"><FcSearch/></label>
            <input placeholder="Search data" name="search" id="search" type="search" className="inputSearch"/>
            </div>
            <div className="datatableExtensionAction">
                <table className="datatableExtensionAction_table">
                    <thead>
              <th> <button className="btn btn-outline-dark" onClick={handlePrint}><BsPrinter/></button></th>
                <th>
                <select onChange={handleChange}>
            <option value="Inv_Amt">Amt</option>
            <option value="Inv_Date">Date</option>
            </select>
            </th>
            <th>
            <CsvDownloader
            text="Upload"
            className="btn btn-outline-dark "
            filename="myfile"
            extension=".csv"
            separator=";"
            // wrapColumnChar="'"
            columns={columns}
              datas={totalInvoices}
            />
            </th>
          
            <th>
            <ReactHTMLTableToExcel 
            id="test-table-xls-button"
            className="btn btn-outline-dark"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="XLS"/>
           
            </th>
            </thead>
            </table>
            </div>
            </div>
            <div className="pagination" id="pagination">
            
                <table className="table" id="table-to-xls">
                    <thead>
                        <tr>
                            <th>Invoice_No</th>
                            <th>Invoice_Date</th>
                            <th>Invoice_Amount</th>
                            <th>TDS_Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((datas) => (
                            <tr>
                                <td key={datas.INV_NO}>{datas.INV_NO}</td>
                                <td>{datas.INV_DATE}</td>
                                <td>{datas.INV_AMT}</td>
                                <td>{datas.tds_amt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ReactPagination
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={lastpage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default InvoicesPractice