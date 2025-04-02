"use client"

import React from 'react';
import styles from "./prescriptions.module.css";
import { jsPDF } from 'jspdf';

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
    // Create a new PDF document to download
    const doc = new jsPDF();
    
    // Add a title to the PDF
    doc.setFontSize(18);
    doc.text("Prescription Details", 14, 22);
    
    // Add a horizontal line
    doc.setLineWidth(0.5);
    doc.line(14, 25, 196, 25);
    
    // Adds prescription information 
    doc.setFontSize(12);
    doc.text(`Date: ${prescription.date}`, 14, 35);
    doc.text(`Patient ID: ${prescription.id}`, 14, 42);
    doc.text(`Medication: ${prescription.medication}`, 14, 49);
    doc.text(`Dosage: ${prescription.dosage}`, 14, 56);
    doc.text(`Frequency: ${prescription.frequency}`, 14, 63);
    doc.text(`Doctor: ${prescription.doctor}`, 14, 70);
    
    // Handle longer text for instructions with word wrap
    const splitInstructions = doc.splitTextToSize(`Instructions: ${prescription.instructions}`, 180);
    doc.text(splitInstructions, 14, 77);
    
    // Add status with color
    doc.text(`Status: ${prescription.status}`, 14, 90);
    
    // Add a signature line for the doctor
    doc.setLineWidth(0.5);
    doc.line(14, 110, 80, 110);
    doc.text("Doctor's Signature", 14, 118);
    
    // footer
    doc.setFontSize(10);
    doc.text(
      `Prescription document generated on ${new Date().toLocaleDateString()}`,
      14,
      doc.internal.pageSize.height - 10
    );
    
    // Saves the PDF with a medication name
    doc.save(`prescription_${prescription.id}_${prescription.medication}.pdf`);
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