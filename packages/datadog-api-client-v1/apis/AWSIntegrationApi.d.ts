import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AWSAccount } from '../models/AWSAccount';
import { AWSAccountCreateResponse } from '../models/AWSAccountCreateResponse';
import { AWSAccountListResponse } from '../models/AWSAccountListResponse';
import { AWSTagFilterCreateRequest } from '../models/AWSTagFilterCreateRequest';
import { AWSTagFilterDeleteRequest } from '../models/AWSTagFilterDeleteRequest';
import { AWSTagFilterListResponse } from '../models/AWSTagFilterListResponse';
/**
 * no description
 */
export declare class AWSIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
     * Create an AWS integration
     * @param body AWS Request Object
     */
    createAWSAccount(body: AWSAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * Set an AWS tag filter.
     * Set an AWS tag filter
     * @param body Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;.
     */
    createAWSTagFilter(body: AWSTagFilterCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Generate a new AWS external ID for a given AWS account ID and role name pair.
     * Generate a new external ID
     * @param body Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://github.com/DataDog/documentation/blob/master/integrations/amazon_web_services/#installation).
     */
    createNewAWSExternalID(body: AWSAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
     * Delete an AWS integration
     * @param body AWS request object
     */
    deleteAWSAccount(body: AWSAccount, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a tag filtering entry.
     * Delete a tag filtering entry
     * @param body Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace.
     */
    deleteAWSTagFilter(body: AWSTagFilterDeleteRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * List all Datadog-AWS integrations available in your Datadog organization.
     * List all AWS integrations
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that matches this role_name.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;.
     */
    listAWSAccounts(accountId?: string, roleName?: string, accessKeyId?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all AWS tag filters.
     * Get all AWS tag filters
     * @param accountId Only return AWS filters that matches this &#x60;account_id&#x60;.
     */
    listAWSTagFilters(accountId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
     * List namespace rules
     */
    listAvailableAWSNamespaces(options?: Configuration): Promise<RequestContext>;
    /**
     * Update a Datadog-Amazon Web Services integration.
     * Update an AWS integration
     * @param body AWS request object
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified.
     */
    updateAWSAccount(body: AWSAccount, accountId?: string, roleName?: string, accessKeyId?: string, options?: Configuration): Promise<RequestContext>;
}
export declare class AWSIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSAccount(response: ResponseContext): Promise<AWSAccountCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSTagFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSTagFilter(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewAWSExternalID
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNewAWSExternalID(response: ResponseContext): Promise<AWSAccountCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSAccount(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSTagFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSTagFilter(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSAccounts(response: ResponseContext): Promise<AWSAccountListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSTagFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSTagFilters(response: ResponseContext): Promise<AWSTagFilterListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAvailableAWSNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAvailableAWSNamespaces(response: ResponseContext): Promise<Array<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAWSAccount(response: ResponseContext): Promise<any>;
}
