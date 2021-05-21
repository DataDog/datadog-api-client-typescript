import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AuthenticationValidationResponse } from '../models/AuthenticationValidationResponse';
/**
 * no description
 */
export declare class AuthenticationApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
     * Validate API key
     */
    validate(options?: Configuration): Promise<RequestContext>;
}
export declare class AuthenticationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validate
     * @throws ApiException if the response code was not in [200, 299]
     */
    validate(response: ResponseContext): Promise<AuthenticationValidationResponse>;
}
