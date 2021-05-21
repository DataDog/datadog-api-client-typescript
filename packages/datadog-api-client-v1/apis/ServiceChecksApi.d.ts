import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IntakePayloadAccepted } from '../models/IntakePayloadAccepted';
import { ServiceCheck } from '../models/ServiceCheck';
/**
 * no description
 */
export declare class ServiceChecksApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Submit a list of Service Checks.  **Note**: A valid API key is required.
     * Submit a Service Check
     * @param body Service Check request body.
     */
    submitServiceCheck(body: Array<ServiceCheck>, options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceChecksApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitServiceCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitServiceCheck(response: ResponseContext): Promise<IntakePayloadAccepted>;
}
