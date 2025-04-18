"use client";

import React, { useState } from 'react';
import styles from './history.module.css';
import Link from 'next/link';
import { Plus, Eye, Calendar, Clock, Stethoscope, MapPin } from 'lucide-react';

const History = () => {
    // State to store past visits on the dashboard
    const [visits, setVisits] = useState([
        { date: '12/12/2021', time: '12:00 PM', diagnosis: 'Common Cold', location: 'General Hospital' },
        { date: '01/15/2022', time: '02:30 PM', diagnosis: 'Flu', location: 'City Medical Center' },
        { date: '03/10/2022', time: '10:45 AM', diagnosis: 'Sprained Ankle', location: 'Orthopedic Clinic' },
        { date: '05/05/2022', time: '04:15 PM', diagnosis: 'Allergic Reaction', location: 'Urgent Care' },
        { date: '07/11/2022', time: '09:20 AM', diagnosis: 'Annual Checkup', location: 'Primary Care' }
    ]);

    // State to handle adding a new visit with minimal input fields
    const [isAddingVisit, setIsAddingVisit] = useState(false);
    const [newVisit, setNewVisit] = useState({
        date: '',
        time: '',
        diagnosis: '',
        location: ''
    });

    // Function to add a new medical visit to table
    const handleAddVisit = () => {
        // Ensure all fields are filled before adding
        if (!newVisit.date || !newVisit.time || !newVisit.diagnosis || !newVisit.location) {
            alert('Please fill in all fields');
            return;
        }

        // Add new visit to the list
        setVisits([newVisit, ...visits]);

        // Reset form fields and close the modal
        setNewVisit({
            date: '',
            time: '',
            diagnosis: '',
            location: ''
        });
        setIsAddingVisit(false);
    };

    return (
        <div className={styles.container}>
            {/* Header section with title and Add button */}
            <div className={styles.header}>
                <h2 className={styles.title}>Recent Visits</h2>
                <button 
                    className={styles.addButton}
                    onClick={() => setIsAddingVisit(true)}
                >
                    <Plus size={20} /> Add New Visit
                </button>
            </div>

            {/* Table to display past visits */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Diagnosis</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {visits.map((visit, index) => (
                        <tr key={index}>
                            <td>{visit.date}</td>
                            <td>{visit.time}</td>
                            <td>{visit.diagnosis}</td>
                            <td>{visit.location}</td>
                            <td>
                                <button className={styles.details}>
                                    <Eye size={16} /> Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* View All Link */}
            <div className={styles.viewall}>
                <Link href="/dashboard/history" className={styles.viewAllLink}>
                    <span className={styles.text}>View All</span>
                </Link>
            </div>

            {/* Modal for adding a new visit */}
            {isAddingVisit && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3 className={styles.modalTitle}>Add New Medical Visit</h3>
                        <div className={styles.inputGroup}>
                            {/* Date Input */}
                            <div className={styles.inputWrapper}>
                                <Calendar className={styles.inputIcon} size={20} />
                                <input 
                                    type="date"
                                    value={newVisit.date}
                                    onChange={(e) => setNewVisit({...newVisit, date: e.target.value})}
                                    className={styles.input}
                                    placeholder="Date"
                                    required
                                />
                            </div>

                            {/* Time Input */}
                            <div className={styles.inputWrapper}>
                                <Clock className={styles.inputIcon} size={20} />
                                <input 
                                    type="time"
                                    value={newVisit.time}
                                    onChange={(e) => setNewVisit({...newVisit, time: e.target.value})}
                                    className={styles.input}
                                    placeholder="Time"
                                    required
                                />
                            </div>

                            {/* Diagnosis Input */}
                            <div className={styles.inputWrapper}>
                                <Stethoscope className={styles.inputIcon} size={20} />
                                <input 
                                    type="text"
                                    value={newVisit.diagnosis}
                                    onChange={(e) => setNewVisit({...newVisit, diagnosis: e.target.value})}
                                    className={styles.input}
                                    placeholder="Diagnosis"
                                    required
                                />
                            </div>

                            {/* Location Input */}
                            <div className={styles.inputWrapper}>
                                <MapPin className={styles.inputIcon} size={20} />
                                <input 
                                    type="text"
                                    value={newVisit.location}
                                    onChange={(e) => setNewVisit({...newVisit, location: e.target.value})}
                                    className={styles.input}
                                    placeholder="Location"
                                    required
                                />
                            </div>
                        </div>

                        {/* Modal Buttons */}
                        <div className={styles.modalButtons}>
                            <button 
                                onClick={() => setIsAddingVisit(false)}
                                className={styles.cancelButton}
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleAddVisit}
                                className={styles.saveButton}
                            >
                                Add Visit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default History;
