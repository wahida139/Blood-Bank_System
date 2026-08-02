# Blood-Bank System SRS & ERD

## Normalized Database Schema (3NF)

Below is the Entity-Relationship Diagram for the Blood-Bank System, modeling the structure within the `bbdms` database per the Midterm Prototype requirements.

```mermaid
erDiagram
    TBLBLOODDONARS ||--o{ TBLAPPOINTMENTS : "books (as Donor)"
    TBLBLOODDONARS ||--o{ TBLAPPOINTMENTS : "conducts (as Staff)"
    TBLBLOODDONARS ||--o{ TBLBLOODRECORDS : "owns"

    TBLBLOODDONARS {
        int id PK
        string FullName
        string EmailId
        string MobileNumber
        string BloodGroup
        string Location
        string Password
    }

    TBLAPPOINTMENTS {
        int appointment_id PK
        int donor_id FK
        int staff_id FK
        datetime appointment_time
        string status
    }

    TBLBLOODRECORDS {
        int record_id PK
        int donor_id FK
        string blood_group
        date donation_date
    }
```
