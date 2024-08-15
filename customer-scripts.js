document.addEventListener("DOMContentLoaded", () => {
    loadWorkOrders();
    loadProjects();
    loadEmployees();
    loadDocuments();
});

function loadWorkOrders() {
    // Placeholder function to load work orders
    const workOrderList = document.getElementById("work-order-list");
    workOrderList.innerHTML = "<p>No work orders available</p>";
}

function loadProjects() {
    // Placeholder function to load projects
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "<p>No projects available</p>";
}

function loadEmployees() {
    // Placeholder function to load employees
    const employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = "<p>No employees available</p>";
}

function loadDocuments() {
    // Placeholder function to load documents
    const documentList = document.getElementById("document-list");
    documentList.innerHTML = "<p>No documents available</p>";
}

function navigateToAddWorkOrder() {
    window.location.href = 'add-workorder.html';
}

function addProject() {
    alert("Add Project functionality");
    // Implement functionality to add projects
}

function addEmployee() {
    alert("Add Employee functionality");
    // Implement functionality to add employees
}

function uploadDocument() {
    alert("Upload Document functionality");
    // Implement functionality to upload documents
    window.location.href = 'doc.html';
}

