"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdLogout, 
  MdDashboard, 
  MdHistory, 
  MdLocalHospital, 
  MdDescription, 
  MdContactPhone 
} from 'react-icons/md';
import styles from './sidebar.module.css';

// Sidebar Link Component
const SidebarLink = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link 
      href={item.path} 
      className={`${styles.link} ${isActive ? styles.active : ''}`}
    >
      {item.icon}
      <span>{item.title}</span>
    </Link>
  );
};

// Sidebar Items Configuration
const sidebarItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />
  },
  {
    title: "History",
    path: "/dashboard/history",
    icon: <MdHistory />
  },
  {
    title: "Doctors",
    path: "/dashboard/doctors",
    icon: <MdLocalHospital />
  },
  {
    title: "Prescriptions",
    path: "/dashboard/prescriptions",
    icon: <MdDescription />
  },
  {
    title: "Emergency Contacts",
    path: "/dashboard/contacts",
    icon: <MdContactPhone />
  }
];

// Sidebar Component
const Sidebar = () => {
  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
    // Example: router.push('/login');
  };

  return (
    <div className={styles.container}>
      {/* User Profile Section */}
      <div className={styles.userProfile}>
        <div className={styles.userImageContainer}>
          <Image 
            src="/zandie.jpg" 
            alt="User Profile" 
            width={130} 
            height={150} 
            className={styles.userImage}
            priority
          />
        </div>
        <div className={styles.userInfo}>
          <p>Patient</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <SidebarLink item={item} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <button 
        className={styles.logout}
        onClick={handleLogout}
      >
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;