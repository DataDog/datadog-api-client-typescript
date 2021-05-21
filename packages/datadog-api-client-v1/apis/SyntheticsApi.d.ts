import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
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
export declare class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a Synthetics global variable.
     * Create a global variable
     * @param body Details of the global variable to create.
     */
    createGlobalVariable(body: SyntheticsGlobalVariable, options?: Configuration): Promise<RequestContext>;
    /**
     * Create a new Synthetics private location.
     * Create a private location
     * @param body Details of the private location to create.
     */
    createPrivateLocation(body: SyntheticsPrivateLocation, options?: Configuration): Promise<RequestContext>;
    /**
     * Create a Synthetic API test.
     * Create an API test
     * @param body Details of the test to create.
     */
    createSyntheticsAPITest(body: SyntheticsAPITest, options?: Configuration): Promise<RequestContext>;
    /**
     * Create a Synthetic browser test.
     * Create a browser test
     * @param body Details of the test to create.
     */
    createSyntheticsBrowserTest(body: SyntheticsBrowserTest, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a Synthetics global variable.
     * Delete a global variable
     * @param variableId The ID of the global variable.
     */
    deleteGlobalVariable(variableId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a Synthetics private location.
     * Delete a private location
     * @param locationId The ID of the private location.
     */
    deletePrivateLocation(locationId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete multiple Synthetic tests by ID.
     * Delete tests
     * @param body Public ID list of the Synthetic tests to be deleted.
     */
    deleteTests(body: SyntheticsDeleteTestsPayload, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit a Synthetics global variable.
     * Edit a global variable
     * @param variableId The ID of the global variable.
     * @param body Details of the global variable to update.
     */
    editGlobalVariable(variableId: string, body: SyntheticsGlobalVariable, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the detailed configuration associated with a Synthetic API test.
     * Get an API test
     * @param publicId The public ID of the test to get details from.
     */
    getAPITest(publicId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the last 50 test results summaries for a given Synthetics API test.
     * Get an API test's latest results summaries
     * @param publicId The public ID of the test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    getAPITestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a specific full result from a given (API) Synthetic test.
     * Get an API test result
     * @param publicId The public ID of the API test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    getAPITestResult(publicId: string, resultId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the detailed configuration (including steps) associated with a Synthetic browser test.
     * Get a browser test
     * @param publicId The public ID of the test to get details from.
     */
    getBrowserTest(publicId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the last 50 test results summaries for a given Synthetics Browser test.
     * Get a browser test's latest results summaries
     * @param publicId The public ID of the browser test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    getBrowserTestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a specific full result from a given (browser) Synthetic test.
     * Get a browser test result
     * @param publicId The public ID of the browser test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    getBrowserTestResult(publicId: string, resultId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the detailed configuration of a global variable.
     * Get a global variable
     * @param variableId The ID of the global variable.
     */
    getGlobalVariable(variableId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a Synthetics private location.
     * Get a private location
     * @param locationId The ID of the private location.
     */
    getPrivateLocation(locationId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the detailed configuration associated with a Synthetics test.
     * Get a test configuration
     * @param publicId The public ID of the test to get details from.
     */
    getTest(publicId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of public and private locations available for Synthetic tests. No arguments required.
     * Get all locations (public and private)
     */
    listLocations(options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of all Synthetic tests.
     * Get the list of all tests
     */
    listTests(options?: Configuration): Promise<RequestContext>;
    /**
     * Trigger a set of Synthetics tests for continuous integration.
     * Trigger tests from CI/CD pipelines
     * @param body Details of the test to trigger.
     */
    triggerCITests(body: SyntheticsCITestBody, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit the configuration of a Synthetic API test.
     * Edit an API test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    updateAPITest(publicId: string, body: SyntheticsAPITest, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit the configuration of a Synthetic browser test.
     * Edit a browser test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    updateBrowserTest(publicId: string, body: SyntheticsBrowserTest, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit a Synthetics private location.
     * Edit a private location
     * @param locationId The ID of the private location.
     * @param body Details of the private location to be updated.
     */
    updatePrivateLocation(locationId: string, body: SyntheticsPrivateLocation, options?: Configuration): Promise<RequestContext>;
    /**
     * Pause or start a Synthetics test by changing the status.
     * Pause or start a test
     * @param publicId The public ID of the Synthetic test to update.
     * @param body Status to set the given Synthetic test to.
     */
    updateTestPauseStatus(publicId: string, body: SyntheticsUpdateTestPauseStatusPayload, options?: Configuration): Promise<RequestContext>;
}
export declare class SyntheticsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    createGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocationCreationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSyntheticsAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSyntheticsAPITest(response: ResponseContext): Promise<SyntheticsAPITest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSyntheticsBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSyntheticsBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteGlobalVariable(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePrivateLocation(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTests(response: ResponseContext): Promise<SyntheticsDeleteTestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    editGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPITest(response: ResponseContext): Promise<SyntheticsAPITest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITestLatestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPITestLatestResults(response: ResponseContext): Promise<SyntheticsGetAPITestLatestResultsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITestResult
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPITestResult(response: ResponseContext): Promise<SyntheticsAPITestResultFull>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTestLatestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBrowserTestLatestResults(response: ResponseContext): Promise<SyntheticsGetBrowserTestLatestResultsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTestResult
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBrowserTestResult(response: ResponseContext): Promise<SyntheticsBrowserTestResultFull>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    getGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocation>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTest(response: ResponseContext): Promise<SyntheticsTestDetails>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLocations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLocations(response: ResponseContext): Promise<SyntheticsLocations>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTests(response: ResponseContext): Promise<SyntheticsListTestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to triggerCITests
     * @throws ApiException if the response code was not in [200, 299]
     */
    triggerCITests(response: ResponseContext): Promise<SyntheticsTriggerCITestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAPITest(response: ResponseContext): Promise<SyntheticsAPITest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocation>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTestPauseStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTestPauseStatus(response: ResponseContext): Promise<boolean>;
}
