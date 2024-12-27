import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeRegisterForm = () => {
  let navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [nic, setNic] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [qualifications, setQualifications] = useState("");

  const handleFullNameChange = (e) => {
<<<<<<< HEAD
    setFullName(e.target.value);
=======
    const filteredName = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFullName(filteredName);
>>>>>>> 1a17f589f8fa4bbf1c35bd2a2ce9217316cfbc29
  };

  const handleNicChange = (e) => {
    const nicRegex = /^(\d{12}|(\d{11}v?))$/i;
    if (!nicRegex.test(e.target.value)) {
      setNicError("Please enter a valid NIC");
    } else {
      setNicError("");
    }
    setNic(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

<<<<<<< HEAD
  const handleDobChange = (e) => {
    setDob(e.target.value);
=======
  const handleDobChange = (value) => {
    const today = new Date();
    if (value > today) {
      setDobError("Date of birth cannot be a future date");
    } else {
      setDobError("");
    }
    setDob(value);
>>>>>>> 1a17f589f8fa4bbf1c35bd2a2ce9217316cfbc29
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleQualificationsChange = (e) => {
    setQualifications(e.target.value);
  };

  const handleAddClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactNoRegex = /^\d{10}$/;

    if (
      !fullName ||
      !nic ||
      !gender ||
      !dob ||
      !contactNo ||
      !email ||
      !address ||
      !qualifications
    ) {
      Swal.fire({
        title: "Missing fields",
        text: "Please enter all fields",
        icon: "error",
      });
      return;
    }

<<<<<<< HEAD
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid email",
        text: "Please enter a valid email address",
        icon: "error",
      });
      return;
    }

    if (!contactNoRegex.test(contactNo)) {
      Swal.fire({
        title: "Invalid contact number",
        text: "Contact number should include 10 numbers and contain only digits",
        icon: "error",
      });
      return;
    }

=======
>>>>>>> 1a17f589f8fa4bbf1c35bd2a2ce9217316cfbc29
    try {
      const employeeData = {
        employeeId: "EMP000",
        fullName,
        nic,
        gender,
        dob,
        contactNo,
        email,
        address,
        qualifications,
      };

      const response = await axios.post(
        "http://localhost:8000/employee/create",
        employeeData
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Successfully created",
          icon: "success",
        });
        // Clear all the text fields
        setFullName("");
        setNic("");
        setGender("");
        setDob("");
        setContactNo("");
        setEmail("");
        setAddress("");
        setQualifications("");
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  const inputContainerStyle = "bg-white/70 h-14 rounded-xl";
  const inputStyle =
    "w-full bg-transparent h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl";

  return (
    <div className="flex flex-col gap-y-4">
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="Fullname"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="NIC"
          value={nic}
          onChange={handleNicChange}
        />
      </div>
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="Gender"
          value={gender}
          onChange={handleGenderChange}
        />
      </div>
<<<<<<< HEAD
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="Date of Birth"
          value={dob}
          onChange={handleDobChange}
        />
=======
      <div className="flex flex-col gap-y-1">
        <div
          className={
            inputContainerStyle +
            " relative select-none " +
            (dobError && "outline outline-4 outline-red-800 outline-offset-1")
          }
        >
          <p
            onClick={() => setIsDobSelected(!isDobSelected)}
            className={
              "flex items-center w-full bg-transparent h-14 rounded-xl text-black text-lg pl-5 " +
              (dob ? "font-normal" : "font-semibold ")
            }
          >
            {dob === null
              ? "Date of Birth *"
              : `${dob.getFullYear()} - ${
                  dob.getMonth() < 10
                    ? "0" + dob.getMonth().toString()
                    : dob.getMonth()
                } - ${
                  dob.getDate() < 10
                    ? "0" + dob.getDate().toString()
                    : dob.getDate()
                }`}
          </p>

          <div
            className={
              "absolute z-10 top-16 right-0 transition-opacity duration-150 ease-in-out  " +
              (isDobSelected ? "opacity-100" : "opacity-0")
            }
          >
            <Calendar
              onChange={handleDobChange}
              value={dob}
              minDate={null} // Allow selection of past dates
              maxDate={new Date(
                new Date().setDate(new Date().getDate() - 1)
              )} // Restrict selection to yesterday
            />
          </div>
        </div>
        {dobError && (
          <p className="text-red-800 font-bold text-lg">{dobError}</p>
        )}
>>>>>>> 1a17f589f8fa4bbf1c35bd2a2ce9217316cfbc29
      </div>
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="Contact Number"
          value={contactNo}
          onChange={handleContactNoChange}
        />
      </div>
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="Address"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
<<<<<<< HEAD
      <div className={inputContainerStyle}>
        <input
          className={inputStyle}
          placeholder="Qualifications"
          value={qualifications}
          onChange={handleQualificationsChange}
        />
=======
      <div className="flex flex-col gap-y-1">
        <div className={inputContainerStyle}>
          <select
            className={
              "w-full bg-transparent h-14 rounded-xl text-black font-semibold text-lg pl-4 " +
              (roleError &&
                "outline outline-4 outline-red-800 outline-offset-1")
            }
            value={role}
            onChange={handleRoleChange}
          >
            <option value="" disabled>
              Select Role *
            </option>
            <option value="coach">Coach</option>
            <option value="cleaner">Cleaner</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        {roleError && (
          <p className="text-red-800 font-bold text-lg">{roleError}</p>
        )}
>>>>>>> 1a17f589f8fa4bbf1c35bd2a2ce9217316cfbc29
      </div>
      <div className="flex justify-between mt-5">
        <button
          className="bg-cyan-400 py-3 px-8 rounded-lg text-lg font-bold transition-transform transform hover:scale-110 hover:bg-cyan-500"
          onClick={handleAddClick}
        >
          Add
        </button>
        <button
          className="bg-red-500 py-3 px-8 rounded-lg text-lg font-bold transition-transform transform hover:scale-110 hover:bg-red-600"
          onClick={() => {
            // Clear all the text fields
            setFullName("");
            setNic("");
            setGender("");
            setDob("");
            setContactNo("");
            setEmail("");
            setAddress("");
            setQualifications("");

            // Navigate
            navigate("/");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EmployeeRegisterForm;
