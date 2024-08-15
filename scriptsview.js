document.addEventListener("DOMContentLoaded", () => {
    loadWorkOrders();
});

function loadWorkOrders() {
    const workOrders = JSON.parse(localStorage.getItem("workOrders")) || [];
    const workOrderList = document.getElementById("workorder-list");
    
    workOrderList.innerHTML = "";

    if (workOrders.length === 0) {
        workOrderList.innerHTML = "<p>No work orders available.</p>";
    } else {
        workOrders.forEach((workOrder, index) => {
            const workOrderDiv = document.createElement("div");
            workOrderDiv.className = "workorder-item";
            workOrderDiv.innerHTML = `
                <h3>Work Order ${index + 1}</h3>
                <p><strong>Description:</strong> ${workOrder.description}</p>
                <p><strong>Status:</strong> ${workOrder.status}</p>
                <p><strong>Assigned Employees:</strong> ${workOrder.assignedEmployees.join(", ")}</p>
            `;
            workOrderList.appendChild(workOrderDiv);
        });
    }
}

