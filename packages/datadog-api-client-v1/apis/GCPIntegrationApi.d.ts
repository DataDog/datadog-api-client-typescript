import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { GCPAccount } from '../models/GCPAccount';
/**
 * no description
 */
export declare class GCPIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a Datadog-GCP integration.
     * Create a GCP integration
     * @param body Create a Datadog-GCP integration.
     */
    createGCPIntegration(body: GCPAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a given Datadog-GCP integration.
     * Delete a GCP integration
     * @param body Delete a given Datadog-GCP integration.
     */
    deleteGCPIntegration(body: GCPAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * List all Datadog-GCP integrations configured in your Datadog account.
     * List all GCP integrations
     */
    listGCPIntegration(options?: Configuration): Promise<RequestContext>;
    /**
     * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
     * Update a GCP integration
     * @param body Update a Datadog-GCP integration.
     */
    updateGCPIntegration(body: GCPAccount, options?: Configuration): Promise<RequestContext>;
}
export declare class GCPIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    createGCPIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteGCPIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    listGCPIntegration(response: ResponseContext): Promise<Array<GCPAccount>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateGCPIntegration(response: ResponseContext): Promise<any>;
}
