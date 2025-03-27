"use client"

import React, { useState } from 'react';
import styles from './contacts.module.css';
import { Phone, Mail, UserCircle2, Edit, Trash2, Plus } from 'lucide-react';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Jane Doe",
      relation: "Family Member",
      phone: "+27 123 456 789",
      email: "jane.doe@example.com",
    },
    {
      id: 2,
      name: "Dr. John Smith",
      relation: "Doctor",
      phone: "+27 987 654 321",
      email: "dr.johnsmith@hospital.com",
    },
    {
      id: 3,
      name: "Michael Brown",
      relation: "Friend", 
      phone: "+27 555 333 111",
      email: "michael.brown@example.com",
    },
  ]);

  const [editingContact, setEditingContact] = useState(null);
  const [isAddingContact, setIsAddingContact] = useState(false);

  const handleEdit = (contact) => {
    setEditingContact({...contact});
    setIsAddingContact(false);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleSaveEdit = () => {
    if (editingContact) {
      setContacts(contacts.map(contact => 
        contact.id === editingContact.id ? editingContact : contact
      ));
      setEditingContact(null);
    }
  };

  const handleAddContact = () => {
    const newContact = {
      id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
      name: '',
      relation: '',
      phone: '',
      email: ''
    };
    setEditingContact(newContact);
    setIsAddingContact(true);
  };

  const handleSaveNewContact = () => {
    if (editingContact) {
      // If all fields are filled
      if (editingContact.name && editingContact.relation && editingContact.phone && editingContact.email) {
        setContacts([...contacts, editingContact]);
        setEditingContact(null);
        setIsAddingContact(false);
      } else {
        alert('Please fill in all fields');
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.heading}>Emergency Contacts</h2>
        <button 
          onClick={handleAddContact} 
          className={styles.addButton}
        >
          <Plus size={20} /> Add Contact
        </button>
      </div>
      <div className={styles.grid}>
        {contacts.map((contact) => (
          <div key={contact.id} className={styles.card}>
            <div className={styles.cardActions}>
              <button 
                onClick={() => handleEdit(contact)}
                className={styles.editButton}
              >
                <Edit size={20} />
              </button>
              <button 
                onClick={() => handleDelete(contact.id)}
                className={styles.deleteButton}
              >
                <Trash2 size={20} />
              </button>
            </div>
            
            <div className={styles.cardHeader}>
              <UserCircle2 className={styles.icon} size={40} />
              <h3 className={styles.name}>{contact.name}</h3>
            </div>
            
            <div className={styles.cardContent}>
              <p className={styles.info}>
                <UserCircle2 className={styles.infoIcon} size={16} />
                <span className={styles.infoText}>{contact.relation}</span>
              </p>
              <p className={styles.info}>
                <Phone className={styles.infoIcon} size={16} />
                <span className={styles.infoText}>{contact.phone}</span>
              </p>
              <p className={styles.info}>
                <Mail className={styles.infoIcon} size={16} />
                <span className={styles.infoText}>{contact.email}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {(editingContact && (isAddingContact || editingContact.id)) && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>
              {isAddingContact ? 'Add New Contact' : 'Edit Contact'}
            </h3>
            <div className={styles.modalForm}>
              <input 
                type="text"
                value={editingContact.name}
                onChange={(e) => setEditingContact({...editingContact, name: e.target.value})}
                className={styles.input}
                placeholder="Name"
                required
              />
              <input 
                type="text"
                value={editingContact.relation}
                onChange={(e) => setEditingContact({...editingContact, relation: e.target.value})}
                className={styles.input}
                placeholder="Relation"
                required
              />
              <input 
                type="text"
                value={editingContact.phone}
                onChange={(e) => setEditingContact({...editingContact, phone: e.target.value})}
                className={styles.input}
                placeholder="Phone"
                required
              />
              <input 
                type="email"
                value={editingContact.email}
                onChange={(e) => setEditingContact({...editingContact, email: e.target.value})}
                className={styles.input}
                placeholder="Email"
                required
              />
              <div className={styles.modalButtons}>
                <button 
                  onClick={() => {
                    setEditingContact(null);
                    setIsAddingContact(false);
                  }}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
                <button 
                  onClick={isAddingContact ? handleSaveNewContact : handleSaveEdit}
                  className={styles.saveButton}
                >
                  {isAddingContact ? 'Add' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;