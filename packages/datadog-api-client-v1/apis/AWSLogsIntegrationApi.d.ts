import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AWSAccountAndLambdaRequest } from '../models/AWSAccountAndLambdaRequest';
import { AWSLogsAsyncResponse } from '../models/AWSLogsAsyncResponse';
import { AWSLogsListResponse } from '../models/AWSLogsListResponse';
import { AWSLogsListServicesResponse } from '../models/AWSLogsListServicesResponse';
import { AWSLogsServicesRequest } from '../models/AWSLogsServicesRequest';
/**
 * no description
 */
export declare class AWSLogsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
     * Check that an AWS Lambda Function exists
     * @param body Check AWS Log Lambda Async request body.
     */
    checkAWSLogsLambdaAsync(body: AWSAccountAndLambdaRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
     * Check permissions for log services
     * @param body Check AWS Logs Async Services request body.
     */
    checkAWSLogsServicesAsync(body: AWSLogsServicesRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
     * Add AWS Log Lambda ARN
     * @param body AWS Log Lambda Async request body.
     */
    createAWSLambdaARN(body: AWSAccountAndLambdaRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
     * Delete an AWS Logs integration
     * @param body Delete AWS Lambda ARN request body.
     */
    deleteAWSLambdaARN(body: AWSAccountAndLambdaRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
     * Enable an AWS Logs integration
     * @param body Enable AWS Log Services request body.
     */
    enableAWSLogServices(body: AWSLogsServicesRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * List all Datadog-AWS Logs integrations configured in your Datadog account.
     * List all AWS Logs integrations
     */
    listAWSLogsIntegrations(options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
     * Get list of AWS log ready services
     */
    listAWSLogsServices(options?: Configuration): Promise<RequestContext>;
}
export declare class AWSLogsIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkAWSLogsLambdaAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkAWSLogsLambdaAsync(response: ResponseContext): Promise<AWSLogsAsyncResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkAWSLogsServicesAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkAWSLogsServicesAsync(response: ResponseContext): Promise<AWSLogsAsyncResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSLambdaARN
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSLambdaARN(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSLambdaARN
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSLambdaARN(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enableAWSLogServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    enableAWSLogServices(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSLogsIntegrations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSLogsIntegrations(response: ResponseContext): Promise<Array<AWSLogsListResponse>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSLogsServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSLogsServices(response: ResponseContext): Promise<Array<AWSLogsListServicesResponse>>;
}
