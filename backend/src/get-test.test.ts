import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { expect, describe, it } from '@jest/globals';
import { getTestHandler } from './get-test';
import testEvent from '../../events/get-test.event.json';

describe('getTest unit tests', function () {
    it('should return success response', function () {
        const event: APIGatewayProxyEvent = structuredClone(testEvent);

        const response: APIGatewayProxyResult = getTestHandler(event);

        expect(response).toEqual({
            body: JSON.stringify({
                message: 'hello world',
            }),
            statusCode: 200,
        });
    });
});
