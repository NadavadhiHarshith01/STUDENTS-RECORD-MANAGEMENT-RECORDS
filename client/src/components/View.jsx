
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Nav from "./Nav";

const View = () => {
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
      });
  };



  return (
    <>
    <div>
          <Nav />
          <div>
            <h1 class="dashbord">View</h1>
          </div>
        </div>







      <table border="1"  className="me">
      <div className="wood">
      <div className="hi">

        <thead >
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <tr  scope="row">S.no:</tr><br></br>

            <tr scope="row">Reg.no:</tr><br></br>

            <tr scope="row">Student Name:</tr><br></br>

            <tr scope="row">Program:</tr><br></br>

            <tr scope="row">Year of Join:</tr><br></br>


            <tr scope="row">Number:</tr><br></br>

            <tr scope="row">nature_description:</tr><br></br>

            <tr scope="row">Address:</tr><br></br>

            <tr scope="row">12th Marks:</tr><br></br>
            <tr scope="row">Fee:</tr><br></br>

            <tr scope="row">Father Name:</tr><br></br>

            <tr scope="row">Occupation:</tr><br></br>

            <tr scope="row">Annual Income:</tr><br></br>


            <tr scope="row">Qulification:</tr><br></br>

            <tr scope="row">Number:</tr><br></br>

            <tr scope="row">Email:</tr><br></br>

            <tr scope="row">Address:</tr><br></br>


            <tr scope="row">Mother Name:</tr><br></br>

            <tr scope="row">Occupation:</tr><br></br>

            <tr scope="row">Qulification:</tr><br></br>

            <tr scope="row">Number:</tr><br></br>


            <tr scope="row">Email:</tr><br></br>

            <tr scope="row">Annual Salary:</tr><br></br>

            <tr scope="row">Address:</tr><br></br>

            <tr scope="row">10th class marks:</tr><br></br>


            <tr scope="row">12th marks:</tr><br></br>

            <tr scope="row">Entrance Exam marks:</tr><br></br>

            <tr scope="row">Program</tr><br></br>

            <tr scope="row">Year of Join</tr><br></br>


            <tr scope="row">Year of Pass out:</tr><br></br>

            <tr scope="row">Blood Group:</tr><br></br>

            <tr scope="row">Medical illness:</tr><br></br>

            <tr scope="row">Any Surgery:</tr><br></br>


            <tr scope="row">Siblings:</tr><br></br>

            <tr scope="row">State/CBSE:</tr><br></br>

            <tr scope="row"></tr><br></br>

            <tr ></tr><br></br>


        </thead>
        </div>


            <div className="hi1">

              <tbody>

<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <tr scope="col">{id}</tr><br></br>

                  <tr>{criminal_category_id}</tr><br></br>

                  <tr>{criminal_category_name}</tr><br></br>

                  <tr>{criminal_description}</tr><br></br>

                  <tr>{nature_id}</tr><br></br>


                  <tr>{nature_name}</tr><br></br>

                  <tr>{nature_description}</tr><br></br>

                  <tr>{criminal_address}</tr><br></br>

                  <tr>{victim_id}</tr><br></br>


                      <tr>{victim_name}</tr><br></br>

                        <tr>{victim_address}</tr><br></br>

                        <tr>{victim_city}</tr><br></br>

                          <tr>{victim_state}</tr><br></br>


                          <tr>{victim_country}</tr><br></br>

                            <tr>{victim_pin}</tr><br></br>

                            <tr>{victim_phone}</tr><br></br>

                              <tr>{victim_dob}</tr><br></br>


                              <tr>{victim_fir_registration_date}</tr><br></br>

                                <tr>{victim_other_details}</tr><br></br>

                                <tr>{victim_fir_id}</tr><br></br>

                                  <tr>{crime_nature}</tr><br></br>


                                  <tr>{investigation_officer_id}</tr><br></br>

                                    <tr>{crime_date}</tr><br></br>

                                    <tr>{investigation_id}</tr><br></br>

                                      <tr>{investigation_start_date}</tr><br></br>


                                      <tr>{investigation_end_date}</tr><br></br>

                                        <tr>{evidence_id}</tr><br></br>

                                        <tr>{evidence_name}</tr><br></br>

                                          <tr>{evidence_date}</tr><br></br>


                                          <tr>{evidence_description}</tr><br></br>

                                            <tr>{crime_classification}</tr><br></br>

                                            <tr>{witness_id}</tr><br></br>

                                              <tr>{witness_name}</tr><br></br>


                                              <tr>{witness_number}</tr><br></br>

                                                <tr>{witness_address}</tr><br></br>




              </tbody>
                </div>
</div>
      </table>
    </>
  );
};

export default View;
