document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addWorkOrderForm");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const description = document.getElementById("description").value;
        const status = document.getElementById("status").value;
        const assignedEmployees = document.getElementById("assignedEmployees").value;
        
        if (description && status && assignedEmployees) {
            // Store the work order data locally
            const workOrder = {
                description,
                status,
                assignedEmployees: assignedEmployees.split(",").map(emp => emp.trim())
            };
            
            let workOrders = JSON.parse(localStorage.getItem("workOrders")) || [];
            workOrders.push(workOrder);
            localStorage.setItem("workOrders", JSON.stringify(workOrders));
            
            alert("Work order added successfully!");

            // Redirect to view work orders page
            window.location.href = 'view-workorders.html';
        } else {
            alert("Please fill out all fields.");
        }
    });
});

