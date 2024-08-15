document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for the buttons in the Manage Users section
    document.querySelector('#manage-users button:nth-of-type(1)').addEventListener('click', () => {
        alert('Add User functionality');
    });
    document.querySelector('#manage-users button:nth-of-type(2)').addEventListener('click', () => {
        alert('Edit User functionality');
    });
    document.querySelector('#manage-users button:nth-of-type(3)').addEventListener('click', () => {
        alert('View Users functionality');
    });
    document.querySelector('#manage-users button:nth-of-type(4)').addEventListener('click', () => {
        alert('Delete User functionality');
    });

    // Add event listeners for the buttons in the Manage Work Orders section
    document.querySelector('#manage-work-orders button:nth-of-type(1)').addEventListener('click', () => {
        alert('Add Work Order functionality');
    });
    document.querySelector('#manage-work-orders button:nth-of-type(2)').addEventListener('click', () => {
        alert('Edit Work Order functionality');
    });
    document.querySelector('#manage-work-orders button:nth-of-type(3)').addEventListener('click', () => {
        alert('View Work Orders functionality');
    });
    document.querySelector('#manage-work-orders button:nth-of-type(4)').addEventListener('click', () => {
        alert('Close Work Order functionality');
    });

    // Add event listeners for the buttons in the Manage Customers section
    document.querySelector('#manage-customers button:nth-of-type(1)').addEventListener('click', () => {
        alert('View Customers functionality');
    });
    document.querySelector('#manage-customers button:nth-of-type(2)').addEventListener('click', () => {
        alert('Edit Customer Info functionality');
    });

    // Add event listeners for the buttons in the Manage Projects section
    document.querySelector('#manage-projects button:nth-of-type(1)').addEventListener('click', () => {
        alert('View Projects functionality');
    });
    document.querySelector('#manage-projects button:nth-of-type(2)').addEventListener('click', () => {
        alert('Edit Project Info functionality');
    });
    document.querySelector('#manage-projects button:nth-of-type(3)').addEventListener('click', () => {
        alert('Assign Employees functionality');
    });

    // Add event listeners for the buttons in the View Reports section
    document.querySelector('#reports button:nth-of-type(1)').addEventListener('click', () => {
        alert('Generate Work Order Report functionality');
    });
    document.querySelector('#reports button:nth-of-type(2)').addEventListener('click', () => {
        alert('Generate Customer Report functionality');
    });
    document.querySelector('#reports button:nth-of-type(3)').addEventListener('click', () => {
        alert('Generate Project Report functionality');
    });
    document.querySelector('#reports button:nth-of-type(4)').addEventListener('click', () => {
        alert('Generate Employee Report functionality');
    });
});
