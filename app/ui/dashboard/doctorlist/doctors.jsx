"use client";
import React from 'react';
import styles from './doctors.module.css';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Smith",
    specialization: "Cardiologist",
    visit: "2021-10-10",
    availability: "Mon-Fri, 9 AM - 4 PM",
    location: "Room 302, Main Hospital",
    contact: "+27 123 456 789",
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specialization: "Pediatrician",
    visit: "2021-09-15",
    availability: "Mon-Sat, 10 AM - 6 PM",
    location: "Room 210, Children's Wing",
    contact: "+27 987 654 321",
  },
  {
    id: 3,
    name: "Dr. Jane Doe",
    specialization: "Neurologist",
    visit: "2021-08-20",
    availability: "Mon, Wed, Fri 8 AM - 12 PM",
    location: "Room 505, Neuro Center",
    contact: "+27 345 678 901",
  },
];

const DoctorTable = () => {
  const renderContactInfo = (doctor) => (
    <div className={styles.contactDetails}>
      <p className={styles.location}>📍 {doctor.location}</p>
      <p className={styles.phone}>📞 {doctor.contact}</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Doctors Information</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Specialization</th>
              <th>Last Visit</th>
              <th>Availability</th>
              <th>Contact Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <div className={styles.doctorName}>
                    {doctor.name}
                  </div>
                </td>
                <td>
                  <span className={styles.specialization}>
                    {doctor.specialization}
                  </span>
                </td>
                <td>{doctor.visit}</td>
                <td>
                  <span className={styles.availability}>
                    {doctor.availability}
                  </span>
                </td>
                <td>{renderContactInfo(doctor)}</td>
                <td>
                  <button className={styles.actionButton}>
                    Book Appointment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorTable;