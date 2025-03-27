import React from 'react';
import styles from './allhistory.module.css';

const HistoryTable = () => {
  const historyData = [
    {
      id: 1,
      dateOfVisit: "2025-01-15",
      doctor: "Dr. John Doe",
      diagnosis: "Flu",
      treatment: "Paracetamol",
      prescriptions: "Paracetamol 500mg",
      notes: "Patient was advised to rest and stay hydrated",
    },
    {
      id: 2,
      dateOfVisit: "2025-02-03",
      doctor: "Dr. Jane Smith",
      diagnosis: "Bronchitis",
      treatment: "Antibiotics",
      prescriptions: "Amoxicillin 500mg",
      notes: "Patient was advised to avoid smoking and stay indoors",
    },
    {
      id: 3,
      dateOfVisit: "2025-03-10",
      doctor: "Dr. Mary Johnson",
      diagnosis: "Asthma",
      treatment: "Inhaler",
      prescriptions: "Ventolin Inhaler",
      notes: "Patient prescribed inhaler for better airflow",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Patient History</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date of Visit</th>
              <th>Doctor</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Prescriptions</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((visit) => (
              <tr key={visit.id}>
                <td>{visit.dateOfVisit}</td>
                <td>
                  <span className={styles.doctorName}>{visit.doctor}</span>
                </td>
                <td>
                  <span className={styles.diagnosis}>{visit.diagnosis}</span>
                </td>
                <td>{visit.treatment}</td>
                <td>
                  <span className={styles.prescription}>{visit.prescriptions}</span>
                </td>
                <td className={styles.notes}>{visit.notes}</td>
                <td>
                  <button className={styles.detailsButton}>
                    View Details
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

export default HistoryTable;