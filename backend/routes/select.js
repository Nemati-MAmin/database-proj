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

router.use(async (req, res, next) => {
  try {
    await pool.connect();
    next();
  } catch (err) {
    console.error("Error connecting to the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employee", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.employee");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/department", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.department");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/department_meetingRoom", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.department_meetingRoom");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/manager", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.manager");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/meetingRoom", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.meetingRoom");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/officeLocation", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.officeLocation");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/project", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.project");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/project_employee", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.project_employee");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/reservation", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.reservation");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/reservation_employee", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.reservation_employee");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/salary", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.salary");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/salary_employee", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.salary_employee");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/salaryLog", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.salaryLog");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/technology", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.technology");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/trainingProgram", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.trainingProgram");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/trainingProgram_employee", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.trainingProgram_employee");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/info", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM dbo.department");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/trainingprogramm", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM dbo.trainingProgram");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employee-department-info", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_EmployeeID, e.employee_FirstName, e.employee_LastName, d.department_DepartmentName
      FROM employee e
      LEFT JOIN department d ON e.employee_DepartmentID = d.department_DepartmentID
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/manager-employee-info", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT m.manager_Name, e.employee_FirstName, e.employee_LastName
      FROM Manager m
      INNER JOIN employee e ON m.manager_ManagerID = e.employee_ManagerID
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/project-employee-count", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT p.project_ProjectName, COUNT(pe.project_employee_EmployeeID) AS EmployeeCount
      FROM project p
      LEFT JOIN project_employee pe ON p.project_ProjectID = pe.project_employee_ProjectID
      GROUP BY p.project_ProjectName
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/meetingroom-reservation-count", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT mr.meetingRoom_RoomName, COUNT(rm.reservation_ReservationID) AS ReservationCount
      FROM meetingRoom mr
      LEFT JOIN reservation rm ON mr.meetingRoom_RoomID = rm.reservation_RoomID
      GROUP BY mr.meetingRoom_RoomName
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/avg-salary-by-department", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT d.department_DepartmentName, AVG(s.salary_Amount) AS AverageSalary
      FROM department d
      INNER JOIN employee e ON d.department_DepartmentID = e.employee_DepartmentID
      INNER JOIN salary s ON e.employee_EmployeeID = s.salary_EmployeeID
      GROUP BY d.department_DepartmentName
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employee-training-programs", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_FirstName, e.employee_LastName, tp.trainingProgram_ProgramName
      FROM employee e
      LEFT JOIN trainingProgram_employee te ON e.employee_EmployeeID = te.trainingProgram_employee_EmployeeID
      LEFT JOIN trainingProgram tp ON te.trainingProgram_employee_ProgramID = tp.trainingProgram_ProgramID
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/departments-no-meetingrooms", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT d.department_DepartmentName
      FROM department d
      LEFT JOIN department_meetingRoom dm ON d.department_DepartmentID = dm.department_meetingRoom_DepartmentID
      WHERE dm.department_meetingRoom_RoomID IS NULL
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/managers-department-info", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT m.manager_Name, m.manager_Position, d.department_DepartmentName
      FROM Manager m
      INNER JOIN department d ON m.manager_DepartmentID = d.department_DepartmentID
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/projects-no-employees", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT p.project_ProjectName, COUNT(pe.project_employee_EmployeeID) AS EmployeeCount
      FROM project p
      LEFT JOIN project_employee pe ON p.project_ProjectID = pe.project_employee_ProjectID
      GROUP BY p.project_ProjectName
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employee-highest-salary", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_FirstName, e.employee_LastName, s.salary_Amount
      FROM employee e
      INNER JOIN salary s ON e.employee_EmployeeID = s.salary_EmployeeID
      WHERE s.salary_Amount = (SELECT MAX(salary_Amount) FROM salary)
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/department-youngest-employee", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT d.department_DepartmentName, e.employee_FirstName, e.employee_LastName
      FROM department d
      INNER JOIN employee e ON d.department_DepartmentID = e.employee_DepartmentID
      WHERE e.employee_Age = (SELECT MIN(employee_Age) FROM employee)
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employees-no-training-programs", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_FirstName, e.employee_LastName
      FROM employee e
      WHERE NOT EXISTS (
          SELECT 1
          FROM trainingProgram_employee te
          WHERE e.employee_EmployeeID = te.trainingProgram_employee_EmployeeID
      )
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/meetingrooms-reservations-today", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT mr.meetingRoom_RoomName, rm.reservation_ReservationID, rm.reservation_ReservationDate
      FROM meetingRoom mr
      INNER JOIN reservation rm ON mr.meetingRoom_RoomID = rm.reservation_RoomID
      WHERE rm.reservation_ReservationDate = CONVERT(NCHAR(10), GETDATE(), 112)
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/managers-highest-paid-employee", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT m.manager_Name, e.employee_FirstName, e.employee_LastName, s.salary_Amount
      FROM Manager m
      INNER JOIN employee e ON m.manager_ManagerID = e.employee_ManagerID
      INNER JOIN salary s ON e.employee_EmployeeID = s.salary_EmployeeID
      WHERE s.salary_Amount = (SELECT MAX(salary_Amount) FROM salary)
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employees-multiple-projects", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_FirstName, e.employee_LastName, COUNT(pe.project_employee_ProjectID) AS ProjectCount
      FROM employee e
      INNER JOIN project_employee pe ON e.employee_EmployeeID = pe.project_employee_EmployeeID
      GROUP BY e.employee_FirstName, e.employee_LastName
      HAVING COUNT(pe.project_employee_ProjectID) > 1
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/projects-employees-aged-over-30", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT p.project_ProjectName, e.employee_FirstName, e.employee_LastName, e.employee_Age
      FROM project p
      INNER JOIN project_employee pe ON p.project_ProjectID = pe.project_employee_ProjectID
      INNER JOIN employee e ON pe.project_employee_EmployeeID = e.employee_EmployeeID
      WHERE e.employee_Age > 30
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employees-unique-technologies", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_FirstName, e.employee_LastName, t.technology_TechnologyName
      FROM employee e
      INNER JOIN employee_technology et ON e.employee_EmployeeID = et.employee_technology_EmployeeID
      INNER JOIN technology t ON et.employee_technology_TechnologyID = t.technology_TechnologyID
      GROUP BY e.employee_FirstName, e.employee_LastName, t.technology_TechnologyName
      HAVING COUNT(t.technology_TechnologyID) = 1
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employees-anniversary-today", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_FirstName, e.employee_LastName, e.employee_HireDate
      FROM employee e
      WHERE DATEPART(MM, e.employee_HireDate) = DATEPART(MM, GETDATE()) AND DATEPART(DD, e.employee_HireDate) = DATEPART(DD, GETDATE())
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/employees-in-reservations-not-in-projects", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT e.employee_FirstName, e.employee_LastName
      FROM employee e
      INNER JOIN reservation_employee re ON e.employee_EmployeeID = re.reservation_employee_EmployeeID
      WHERE NOT EXISTS (
          SELECT 1
          FROM project_employee pe
          WHERE e.employee_EmployeeID = pe.project_employee_EmployeeID
      )
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/departments-no-employees", async (req, res) => {
  try {
    const result = await pool.request().query(`
      SELECT d.department_DepartmentName
      FROM department d
      LEFT JOIN employee e ON d.department_DepartmentID = e.employee_DepartmentID
      WHERE e.employee_EmployeeID IS NULL
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying the database:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.use((req, res) => {
  pool.close();
});

module.exports = router;
