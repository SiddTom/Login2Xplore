
$(document).ready(function() {
    $('#rollNo').focus();

    $('#rollNo').on('blur', function() {
        let rollNo = $('#rollNo').val();
        if (rollNo) {
            fetchStudent(rollNo);
        }
    });

    $('#resetBtn').on('click', function() {
        resetForm();
    });

    $('#saveBtn').on('click', function() {
        saveStudent();
    });

    $('#updateBtn').on('click', function() {
        updateStudent();
    });
});

function fetchStudent(rollNo) {
    let jsonObj = {
        "rollNo": rollNo
    };

    let req = createGET_BY_KEYRequest("90932221|-31949213754107072|90963579", "SCHOOL-DB", "STUDENT-TABLE", JSON.stringify(jsonObj));

    jQuery.ajaxSetup({ async: false });
    let resultObj = executeCommandAtGivenBaseUrl(req, "http://api.login2explore.com:5577", "/api/irl");
    jQuery.ajaxSetup({ async: true });

    if (resultObj.status === 200) {
        let data = JSON.parse(resultObj.data).record;
        $('#fullName').val(data.fullName).prop('disabled', false);
        $('#class').val(data.class).prop('disabled', false);
        $('#birthDate').val(data.birthDate).prop('disabled', false);
        $('#address').val(data.address).prop('disabled', false);
        $('#enrollmentDate').val(data.enrollmentDate).prop('disabled', false);
        $('#updateBtn').prop('disabled', false);
        $('#resetBtn').prop('disabled', false);
    } else {
        enableFieldsForNewEntry();
    }
}

function enableFieldsForNewEntry() {
    $('#fullName').prop('disabled', false);
    $('#class').prop('disabled', false);
    $('#birthDate').prop('disabled', false);
    $('#address').prop('disabled', false);
    $('#enrollmentDate').prop('disabled', false);
    $('#saveBtn').prop('disabled', false);
    $('#resetBtn').prop('disabled', false);
}

function saveStudent() {
    let studentData = {
        rollNo: $('#rollNo').val(),
        fullName: $('#fullName').val(),
        class: $('#class').val(),
        birthDate: $('#birthDate').val(),
        address: $('#address').val(),
        enrollmentDate: $('#enrollmentDate').val()
    };

    let jsonObj = {
        "rollNo": studentData.rollNo,
        "fullName": studentData.fullName,
        "class": studentData.class,
        "birthDate": studentData.birthDate,
        "address": studentData.address,
        "enrollmentDate": studentData.enrollmentDate
    };

    let req = createPUTRequest("90932221|-31949213754107072|90963579", JSON.stringify(jsonObj), "SCHOOL-DB", "STUDENT-TABLE");

    jQuery.ajaxSetup({ async: false });
    let resultObj = executeCommandAtGivenBaseUrl(req, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({ async: true });

    if (resultObj.status === 200) {
        alert('Record saved successfully!');
        resetForm();
    } else {
        alert('Error saving record!');
    }
}

function updateStudent() {
    let studentData = {
        rollNo: $('#rollNo').val(),
        fullName: $('#fullName').val(),
        class: $('#class').val(),
        birthDate: $('#birthDate').val(),
        address: $('#address').val(),
        enrollmentDate: $('#enrollmentDate').val()
    };

    let jsonObj = {
        "rollNo": studentData.rollNo,
        "fullName": studentData.fullName,
        "class": studentData.class,
        "birthDate": studentData.birthDate,
        "address": studentData.address,
        "enrollmentDate": studentData.enrollmentDate
    };

    let req = createUPDATERecordRequest("90932221|-31949213754107072|90963579", JSON.stringify(jsonObj), "SCHOOL-DB", "STUDENT-TABLE", JSON.stringify(jsonObj));

    jQuery.ajaxSetup({ async: false });
    let resultObj = executeCommandAtGivenBaseUrl(req, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({ async: true });

    if (resultObj.status === 200) {
        alert('Record updated successfully!');
        resetForm();
    } else {
        alert('Error updating record!');
    }
}

function resetForm() {
    $('#studentForm')[0].reset();
    $('#fullName').prop('disabled', true);
    $('#class').prop('disabled', true);
    $('#birthDate').prop('disabled', true);
    $('#address').prop('disabled', true);
    $('#enrollmentDate').prop('disabled', true);
    $('#saveBtn').prop('disabled', true);
    $('#updateBtn').prop('disabled', true);
    $('#resetBtn').prop('disabled', true);
    $('#rollNo').prop('disabled', false).focus();
}
