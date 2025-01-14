"use client";
import { useState, useContext } from "react";
import { DownloadState } from "../context/download-context";
import styles from "./page.module.css"

// export default function Downloads() {
//   const [downloadStatus, setDownloadStatus] = useState("");
//   const downloadSomething = async () => {
//     try {
//       const response = await fetch("/api/download", {cache: "no-store"});
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "election.csv");
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       setDownloadStatus("success");
//     } catch (error) {
//       console.error("failed to download: ", error);
//       setDownloadStatus("failure");
//     }
//   };
//     return (
//     <>
//       <h1>
//         <u>Downloads</u>
//       </h1>
//       <br />
//       <p>
//         Hey! This is just a way for me to give back to the community. I scraped
//         and manually copied data from across the internet, so I want to provide
//         an easy-to-access way for others to use the same data without working so
//         hard to find it. Just input the type of election, year, and state of the
//         election you want to see data for and you can download a csv containing
//         that information.
//       </p>
//       <br />
//       <label for="state-restriction" class="form-label">
//         Election Type:
//       </label>
//       <br />
//       <select
//         class="form-select menu-input"
//         name="mode-restriction"
//         id="mode-restriction"
//         data-bs-toggle="tooltip"
//         title="What type of election?"
//         onChange={(e) => setMode(e.target.value)}
//       >
//         <option value="Presidential">Presidential</option>
//         <option value="Senatorial">Senatorial</option>
//         <option value="Gubernatorial">Gubernatorial</option>
//       </select>
//       <br />
//       <br />
//       <label for="state-restriction" class="form-label">
//         State:
//       </label>
//       <br />
//       <select
//         class="form-select menu-input"
//         name="state-restriction"
//         id="state-restriction"
//         data-bs-toggle="tooltip"
//         title="What state do you want to download?"
//         onChange={handleStatesChange}
//         // multiple
//       >
//         {/* <!-- <option selected>Winner</option> --> */}
//         <option value="Alabama">Alabama</option>
//         {/* <option value="Alaska">Alaska</option> */}
//         <option value="Arizona">Arizona</option>
//         <option value="Arkansas">Arkansas</option>
//         <option value="California">California</option>
//         <option value="Colorado">Colorado</option>
//         <option value="Connecticut">Connecticut</option>
//         <option value="Delaware">Delaware</option>
//         <option value="Florida">Florida</option>
//         <option value="Georgia">Georgia</option>
//         <option value="Hawaii">Hawaii</option>
//         <option value="Idaho">Idaho</option>
//         <option value="Illinois">Illinois</option>
//         <option value="Indiana">Indiana</option>
//         <option value="Iowa">Iowa</option>
//         <option value="Kansas">Kansas</option>
//         <option value="Kentucky">Kentucky</option>
//         <option value="Louisiana">Louisiana</option>
//         <option value="Maine">Maine</option>
//         <option value="Maryland">Maryland</option>
//         <option value="Massachusetts">Massachusetts</option>
//         <option value="Michigan">Michigan</option>
//         <option value="Minnesota">Minnesota</option>
//         <option value="Mississippi">Mississippi</option>
//         <option value="Missouri">Missouri</option>
//         <option value="Montana">Montana</option>
//         <option value="Nebraska">Nebraska</option>
//         <option value="Nevada">Nevada</option>
//         <option value="New Hampshire">New Hampshire</option>
//         <option value="New Jersey">New Jersey</option>
//         <option value="New Mexico">New Mexico</option>
//         <option value="New York">New York</option>
//         <option value="North Carolina">North Carolina</option>
//         <option value="North Dakota">North Dakota</option>
//         <option value="Ohio">Ohio</option>
//         <option value="Oklahoma">Oklahoma</option>
//         <option value="Oregon">Oregon</option>
//         <option value="Pennsylvania">Pennsylvania</option>
//         <option value="Rhode Island">Rhode Island</option>
//         <option value="South Carolina">South Carolina</option>
//         <option value="South Dakota">South Dakota</option>
//         <option value="Tennessee">Tennessee</option>
//         <option value="Texas">Texas</option>
//         <option value="Utah">Utah</option>
//         <option value="Vermont">Vermont</option>
//         <option value="Virginia">Virginia</option>
//         <option value="Washington">Washington</option>
//         <option value="West Virginia">West Virginia</option>
//         <option value="Wisconsin">Wisconsin</option>
//         <option value="Wyoming">Wyoming</option>
//       </select>
//       <br />
//       <br />
//       Date:{" "}<br />
//       <input
//         type="number"
//         min="1964"
//         max="2020"
//         defaultValue={"1964"}
//         id="date"
//         onChange={handleYearChange}
//       />
//       <br />
//       <br />
//       {/* <button onClick={handleDownloadClick}>Download</button> */}
//       <b><u><a download href={`../db/${mode}/${year}/${state}.csv`}>
//         Download
//       </a></u></b>
//     </>
//   );
// }
export default function Downloads() {
  const [mode, setMode] = useState("Presidential");
  const [year, setYear] = useState("1964");
  const [state, setState] = useState("Alabama");
  function handleStatesChange(e) {
    // console.log(e.target.value);
    setState(e.target.value);
    // console.log(state5);
    // state5 = e.target.value;
    // console.log(state5);
  }
  function handleYearChange(e) {
    // console.log(e.target.value);
    setYear(e.target.value);
    // console.log(year5);
    // year5 = e.target.value;
    // console.log(year5);
  }
  // const handleDownloadClick = async () => {
  //   try {
  //     const response = await fetch("/api/download", { cache: "no-store" });
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", "taco.csv");
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error("failed to download: ", error);
  //   }
  // };
  return (
    <div className={styles.maindiv}>
      <h1>
        <u>Downloads</u>
      </h1>
      <br />
      <p>
        Hey! This is just a way for me to give back to the community. I scraped
        and manually copied data from across the internet, so I want to provide
        an easy-to-access way for others to use the same data without working so
        hard to find it. Just input the type of election, year, and state of the
        election you want to see data for and you can download a csv containing
        that information.
      </p>
      <br />
      <label for="state-restriction" class="form-label">
        Election Type:
      </label>
      <br />
      <select
        class="form-select menu-input"
        name="mode-restriction"
        id="mode-restriction"
        data-bs-toggle="tooltip"
        title="What type of election?"
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="Presidential">Presidential</option>
        <option value="Senatorial">Senatorial</option>
        <option value="Gubernatorial">Gubernatorial</option>
      </select>
      <br />
      <br />
      <label for="state-restriction" class="form-label">
        State:
      </label>
      <br />
      <select
        class="form-select menu-input"
        name="state-restriction"
        id="state-restriction"
        data-bs-toggle="tooltip"
        title="What state do you want to download?"
        onChange={handleStatesChange}
        // multiple
      >
        {/* <!-- <option selected>Winner</option> --> */}
        <option value="Alabama">Alabama</option>
        {/* <option value="Alaska">Alaska</option> */}
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
      </select>
      <br />
      <br />
      Date:{" "}<br />
      <input
        type="number"
        min="1964"
        max="2024"
        defaultValue={"1964"}
        id="date"
        onChange={handleYearChange}
      />
      <br />
      <br />
      {/* <button onClick={handleDownloadClick}>Download</button> */}
      {/* could add underline here */}
      <b><a download href={`../db/${mode}/${year}/${state}.csv`} className={styles.downloadButton}>
        Download
      </a></b>
    </div>
  );
}
