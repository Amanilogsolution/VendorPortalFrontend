import React from 'react';
import Home from './component/home';
import VendorLogin from './component/VendorLogin/VendorLogin';
import UpdateVendor from './component/UpdateVendorDetails/UpdateVendor';
import InvoicesProgress from './component/InvoicesInProgress/InvoicesinProgress';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Invoices from './component/Invoices/Invoices';
import PrivatRoute from './component/HOC/PrivateRoute';
import './App.css'
import ViewVendor from './component/ViewVendor/ViewVendor';
import InvoicesPractice from './component/Invoices/Invoices';
import Pendinginvoices from './component/PendingInvoices/PendingInvoices';
import Totaldata from './component/TotalInvoices/TotalInvoice1';
import SupporingPage from './component/Supporting/Supporting';
import AddSupporting from './component/Supporting/AddSupporting';
import EditSupportings from './component/Supporting/EditSupporting2';
import EditSupporting from './component/Supporting/EditSupporting';
import AddInvoices from './component/TotalInvoices/AddInvoices';
import EditInvoices from './component/TotalInvoices/EditInvoices';
import EditInvoicesDetails from './component/TotalInvoices/EditInvoicesDetails';
import TotalLR from './component/LR/Lr';
import DeliveresdLR from './component/LR/DeliveresdLR';
import InsertGuard from './component/Guards/GuardsMaster/InsertGuard';
import TotalGuards from './component/Guards/GuardsMaster/TotalGuards'
import GuardsLogs from './component/Guards/GuardsLogs/guardslogs'
import GuardsLogOut from './component/Guards/GuardsLogs/guardlogoutlogs';


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" restricted={false} component={VendorLogin}/>
      <PrivatRoute exact path="/home" component={Home} />
      <PrivatRoute exact path="/UpdateVendor" component={UpdateVendor} />
      <PrivatRoute exact path="/ViewVendor" component={ViewVendor} />
      <PrivatRoute exact path="/PendingInvoices" component={Pendinginvoices} />
      <PrivatRoute expact path="/TotalInvoices" component={Totaldata}/>
      <PrivatRoute exact path="/InvoicesProgress" component={InvoicesProgress} />

      <Route expact path="/Invoices" component={Invoices}/>
      <Route exact path="/Supporting" component={SupporingPage}/>
      <Route exact path="/AddSupporting" component={AddSupporting}/>
      <Route exact path="/EditSupporting" component={EditSupportings}/>
      <Route exact path="/EditSupportings" component={EditSupporting}/>

      <Route exact path="/AddInvoices" component={AddInvoices} />
      <Route exact path="/EditInvoices" component={EditInvoices} />
      <Route exact path="/EditInvoicesDetails" component={EditInvoicesDetails}/>
      <Route expact path="/InvoicesPractice" component={InvoicesPractice}/>
      <Route expact path="/InTransit" component={TotalLR}/>
      <Route expact path="/Delivered" component={DeliveresdLR}/>
      <Route expact path="/InsertGuard" component={InsertGuard}/>
      <Route expact path="/TotalGuards" component={TotalGuards}/>
      <Route expact path="/guardslogs" component={GuardsLogs}/>
      <Route expact path="/guardslogout" component={GuardsLogOut}/>

      </Router>
    </div>
  );
}
export default App;
