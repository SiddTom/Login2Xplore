function createGET_BY_KEYRequest(connToken, dbName, relName, jsonObj) {
    return {
        token: connToken,
        dbName: dbName,
        rel: relName,
        cmd: 'GET_BY_KEY',
        jsonStr: jsonObj
    };
}

function createPUTRequest(connToken, jsonObj, dbName, relName) {
    return {
        token: connToken,
        dbName: dbName,
        rel: relName,
        cmd: 'PUT',
        jsonStr: jsonObj
    };
}

function createUPDATERecordRequest(connToken, jsonStr, dbName, relName) {
    return {
        token: connToken,
        dbName: dbName,
        rel: relName,
        cmd: 'UPDATE',
        jsonStr: jsonStr
    };
}

function executeCommandAtGivenBaseUrl(request, baseUrl, apiEndPointUrl) {
    let url = `https://cors-anywhere.herokuapp.com/${baseUrl}${apiEndPointUrl}`;
    let response;
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        async: false,
        success: function(res) {
            response = res;
        },
        error: function(err) {
            response = err;
        }
    });
    return response;
}
