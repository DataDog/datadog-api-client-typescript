import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { PagerDutyService } from '../models/PagerDutyService';
import { PagerDutyServiceKey } from '../models/PagerDutyServiceKey';
import { PagerDutyServiceName } from '../models/PagerDutyServiceName';
/**
 * no description
 */
export declare class PagerDutyIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a new service object in the PagerDuty integration.
     * Create a new service object
     * @param body Create a new service object request body.
     */
    createPagerDutyIntegrationService(body: PagerDutyService, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * Delete a single service object
     * @param serviceName The service name
     */
    deletePagerDutyIntegrationService(serviceName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * Get a single service object
     * @param serviceName The service name.
     */
    getPagerDutyIntegrationService(serviceName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * Update a single service object
     * @param serviceName The service name
     * @param body Update an existing service object request body.
     */
    updatePagerDutyIntegrationService(serviceName: string, body: PagerDutyServiceKey, options?: Configuration): Promise<RequestContext>;
}
export declare class PagerDutyIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPagerDutyIntegrationService(response: ResponseContext): Promise<PagerDutyServiceName>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePagerDutyIntegrationService(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPagerDutyIntegrationService(response: ResponseContext): Promise<PagerDutyServiceName>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePagerDutyIntegrationService(response: ResponseContext): Promise<void>;
}
