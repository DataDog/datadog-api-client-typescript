import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AzureAccount } from '../models/AzureAccount';
/**
 * no description
 */
export declare class AzureIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
     * Create an Azure integration
     * @param body Create a Datadog-Azure integration for your Datadog account request body.
     */
    createAzureIntegration(body: AzureAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a given Datadog-Azure integration from your Datadog account.
     * Delete an Azure integration
     * @param body Delete a given Datadog-Azure integration request body.
     */
    deleteAzureIntegration(body: AzureAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * List all Datadog-Azure integrations configured in your Datadog account.
     * List all Azure integrations
     */
    listAzureIntegration(options?: Configuration): Promise<RequestContext>;
    /**
     * Update the defined list of host filters for a given Datadog-Azure integration.
     * Update Azure integration host filters
     * @param body Update a Datadog-Azure integration&#39;s host filters request body.
     */
    updateAzureHostFilters(body: AzureAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
     * Update an Azure integration
     * @param body Update a Datadog-Azure integration request body.
     */
    updateAzureIntegration(body: AzureAccount, options?: Configuration): Promise<RequestContext>;
}
export declare class AzureIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAzureIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAzureIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAzureIntegration(response: ResponseContext): Promise<Array<AzureAccount>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAzureHostFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAzureHostFilters(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAzureIntegration(response: ResponseContext): Promise<any>;
}
