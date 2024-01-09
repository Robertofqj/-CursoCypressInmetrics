class RestRequest {

    requestPostJson(jsonBody, url) {
        return cy.request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: jsonBody,
            url: url,
            failOnStatusCode: false
        });
    }

    requisicaoGetHeader(keyHeader, valueHeader, url) {
        return cy.request({
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + valueHeader
            },
            url: url,
            failOnStatusCode: false
        });
    }
}
export default RestRequest


