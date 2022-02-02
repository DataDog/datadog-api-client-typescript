// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { SyntheticsAPITest } from "../models/SyntheticsAPITest";
import { SyntheticsAPITestResultFull } from "../models/SyntheticsAPITestResultFull";
import { SyntheticsBatchDetails } from "../models/SyntheticsBatchDetails";
import { SyntheticsBrowserTest } from "../models/SyntheticsBrowserTest";
import { SyntheticsBrowserTestResultFull } from "../models/SyntheticsBrowserTestResultFull";
import { SyntheticsCITestBody } from "../models/SyntheticsCITestBody";
import { SyntheticsDeleteTestsPayload } from "../models/SyntheticsDeleteTestsPayload";
import { SyntheticsDeleteTestsResponse } from "../models/SyntheticsDeleteTestsResponse";
import { SyntheticsGetAPITestLatestResultsResponse } from "../models/SyntheticsGetAPITestLatestResultsResponse";
import { SyntheticsGetBrowserTestLatestResultsResponse } from "../models/SyntheticsGetBrowserTestLatestResultsResponse";
import { SyntheticsGlobalVariable } from "../models/SyntheticsGlobalVariable";
import { SyntheticsListGlobalVariablesResponse } from "../models/SyntheticsListGlobalVariablesResponse";
import { SyntheticsListTestsResponse } from "../models/SyntheticsListTestsResponse";
import { SyntheticsLocations } from "../models/SyntheticsLocations";
import { SyntheticsPrivateLocation } from "../models/SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponse } from "../models/SyntheticsPrivateLocationCreationResponse";
import { SyntheticsTestDetails } from "../models/SyntheticsTestDetails";
import { SyntheticsTriggerBody } from "../models/SyntheticsTriggerBody";
import { SyntheticsTriggerCITestsResponse } from "../models/SyntheticsTriggerCITestsResponse";
import { SyntheticsUpdateTestPauseStatusPayload } from "../models/SyntheticsUpdateTestPauseStatusPayload";

/**
 * no description
 */
export class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create a Synthetics global variable.
   * Create a global variable
   * @param body Details of the global variable to create.
   */
  public async createGlobalVariable(
    body: SyntheticsGlobalVariable,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createGlobalVariable."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.createGlobalVariable"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsGlobalVariable", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Create a new Synthetics private location.
   * Create a private location
   * @param body Details of the private location to create.
   */
  public async createPrivateLocation(
    body: SyntheticsPrivateLocation,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createPrivateLocation."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/private-locations";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.createPrivateLocation"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsPrivateLocation", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Create a Synthetic API test.
   * Create an API test
   * @param body Details of the test to create.
   */
  public async createSyntheticsAPITest(
    body: SyntheticsAPITest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createSyntheticsAPITest."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/api";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.createSyntheticsAPITest"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsAPITest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Create a Synthetic browser test.
   * Create a browser test
   * @param body Details of the test to create.
   */
  public async createSyntheticsBrowserTest(
    body: SyntheticsBrowserTest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createSyntheticsBrowserTest."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/browser";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.createSyntheticsBrowserTest"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsBrowserTest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Delete a Synthetics global variable.
   * Delete a global variable
   * @param variableId The ID of the global variable.
   */
  public async deleteGlobalVariable(
    variableId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError(
        "Required parameter variableId was null or undefined when calling deleteGlobalVariable."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables/{variable_id}".replace(
      "{" + "variable_id" + "}",
      encodeURIComponent(String(variableId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.deleteGlobalVariable"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Delete a Synthetics private location.
   * Delete a private location
   * @param locationId The ID of the private location.
   */
  public async deletePrivateLocation(
    locationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'locationId' is not null or undefined
    if (locationId === null || locationId === undefined) {
      throw new RequiredError(
        "Required parameter locationId was null or undefined when calling deletePrivateLocation."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/private-locations/{location_id}".replace(
        "{" + "location_id" + "}",
        encodeURIComponent(String(locationId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.deletePrivateLocation"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Delete multiple Synthetic tests by ID.
   * Delete tests
   * @param body Public ID list of the Synthetic tests to be deleted.
   */
  public async deleteTests(
    body: SyntheticsDeleteTestsPayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling deleteTests."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/delete";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.deleteTests"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsDeleteTestsPayload", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Edit a Synthetics global variable.
   * Edit a global variable
   * @param variableId The ID of the global variable.
   * @param body Details of the global variable to update.
   */
  public async editGlobalVariable(
    variableId: string,
    body: SyntheticsGlobalVariable,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError(
        "Required parameter variableId was null or undefined when calling editGlobalVariable."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling editGlobalVariable."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables/{variable_id}".replace(
      "{" + "variable_id" + "}",
      encodeURIComponent(String(variableId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.editGlobalVariable"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsGlobalVariable", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the detailed configuration associated with a Synthetic API test.
   * Get an API test
   * @param publicId The public ID of the test to get details from.
   */
  public async getAPITest(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getAPITest."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/api/{public_id}".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getAPITest"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics API test.
   * Get an API test's latest results summaries
   * @param publicId The public ID of the test for which to search results for.
   * @param fromTs Timestamp in milliseconds from which to start querying results.
   * @param toTs Timestamp in milliseconds up to which to query results.
   * @param probeDc Locations for which to query results.
   */
  public async getAPITestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    probeDc?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getAPITestLatestResults."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/{public_id}/results".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getAPITestLatestResults"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        ObjectSerializer.serialize(fromTs, "number", "int64")
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        ObjectSerializer.serialize(toTs, "number", "int64")
      );
    }
    if (probeDc !== undefined) {
      requestContext.setQueryParam(
        "probe_dc",
        ObjectSerializer.serialize(probeDc, "Array<string>", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get a specific full result from a given (API) Synthetic test.
   * Get an API test result
   * @param publicId The public ID of the API test to which the target result belongs.
   * @param resultId The ID of the result to get.
   */
  public async getAPITestResult(
    publicId: string,
    resultId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getAPITestResult."
      );
    }

    // verify required parameter 'resultId' is not null or undefined
    if (resultId === null || resultId === undefined) {
      throw new RequiredError(
        "Required parameter resultId was null or undefined when calling getAPITestResult."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/tests/{public_id}/results/{result_id}"
        .replace("{" + "public_id" + "}", encodeURIComponent(String(publicId)))
        .replace("{" + "result_id" + "}", encodeURIComponent(String(resultId)));

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getAPITestResult"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the detailed configuration (including steps) associated with a Synthetic browser test.
   * Get a browser test
   * @param publicId The public ID of the test to get details from.
   */
  public async getBrowserTest(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getBrowserTest."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/browser/{public_id}".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getBrowserTest"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics Browser test.
   * Get a browser test's latest results summaries
   * @param publicId The public ID of the browser test for which to search results for.
   * @param fromTs Timestamp in milliseconds from which to start querying results.
   * @param toTs Timestamp in milliseconds up to which to query results.
   * @param probeDc Locations for which to query results.
   */
  public async getBrowserTestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    probeDc?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getBrowserTestLatestResults."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/tests/browser/{public_id}/results".replace(
        "{" + "public_id" + "}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getBrowserTestLatestResults"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        ObjectSerializer.serialize(fromTs, "number", "int64")
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        ObjectSerializer.serialize(toTs, "number", "int64")
      );
    }
    if (probeDc !== undefined) {
      requestContext.setQueryParam(
        "probe_dc",
        ObjectSerializer.serialize(probeDc, "Array<string>", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get a specific full result from a given (browser) Synthetic test.
   * Get a browser test result
   * @param publicId The public ID of the browser test to which the target result belongs.
   * @param resultId The ID of the result to get.
   */
  public async getBrowserTestResult(
    publicId: string,
    resultId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getBrowserTestResult."
      );
    }

    // verify required parameter 'resultId' is not null or undefined
    if (resultId === null || resultId === undefined) {
      throw new RequiredError(
        "Required parameter resultId was null or undefined when calling getBrowserTestResult."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/tests/browser/{public_id}/results/{result_id}"
        .replace("{" + "public_id" + "}", encodeURIComponent(String(publicId)))
        .replace("{" + "result_id" + "}", encodeURIComponent(String(resultId)));

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getBrowserTestResult"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the detailed configuration of a global variable.
   * Get a global variable
   * @param variableId The ID of the global variable.
   */
  public async getGlobalVariable(
    variableId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError(
        "Required parameter variableId was null or undefined when calling getGlobalVariable."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables/{variable_id}".replace(
      "{" + "variable_id" + "}",
      encodeURIComponent(String(variableId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getGlobalVariable"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get a Synthetics private location.
   * Get a private location
   * @param locationId The ID of the private location.
   */
  public async getPrivateLocation(
    locationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'locationId' is not null or undefined
    if (locationId === null || locationId === undefined) {
      throw new RequiredError(
        "Required parameter locationId was null or undefined when calling getPrivateLocation."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/private-locations/{location_id}".replace(
        "{" + "location_id" + "}",
        encodeURIComponent(String(locationId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getPrivateLocation"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get a batch's updated details.
   * Get details of batch
   * @param batchId The ID of the batch.
   */
  public async getSyntheticsCIBatch(
    batchId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "Required parameter batchId was null or undefined when calling getSyntheticsCIBatch."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/ci/batch/{batch_id}".replace(
      "{" + "batch_id" + "}",
      encodeURIComponent(String(batchId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getSyntheticsCIBatch"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the detailed configuration associated with a Synthetics test.
   * Get a test configuration
   * @param publicId The public ID of the test to get details from.
   */
  public async getTest(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling getTest."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/{public_id}".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.getTest"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the list of all Synthetics global variables.
   * Get all global variables
   */
  public async listGlobalVariables(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/synthetics/variables";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.listGlobalVariables"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the list of public and private locations available for Synthetic tests. No arguments required.
   * Get all locations (public and private)
   */
  public async listLocations(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/synthetics/locations";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.listLocations"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Get the list of all Synthetic tests.
   * Get the list of all tests
   */
  public async listTests(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.listTests"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Trigger a set of Synthetics tests for continuous integration.
   * Trigger tests from CI/CD pipelines
   * @param body Details of the test to trigger.
   */
  public async triggerCITests(
    body: SyntheticsCITestBody,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling triggerCITests."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/trigger/ci";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.triggerCITests"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsCITestBody", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Trigger a set of Synthetics tests.
   * Trigger Synthetics tests
   * @param body The identifiers of the tests to trigger.
   */
  public async triggerTests(
    body: SyntheticsTriggerBody,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling triggerTests."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/trigger";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.triggerTests"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsTriggerBody", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Edit the configuration of a Synthetic API test.
   * Edit an API test
   * @param publicId The public ID of the test to get details from.
   * @param body New test details to be saved.
   */
  public async updateAPITest(
    publicId: string,
    body: SyntheticsAPITest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling updateAPITest."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateAPITest."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/api/{public_id}".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.updateAPITest"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsAPITest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Edit the configuration of a Synthetic browser test.
   * Edit a browser test
   * @param publicId The public ID of the test to get details from.
   * @param body New test details to be saved.
   */
  public async updateBrowserTest(
    publicId: string,
    body: SyntheticsBrowserTest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling updateBrowserTest."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateBrowserTest."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/browser/{public_id}".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.updateBrowserTest"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsBrowserTest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Edit a Synthetics private location.
   * Edit a private location
   * @param locationId The ID of the private location.
   * @param body Details of the private location to be updated.
   */
  public async updatePrivateLocation(
    locationId: string,
    body: SyntheticsPrivateLocation,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'locationId' is not null or undefined
    if (locationId === null || locationId === undefined) {
      throw new RequiredError(
        "Required parameter locationId was null or undefined when calling updatePrivateLocation."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updatePrivateLocation."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/synthetics/private-locations/{location_id}".replace(
        "{" + "location_id" + "}",
        encodeURIComponent(String(locationId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.updatePrivateLocation"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsPrivateLocation", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  /**
   * Pause or start a Synthetics test by changing the status.
   * Pause or start a test
   * @param publicId The public ID of the Synthetic test to update.
   * @param body Status to set the given Synthetic test to.
   */
  public async updateTestPauseStatus(
    publicId: string,
    body: SyntheticsUpdateTestPauseStatusPayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "Required parameter publicId was null or undefined when calling updateTestPauseStatus."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateTestPauseStatus."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/synthetics/tests/{public_id}/status".replace(
      "{" + "public_id" + "}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SyntheticsApi.updateTestPauseStatus"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SyntheticsUpdateTestPauseStatusPayload",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

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
  public async createGlobalVariable(
    response: ResponseContext
  ): Promise<SyntheticsGlobalVariable> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsGlobalVariable",
        ""
      ) as SyntheticsGlobalVariable;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsGlobalVariable",
        ""
      ) as SyntheticsGlobalVariable;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createPrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPrivateLocation(
    response: ResponseContext
  ): Promise<SyntheticsPrivateLocationCreationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsPrivateLocationCreationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsPrivateLocationCreationResponse",
          ""
        ) as SyntheticsPrivateLocationCreationResponse;
      return body;
    }
    if (isCodeInRange("402", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(402, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsPrivateLocationCreationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsPrivateLocationCreationResponse",
          ""
        ) as SyntheticsPrivateLocationCreationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSyntheticsAPITest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsAPITest(
    response: ResponseContext
  ): Promise<SyntheticsAPITest> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsAPITest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITest",
        ""
      ) as SyntheticsAPITest;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("402", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(402, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITest",
        ""
      ) as SyntheticsAPITest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSyntheticsBrowserTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsBrowserTest(
    response: ResponseContext
  ): Promise<SyntheticsBrowserTest> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBrowserTest",
        ""
      ) as SyntheticsBrowserTest;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("402", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(402, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBrowserTest",
        ""
      ) as SyntheticsBrowserTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGlobalVariable(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deletePrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePrivateLocation(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTests(
    response: ResponseContext
  ): Promise<SyntheticsDeleteTestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsDeleteTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsDeleteTestsResponse",
        ""
      ) as SyntheticsDeleteTestsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsDeleteTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsDeleteTestsResponse",
        ""
      ) as SyntheticsDeleteTestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to editGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editGlobalVariable(
    response: ResponseContext
  ): Promise<SyntheticsGlobalVariable> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsGlobalVariable",
        ""
      ) as SyntheticsGlobalVariable;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsGlobalVariable",
        ""
      ) as SyntheticsGlobalVariable;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAPITest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPITest(
    response: ResponseContext
  ): Promise<SyntheticsAPITest> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsAPITest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITest",
        ""
      ) as SyntheticsAPITest;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITest",
        ""
      ) as SyntheticsAPITest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAPITestLatestResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPITestLatestResults(
    response: ResponseContext
  ): Promise<SyntheticsGetAPITestLatestResultsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsGetAPITestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsGetAPITestLatestResultsResponse",
          ""
        ) as SyntheticsGetAPITestLatestResultsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGetAPITestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsGetAPITestLatestResultsResponse",
          ""
        ) as SyntheticsGetAPITestLatestResultsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAPITestResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPITestResult(
    response: ResponseContext
  ): Promise<SyntheticsAPITestResultFull> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsAPITestResultFull = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITestResultFull",
        ""
      ) as SyntheticsAPITestResultFull;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITestResultFull = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITestResultFull",
        ""
      ) as SyntheticsAPITestResultFull;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBrowserTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBrowserTest(
    response: ResponseContext
  ): Promise<SyntheticsBrowserTest> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBrowserTest",
        ""
      ) as SyntheticsBrowserTest;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBrowserTest",
        ""
      ) as SyntheticsBrowserTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBrowserTestLatestResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBrowserTestLatestResults(
    response: ResponseContext
  ): Promise<SyntheticsGetBrowserTestLatestResultsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsGetBrowserTestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsGetBrowserTestLatestResultsResponse",
          ""
        ) as SyntheticsGetBrowserTestLatestResultsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGetBrowserTestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsGetBrowserTestLatestResultsResponse",
          ""
        ) as SyntheticsGetBrowserTestLatestResultsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBrowserTestResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBrowserTestResult(
    response: ResponseContext
  ): Promise<SyntheticsBrowserTestResultFull> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsBrowserTestResultFull =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsBrowserTestResultFull",
          ""
        ) as SyntheticsBrowserTestResultFull;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTestResultFull =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsBrowserTestResultFull",
          ""
        ) as SyntheticsBrowserTestResultFull;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGlobalVariable(
    response: ResponseContext
  ): Promise<SyntheticsGlobalVariable> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsGlobalVariable",
        ""
      ) as SyntheticsGlobalVariable;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsGlobalVariable = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsGlobalVariable",
        ""
      ) as SyntheticsGlobalVariable;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getPrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPrivateLocation(
    response: ResponseContext
  ): Promise<SyntheticsPrivateLocation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsPrivateLocation",
        ""
      ) as SyntheticsPrivateLocation;
      return body;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsPrivateLocation",
        ""
      ) as SyntheticsPrivateLocation;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSyntheticsCIBatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsCIBatch(
    response: ResponseContext
  ): Promise<SyntheticsBatchDetails> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsBatchDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBatchDetails",
        ""
      ) as SyntheticsBatchDetails;
      return body;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBatchDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBatchDetails",
        ""
      ) as SyntheticsBatchDetails;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTest(
    response: ResponseContext
  ): Promise<SyntheticsTestDetails> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsTestDetails",
        ""
      ) as SyntheticsTestDetails;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTestDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsTestDetails",
        ""
      ) as SyntheticsTestDetails;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listGlobalVariables
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGlobalVariables(
    response: ResponseContext
  ): Promise<SyntheticsListGlobalVariablesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsListGlobalVariablesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsListGlobalVariablesResponse",
          ""
        ) as SyntheticsListGlobalVariablesResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsListGlobalVariablesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsListGlobalVariablesResponse",
          ""
        ) as SyntheticsListGlobalVariablesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listLocations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLocations(
    response: ResponseContext
  ): Promise<SyntheticsLocations> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsLocations = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsLocations",
        ""
      ) as SyntheticsLocations;
      return body;
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsLocations = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsLocations",
        ""
      ) as SyntheticsLocations;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTests(
    response: ResponseContext
  ): Promise<SyntheticsListTestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsListTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsListTestsResponse",
        ""
      ) as SyntheticsListTestsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsListTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsListTestsResponse",
        ""
      ) as SyntheticsListTestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to triggerCITests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerCITests(
    response: ResponseContext
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsTriggerCITestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTriggerCITestsResponse",
          ""
        ) as SyntheticsTriggerCITestsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTriggerCITestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTriggerCITestsResponse",
          ""
        ) as SyntheticsTriggerCITestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to triggerTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerTests(
    response: ResponseContext
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsTriggerCITestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTriggerCITestsResponse",
          ""
        ) as SyntheticsTriggerCITestsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTriggerCITestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTriggerCITestsResponse",
          ""
        ) as SyntheticsTriggerCITestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAPITest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAPITest(
    response: ResponseContext
  ): Promise<SyntheticsAPITest> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsAPITest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITest",
        ""
      ) as SyntheticsAPITest;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsAPITest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsAPITest",
        ""
      ) as SyntheticsAPITest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateBrowserTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateBrowserTest(
    response: ResponseContext
  ): Promise<SyntheticsBrowserTest> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBrowserTest",
        ""
      ) as SyntheticsBrowserTest;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsBrowserTest = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsBrowserTest",
        ""
      ) as SyntheticsBrowserTest;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updatePrivateLocation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePrivateLocation(
    response: ResponseContext
  ): Promise<SyntheticsPrivateLocation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsPrivateLocation",
        ""
      ) as SyntheticsPrivateLocation;
      return body;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsPrivateLocation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsPrivateLocation",
        ""
      ) as SyntheticsPrivateLocation;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateTestPauseStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTestPauseStatus(
    response: ResponseContext
  ): Promise<boolean> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: boolean = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "boolean",
        ""
      ) as boolean;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: boolean = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "boolean",
        ""
      ) as boolean;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
