import styles from "./rightbar.module.css";

const PatientProfile = () => {
  const patient = {
    name: "Zandile Dlamini",
    age: 35,
    gender: "Female",
    bloodType: "O+",
    weight: "75 kg",
    height: "175 cm",
    bmi: "24.5 (Normal)",
    lastBP: "120/80 mmHg",
    heartRate: "72 bpm",
    oxygenSaturation: "98%",
    allergies: "Penicillin, Dairy",
    conditions: "Hypertension, Asthma",
    lastVisit: "March 1, 2025",
    medications: "Amlodipine (5mg daily), Ventolin (as needed)",
    emergencyContact: "- +27 123 456 7890",
    primaryPhysician: "Dr. Sarah Smith",
    homeNurse: "Duduzile Ngobese",
    emergencyContact2: "- +27 987 654 3210",
  };

  const renderInfoSection = (title, items) => (
    <div className={styles.infosection}>
      <h3 className={styles.sectiontitle}>{title}</h3>
      <div className={styles.infogrid}>
        {items.map((item, index) => (
          <div key={index} className={styles.infoitem}>
            <span className={styles.infolabel}>{item.label}</span>
            <span className={styles.infovalue}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.patientprofile}>
      <h2 className={styles.profiletitle}>Profile</h2>
      
      {renderInfoSection("Personal Information", [
        { label: "Name", value: patient.name },
        { label: "Age", value: patient.age },
        { label: "Gender", value: patient.gender },
        { label: "Blood Type", value: patient.bloodType },
      ])}
      
      {renderInfoSection("Body Metrics", [
        { label: "Weight", value: patient.weight },
        { label: "Height", value: patient.height },
        { label: "BMI", value: patient.bmi },
      ])}
      
      {renderInfoSection("Vital Signs", [
        { label: "Last Recorded BP", value: patient.lastBP },
        { label: "Heart Rate", value: patient.heartRate },
        { label: "Oxygen Saturation", value: patient.oxygenSaturation },
      ])}
      
      {renderInfoSection("Medical Information", [
        { label: "Allergies", value: patient.allergies },
        { label: "Chronic Conditions", value: patient.conditions },
        { label: "Last Visit", value: patient.lastVisit },
        { label: "Medications", value: patient.medications },
      ])}
      
      {renderInfoSection("Doctor Information", [
        { label: "Primary Physician", value: patient.primaryPhysician },
        { label: "Contact", value: patient.emergencyContact },
        { label: "Private Duty Nurse", value: patient.homeNurse },
        { label: "Contact", value: patient.emergencyContact2 },
      ])}
    </div>
  );
};

export default PatientProfile;