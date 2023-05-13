exports.handler = async (event) => {
    console.log(event)
    const userId = event.pathParameters.userId;
    const student = {'studentID': userId};
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(student),
    };
    return response;
};
