// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { Configuration, getServer } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { APIErrorResponse } from '../models/APIErrorResponse';
import { SyntheticsAPITest } from '../models/SyntheticsAPITest';
import { SyntheticsAPITestResultFull } from '../models/SyntheticsAPITestResultFull';
import { SyntheticsBrowserTest } from '../models/SyntheticsBrowserTest';
import { SyntheticsBrowserTestResultFull } from '../models/SyntheticsBrowserTestResultFull';
import { SyntheticsCITestBody } from '../models/SyntheticsCITestBody';
import { SyntheticsDeleteTestsPayload } from '../models/SyntheticsDeleteTestsPayload';
import { SyntheticsDeleteTestsResponse } from '../models/SyntheticsDeleteTestsResponse';
import { SyntheticsGetAPITestLatestResultsResponse } from '../models/SyntheticsGetAPITestLatestResultsResponse';
import { SyntheticsGetBrowserTestLatestResultsResponse } from '../models/SyntheticsGetBrowserTestLatestResultsResponse';
import { SyntheticsGlobalVariable } from '../models/SyntheticsGlobalVariable';
import { SyntheticsListTestsResponse } from '../models/SyntheticsListTestsResponse';
import { SyntheticsLocations } from '../models/SyntheticsLocations';
import { SyntheticsPrivateLocation } from '../models/SyntheticsPrivateLocation';
import { SyntheticsPrivateLocationCreationResponse } from '../models/SyntheticsPrivateLocationCreationResponse';
import { SyntheticsTestDetails } from '../models/SyntheticsTestDetails';
import { SyntheticsTriggerCITestsResponse } from '../models/SyntheticsTriggerCITestsResponse';
import { SyntheticsUpdateTestPauseStatusPayload } from '../models/SyntheticsUpdateTestPauseStatusPayload';

/**
 * no description
 */
export class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
    
    /**
     * Create a Synthetics global variable.
     * Create a global variable
     * @param body Details of the global variable to create.
     */
    public async createGlobalVariable(body: SyntheticsGlobalVariable, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createGlobalVariable.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/variables';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.createGlobalVariable').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsGlobalVariable", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new Synthetics private location.
     * Create a private location
     * @param body Details of the private location to create.
     */
    public async createPrivateLocation(body: SyntheticsPrivateLocation, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createPrivateLocation.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/private-locations';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.createPrivateLocation').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsPrivateLocation", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a Synthetic API test.
     * Create an API test
     * @param body Details of the test to create.
     */
    public async createSyntheticsAPITest(body: SyntheticsAPITest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createSyntheticsAPITest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/api';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.createSyntheticsAPITest').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsAPITest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a Synthetic browser test.
     * Create a browser test
     * @param body Details of the test to create.
     */
    public async createSyntheticsBrowserTest(body: SyntheticsBrowserTest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createSyntheticsBrowserTest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/browser';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.createSyntheticsBrowserTest').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsBrowserTest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a Synthetic test.
     * Create a test
     * @param body Details of the test to create.
     */
    public async createTest(body: SyntheticsTestDetails, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createTest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.createTest').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsTestDetails", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a Synthetics global variable.
     * Delete a global variable
     * @param variableId The ID of the global variable.
     */
    public async deleteGlobalVariable(variableId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'variableId' is not null or undefined
        if (variableId === null || variableId === undefined) {
            throw new RequiredError('Required parameter variableId was null or undefined when calling deleteGlobalVariable.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/variables/{variable_id}'
            .replace('{' + 'variable_id' + '}', encodeURIComponent(String(variableId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.deleteGlobalVariable').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a Synthetics private location.
     * Delete a private location
     * @param locationId The ID of the private location.
     */
    public async deletePrivateLocation(locationId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new RequiredError('Required parameter locationId was null or undefined when calling deletePrivateLocation.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/private-locations/{location_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.deletePrivateLocation').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete multiple Synthetic tests by ID.
     * Delete tests
     * @param body Public ID list of the Synthetic tests to be deleted.
     */
    public async deleteTests(body: SyntheticsDeleteTestsPayload, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling deleteTests.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/delete';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.deleteTests').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsDeleteTestsPayload", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit a Synthetics global variable.
     * Edit a global variable
     * @param variableId The ID of the global variable.
     * @param body Details of the global variable to update.
     */
    public async editGlobalVariable(variableId: string, body: SyntheticsGlobalVariable, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'variableId' is not null or undefined
        if (variableId === null || variableId === undefined) {
            throw new RequiredError('Required parameter variableId was null or undefined when calling editGlobalVariable.');
        }

        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling editGlobalVariable.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/variables/{variable_id}'
            .replace('{' + 'variable_id' + '}', encodeURIComponent(String(variableId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.editGlobalVariable').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsGlobalVariable", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the last 50 test results summaries for a given Synthetics API test.
     * Get the test's latest results summaries (API)
     * @param publicId The public ID of the test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    public async getAPITestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling getAPITestLatestResults.');
        }

        
        
        
        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/{public_id}/results'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getAPITestLatestResults').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromTs !== undefined) {
            requestContext.setQueryParam("from_ts", ObjectSerializer.serialize(fromTs, "number", "int64"));
        }
        if (toTs !== undefined) {
            requestContext.setQueryParam("to_ts", ObjectSerializer.serialize(toTs, "number", "int64"));
        }
        if (probeDc !== undefined) {
            requestContext.setQueryParam("probe_dc", ObjectSerializer.serialize(probeDc, "Array<string>", ""));
        }
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a specific full result from a given (API) Synthetic test.
     * Get a test result (API)
     * @param publicId The public ID of the API test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    public async getAPITestResult(publicId: string, resultId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling getAPITestResult.');
        }

        
        // verify required parameter 'resultId' is not null or undefined
        if (resultId === null || resultId === undefined) {
            throw new RequiredError('Required parameter resultId was null or undefined when calling getAPITestResult.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/{public_id}/results/{result_id}'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)))
            .replace('{' + 'result_id' + '}', encodeURIComponent(String(resultId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getAPITestResult').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the detailed configuration (including steps) associated with a Synthetic browser test.
     * Get a test configuration (browser)
     * @param publicId The public ID of the test to get details from.
     */
    public async getBrowserTest(publicId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling getBrowserTest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/browser/{public_id}'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getBrowserTest').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the last 50 test results summaries for a given Synthetics Browser test.
     * Get the test's latest results summaries (browser)
     * @param publicId The public ID of the browser test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    public async getBrowserTestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling getBrowserTestLatestResults.');
        }

        
        
        
        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/browser/{public_id}/results'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getBrowserTestLatestResults').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromTs !== undefined) {
            requestContext.setQueryParam("from_ts", ObjectSerializer.serialize(fromTs, "number", "int64"));
        }
        if (toTs !== undefined) {
            requestContext.setQueryParam("to_ts", ObjectSerializer.serialize(toTs, "number", "int64"));
        }
        if (probeDc !== undefined) {
            requestContext.setQueryParam("probe_dc", ObjectSerializer.serialize(probeDc, "Array<string>", ""));
        }
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a specific full result from a given (browser) Synthetic test.
     * Get a test result (browser)
     * @param publicId The public ID of the browser test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    public async getBrowserTestResult(publicId: string, resultId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling getBrowserTestResult.');
        }

        
        // verify required parameter 'resultId' is not null or undefined
        if (resultId === null || resultId === undefined) {
            throw new RequiredError('Required parameter resultId was null or undefined when calling getBrowserTestResult.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/browser/{public_id}/results/{result_id}'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)))
            .replace('{' + 'result_id' + '}', encodeURIComponent(String(resultId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getBrowserTestResult').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the detailed configuration of a global variable.
     * Get a global variable
     * @param variableId The ID of the global variable.
     */
    public async getGlobalVariable(variableId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'variableId' is not null or undefined
        if (variableId === null || variableId === undefined) {
            throw new RequiredError('Required parameter variableId was null or undefined when calling getGlobalVariable.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/variables/{variable_id}'
            .replace('{' + 'variable_id' + '}', encodeURIComponent(String(variableId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getGlobalVariable').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a Synthetics private location.
     * Get a private location
     * @param locationId The ID of the private location.
     */
    public async getPrivateLocation(locationId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new RequiredError('Required parameter locationId was null or undefined when calling getPrivateLocation.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/private-locations/{location_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getPrivateLocation').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the detailed configuration associated with a Synthetics test.
     * Get a test configuration (API)
     * @param publicId The public ID of the test to get details from.
     */
    public async getTest(publicId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling getTest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/{public_id}'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.getTest').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the list of public and private locations available for Synthetic tests. No arguments required.
     * Get all locations (public and private)
     */
    public async listLocations(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // Path Params
        const localVarPath = '/api/v1/synthetics/locations';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.listLocations').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the list of all Synthetic tests.
     * Get the list of all tests
     */
    public async listTests(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.listTests').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Trigger a set of Synthetics tests for continuous integration.
     * Trigger some Synthetics tests for CI
     * @param body Details of the test to trigger.
     */
    public async triggerCITests(body: SyntheticsCITestBody, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling triggerCITests.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/trigger/ci';

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.triggerCITests').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsCITestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit the configuration of a Synthetic API test.
     * Edit an API test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    public async updateAPITest(publicId: string, body: SyntheticsAPITest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling updateAPITest.');
        }

        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateAPITest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/api/{public_id}'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.updateAPITest').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsAPITest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit the configuration of a Synthetic browser test.
     * Edit a browser test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    public async updateBrowserTest(publicId: string, body: SyntheticsBrowserTest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling updateBrowserTest.');
        }

        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateBrowserTest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/browser/{public_id}'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.updateBrowserTest').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsBrowserTest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit a Synthetics private location.
     * Edit a private location
     * @param locationId The ID of the private location.
     * @param body Details of the private location to be updated.
     */
    public async updatePrivateLocation(locationId: string, body: SyntheticsPrivateLocation, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new RequiredError('Required parameter locationId was null or undefined when calling updatePrivateLocation.');
        }

        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updatePrivateLocation.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/private-locations/{location_id}'
            .replace('{' + 'location_id' + '}', encodeURIComponent(String(locationId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.updatePrivateLocation').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsPrivateLocation", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit the configuration of a Synthetic test.
     * Edit a test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    public async updateTest(publicId: string, body: SyntheticsTestDetails, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling updateTest.');
        }

        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateTest.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/{public_id}'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.updateTest').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsTestDetails", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Pause or start a Synthetics test by changing the status.
     * Pause or start a test
     * @param publicId The public ID of the Synthetic test to update.
     * @param body Status to set the given Synthetic test to.
     */
    public async updateTestPauseStatus(publicId: string, body: SyntheticsUpdateTestPauseStatusPayload, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;
        
        // verify required parameter 'publicId' is not null or undefined
        if (publicId === null || publicId === undefined) {
            throw new RequiredError('Required parameter publicId was null or undefined when calling updateTestPauseStatus.');
        }

        
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateTestPauseStatus.');
        }

        
        // Path Params
        const localVarPath = '/api/v1/synthetics/tests/{public_id}/status'
            .replace('{' + 'public_id' + '}', encodeURIComponent(String(publicId)));

        // Make Request Context
        const requestContext = getServer(config, 'SyntheticsApi.updateTestPauseStatus').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
    
        // Header Params
    
        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "SyntheticsUpdateTestPauseStatusPayload", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}



export class SyntheticsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGlobalVariable", ""
            ) as SyntheticsGlobalVariable;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGlobalVariable", ""
            ) as SyntheticsGlobalVariable;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocationCreationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsPrivateLocationCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsPrivateLocationCreationResponse", ""
            ) as SyntheticsPrivateLocationCreationResponse;
            return body;
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(402, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsPrivateLocationCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsPrivateLocationCreationResponse", ""
            ) as SyntheticsPrivateLocationCreationResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSyntheticsAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSyntheticsAPITest(response: ResponseContext): Promise<SyntheticsAPITest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsAPITest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsAPITest", ""
            ) as SyntheticsAPITest;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(402, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsAPITest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsAPITest", ""
            ) as SyntheticsAPITest;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSyntheticsBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSyntheticsBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsBrowserTest", ""
            ) as SyntheticsBrowserTest;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(402, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsBrowserTest", ""
            ) as SyntheticsBrowserTest;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTest(response: ResponseContext): Promise<SyntheticsTestDetails > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(402, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteGlobalVariable(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePrivateLocation(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTests(response: ResponseContext): Promise<SyntheticsDeleteTestsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsDeleteTestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsDeleteTestsResponse", ""
            ) as SyntheticsDeleteTestsResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsDeleteTestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsDeleteTestsResponse", ""
            ) as SyntheticsDeleteTestsResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGlobalVariable", ""
            ) as SyntheticsGlobalVariable;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGlobalVariable", ""
            ) as SyntheticsGlobalVariable;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITestLatestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAPITestLatestResults(response: ResponseContext): Promise<SyntheticsGetAPITestLatestResultsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsGetAPITestLatestResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGetAPITestLatestResultsResponse", ""
            ) as SyntheticsGetAPITestLatestResultsResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsGetAPITestLatestResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGetAPITestLatestResultsResponse", ""
            ) as SyntheticsGetAPITestLatestResultsResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITestResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAPITestResult(response: ResponseContext): Promise<SyntheticsAPITestResultFull > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsAPITestResultFull = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsAPITestResultFull", ""
            ) as SyntheticsAPITestResultFull;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsAPITestResultFull = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsAPITestResultFull", ""
            ) as SyntheticsAPITestResultFull;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBrowserTest(response: ResponseContext): Promise<SyntheticsTestDetails > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTestLatestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBrowserTestLatestResults(response: ResponseContext): Promise<SyntheticsGetBrowserTestLatestResultsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsGetBrowserTestLatestResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGetBrowserTestLatestResultsResponse", ""
            ) as SyntheticsGetBrowserTestLatestResultsResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsGetBrowserTestLatestResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGetBrowserTestLatestResultsResponse", ""
            ) as SyntheticsGetBrowserTestLatestResultsResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTestResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBrowserTestResult(response: ResponseContext): Promise<SyntheticsBrowserTestResultFull > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsBrowserTestResultFull = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsBrowserTestResultFull", ""
            ) as SyntheticsBrowserTestResultFull;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsBrowserTestResultFull = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsBrowserTestResultFull", ""
            ) as SyntheticsBrowserTestResultFull;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGlobalVariable", ""
            ) as SyntheticsGlobalVariable;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsGlobalVariable", ""
            ) as SyntheticsGlobalVariable;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsPrivateLocation", ""
            ) as SyntheticsPrivateLocation;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsPrivateLocation", ""
            ) as SyntheticsPrivateLocation;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTest(response: ResponseContext): Promise<SyntheticsTestDetails > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLocations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLocations(response: ResponseContext): Promise<SyntheticsLocations > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsLocations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsLocations", ""
            ) as SyntheticsLocations;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsLocations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsLocations", ""
            ) as SyntheticsLocations;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listTests(response: ResponseContext): Promise<SyntheticsListTestsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsListTestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsListTestsResponse", ""
            ) as SyntheticsListTestsResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsListTestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsListTestsResponse", ""
            ) as SyntheticsListTestsResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to triggerCITests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async triggerCITests(response: ResponseContext): Promise<SyntheticsTriggerCITestsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsTriggerCITestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTriggerCITestsResponse", ""
            ) as SyntheticsTriggerCITestsResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsTriggerCITestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTriggerCITestsResponse", ""
            ) as SyntheticsTriggerCITestsResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAPITest(response: ResponseContext): Promise<SyntheticsAPITest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsAPITest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsAPITest", ""
            ) as SyntheticsAPITest;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsAPITest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsAPITest", ""
            ) as SyntheticsAPITest;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsBrowserTest", ""
            ) as SyntheticsBrowserTest;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsBrowserTest", ""
            ) as SyntheticsBrowserTest;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsPrivateLocation", ""
            ) as SyntheticsPrivateLocation;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsPrivateLocation", ""
            ) as SyntheticsPrivateLocation;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTest(response: ResponseContext): Promise<SyntheticsTestDetails > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SyntheticsTestDetails", ""
            ) as SyntheticsTestDetails;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTestPauseStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTestPauseStatus(response: ResponseContext): Promise<boolean > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
            
}
