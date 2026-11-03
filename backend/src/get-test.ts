import { APIGatewayProxyResult } from 'aws-lambda';

export const getTestHandler = (): APIGatewayProxyResult => {
    const env = process.env.STAGE || 'undefined';
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world',
                env,
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
                env,
            }),
        };
    }
};
