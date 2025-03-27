import React, { useState } from "react";
import styles from './MedicalHistory.module.css';

const MedicalHistory = () => {
  const [history, setHistory] = useState([
    { id: 1, date: "2025-03-20", hospital: "Alberton Hospital", condition: "Flu", medication: "Paracetamol" },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [newVisit, setNewVisit] = useState({
    date: "",
    hospital: "",
    condition: "",
    medication: ""
  });

  const addNewVisit = () => {
    if (!newVisit.date || !newVisit.hospital || !newVisit.condition || !newVisit.medication) {
      alert("Please fill in all fields");
      return;
    }

    const visitToAdd = {
      ...newVisit,
      id: history.length + 1
    };

    setHistory([...history, visitToAdd]);
    setNewVisit({
      date: "",
      hospital: "",
      condition: "",
      medication: ""
    });
    setIsAdding(false);
  };

  const deleteVisit = (id) => {
    setHistory(history.filter(visit => visit.id !== id));
  };

  const startEditing = (visit) => {
    setEditingId(visit.id);
    setNewVisit(visit);
  };

  const updateVisit = () => {
    setHistory(history.map(visit => 
      visit.id === editingId ? { ...newVisit, id: editingId } : visit
    ));
    setEditingId(null);
    setNewVisit({
      date: "",
      hospital: "",
      condition: "",
      medication: ""
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setNewVisit({
      date: "",
      hospital: "",
      condition: "",
      medication: ""
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Medical History</h2>
      
      {isAdding ? (
        <div className={styles.addForm}>
          <input
            type="date"
            value={newVisit.date}
            onChange={(e) => setNewVisit({...newVisit, date: e.target.value})}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Hospital"
            value={newVisit.hospital}
            onChange={(e) => setNewVisit({...newVisit, hospital: e.target.value})}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Condition"
            value={newVisit.condition}
            onChange={(e) => setNewVisit({...newVisit, condition: e.target.value})}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Medication"
            value={newVisit.medication}
            onChange={(e) => setNewVisit({...newVisit, medication: e.target.value})}
            className={styles.input}
          />
          <button onClick={addNewVisit} className={styles.saveButton}>Save</button>
          <button onClick={() => setIsAdding(false)} className={styles.cancelButton}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsAdding(true)} className={styles.addButton}>Add New Visit</button>
      )}

      <ul className={styles.historyList}>
        {history.map((visit) => (
          <li key={visit.id} className={styles.historyItem}>
            {editingId === visit.id ? (
              <div className={styles.editForm}>
                <input
                  type="date"
                  value={newVisit.date}
                  onChange={(e) => setNewVisit({...newVisit, date: e.target.value})}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Hospital"
                  value={newVisit.hospital}
                  onChange={(e) => setNewVisit({...newVisit, hospital: e.target.value})}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Condition"
                  value={newVisit.condition}
                  onChange={(e) => setNewVisit({...newVisit, condition: e.target.value})}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Medication"
                  value={newVisit.medication}
                  onChange={(e) => setNewVisit({...newVisit, medication: e.target.value})}
                  className={styles.input}
                />
                <button onClick={updateVisit} className={styles.saveButton}>Update</button>
                <button onClick={cancelEditing} className={styles.cancelButton}>Cancel</button>
              </div>
            ) : (
              <div className={styles.visitDetails}>
                <span>{visit.date} - {visit.hospital} - {visit.condition} - {visit.medication}</span>
                <div className={styles.actionButtons}>
                  <button onClick={() => startEditing(visit)} className={styles.editButton}>Edit</button>
                  <button onClick={() => deleteVisit(visit.id)} className={styles.deleteButton}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalHistory;