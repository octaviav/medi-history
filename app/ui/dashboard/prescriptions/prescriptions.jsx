"use client"

import React from 'react';
import styles from "./prescriptions.module.css"

const prescriptions = [
  {
    id: 1,
    date: "2025-03-25",
    medication: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice a day",
    doctor: "Dr. Sarah Smith",
    instructions: "Take with food to avoid stomach upset.",
    status: "Active",
  },
  {
    id: 2,
    date: "2025-02-18",
    medication: "Ibuprofen",
    dosage: "200mg",
    frequency: "Once a day",
    doctor: "Dr. John Doe",
    instructions: "Take before meals for better absorption.",
    status: "Completed",
  },
  {
    id: 3,
    date: "2025-01-30",
    medication: "Amoxicillin",
    dosage: "500mg",
    frequency: "Three times a day",
    doctor: "Dr. Jane Doe",
    instructions: "Complete the full course.",
    status: "Active",
  },
];

const Prescriptions = () => {
  const downloadPrescription = (prescription) => {
    console.log(`Downloading prescription for ${prescription.medication}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return styles.statusActive;
      case 'Completed': return styles.statusCompleted;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Prescriptions</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Doctor</th>
              <th>Instructions</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td>{prescription.date}</td>
                <td>{prescription.medication}</td>
                <td>{prescription.dosage}</td>
                <td>{prescription.frequency}</td>
                <td>{prescription.doctor}</td>
                <td className={styles.instructions}>{prescription.instructions}</td>
                <td>
                  <span className={`${styles.status} ${getStatusColor(prescription.status)}`}>
                    {prescription.status}
                  </span>
                </td>
                <td>
                  <button
                    className={styles.downloadButton}
                    onClick={() => downloadPrescription(prescription)}
                  >
                    Download PDF
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

export default Prescriptions;