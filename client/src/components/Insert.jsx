
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";


const Insert = () => {
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");


      const [post, setData] = useState({
        criminal_category_id: "",criminal_category_name: "",criminal_description: "",nature_id: "",nature_name: "",nature_description: "",criminal_address: "",
        victim_id: "",victim_name: "",victim_address: "",victim_city: "",victim_state: "",victim_country: "",victim_pin: "",victim_phone: "",victim_dob: "",
        victim_fir_registration_date: "",victim_other_details: "",victim_fir_id: "",crime_nature: "",investigation_officer_id: "",crime_date: "",investigation_id: "",
        investigation_start_date: "",investigation_end_date: "",evidence_id: "",evidence_name: "",evidence_date: "",evidence_description: "",
        crime_classification: "",witness_id: "",witness_name: "",witness_number: "",witness_address: ""
      });
  const history = useNavigate();
 let name, value;
   const handleInputs = (e) => {
     console.log(e);
     name = e.target.name;
     value = e.target.value;
     setData({
       ...post,
       [name]: value
     })
   }
  const handleSubmit = (e) => {
    e.preventDefault();
      const{criminal_category_id,criminal_category_name,criminal_description,nature_id,nature_name,nature_description,criminal_address,
      victim_id,victim_name,victim_address,victim_city,victim_state,victim_country,victim_pin,victim_phone,victim_dob,
      victim_fir_registration_date,victim_other_details,victim_fir_id,crime_nature,investigation_officer_id,crime_date,investigation_id,
      investigation_start_date,investigation_end_date,evidence_id,evidence_name,evidence_date,evidence_description,
      crime_classification,witness_id,witness_name,witness_number,witness_address}=post

        if(criminal_category_id&&criminal_category_name&&criminal_description&&nature_id&&nature_name&&nature_description&&criminal_address&&
        victim_id&&victim_name&&victim_address&&victim_city&&victim_state&&victim_country&&victim_pin&&victim_phone&&victim_dob&&
        victim_fir_registration_date&&victim_other_details&&victim_fir_id&&crime_nature&&investigation_officer_id&&crime_date&&investigation_id&&
        investigation_start_date&&investigation_end_date&&evidence_id&&evidence_name&&evidence_date&&evidence_description&&
        crime_classification&&witness_id&&witness_name&&witness_number&&witness_address){
          alert("posted");
    console.log("clicked");
     axios.post("https://635b6bc16f97ae73a64361e9.mockapi.io/records", post
  //  {
    //     name: name,
    //     email: email,
    //   }
  )
      .then(() => {
        navigate("/");
      });
    }
  };

  return (
    <>
      <div>
        <Nav />
        </div>

      <form>

      <div >
                <div className="criminal_area">
                          <h1>CRIMINAL DATA</h1>
                          < input placeholder = "criminal_category_id" name = "criminal_category_id" value = {post.criminal_category_id} onChange = { handleInputs } type = "text" / >
                          <br></br>
                          < input placeholder = "criminal_category_name" name = "criminal_category_name" value = {post.criminal_category_name} onChange = { handleInputs } type = "text" / >
                          <br></br>
                          < input placeholder = "criminal_description" name = "criminal_description" value = {post.criminal_description} onChange = { handleInputs } type = "text" / >
                          <br></br>
                          < input placeholder = "nature_id" name = "nature_id" value = {post.nature_id} onChange = { handleInputs } type = "text" / >
                         <br></br>
                         < input placeholder = "nature_name" name = "nature_name" value = {post.nature_name} onChange = { handleInputs } type = "text" / >
                         <br></br>
                         < input placeholder = "nature_description" name = "nature_description" value = {post.nature_description} onChange = { handleInputs } type = "text" / >
                         <br></br>
                          < input placeholder = "criminal_address" name = "criminal_address" value = {post.criminal_address} onChange = { handleInputs } type = "text" / >
                         <br></br>
                </div>
                <div className="victim_area">
                        <h1>VICTIM DATA</h1>
                        < input placeholder = "victim_id" name = "victim_id" value = {post.victim_id} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_name" name = "victim_name" value = {post.victim_name} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_address" name = "victim_address" value = {post.victim_address} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_city" name = "victim_city" value = {post.victim_city} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_state" name = "victim_state" value = {post.victim_state} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_country" name = "victim_country" value = {post.victim_country} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_pin" name = "victim_pin" value = {post.victim_pin} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_phone" name = "victim_phone" value = {post.victim_phone} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_dob" name = "victim_dob" value = {post.victim_dob} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_fir_registration_date" name = "victim_fir_registration_date" value = {post.victim_fir_registration_date} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_other_details" name = "victim_other_details" value = {post.victim_other_details} onChange = { handleInputs } type = "text" / >
                        <br></br>
                        < input placeholder = "victim_fir_id" name = "victim_fir_id" value = {post.victim_fir_id} onChange = { handleInputs } type = "text" / >
                        <br></br>
                </div>
                <div  className="criminal_area">
                      <h1>CRIME DATA</h1>
                      < input placeholder = "crime_nature" name = "crime_nature" value = {post.crime_nature} onChange = { handleInputs } type = "text" / >
                      <br></br>
                      < input placeholder = "crime_date" name = "crime_date" value = {post.crime_date} onChange = { handleInputs } type = "text" / >
                      <br></br>
                      < input placeholder = "crime_classification" name = "crime_classification" value = {post.crime_classification} onChange = { handleInputs } type = "text" / >
                      <br></br>
                </div>
                <div className="victim_area">

                      <h1>INVESTIGATION DATA</h1>
                      < input placeholder = "investigation_id" name = "investigation_id" value = {post.investigation_id} onChange = { handleInputs } type = "text" / >
                      <br></br>
                      < input placeholder = "investigation_officer_id" name = "investigation_officer_id" value = {post.investigation_officer_id} onChange = { handleInputs } type = "text" / >
                      <br></br>
                      < input placeholder = "investigation_start_date" name = "investigation_start_date" value = {post.investigation_start_date} onChange = { handleInputs } type = "text" / >
                      <br></br>
                      < input placeholder = "investigation_end_date" name = "investigation_end_date" value = {post.investigation_end_date} onChange = { handleInputs } type = "text" / >
                      <br></br>
                </div>

          <div  className="criminal_area">
                  <h1>EVIDENCE DATA</h1>
                  < input placeholder = "evidence_id" name = "evidence_id" value = {post.evidence_id} onChange = { handleInputs } type = "text" / >
                  <br></br>
                  < input placeholder = "evidence_name" name = "evidence_name" value = {post.evidence_name} onChange = { handleInputs } type = "text" / >
                  <br></br>
                  < input placeholder = "evidence_date" name = "evidence_date" value = {post.evidence_date} onChange = { handleInputs } type = "text" / >
                  <br></br>
                  < input placeholder = "evidence_description" name = "evidence_description" value = {post.evidence_description} onChange = { handleInputs } type = "text" / >
                  <br></br>
          </div>

          <div className="victim_area">
                  <h1>WITNESS DATA</h1>
                  < input placeholder = "witness_id" name = "witness_id" value = {post.witness_id} onChange = { handleInputs } type = "text" / >
                  <br></br>
                  < input placeholder = "witness_name" name = "witness_name" value = {post.witness_name} onChange = { handleInputs } type = "text" / >
                  <br></br>
                  < input placeholder = "witness_number" name = "witness_number" value = {post.witness_number} onChange = { handleInputs } type = "text" / >
                 <br></br>
                 < input placeholder = "witness_address" name = "witness_address" value = {post.witness_address} onChange = { handleInputs } type = "text" / >
                <br></br>
          </div>

      </div>



        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Insert;
