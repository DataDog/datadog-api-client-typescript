import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { DeletedSuitesRequestDeleteRequest } from "../models/DeletedSuitesRequestDeleteRequest";
import { DeletedSuitesResponse } from "../models/DeletedSuitesResponse";
import { DeletedTestsRequestDeleteRequest } from "../models/DeletedTestsRequestDeleteRequest";
import { DeletedTestsResponse } from "../models/DeletedTestsResponse";
import { GlobalVariableJsonPatchRequest } from "../models/GlobalVariableJsonPatchRequest";
import { GlobalVariableResponse } from "../models/GlobalVariableResponse";
import { OnDemandConcurrencyCapAttributes } from "../models/OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "../models/OnDemandConcurrencyCapResponse";
import { SuiteCreateEditRequest } from "../models/SuiteCreateEditRequest";
import { SuiteJsonPatchRequest } from "../models/SuiteJsonPatchRequest";
import { SyntheticsApiMultistepParentTestsResponse } from "../models/SyntheticsApiMultistepParentTestsResponse";
import { SyntheticsApiMultistepSubtestsResponse } from "../models/SyntheticsApiMultistepSubtestsResponse";
import { SyntheticsFastTestResult } from "../models/SyntheticsFastTestResult";
import { SyntheticsNetworkTestEditRequest } from "../models/SyntheticsNetworkTestEditRequest";
import { SyntheticsNetworkTestResponse } from "../models/SyntheticsNetworkTestResponse";
import { SyntheticsSuiteResponse } from "../models/SyntheticsSuiteResponse";
import { SyntheticsSuiteSearchResponse } from "../models/SyntheticsSuiteSearchResponse";
import { SyntheticsTestParentSuitesResponse } from "../models/SyntheticsTestParentSuitesResponse";
import { SyntheticsTestVersionHistoryResponse } from "../models/SyntheticsTestVersionHistoryResponse";
import { SyntheticsTestVersionResponse } from "../models/SyntheticsTestVersionResponse";

export class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
  public async createSyntheticsNetworkTest(
    body: SyntheticsNetworkTestEditRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsNetworkTest");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/network";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.createSyntheticsNetworkTest")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsNetworkTestEditRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createSyntheticsSuite(
    body: SuiteCreateEditRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsSuite");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.createSyntheticsSuite")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SuiteCreateEditRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteSyntheticsSuites(
    body: DeletedSuitesRequestDeleteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteSyntheticsSuites");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/bulk-delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.deleteSyntheticsSuites")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DeletedSuitesRequestDeleteRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteSyntheticsTests(
    body: DeletedTestsRequestDeleteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteSyntheticsTests");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/bulk-delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.deleteSyntheticsTests")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DeletedTestsRequestDeleteRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async editSyntheticsSuite(
    publicId: string,
    body: SuiteCreateEditRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "editSyntheticsSuite");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSyntheticsSuite");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.editSyntheticsSuite")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SuiteCreateEditRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getApiMultistepSubtestParents(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getApiMultistepSubtestParents");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/api-multistep/subtests/{public_id}/parents".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getApiMultistepSubtestParents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getApiMultistepSubtests(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getApiMultistepSubtests");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/api-multistep/subtests/{public_id}".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getApiMultistepSubtests")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getOnDemandConcurrencyCap(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/settings/on_demand_concurrency_cap";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getOnDemandConcurrencyCap")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSyntheticsFastTestResult(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getSyntheticsFastTestResult");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/fast/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getSyntheticsFastTestResult")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSyntheticsNetworkTest(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getSyntheticsNetworkTest");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/network/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getSyntheticsNetworkTest")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSyntheticsSuite(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getSyntheticsSuite");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getSyntheticsSuite")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSyntheticsTestVersion(
    publicId: string,
    versionNumber: number,
    includeChangeMetadata?: boolean,
    onlyCheckExistence?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getSyntheticsTestVersion");
    }

    // verify required parameter 'versionNumber' is not null or undefined
    if (versionNumber === null || versionNumber === undefined) {
      throw new RequiredError("versionNumber", "getSyntheticsTestVersion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/version_history/{version_number}"
        .replace("{public_id}", encodeURIComponent(String(publicId)))
        .replace("{version_number}", encodeURIComponent(String(versionNumber)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getSyntheticsTestVersion")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (includeChangeMetadata !== undefined) {
      requestContext.setQueryParam(
        "include_change_metadata",
        ObjectSerializer.serialize(includeChangeMetadata, "boolean", ""),
        ""
      );
    }
    if (onlyCheckExistence !== undefined) {
      requestContext.setQueryParam(
        "only_check_existence",
        ObjectSerializer.serialize(onlyCheckExistence, "boolean", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTestParentSuites(
    publicId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getTestParentSuites");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/parent-suites".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getTestParentSuites")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSyntheticsTestVersions(
    publicId: string,
    lastVersionNumber?: number,
    limit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "listSyntheticsTestVersions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/version_history".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.listSyntheticsTestVersions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (lastVersionNumber !== undefined) {
      requestContext.setQueryParam(
        "last_version_number",
        ObjectSerializer.serialize(lastVersionNumber, "number", "int64"),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async patchGlobalVariable(
    variableId: string,
    body: GlobalVariableJsonPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variableId' is not null or undefined
    if (variableId === null || variableId === undefined) {
      throw new RequiredError("variableId", "patchGlobalVariable");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchGlobalVariable");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/variables/{variable_id}/jsonpatch".replace(
        "{variable_id}",
        encodeURIComponent(String(variableId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.patchGlobalVariable")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GlobalVariableJsonPatchRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async patchTestSuite(
    publicId: string,
    body: SuiteJsonPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "patchTestSuite");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchTestSuite");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/suites/{public_id}/jsonpatch".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.patchTestSuite")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SuiteJsonPatchRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async searchSuites(
    query?: string,
    sort?: string,
    facetsOnly?: boolean,
    start?: number,
    count?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/synthetics/suites/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.searchSuites")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (facetsOnly !== undefined) {
      requestContext.setQueryParam(
        "facets_only",
        ObjectSerializer.serialize(facetsOnly, "boolean", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (count !== undefined) {
      requestContext.setQueryParam(
        "count",
        ObjectSerializer.serialize(count, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async setOnDemandConcurrencyCap(
    body: OnDemandConcurrencyCapAttributes,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "setOnDemandConcurrencyCap");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/settings/on_demand_concurrency_cap";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.setOnDemandConcurrencyCap")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OnDemandConcurrencyCapAttributes", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateSyntheticsNetworkTest(
    publicId: string,
    body: SyntheticsNetworkTestEditRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "updateSyntheticsNetworkTest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSyntheticsNetworkTest");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/network/{public_id}".replace(
      "{public_id}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.updateSyntheticsNetworkTest")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsNetworkTestEditRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class SyntheticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSyntheticsNetworkTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsNetworkTest(
    response: ResponseContext
  ): Promise<SyntheticsNetworkTestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsNetworkTestResponse"
      ) as SyntheticsNetworkTestResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsNetworkTestResponse",
        ""
      ) as SyntheticsNetworkTestResponse;
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
   * @params response Response returned by the server for a request to createSyntheticsSuite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsSuite(
    response: ResponseContext
  ): Promise<SyntheticsSuiteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse"
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse",
        ""
      ) as SyntheticsSuiteResponse;
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
   * @params response Response returned by the server for a request to deleteSyntheticsSuites
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSyntheticsSuites(
    response: ResponseContext
  ): Promise<DeletedSuitesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeletedSuitesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeletedSuitesResponse"
      ) as DeletedSuitesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeletedSuitesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeletedSuitesResponse",
        ""
      ) as DeletedSuitesResponse;
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
   * @params response Response returned by the server for a request to deleteSyntheticsTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSyntheticsTests(
    response: ResponseContext
  ): Promise<DeletedTestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeletedTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeletedTestsResponse"
      ) as DeletedTestsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeletedTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeletedTestsResponse",
        ""
      ) as DeletedTestsResponse;
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
   * @params response Response returned by the server for a request to editSyntheticsSuite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSyntheticsSuite(
    response: ResponseContext
  ): Promise<SyntheticsSuiteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse"
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse",
        ""
      ) as SyntheticsSuiteResponse;
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
   * @params response Response returned by the server for a request to getApiMultistepSubtestParents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApiMultistepSubtestParents(
    response: ResponseContext
  ): Promise<SyntheticsApiMultistepParentTestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsApiMultistepParentTestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsApiMultistepParentTestsResponse"
        ) as SyntheticsApiMultistepParentTestsResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsApiMultistepParentTestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsApiMultistepParentTestsResponse",
          ""
        ) as SyntheticsApiMultistepParentTestsResponse;
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
   * @params response Response returned by the server for a request to getApiMultistepSubtests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApiMultistepSubtests(
    response: ResponseContext
  ): Promise<SyntheticsApiMultistepSubtestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsApiMultistepSubtestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsApiMultistepSubtestsResponse"
        ) as SyntheticsApiMultistepSubtestsResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsApiMultistepSubtestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsApiMultistepSubtestsResponse",
          ""
        ) as SyntheticsApiMultistepSubtestsResponse;
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
   * @params response Response returned by the server for a request to getOnDemandConcurrencyCap
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnDemandConcurrencyCap(
    response: ResponseContext
  ): Promise<OnDemandConcurrencyCapResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse"
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse",
        ""
      ) as OnDemandConcurrencyCapResponse;
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
   * @params response Response returned by the server for a request to getSyntheticsFastTestResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsFastTestResult(
    response: ResponseContext
  ): Promise<SyntheticsFastTestResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsFastTestResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsFastTestResult"
      ) as SyntheticsFastTestResult;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsFastTestResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsFastTestResult",
        ""
      ) as SyntheticsFastTestResult;
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
   * @params response Response returned by the server for a request to getSyntheticsNetworkTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsNetworkTest(
    response: ResponseContext
  ): Promise<SyntheticsNetworkTestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsNetworkTestResponse"
      ) as SyntheticsNetworkTestResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsNetworkTestResponse",
        ""
      ) as SyntheticsNetworkTestResponse;
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
   * @params response Response returned by the server for a request to getSyntheticsSuite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsSuite(
    response: ResponseContext
  ): Promise<SyntheticsSuiteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse"
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse",
        ""
      ) as SyntheticsSuiteResponse;
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
   * @params response Response returned by the server for a request to getSyntheticsTestVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsTestVersion(
    response: ResponseContext
  ): Promise<SyntheticsTestVersionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsTestVersionResponse"
      ) as SyntheticsTestVersionResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTestVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsTestVersionResponse",
        ""
      ) as SyntheticsTestVersionResponse;
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
   * @params response Response returned by the server for a request to getTestParentSuites
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTestParentSuites(
    response: ResponseContext
  ): Promise<SyntheticsTestParentSuitesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestParentSuitesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTestParentSuitesResponse"
        ) as SyntheticsTestParentSuitesResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTestParentSuitesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTestParentSuitesResponse",
          ""
        ) as SyntheticsTestParentSuitesResponse;
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
   * @params response Response returned by the server for a request to listSyntheticsTestVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSyntheticsTestVersions(
    response: ResponseContext
  ): Promise<SyntheticsTestVersionHistoryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestVersionHistoryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTestVersionHistoryResponse"
        ) as SyntheticsTestVersionHistoryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsTestVersionHistoryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SyntheticsTestVersionHistoryResponse",
          ""
        ) as SyntheticsTestVersionHistoryResponse;
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
   * @params response Response returned by the server for a request to patchGlobalVariable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchGlobalVariable(
    response: ResponseContext
  ): Promise<GlobalVariableResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GlobalVariableResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalVariableResponse"
      ) as GlobalVariableResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GlobalVariableResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalVariableResponse",
        ""
      ) as GlobalVariableResponse;
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
   * @params response Response returned by the server for a request to patchTestSuite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchTestSuite(
    response: ResponseContext
  ): Promise<SyntheticsSuiteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse"
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteResponse",
        ""
      ) as SyntheticsSuiteResponse;
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
   * @params response Response returned by the server for a request to searchSuites
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSuites(
    response: ResponseContext
  ): Promise<SyntheticsSuiteSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteSearchResponse"
      ) as SyntheticsSuiteSearchResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsSuiteSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsSuiteSearchResponse",
        ""
      ) as SyntheticsSuiteSearchResponse;
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
   * @params response Response returned by the server for a request to setOnDemandConcurrencyCap
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async setOnDemandConcurrencyCap(
    response: ResponseContext
  ): Promise<OnDemandConcurrencyCapResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse"
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnDemandConcurrencyCapResponse",
        ""
      ) as OnDemandConcurrencyCapResponse;
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
   * @params response Response returned by the server for a request to updateSyntheticsNetworkTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSyntheticsNetworkTest(
    response: ResponseContext
  ): Promise<SyntheticsNetworkTestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsNetworkTestResponse"
      ) as SyntheticsNetworkTestResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SyntheticsNetworkTestResponse",
        ""
      ) as SyntheticsNetworkTestResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SyntheticsApiCreateSyntheticsNetworkTestRequest {
  /**
   * @type SyntheticsNetworkTestEditRequest
   */
  body: SyntheticsNetworkTestEditRequest;
}

export interface SyntheticsApiCreateSyntheticsSuiteRequest {
  /**
   * @type SuiteCreateEditRequest
   */
  body: SuiteCreateEditRequest;
}

export interface SyntheticsApiDeleteSyntheticsSuitesRequest {
  /**
   * @type DeletedSuitesRequestDeleteRequest
   */
  body: DeletedSuitesRequestDeleteRequest;
}

export interface SyntheticsApiDeleteSyntheticsTestsRequest {
  /**
   * @type DeletedTestsRequestDeleteRequest
   */
  body: DeletedTestsRequestDeleteRequest;
}

export interface SyntheticsApiEditSyntheticsSuiteRequest {
  /**
   * The public ID of the suite to edit.
   * @type string
   */
  publicId: string;
  /**
   * New suite details to be saved.
   * @type SuiteCreateEditRequest
   */
  body: SuiteCreateEditRequest;
}

export interface SyntheticsApiGetApiMultistepSubtestParentsRequest {
  /**
   * The public ID of the subtest.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetApiMultistepSubtestsRequest {
  /**
   * The public ID of the API multistep test.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetSyntheticsFastTestResultRequest {
  /**
   * The UUID of the fast test to retrieve the result for.
   * @type string
   */
  id: string;
}

export interface SyntheticsApiGetSyntheticsNetworkTestRequest {
  /**
   * The public ID of the Network Path test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetSyntheticsSuiteRequest {
  /**
   * The public ID of the suite to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetSyntheticsTestVersionRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
  /**
   * The version number to retrieve.
   * @type number
   */
  versionNumber: number;
  /**
   * If `true`, include change metadata in the response.
   * @type boolean
   */
  includeChangeMetadata?: boolean;
  /**
   * If `true`, only check whether the version exists without returning its full payload.
   * Returns an empty object if the version exists, or 404 if not.
   * @type boolean
   */
  onlyCheckExistence?: boolean;
}

export interface SyntheticsApiGetTestParentSuitesRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiListSyntheticsTestVersionsRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
  /**
   * The version number of the last item from the previous page. Omit to get the first page.
   * @type number
   */
  lastVersionNumber?: number;
  /**
   * Maximum number of version records to return per page.
   * @type number
   */
  limit?: number;
}

export interface SyntheticsApiPatchGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
  /**
   * JSON Patch document with operations to apply.
   * @type GlobalVariableJsonPatchRequest
   */
  body: GlobalVariableJsonPatchRequest;
}

export interface SyntheticsApiPatchTestSuiteRequest {
  /**
   * The public ID of the Synthetic test suite to patch.
   * @type string
   */
  publicId: string;
  /**
   * JSON Patch document with operations to apply.
   * @type SuiteJsonPatchRequest
   */
  body: SuiteJsonPatchRequest;
}

export interface SyntheticsApiSearchSuitesRequest {
  /**
   * The search query.
   * @type string
   */
  query?: string;
  /**
   * The sort order for the results (e.g., `name,asc` or `name,desc`).
   * @type string
   */
  sort?: string;
  /**
   * If true, return only facets instead of full test details.
   * @type boolean
   */
  facetsOnly?: boolean;
  /**
   * The offset from which to start returning results.
   * @type number
   */
  start?: number;
  /**
   * The maximum number of results to return.
   * @type number
   */
  count?: number;
}

export interface SyntheticsApiSetOnDemandConcurrencyCapRequest {
  /**
   * .
   * @type OnDemandConcurrencyCapAttributes
   */
  body: OnDemandConcurrencyCapAttributes;
}

export interface SyntheticsApiUpdateSyntheticsNetworkTestRequest {
  /**
   * The public ID of the Network Path test to edit.
   * @type string
   */
  publicId: string;
  /**
   * New Network Path test details to be saved.
   * @type SyntheticsNetworkTestEditRequest
   */
  body: SyntheticsNetworkTestEditRequest;
}

export class SyntheticsApi {
  private requestFactory: SyntheticsApiRequestFactory;
  private responseProcessor: SyntheticsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SyntheticsApiRequestFactory,
    responseProcessor?: SyntheticsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SyntheticsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SyntheticsApiResponseProcessor();
  }

  /**
   * @param param The request object
   */
  public createSyntheticsNetworkTest(
    param: SyntheticsApiCreateSyntheticsNetworkTestRequest,
    options?: Configuration
  ): Promise<SyntheticsNetworkTestResponse> {
    const requestContextPromise =
      this.requestFactory.createSyntheticsNetworkTest(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsNetworkTest(
            responseContext
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public createSyntheticsSuite(
    param: SyntheticsApiCreateSyntheticsSuiteRequest,
    options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const requestContextPromise = this.requestFactory.createSyntheticsSuite(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsSuite(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public deleteSyntheticsSuites(
    param: SyntheticsApiDeleteSyntheticsSuitesRequest,
    options?: Configuration
  ): Promise<DeletedSuitesResponse> {
    const requestContextPromise = this.requestFactory.deleteSyntheticsSuites(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSyntheticsSuites(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public deleteSyntheticsTests(
    param: SyntheticsApiDeleteSyntheticsTestsRequest,
    options?: Configuration
  ): Promise<DeletedTestsResponse> {
    const requestContextPromise = this.requestFactory.deleteSyntheticsTests(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSyntheticsTests(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public editSyntheticsSuite(
    param: SyntheticsApiEditSyntheticsSuiteRequest,
    options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const requestContextPromise = this.requestFactory.editSyntheticsSuite(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSyntheticsSuite(responseContext);
        });
    });
  }

  /**
   * Get the list of API multistep tests that include a given subtest,
   * along with their monitor status.
   * @param param The request object
   */
  public getApiMultistepSubtestParents(
    param: SyntheticsApiGetApiMultistepSubtestParentsRequest,
    options?: Configuration
  ): Promise<SyntheticsApiMultistepParentTestsResponse> {
    const requestContextPromise =
      this.requestFactory.getApiMultistepSubtestParents(
        param.publicId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApiMultistepSubtestParents(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of API tests that can be added as subtests to a given API multistep test.
   * The current test is excluded from the list since a test cannot be a subtest of itself.
   * @param param The request object
   */
  public getApiMultistepSubtests(
    param: SyntheticsApiGetApiMultistepSubtestsRequest,
    options?: Configuration
  ): Promise<SyntheticsApiMultistepSubtestsResponse> {
    const requestContextPromise = this.requestFactory.getApiMultistepSubtests(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApiMultistepSubtests(
            responseContext
          );
        });
    });
  }

  /**
   * Get the on-demand concurrency cap.
   * @param param The request object
   */
  public getOnDemandConcurrencyCap(
    options?: Configuration
  ): Promise<OnDemandConcurrencyCapResponse> {
    const requestContextPromise =
      this.requestFactory.getOnDemandConcurrencyCap(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnDemandConcurrencyCap(
            responseContext
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public getSyntheticsFastTestResult(
    param: SyntheticsApiGetSyntheticsFastTestResultRequest,
    options?: Configuration
  ): Promise<SyntheticsFastTestResult> {
    const requestContextPromise =
      this.requestFactory.getSyntheticsFastTestResult(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsFastTestResult(
            responseContext
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public getSyntheticsNetworkTest(
    param: SyntheticsApiGetSyntheticsNetworkTestRequest,
    options?: Configuration
  ): Promise<SyntheticsNetworkTestResponse> {
    const requestContextPromise = this.requestFactory.getSyntheticsNetworkTest(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsNetworkTest(
            responseContext
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public getSyntheticsSuite(
    param: SyntheticsApiGetSyntheticsSuiteRequest,
    options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const requestContextPromise = this.requestFactory.getSyntheticsSuite(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsSuite(responseContext);
        });
    });
  }

  /**
   * Get a specific version of a Synthetic test by its version number.
   * @param param The request object
   */
  public getSyntheticsTestVersion(
    param: SyntheticsApiGetSyntheticsTestVersionRequest,
    options?: Configuration
  ): Promise<SyntheticsTestVersionResponse> {
    const requestContextPromise = this.requestFactory.getSyntheticsTestVersion(
      param.publicId,
      param.versionNumber,
      param.includeChangeMetadata,
      param.onlyCheckExistence,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsTestVersion(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of parent suites and their status for a given Synthetic test.
   * @param param The request object
   */
  public getTestParentSuites(
    param: SyntheticsApiGetTestParentSuitesRequest,
    options?: Configuration
  ): Promise<SyntheticsTestParentSuitesResponse> {
    const requestContextPromise = this.requestFactory.getTestParentSuites(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTestParentSuites(responseContext);
        });
    });
  }

  /**
   * Get the paginated version history for a Synthetic test.
   * @param param The request object
   */
  public listSyntheticsTestVersions(
    param: SyntheticsApiListSyntheticsTestVersionsRequest,
    options?: Configuration
  ): Promise<SyntheticsTestVersionHistoryResponse> {
    const requestContextPromise =
      this.requestFactory.listSyntheticsTestVersions(
        param.publicId,
        param.lastVersionNumber,
        param.limit,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSyntheticsTestVersions(
            responseContext
          );
        });
    });
  }

  /**
   * Patch a global variable using JSON Patch (RFC 6902).
   * This endpoint allows partial updates to a global variable by specifying only the fields to modify.
   *
   * Common operations include:
   * - Replace field values: `{"op": "replace", "path": "/name", "value": "new_name"}`
   * - Update nested values: `{"op": "replace", "path": "/value/value", "value": "new_value"}`
   * - Add/update tags: `{"op": "add", "path": "/tags/-", "value": "new_tag"}`
   * - Remove fields: `{"op": "remove", "path": "/description"}`
   * @param param The request object
   */
  public patchGlobalVariable(
    param: SyntheticsApiPatchGlobalVariableRequest,
    options?: Configuration
  ): Promise<GlobalVariableResponse> {
    const requestContextPromise = this.requestFactory.patchGlobalVariable(
      param.variableId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Patch a Synthetic test suite using JSON Patch (RFC 6902).
   * Use partial updates to modify only specific fields of a test suite.
   *
   * Common operations include:
   * - Replace field values: `{"op": "replace", "path": "/name", "value": "new_name"}`
   * - Add/update tags: `{"op": "add", "path": "/tags/-", "value": "new_tag"}`
   * - Remove fields: `{"op": "remove", "path": "/message"}`
   * @param param The request object
   */
  public patchTestSuite(
    param: SyntheticsApiPatchTestSuiteRequest,
    options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const requestContextPromise = this.requestFactory.patchTestSuite(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchTestSuite(responseContext);
        });
    });
  }

  /**
   * Search for test suites.
   * @param param The request object
   */
  public searchSuites(
    param: SyntheticsApiSearchSuitesRequest = {},
    options?: Configuration
  ): Promise<SyntheticsSuiteSearchResponse> {
    const requestContextPromise = this.requestFactory.searchSuites(
      param.query,
      param.sort,
      param.facetsOnly,
      param.start,
      param.count,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSuites(responseContext);
        });
    });
  }

  /**
   * Save new value for on-demand concurrency cap.
   * @param param The request object
   */
  public setOnDemandConcurrencyCap(
    param: SyntheticsApiSetOnDemandConcurrencyCapRequest,
    options?: Configuration
  ): Promise<OnDemandConcurrencyCapResponse> {
    const requestContextPromise = this.requestFactory.setOnDemandConcurrencyCap(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.setOnDemandConcurrencyCap(
            responseContext
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public updateSyntheticsNetworkTest(
    param: SyntheticsApiUpdateSyntheticsNetworkTestRequest,
    options?: Configuration
  ): Promise<SyntheticsNetworkTestResponse> {
    const requestContextPromise =
      this.requestFactory.updateSyntheticsNetworkTest(
        param.publicId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSyntheticsNetworkTest(
            responseContext
          );
        });
    });
  }
}
