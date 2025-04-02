# 🏥 Medi-History

![Medi-History Banner](/public/medi-health-logo.png)

## 📋 Overview

**Medi-History** is a comprehensive web application designed to revolutionize how patients track and manage their medical history. In an era where health data is increasingly fragmented across multiple healthcare providers, our platform offers a single, unified interface for personal medical record management.

> "The best way to predict your future health is to create it." – Our project philosophy

**[📝 Project Blog](https://www.linkedin.com/posts/nombuso-simelane_home-medi-health-activity-7313291931873087488-xic9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEV49KgBxKgbTlJahevDRvCK-r-GPKgWaQE)**

### 👨‍💻 Authors

- **Nombuso Simelane** - [LinkedIn](https://linkedin.com/in/nombuso-simelane) | [GitHub](https://github.com/octaviav)

---

## ✨ Features

### 📊 Patient History Dashboard

![Patient History Dashboard](/public/feat3.png)

- **Comprehensive Medical Timeline**: View your entire medical journey at a glance
- **Detailed Visit Records**: Access diagnoses, treatments, and doctor's notes in a structured format
- **Quick Filtering**: Easily search through your medical history by condition, doctor, or date

### 💊 Prescription Management

![Prescription Management](/public/feat2.png)

- **Active & Historical Prescription Tracking**: Monitor current medications and view past prescriptions
- **PDF Generation**: Download prescription details as professional PDF documents

### 👥 Emergency Contacts

![Emergency Contacts](/public/feat1.png)

- **Contact Cards**: Visual representation of important contacts with all necessary information
- **Quick Actions**: One-click options to call, email or message contacts
- **Categorization**: Organize contacts by relationship (family, doctors, caregivers)
- **Seamless Management**: Intuitive interface for adding, editing, and removing contacts

---

## 🛠️ Technical Implementation

### Architecture

Medi-History follows a modern React-based architecture using Next.js for enhanced performance and SEO benefits:


### Component Structure

The application is built with a modular component architecture:

- **Smart Components**: Handle state management and business logic
- **Presentation Components**: Focus on UI rendering with minimal logic
- **Service Layer**: Manages data fetching and manipulation (future implementation)

### Key Technical Decisions

#### PDF Generation Implementation

For the prescription PDF generation feature, I chose jsPDF for several reasons:

```javascript
const downloadPrescription = (prescription) => {
  // Create a new PDF document
  const doc = new jsPDF();
  
  // Add a title
  doc.setFontSize(18);
  doc.text("Prescription Details", 14, 22);
  
  // Add a horizontal line
  doc.setLineWidth(0.5);
  doc.line(14, 25, 196, 25);
  
  // Add prescription information
  doc.setFontSize(12);
  doc.text(`Date: ${prescription.date}`, 14, 35);
  doc.text(`Medication: ${prescription.medication}`, 14, 49);
  // ... more content
  
  // Save the PDF with a meaningful name
  doc.save(`prescription_${prescription.id}_${prescription.medication}.pdf`);
};
```

The implementation uses these techniques:
1. **Document Creation**: Simple instantiation of the jsPDF object
2. **Content Positioning**: Precise control over text and element placement
3. **Styling Controls**: Font size and line width manipulation
4. **Dynamic Content Integration**: Seamless embedding of user data

#### State Management Approach

For the contacts management feature, I implemented a robust state management solution using React Hooks:

```javascript
const [contacts, setContacts] = useState([...]);
const [editingContact, setEditingContact] = useState(null);
const [isAddingContact, setIsAddingContact] = useState(false);
```

This approach gives several advantages:
- **Granular State Control**: Independent state variables for different aspects
- **Predictable Updates**: Clear patterns for state modifications
- **Optimized Rendering**: Components only re-render when relevant state changes

#### Modal Implementation

The contact edit/add modal demonstrates the approach to creating reusable UI components:

```jsx
{(editingContact && (isAddingContact || editingContact.id)) && (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <h3 className={styles.modalTitle}>
        {isAddingContact ? 'Add New Contact' : 'Edit Contact'}
      </h3>
      {/* Form content */}
    </div>
  </div>
)}
```

This implementation:
- Uses conditional rendering for showing/hiding
- Adapts its content based on context (add vs. edit)
- Provides a consistent user experience across actions

---

## 🚀 Getting Started

### Prerequisites

- Node.js v14.0+
- npm v6.0+
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/octaviav/medi-history.git
   cd medi-history
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install PDF generation dependencies:
   ```bash
   npm install jspdf
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configurations
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`

## 🔮 Future Enhancements

The roadmap includes:

1. **🔒 User Authentication**: Secure login and profile management
2. **☁️ Cloud Storage**: Persistent data storage with encryption
3. **📱 Mobile App**: Native iOS and Android applications
4. **🤖 AI Health Insights**: Predictive analytics for health trends
5. **🔌 API Integrations**: Connect with hospital systems and health devices

---

## 💡 Contributing

Contributions are welcome to improve Medi-History! Here's how you can help:

### Development Workflow

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Run tests: `npm test`
4. Commit your changes: `git commit -m 'Add some amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Coding Standards

- Use meaningful variable and function names
- Document complex logic with comments
- Write tests for all new features
- Follow component naming conventions

## 🔄 Related Projects

- [**Health Tracker Pro**](https://github.com/example/health-tracker-pro): Mobile app for tracking health metrics
- [**MedConnect**](https://github.com/example/medconnect): Healthcare provider connection platform
- [**RxTracker**](https://github.com/example/rxtracker): Medication reminder system

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Lucide React](https://lucide.dev/) for the beautiful icon set
- [jsPDF](https://github.com/MrRio/jsPDF) for PDF generation capabilities
- [Next.js Team](https://nextjs.org/) for the fantastic framework
- All our beta testers who provided valuable feedback

---

<p>
  © 2025 Medi-History | Made with ❤️ for better healthcare management
</p>