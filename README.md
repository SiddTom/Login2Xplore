# Student Enrollment Form with JsonPowerDB

## Description

This project implements a student enrollment form using HTML, CSS, JavaScript, jQuery, and JsonPowerDB.
The form allows users to enter and manage student records, storing data in the `STUDENT-TABLE` relation of the `SCHOOL-DB` database.
It includes three control buttons: Save, Update, and Reset. The form interacts with JsonPowerDB to fetch, save, and update student records.

## Benefits of using JsonPowerDB

- **Simplified Data Handling**: JsonPowerDB allows for easy handling of JSON data, making it straightforward to perform CRUD operations.
- **Schema-Free Database**: JsonPowerDB does not require predefined schemas, making it flexible and adaptable to changes.
- **High Performance**: It offers fast read and write operations, which is beneficial for real-time applications.
- **Built-in Security**: JsonPowerDB comes with built-in security features to ensure data integrity and protection.
- **Cost-Effective**: It reduces the cost of ownership by eliminating the need for complex database management systems.

## Release History

### v1.0.0
- Initial release of the student enrollment form.
- Features: Fetch, save, update, and reset student records using JsonPowerDB.

## Scope of Functionalities

- **Fetch Student Record**: Enter a Roll No to fetch and display the student's details.
- **Save New Student Record**: Enter new student details and save them to the database.
- **Update Existing Student Record**: Modify and update details of an existing student.
- **Reset Form**: Clear all input fields and reset the form state.

## Examples of Use

1. **Fetch Student Record**:
   - Enter the Roll No of the student in the input field.
   - The form will auto-populate with the student's details if the Roll No exists in the database.

2. **Save New Student Record**:
   - Enter the Roll No and other student details.
   - Click the Save button to store the new record in the database.

3. **Update Existing Student Record**:
   - Enter the Roll No of the student.
   - Modify the student details.
   - Click the Update button to save the changes.

4. **Reset Form**:
   - Click the Reset button to clear all input fields and reset the form.

## Project Status

The project is currently in its initial release phase. Future updates may include additional features such as deleting records, advanced validation, and enhanced user interface.

## Sources

- **JsonPowerDB**: [Official Documentation](https://login2explore.com/jpdb/docs.html)
- **jQuery**: [Official Documentation](https://jquery.com/)
- **Bootstrap**: [Official Documentation](https://getbootstrap.com/)

## Other Information

This project was developed as a micro project to demonstrate the capabilities of JsonPowerDB for student record management.
The setup instructions for a local proxy server to handle CORS issues are provided in the main script files.

---

For any questions or support, please contact the project maintainer at [your-email@example.com].

