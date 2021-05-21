import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { SecurityFilterCreateRequest } from '../models/SecurityFilterCreateRequest';
import { SecurityFilterDeleteResponse } from '../models/SecurityFilterDeleteResponse';
import { SecurityFilterResponse } from '../models/SecurityFilterResponse';
import { SecurityFilterUpdateRequest } from '../models/SecurityFilterUpdateRequest';
import { SecurityFiltersResponse } from '../models/SecurityFiltersResponse';
import { SecurityMonitoringListRulesResponse } from '../models/SecurityMonitoringListRulesResponse';
import { SecurityMonitoringRuleCreatePayload } from '../models/SecurityMonitoringRuleCreatePayload';
import { SecurityMonitoringRuleResponse } from '../models/SecurityMonitoringRuleResponse';
import { SecurityMonitoringRuleUpdatePayload } from '../models/SecurityMonitoringRuleUpdatePayload';
import { SecurityMonitoringSignalListRequest } from '../models/SecurityMonitoringSignalListRequest';
import { SecurityMonitoringSignalsListResponse } from '../models/SecurityMonitoringSignalsListResponse';
import { SecurityMonitoringSignalsSort } from '../models/SecurityMonitoringSignalsSort';
/**
 * no description
 */
export declare class SecurityMonitoringApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a security filter.
     * Create a security filter
     * @param body The definition of the new security filter.
     */
    createSecurityFilter(body: SecurityFilterCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Create a detection rule.
     * Create a detection rule
     * @param body
     */
    createSecurityMonitoringRule(body: SecurityMonitoringRuleCreatePayload, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a specific security filter.
     * Delete a security filter
     * @param securityFilterId The ID of the security filter.
     */
    deleteSecurityFilter(securityFilterId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete an existing rule. Default rules cannot be deleted.
     * Delete an existing rule
     * @param ruleId The ID of the rule.
     */
    deleteSecurityMonitoringRule(ruleId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the details of a specific security filter.
     * Get a security filter
     * @param securityFilterId The ID of the security filter.
     */
    getSecurityFilter(securityFilterId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a rule's details.
     * Get a rule's details
     * @param ruleId The ID of the rule.
     */
    getSecurityMonitoringRule(ruleId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of configured security filters with their definitions.
     * Get all security filters
     */
    listSecurityFilters(options?: Configuration): Promise<RequestContext>;
    /**
     * List rules.
     * List rules
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     */
    listSecurityMonitoringRules(pageSize?: number, pageNumber?: number, options?: Configuration): Promise<RequestContext>;
    /**
     * The list endpoint returns security signals that match a search query. Both this endpoint and the POST endpoint can be used interchangeably when listing security signals.
     * Get a quick list of security signals
     * @param filterQuery The search query for security signals.
     * @param filterFrom The minimum timestamp for requested security signals.
     * @param filterTo The maximum timestamp for requested security signals.
     * @param sort The order of the security signals in results.
     * @param pageCursor A list of results using the cursor provided in the previous query.
     * @param pageLimit The maximum number of security signals in the response.
     */
    listSecurityMonitoringSignals(filterQuery?: string, filterFrom?: Date, filterTo?: Date, sort?: SecurityMonitoringSignalsSort, pageCursor?: string, pageLimit?: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
     * Get a list of security signals
     * @param body
     */
    searchSecurityMonitoringSignals(body?: SecurityMonitoringSignalListRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a specific security filter. Returns the security filter object when the request is successful.
     * Update a security filter
     * @param securityFilterId The ID of the security filter.
     * @param body New definition of the security filter.
     */
    updateSecurityFilter(securityFilterId: string, body: SecurityFilterUpdateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field must be included. For example, when modifying a query all queries must be included. Default rules can only be updated to be enabled and to change notifications.
     * Update an existing rule
     * @param ruleId The ID of the rule.
     * @param body
     */
    updateSecurityMonitoringRule(ruleId: string, body: SecurityMonitoringRuleUpdatePayload, options?: Configuration): Promise<RequestContext>;
}
export declare class SecurityMonitoringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSecurityFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSecurityFilter(response: ResponseContext): Promise<SecurityFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSecurityMonitoringRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSecurityMonitoringRule(response: ResponseContext): Promise<SecurityMonitoringRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSecurityFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSecurityFilter(response: ResponseContext): Promise<SecurityFilterDeleteResponse | void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSecurityMonitoringRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSecurityMonitoringRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSecurityFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSecurityFilter(response: ResponseContext): Promise<SecurityFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSecurityMonitoringRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSecurityMonitoringRule(response: ResponseContext): Promise<SecurityMonitoringRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSecurityFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSecurityFilters(response: ResponseContext): Promise<SecurityFiltersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSecurityMonitoringRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSecurityMonitoringRules(response: ResponseContext): Promise<SecurityMonitoringListRulesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSecurityMonitoringSignals
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSecurityMonitoringSignals(response: ResponseContext): Promise<SecurityMonitoringSignalsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchSecurityMonitoringSignals
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchSecurityMonitoringSignals(response: ResponseContext): Promise<SecurityMonitoringSignalsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSecurityFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSecurityFilter(response: ResponseContext): Promise<SecurityFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSecurityMonitoringRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSecurityMonitoringRule(response: ResponseContext): Promise<SecurityMonitoringRuleResponse>;
}
