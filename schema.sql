-- Create database schema
CREATE DATABASE IF NOT EXISTS bbdms;
USE bbdms;

-- Ensure tblblooddonars has the required columns for registration
-- (Using IF NOT EXISTS logic via a workaround or just assuming it needs to be altered)
-- In MySQL, ALTER TABLE ADD IF NOT EXISTS is not standard until recent versions,
-- so we'll just attempt it or just create the table cleanly if this is a fresh setup.
-- Since the user said the table already exists, we will alter it safely.

ALTER TABLE tblblooddonars
    ADD COLUMN IF NOT EXISTS FullName VARCHAR(100) AFTER id,
    ADD COLUMN IF NOT EXISTS MobileNumber VARCHAR(15) AFTER EmailId,
    ADD COLUMN IF NOT EXISTS BloodGroup VARCHAR(5) AFTER MobileNumber,
    ADD COLUMN IF NOT EXISTS Location VARCHAR(255) AFTER BloodGroup;

-- Table 2: Appointments table referencing tblblooddonars
CREATE TABLE IF NOT EXISTS tblappointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    donor_id INT NOT NULL,
    staff_id INT NOT NULL,
    appointment_time DATETIME NOT NULL,
    status ENUM('Scheduled', 'Completed', 'Cancelled') DEFAULT 'Scheduled',
    FOREIGN KEY (donor_id) REFERENCES tblblooddonars(id) ON DELETE CASCADE,
    FOREIGN KEY (staff_id) REFERENCES tblblooddonars(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Table 3: Blood Records table referencing tblblooddonars
CREATE TABLE IF NOT EXISTS tblbloodrecords (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    donor_id INT NOT NULL,
    blood_group VARCHAR(5) NOT NULL,
    donation_date DATE NOT NULL,
    FOREIGN KEY (donor_id) REFERENCES tblblooddonars(id) ON DELETE CASCADE
) ENGINE=InnoDB;



-- Example JOIN Query (Midterm Prototype Demo)
-- SELECT 
--     a.appointment_id, 
--     d.FullName AS donor_name, 
--     d.EmailId AS donor_email, 
--     s.FullName AS staff_name, 
--     a.appointment_time, 
--     a.status 
-- FROM tblappointments a
-- INNER JOIN tblblooddonars d ON a.donor_id = d.id
-- INNER JOIN tblblooddonars s ON a.staff_id = s.id
-- WHERE a.status = 'Scheduled'
-- ORDER BY a.appointment_time ASC;
