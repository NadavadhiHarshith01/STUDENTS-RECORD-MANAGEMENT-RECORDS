

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Compose = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  const [search1, setSearch] = useState("");
  // console.log(search1);


  function getData() {
    axios
      .get("https://635b6bc16f97ae73a64361e9.mockapi.io/records")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://635b6bc16f97ae73a64361e9.mockapi.io/records/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, criminal_category_id, criminal_category_name, criminal_description, nature_id, nature_name, nature_description, criminal_address,
  victim_id,victim_name,victim_address,victim_city,victim_state,victim_country,victim_pin,victim_phone,victim_dob,
  victim_fir_registration_date,victim_other_details,victim_fir_id,crime_nature,investigation_officer_id,crime_date,investigation_id,
  investigation_start_date,investigation_end_date,evidence_id,evidence_name,evidence_date,evidence_description,
  crime_classification,witness_id,witness_name,witness_number,witness_address) => {



    localStorage.setItem("id", id);
    localStorage.setItem("criminal_category_id", criminal_category_id);
    localStorage.setItem("criminal_category_name", criminal_category_name);
    localStorage.setItem("criminal_description", criminal_description);
    localStorage.setItem("nature_id", nature_id);
    localStorage.setItem("nature_name", nature_name);
    localStorage.setItem("nature_description", nature_description);
    localStorage.setItem("criminal_address", criminal_address);

    localStorage.setItem("victim_id", victim_id);
    localStorage.setItem("victim_name", victim_name);
    localStorage.setItem("victim_address", victim_address);
    localStorage.setItem("victim_city", victim_city);
    localStorage.setItem("victim_state", victim_state);
    localStorage.setItem("victim_country", victim_country);
    localStorage.setItem("victim_pin", victim_pin);
    localStorage.setItem("victim_phone", victim_phone);
    localStorage.setItem("victim_dob", victim_dob);

    localStorage.setItem("victim_fir_registration_date", victim_fir_registration_date);
    localStorage.setItem("victim_other_details", victim_other_details);
    localStorage.setItem("victim_fir_id", victim_fir_id);
    localStorage.setItem("crime_nature", crime_nature);
    localStorage.setItem("investigation_officer_id", investigation_officer_id);
    localStorage.setItem("crime_date", crime_date);
    localStorage.setItem("investigation_id", investigation_id);

    localStorage.setItem("investigation_start_date", investigation_start_date);
    localStorage.setItem("investigation_end_date", investigation_end_date);
    localStorage.setItem("evidence_id", evidence_id);
    localStorage.setItem("evidence_name", evidence_name);
    localStorage.setItem("evidence_date", evidence_date);
    localStorage.setItem("evidence_description", evidence_description);

    localStorage.setItem("crime_classification", crime_classification);
    localStorage.setItem("witness_id", witness_id);
    localStorage.setItem("witness_name", witness_name);
    localStorage.setItem("witness_number", witness_number);
    localStorage.setItem("witness_address", witness_address);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div style={{

        alignItems: "center",
        justifyContent: "center",

      }}>
          <Nav />
          <div>
            <h1 class="dashbord">welcome to Dashboard</h1>
          </div>
        </div>


      <div className="form-check form-switch">
        <button
          className="form-check-input"
          type=""
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        ><i class="fa fa-eye-slash" aria-hidden="true"></i></button>
      </div>


      <div className="d-flex justify-content-between m-2">
        <Link to="/insert">
          <button className="btn btn-outline-primary">Create</button>
        </Link>
        <input className="search" placeholder="Search by ID / NAME" name="search1" value={search1} type="text"  onChange={(e) => setSearch(e.target.value)} />
      </div>


      <table className={`table ${tabledark}`}>
        <thead>
          <tr>


            <th scope="col">S.No</th>
            <th scope="col">Reg.No</th>
            <th scope="col">Student Name</th>
            <th scope="col">Program</th>
            <th scope="col">Year of Join</th>
            <th scope="col">Number</th>
            <th scope="col">Address</th>
            <th scope="col">12th marks</th>
            <th scope="col">Fee</th>





          </tr>
        </thead>

        {data.map((eachData) => {

          Number(search1);
            let se=search1/search1;
            if(se==true ||search1==eachData.criminal_category_name ){
              if(search1==eachData.id||search1==eachData.criminal_category_name){
                return (
                  <>
                    <tbody>
                      <tr>
                        <th scope="row">{eachData.id}</th>
                        <td>{eachData.criminal_category_id}</td>
                        <td>{eachData.criminal_category_name}</td>
                        <td>{eachData.criminal_description}</td>
                        <td>{eachData.nature_id}</td>

                        <td>{eachData.nature_name}</td>
                          <td>{eachData.nature_description}</td>
                          <td>{eachData.criminal_address}</td>
                            <td>{eachData.victim_id}</td>





                                                      <td>
                                                        <Link to="/View">
                                                          <button
                                                            className="btn btn-outline-success"
                                                            onClick={() =>
                                                              setToLocalStorage(


                                                                eachData.id,
                                                                eachData.criminal_category_id,
                                                                eachData.criminal_category_name,
                                                                eachData.criminal_description,
                                                                eachData.nature_id,

                                                                eachData.nature_name,
                                                                eachData.nature_description,
                                                                eachData.criminal_address,
                                                                eachData.victim_id,

                                                                eachData.victim_name,
                                                                eachData.victim_address,
                                                                eachData.victim_city,
                                                                eachData.victim_state,

                                                                eachData.victim_country,
                                                                eachData.victim_pin,
                                                                eachData.victim_phone,
                                                                eachData.victim_dob,

                                                                eachData.victim_fir_registration_date,
                                                                eachData.victim_other_details,
                                                                eachData.victim_fir_id,
                                                                eachData.crime_nature,

                                                                eachData.investigation_officer_id,
                                                                eachData.crime_date,
                                                                eachData.investigation_id,
                                                                eachData.investigation_start_date,

                                                                eachData.investigation_end_date,
                                                                eachData.evidence_id,
                                                                eachData.evidence_name,
                                                                eachData.evidence_date,

                                                                eachData.evidence_description,
                                                                eachData.crime_classification,
                                                                eachData.witness_id,
                                                                eachData.witness_name,

                                                                eachData.witness_number,
                                                                eachData.witness_address

                                                              )
                                                            }
                                                          >
                                                          <i class="fa fa-eye" aria-hidden="true"></i>{" "}
                                                          </button>
                                                        </Link>
                                                      </td>

                        <td>
                          <Link to="/Update">
                            <button
                              className="btn btn-outline-info"
                              onClick={() =>
                                setToLocalStorage(


                                  eachData.id,
                                  eachData.criminal_category_id,
                                  eachData.criminal_category_name,
                                  eachData.criminal_description,
                                  eachData.nature_id,

                                  eachData.nature_name,
                                  eachData.nature_description,
                                  eachData.criminal_address,
                                  eachData.victim_id,

                                  eachData.victim_name,
                                  eachData.victim_address,
                                  eachData.victim_city,
                                  eachData.victim_state,

                                  eachData.victim_country,
                                  eachData.victim_pin,
                                  eachData.victim_phone,
                                  eachData.victim_dob,

                                  eachData.victim_fir_registration_date,
                                  eachData.victim_other_details,
                                  eachData.victim_fir_id,
                                  eachData.crime_nature,

                                  eachData.investigation_officer_id,
                                  eachData.crime_date,
                                  eachData.investigation_id,
                                  eachData.investigation_start_date,

                                  eachData.investigation_end_date,
                                  eachData.evidence_id,
                                  eachData.evidence_name,
                                  eachData.evidence_date,

                                  eachData.evidence_description,
                                  eachData.crime_classification,
                                  eachData.witness_id,
                                  eachData.witness_name,

                                  eachData.witness_number,
                                  eachData.witness_address

                                )
                              }
                            >
                            <i class="fa fa-pencil" aria-hidden="true"></i>{" "}
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleDelete(eachData.id)}
                          >
                          <i class="fa fa-trash" aria-hidden="true"></i>

                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );

              }
              }
            else if(search1==false){
              return (
                <>

                  <tbody>
                    <tr>



                      <th scope="row">{eachData.id}</th>
                      <td>{eachData.criminal_category_id}</td>
                      <td>{eachData.criminal_category_name}</td>
                      <td>{eachData.criminal_description}</td>
                      <td>{eachData.nature_id}</td>

                      <td>{eachData.nature_name}</td>
                        <td>{eachData.nature_description}</td>
                        <td>{eachData.criminal_address}</td>
                          <td>{eachData.victim_id}</td>





                                                    <td>
                                                      <Link to="/View">
                                                        <button
                                                          className="btn btn-outline-success"
                                                          onClick={() =>
                                                            setToLocalStorage(


                                                              eachData.id,
                                                              eachData.criminal_category_id,
                                                              eachData.criminal_category_name,
                                                              eachData.criminal_description,
                                                              eachData.nature_id,

                                                              eachData.nature_name,
                                                              eachData.nature_description,
                                                              eachData.criminal_address,
                                                              eachData.victim_id,

                                                              eachData.victim_name,
                                                              eachData.victim_address,
                                                              eachData.victim_city,
                                                              eachData.victim_state,

                                                              eachData.victim_country,
                                                              eachData.victim_pin,
                                                              eachData.victim_phone,
                                                              eachData.victim_dob,

                                                              eachData.victim_fir_registration_date,
                                                              eachData.victim_other_details,
                                                              eachData.victim_fir_id,
                                                              eachData.crime_nature,

                                                              eachData.investigation_officer_id,
                                                              eachData.crime_date,
                                                              eachData.investigation_id,
                                                              eachData.investigation_start_date,

                                                              eachData.investigation_end_date,
                                                              eachData.evidence_id,
                                                              eachData.evidence_name,
                                                              eachData.evidence_date,

                                                              eachData.evidence_description,
                                                              eachData.crime_classification,
                                                              eachData.witness_id,
                                                              eachData.witness_name,

                                                              eachData.witness_number,
                                                              eachData.witness_address

                                                            )
                                                          }
                                                        >
                                                        <i class="fa fa-eye" aria-hidden="true"></i>{" "}
                                                        </button>
                                                      </Link>
                                                    </td>

                      <td>
                        <Link to="/Update">
                          <button
                            className="btn btn-outline-info"
                            onClick={() =>
                              setToLocalStorage(


                                eachData.id,
                                eachData.criminal_category_id,
                                eachData.criminal_category_name,
                                eachData.criminal_description,
                                eachData.nature_id,

                                eachData.nature_name,
                                eachData.nature_description,
                                eachData.criminal_address,
                                eachData.victim_id,

                                eachData.victim_name,
                                eachData.victim_address,
                                eachData.victim_city,
                                eachData.victim_state,

                                eachData.victim_country,
                                eachData.victim_pin,
                                eachData.victim_phone,
                                eachData.victim_dob,

                                eachData.victim_fir_registration_date,
                                eachData.victim_other_details,
                                eachData.victim_fir_id,
                                eachData.crime_nature,

                                eachData.investigation_officer_id,
                                eachData.crime_date,
                                eachData.investigation_id,
                                eachData.investigation_start_date,

                                eachData.investigation_end_date,
                                eachData.evidence_id,
                                eachData.evidence_name,
                                eachData.evidence_date,

                                eachData.evidence_description,
                                eachData.crime_classification,
                                eachData.witness_id,
                                eachData.witness_name,

                                eachData.witness_number,
                                eachData.witness_address

                              )
                            }
                          >
                          <i class="fa fa-pencil" aria-hidden="true"></i>{" "}
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(eachData.id)}
                        >
                        <i class="fa fa-trash" aria-hidden="true"></i>

                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            }




        })}
      </table>
    </>
  );
};

export default Compose;
