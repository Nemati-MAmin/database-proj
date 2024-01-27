const express = require("express");
const sql = require("mssql");
const router = express.Router();

const config = {
  server: "DESKTOP-M0UU3UI",
  database: "TechnicalEmployeeManagementSystem",
  user: "90901",
  password: "123",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(config);

router.post("/employee", async (req, res) => {
  try {
    const {
      employeeID,
      firstName,
      lastName,
      dateOfBirth,
      email,
      phone,
      address,
      hireDate,
      managerID,
      departmentID,
      age,
    } = req.body;

    console.log("Received request body:", req.body);

    const lastModified = new Date().toISOString().slice(0, 10);

    await pool.connect();
    const result = await pool.request().query(`
        INSERT INTO employee (employee_EmployeeID, employee_FirstName, employee_LastName, employee_DateOfBirth, employee_Email, employee_Phone, employee_Address, employee_HireDate, employee_ManagerID, employee_DepartmentID, employee_Age, employee_LastModified)
        VALUES (${employeeID}, '${firstName}', '${lastName}', '', '${email}', '${phone}', N'${address}', '', ${managerID}, ${departmentID}, ${age}, '${lastModified}');
      `);

    res.json({ message: "Employee data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into employee table:", err);
    res.status(500).json({ error: `Internal Server Error ${req}` });
  } finally {
    await pool.close();
  }
});

router.post("/department", async (req, res) => {
  try {
    const { departmentID, departmentName, location, subType } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO department (department_DepartmentID, department_DepartmentName, department_Location, department_SubType)
          VALUES (${departmentID}, '${departmentName}', '${location}', '${subType}');
        `);

    res.json({ message: "Department data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into department table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/department-meetingroom", async (req, res) => {
  try {
    const { roomID, departmentID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO department_meetingRoom (department_meetingRoom_RoomID, department_meetingRoom_DepartmentID)
          VALUES (${roomID}, ${departmentID});
        `);

    res.json({ message: "Department MeetingRoom data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into department_meetingRoom table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/manager", async (req, res) => {
  try {
    const { managerID, position, departmentID, name } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO Manager (manager_ManagerID, manager_Position, manager_DepartmentID, manager_Name)
          VALUES (${managerID}, '${position}', ${departmentID}, '${name}');
        `);

    res.json({ message: "Manager data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into manager table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/meetingroom", async (req, res) => {
  try {
    const { roomID, roomName, capacity, locationID, departmentID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO meetingRoom (meetingRoom_RoomID, meetingRoom_RoomName, meetingRoom_Capacity, meetingRoom_LocationID, meetingRoom_DepartmentID)
          VALUES (${roomID}, '${roomName}', ${capacity}, ${locationID}, ${departmentID});
        `);

    res.json({ message: "MeetingRoom data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into meetingRoom table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/officelocation", async (req, res) => {
  try {
    const { locationID, locationName, address } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO officeLocation (officeLocation_LocationID, officeLocation_LocationName, officeLocation_Address)
          VALUES (${locationID}, '${locationName}', N'${address}');
        `);

    res.json({ message: "OfficeLocation data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into officeLocation table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/project", async (req, res) => {
  try {
    const { projectID, projectName, startDate, endDate } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO project (project_ProjectID, project_ProjectName, project_StartDate, project_EndDate)
          VALUES (${projectID}, '${projectName}', '${startDate}', '${endDate}');
        `);

    res.json({ message: "Project data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into project table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/project-employee", async (req, res) => {
  try {
    const { employeeID, projectID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO project_employee (project_employee_EmployeeID, project_employee_ProjectID)
          VALUES (${employeeID}, ${projectID});
        `);

    res.json({ message: "Project Employee data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into project_employee table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/reservation", async (req, res) => {
  try {
    const { reservationDate, reservationID, employeeID, roomID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO reservation (reservation_ReservationDate, reservation_ReservationID, reservation_EmployeeID, reservation_RoomID)
          VALUES ('${reservationDate}', ${reservationID}, ${employeeID}, ${roomID});
        `);

    res.json({ message: "Reservation data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into reservation table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/reservation-employee", async (req, res) => {
  try {
    const { reservationID, employeeID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO reservation_employee (reservation_employee_ReservationID, reservation_employee_EmployeeID)
          VALUES (${reservationID}, ${employeeID});
        `);

    res.json({ message: "Reservation Employee data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into reservation_employee table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/salary", async (req, res) => {
  try {
    const { amount, salaryID, employeeID, salaryEffectiveDate } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO salary (salary_Amount, salary_SalaryID, salary_EmployeeID, salary_SalaryEffectiveDate)
          VALUES (${amount}, ${salaryID}, ${employeeID}, '${salaryEffectiveDate}');
        `);

    res.json({ message: "Salary data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into salary table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/salary-employee", async (req, res) => {
  try {
    const { employeeID, salaryID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO salary_employee (salary_employee_EmployeeID, salary_employee_SalaryID)
          VALUES (${employeeID}, ${salaryID});
        `);

    res.json({ message: "Salary Employee data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into salary_employee table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/salarylog", async (req, res) => {
  try {
    const { employeeID, oldAmount, newAmount, changeDate, logID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO salaryLog (salaryLog_EmployeeID, salaryLog_OldAmount, salaryLog_NewAmount, salaryLog_ChangeDate, salaryLog_LogID)
          VALUES (${employeeID}, ${oldAmount}, ${newAmount}, '${changeDate}', ${logID});
        `);

    res.json({ message: "Salary Log data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into salaryLog table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/technology", async (req, res) => {
  try {
    const { technologyID, technologyName, description } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO technology (technology_TechnologyID, technology_TechnologyName, technology_Description)
          VALUES (${technologyID}, '${technologyName}', '${description}');
        `);

    res.json({ message: "Technology data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into technology table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/trainingprogram", async (req, res) => {
  try {
    const { programID, programName, description, startDate, endDate } =
      req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO trainingProgram (trainingProgram_ProgramID, trainingProgram_ProgramName, trainingProgram_Description, trainingProgram_StartDate, trainingProgram_EndDate)
          VALUES (${programID}, '${programName}', '${description}', '${startDate}', '${endDate}');
        `);

    res.json({ message: "Training Program data inserted successfully" });
  } catch (err) {
    console.error("Error inserting into trainingProgram table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

router.post("/trainingprogram-employee", async (req, res) => {
  try {
    const { employeeID, programID } = req.body;

    await pool.connect();
    const result = await pool.request().query(`
          INSERT INTO trainingProgram_employee (trainingProgram_employee_EmployeeID, trainingProgram_employee_ProgramID)
          VALUES (${employeeID}, ${programID});
        `);

    res.json({
      message: "Training Program Employee data inserted successfully",
    });
  } catch (err) {
    console.error("Error inserting into trainingProgram_employee table:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await pool.close();
  }
});

module.exports = router;
