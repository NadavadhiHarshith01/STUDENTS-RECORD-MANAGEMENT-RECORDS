import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate,useParams  } from "react-router-dom";

const Update = () => {

 const [id, setId] = useState(0);
 const [criminal_category_id, set1] = useState("");
 const [criminal_category_name, set2] = useState("");

 const [criminal_description, set3] = useState("");
 const [nature_id, set4] = useState("");

 const [nature_name, set5] = useState("");
 const [nature_description, set6] = useState("");

 const [criminal_address, set7] = useState("");
 const [victim_id, set8] = useState("");
 const [victim_name, set9] = useState("");
 const [victim_address, set10] = useState("");

 const [victim_city, set11] = useState("");
 const [victim_state, set12] = useState("");
 const [victim_country, set13] = useState("");
 const [victim_pin, set14] = useState("");

 const [victim_phone, set15] = useState("");
 const [victim_dob, set16] = useState("");
 const [victim_fir_registration_date, set17] = useState("");
 const [victim_other_details, set18] = useState("");

 const [victim_fir_id, set19] = useState("");
 const [crime_nature, set20] = useState("");
 const [investigation_officer_id, set21] = useState("");
 const [crime_date, set22] = useState("");

 const [investigation_id, set23] = useState("");
 const [investigation_start_date, set24] = useState("");
 const [investigation_end_date, set25] = useState("");
 const [evidence_id, set26] = useState("");

 const [evidence_name, set27] = useState("");
 const [evidence_date, set28] = useState("");
 const [evidence_description, set29] = useState("");
 const [crime_classification, set30] = useState("");

 const [witness_id, set31] = useState("");
 const [witness_name, set32] = useState("");
 const [witness_number, set33] = useState("");
 const [witness_address, set34] = useState("");

 const navigate = useNavigate();

 useEffect(() => {
 setId(localStorage.getItem("id"));
 set1(localStorage.getItem("criminal_category_id"));
 set2(localStorage.getItem("criminal_category_name"));
 set3(localStorage.getItem("criminal_description"));
 set4(localStorage.getItem("nature_id"));

 set5(localStorage.getItem("nature_name"));
 set6(localStorage.getItem("nature_description"));
 set7(localStorage.getItem("criminal_address"));
 set8(localStorage.getItem("victim_id"));

 set9(localStorage.getItem("victim_name"));
 set10(localStorage.getItem("victim_address"));
 set11(localStorage.getItem("victim_city"));
 set12(localStorage.getItem("victim_state"));

 set13(localStorage.getItem("victim_country"));
 set14(localStorage.getItem("victim_pin"));
 set15(localStorage.getItem("victim_phone"));
 set16(localStorage.getItem("victim_dob"));

 set17(localStorage.getItem("victim_fir_registration_date"));
 set18(localStorage.getItem("victim_other_details"));
 set19(localStorage.getItem("victim_fir_id"));
 set20(localStorage.getItem("crime_nature"));

 set21(localStorage.getItem("investigation_officer_id"));
 set22(localStorage.getItem("crime_date"));
 set23(localStorage.getItem("investigation_id"));
 set24(localStorage.getItem("investigation_start_date"));

 set25(localStorage.getItem("investigation_end_date"));
 set26(localStorage.getItem("evidence_id"));
 set27(localStorage.getItem("evidence_name"));
 set28(localStorage.getItem("evidence_date"));

 set29(localStorage.getItem("evidence_description"));
 set30(localStorage.getItem("crime_classification"));
 set31(localStorage.getItem("witness_id"));
 set32(localStorage.getItem("witness_name"));

 set33(localStorage.getItem("witness_number"));
 set34(localStorage.getItem("witness_address"));


 }, []);

 const handleUpdate  = (e) => {
   e.preventDefault();
   console.log("Id...", id);
   axios.put(`https://635b6bc16f97ae73a64361e9.mockapi.io/records/${id}`, {
       criminal_category_id: criminal_category_id,
       criminal_category_name: criminal_category_name,
       criminal_description:criminal_description,
       nature_id:nature_id,

       nature_name:nature_name,
       nature_description:nature_description,
       criminal_address:criminal_address,
       victim_id:victim_id,

       victim_name:victim_name,
       victim_address:victim_address,
       victim_city:victim_city,
       victim_state:victim_state,

       victim_country:victim_country,
       victim_pin:victim_pin,
       victim_phone:victim_phone,
       victim_dob:victim_dob,

       victim_fir_registration_date:victim_fir_registration_date,
       victim_other_details:victim_other_details,
       victim_fir_id:victim_fir_id,
       crime_nature:crime_nature,

       investigation_officer_id:investigation_officer_id,
       crime_date:crime_date,
       investigation_id:investigation_id,
       investigation_start_date:investigation_start_date,

       investigation_end_date:investigation_end_date,
       evidence_id:evidence_id,
       evidence_name:evidence_name,
       evidence_date:evidence_date,

       evidence_description:evidence_description,
       crime_classification:crime_classification,
       witness_id:witness_id,
       witness_name:witness_name,

       witness_number:witness_number,
       witness_address:witness_address,
     })
     .then(() => {
       navigate("/");
     });
 };



  return (
    <>

      <form>



        <div>
        <h1 className="up">Update</h1><br></br>
                        <div className="criminal_area">

                                  <h1>CRIMINAL DATA</h1>
                                  < input placeholder = "criminal_category_id" name = "criminal_category_id" value = {criminal_category_id} onChange={(e) => set1(e.target.value)}  type = "text" / >
                                  <br></br>
                                  < input placeholder = "criminal_category_name" name = "criminal_category_name" value = {criminal_category_name} onChange={(e) => set2(e.target.value)} type = "text" / >
                                  <br></br>
                                  < input placeholder = "criminal_description" name = "criminal_description" value = {criminal_description} onChange={(e) => set3(e.target.value)} type = "text" / >
                                  <br></br>
                                  < input placeholder = "nature_id" name = "nature_id" value = {nature_id} onChange={(e) => set4(e.target.value)} type = "text" / >
                                 <br></br>
                                 < input placeholder = "nature_name" name = "nature_name" value = {nature_name} onChange={(e) => set5(e.target.value)} type = "text" / >
                                 <br></br>
                                 < input placeholder = "nature_description" name = "nature_description" value = {nature_description} onChange={(e) => set6(e.target.value)} type = "text" / >
                                 <br></br>
                                  < input placeholder = "criminal_address" name = "criminal_address" value={criminal_address} onChange={(e) => set7(e.target.value)} type = "text" / >
                                 <br></br>
                        </div>
                        <div className="victim_area">
                                <h1>VICTIM DATA</h1>
                                < input placeholder = "victim_id" name = "victim_id" value = {victim_id} onChange={(e) => set8(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_name" name = "victim_name" value = {victim_name} onChange={(e) => set9(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_address" name = "victim_address" value = {victim_address} onChange={(e) => set10(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_city" name = "victim_city" value = {victim_city} onChange={(e) => set11(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_state" name = "victim_state" value = {victim_state} onChange={(e) => set12(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_country" name = "victim_country" value = {victim_country} onChange={(e) => set13(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_pin" name = "victim_pin" value = {victim_pin} onChange={(e) => set14(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_phone" name = "victim_phone" value = {victim_phone} onChange={(e) => set15(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_dob" name = "victim_dob" value = {victim_dob} onChange={(e) => set16(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_fir_registration_date" name = "victim_fir_registration_date" value = {victim_fir_registration_date} onChange={(e) => set17(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_other_details" name = "victim_other_details" value = {victim_other_details} onChange={(e) => set18(e.target.value)} type = "text" / >
                                <br></br>
                                < input placeholder = "victim_fir_id" name = "victim_fir_id" value = {victim_fir_id} onChange={(e) => set19(e.target.value)} type = "text" / >
                                <br></br>
                        </div>
                        <div  className="criminal_area">
                              <h1>CRIME DATA</h1>
                              < input placeholder = "crime_nature" name = "crime_nature" value = {crime_nature} onChange={(e) => set20(e.target.value)} type = "text" / >
                              <br></br>
                              < input placeholder = "crime_date" name = "crime_date" value = {crime_date} onChange={(e) => set21(e.target.value)} type = "text" / >
                              <br></br>
                              < input placeholder = "crime_classification" name = "crime_classification" value = {crime_classification} onChange={(e) => set22(e.target.value)} type = "text" / >
                              <br></br>
                        </div>
                        <div className="victim_area">

                              <h1>INVESTIGATION DATA</h1>
                              < input placeholder = "investigation_id" name = "investigation_id" value = {investigation_id} onChange={(e) => set23(e.target.value)} type = "text" / >
                              <br></br>
                              < input placeholder = "investigation_officer_id" name = "investigation_officer_id" value = {investigation_officer_id} onChange={(e) => set24(e.target.value)} type = "text" / >
                              <br></br>
                              < input placeholder = "investigation_start_date" name = "investigation_start_date" value = {investigation_start_date} onChange={(e) => set25(e.target.value)} type = "text" / >
                              <br></br>
                              < input placeholder = "investigation_end_date" name = "investigation_end_date" value = {investigation_end_date} onChange={(e) => set26(e.target.value)} type = "text" / >
                              <br></br>
                        </div>

                  <div  className="criminal_area">
                          <h1>EVIDENCE DATA</h1>
                          < input placeholder = "evidence_id" name = "evidence_id" value = {evidence_id} onChange={(e) => set27(e.target.value)} type = "text" / >
                          <br></br>
                          < input placeholder = "evidence_name" name = "evidence_name" value = {evidence_name} onChange={(e) => set28(e.target.value)} type = "text" / >
                          <br></br>
                          < input placeholder = "evidence_date" name = "evidence_date" value = {evidence_date} onChange={(e) => set29(e.target.value)} type = "text" / >
                          <br></br>
                          < input placeholder = "evidence_description" name = "evidence_description" value = {evidence_description} onChange={(e) => set30(e.target.value)} type = "text" / >
                          <br></br>
                  </div>

                  <div className="victim_area">
                          <h1>WITNESS DATA</h1>
                          < input placeholder = "witness_id" name = "witness_id" value = {witness_id} onChange={(e) => set31(e.target.value)} type = "text" / >
                          <br></br>
                          < input placeholder = "witness_name" name = "witness_name" value = {witness_name} onChange={(e) => set32(e.target.value)} type = "text" / >
                          <br></br>
                          < input placeholder = "witness_number" name = "witness_number" value = {witness_number} onChange={(e) => set33(e.target.value)} type = "text" / >
                         <br></br>
                         < input placeholder = "witness_address" name = "witness_address" value = {witness_address} onChange={(e) => set34(e.target.value)} type = "text" / >
                        <br></br>
                  </div>
              </div>

        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
        <Link to="/">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
