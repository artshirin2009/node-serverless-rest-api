'use strict'
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.getOne = (event, context, callback) => {

    var params = {
        TableName: 'todos',
        Key: {
            id: event.pathParameters.id
        }
    }

    documentClient.get(params, (error, result) => {
        if (error) {
            console.log(error)
            callback(new Error('Couldn\'t create todo item'))
            return;
        }
        console.log('event')
        console.log(event)

        console.log('result');
        console.log(result)

        const response = {
            statusCode: 200,
            body: JSON.stringify(result)
        }
        callback(null, response)
    })
}