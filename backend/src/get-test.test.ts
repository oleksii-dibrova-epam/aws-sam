import { APIGatewayProxyResult } from 'aws-lambda';
import { expect, describe, it } from '@jest/globals';
import { getTestHandler } from './get-test';

describe('getTest unit tests', function () {
    it('should return success response', function () {
        const response: APIGatewayProxyResult = getTestHandler();

        expect(response).toEqual({
            body: JSON.stringify({
                message: 'hello world',
                env: 'undefined',
            }),
            statusCode: 200,
        });
    });
});
