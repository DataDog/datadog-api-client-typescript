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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { OnDemandConcurrencyCapAttributes } from "../models/OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "../models/OnDemandConcurrencyCapResponse";
import { SuiteCreateEditRequest } from "../models/SuiteCreateEditRequest";
import { SuiteJsonPatchRequest } from "../models/SuiteJsonPatchRequest";
import { SyntheticsApiMultistepParentTestsResponse } from "../models/SyntheticsApiMultistepParentTestsResponse";
import { SyntheticsApiMultistepSubtestsResponse } from "../models/SyntheticsApiMultistepSubtestsResponse";
import { SyntheticsDowntimeRequest } from "../models/SyntheticsDowntimeRequest";
import { SyntheticsDowntimeResponse } from "../models/SyntheticsDowntimeResponse";
import { SyntheticsDowntimesResponse } from "../models/SyntheticsDowntimesResponse";
import { SyntheticsFastTestResult } from "../models/SyntheticsFastTestResult";
import { SyntheticsNetworkTestEditRequest } from "../models/SyntheticsNetworkTestEditRequest";
import { SyntheticsNetworkTestResponse } from "../models/SyntheticsNetworkTestResponse";
import { SyntheticsPollTestResultsResponse } from "../models/SyntheticsPollTestResultsResponse";
import { SyntheticsSuiteResponse } from "../models/SyntheticsSuiteResponse";
import { SyntheticsSuiteSearchResponse } from "../models/SyntheticsSuiteSearchResponse";
import { SyntheticsTestFileAbortMultipartUploadRequest } from "../models/SyntheticsTestFileAbortMultipartUploadRequest";
import { SyntheticsTestFileCompleteMultipartUploadRequest } from "../models/SyntheticsTestFileCompleteMultipartUploadRequest";
import { SyntheticsTestFileDownloadRequest } from "../models/SyntheticsTestFileDownloadRequest";
import { SyntheticsTestFileDownloadResponse } from "../models/SyntheticsTestFileDownloadResponse";
import { SyntheticsTestFileMultipartPresignedUrlsRequest } from "../models/SyntheticsTestFileMultipartPresignedUrlsRequest";
import { SyntheticsTestFileMultipartPresignedUrlsResponse } from "../models/SyntheticsTestFileMultipartPresignedUrlsResponse";
import { SyntheticsTestLatestResultsResponse } from "../models/SyntheticsTestLatestResultsResponse";
import { SyntheticsTestParentSuitesResponse } from "../models/SyntheticsTestParentSuitesResponse";
import { SyntheticsTestResultResponse } from "../models/SyntheticsTestResultResponse";
import { SyntheticsTestResultRunType } from "../models/SyntheticsTestResultRunType";
import { SyntheticsTestResultStatus } from "../models/SyntheticsTestResultStatus";
import { SyntheticsTestVersionHistoryResponse } from "../models/SyntheticsTestVersionHistoryResponse";
import { SyntheticsTestVersionResponse } from "../models/SyntheticsTestVersionResponse";

export class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
  public async abortTestFileMultipartUpload(
    publicId: string,
    body: SyntheticsTestFileAbortMultipartUploadRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "abortTestFileMultipartUpload");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "abortTestFileMultipartUpload");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/files/multipart-upload-abort".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.abortTestFileMultipartUpload")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SyntheticsTestFileAbortMultipartUploadRequest",
        ""
      ),
      contentType,
      _config.preserveLargeIntegers
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

  public async addTestToSyntheticsDowntime(
    downtimeId: string,
    testId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "addTestToSyntheticsDowntime");
    }

    // verify required parameter 'testId' is not null or undefined
    if (testId === null || testId === undefined) {
      throw new RequiredError("testId", "addTestToSyntheticsDowntime");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/downtimes/{downtime_id}/tests/{test_id}"
        .replace("{downtime_id}", encodeURIComponent(String(downtimeId)))
        .replace("{test_id}", encodeURIComponent(String(testId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.addTestToSyntheticsDowntime")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async completeTestFileMultipartUpload(
    publicId: string,
    body: SyntheticsTestFileCompleteMultipartUploadRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "completeTestFileMultipartUpload");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "completeTestFileMultipartUpload");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/files/multipart-upload-complete".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.completeTestFileMultipartUpload")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SyntheticsTestFileCompleteMultipartUploadRequest",
        ""
      ),
      contentType,
      _config.preserveLargeIntegers
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

  public async createSyntheticsDowntime(
    body: SyntheticsDowntimeRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSyntheticsDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/downtimes";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.createSyntheticsDowntime")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsDowntimeRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsNetworkTestEditRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SuiteCreateEditRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async deleteSyntheticsDowntime(
    downtimeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "deleteSyntheticsDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/downtimes/{downtime_id}".replace(
      "{downtime_id}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.deleteSyntheticsDowntime")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DeletedSuitesRequestDeleteRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DeletedTestsRequestDeleteRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SuiteCreateEditRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSyntheticsBrowserTestResult(
    publicId: string,
    resultId: string,
    eventId?: string,
    timestamp?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getSyntheticsBrowserTestResult");
    }

    // verify required parameter 'resultId' is not null or undefined
    if (resultId === null || resultId === undefined) {
      throw new RequiredError("resultId", "getSyntheticsBrowserTestResult");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/browser/{public_id}/results/{result_id}"
        .replace("{public_id}", encodeURIComponent(String(publicId)))
        .replace("{result_id}", encodeURIComponent(String(resultId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getSyntheticsBrowserTestResult")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (eventId !== undefined) {
      requestContext.setQueryParam(
        "event_id",
        ObjectSerializer.serialize(eventId, "string", ""),
        ""
      );
    }
    if (timestamp !== undefined) {
      requestContext.setQueryParam(
        "timestamp",
        ObjectSerializer.serialize(timestamp, "number", "int64"),
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

  public async getSyntheticsDowntime(
    downtimeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "getSyntheticsDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/downtimes/{downtime_id}".replace(
      "{downtime_id}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getSyntheticsDowntime")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSyntheticsTestResult(
    publicId: string,
    resultId: string,
    eventId?: string,
    timestamp?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getSyntheticsTestResult");
    }

    // verify required parameter 'resultId' is not null or undefined
    if (resultId === null || resultId === undefined) {
      throw new RequiredError("resultId", "getSyntheticsTestResult");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/results/{result_id}"
        .replace("{public_id}", encodeURIComponent(String(publicId)))
        .replace("{result_id}", encodeURIComponent(String(resultId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getSyntheticsTestResult")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (eventId !== undefined) {
      requestContext.setQueryParam(
        "event_id",
        ObjectSerializer.serialize(eventId, "string", ""),
        ""
      );
    }
    if (timestamp !== undefined) {
      requestContext.setQueryParam(
        "timestamp",
        ObjectSerializer.serialize(timestamp, "number", "int64"),
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

  public async getTestFileDownloadUrl(
    publicId: string,
    body: SyntheticsTestFileDownloadRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getTestFileDownloadUrl");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getTestFileDownloadUrl");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/files/download".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getTestFileDownloadUrl")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsTestFileDownloadRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async getTestFileMultipartPresignedUrls(
    publicId: string,
    body: SyntheticsTestFileMultipartPresignedUrlsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "getTestFileMultipartPresignedUrls");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getTestFileMultipartPresignedUrls");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/{public_id}/files/multipart-presigned-urls".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.getTestFileMultipartPresignedUrls")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SyntheticsTestFileMultipartPresignedUrlsRequest",
        ""
      ),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSyntheticsBrowserTestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    status?: SyntheticsTestResultStatus,
    runType?: SyntheticsTestResultRunType,
    probeDc?: Array<string>,
    deviceId?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError(
        "publicId",
        "listSyntheticsBrowserTestLatestResults"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/tests/browser/{public_id}/results".replace(
        "{public_id}",
        encodeURIComponent(String(publicId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.listSyntheticsBrowserTestLatestResults")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        ObjectSerializer.serialize(fromTs, "number", "int64"),
        ""
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        ObjectSerializer.serialize(toTs, "number", "int64"),
        ""
      );
    }
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "SyntheticsTestResultStatus", ""),
        ""
      );
    }
    if (runType !== undefined) {
      requestContext.setQueryParam(
        "runType",
        ObjectSerializer.serialize(runType, "SyntheticsTestResultRunType", ""),
        ""
      );
    }
    if (probeDc !== undefined) {
      requestContext.setQueryParam(
        "probe_dc",
        ObjectSerializer.serialize(probeDc, "Array<string>", ""),
        "multi"
      );
    }
    if (deviceId !== undefined) {
      requestContext.setQueryParam(
        "device_id",
        ObjectSerializer.serialize(deviceId, "Array<string>", ""),
        "multi"
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

  public async listSyntheticsDowntimes(
    filterTestIds?: string,
    filterActive?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/synthetics/downtimes";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.listSyntheticsDowntimes")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterTestIds !== undefined) {
      requestContext.setQueryParam(
        "filter[test_ids]",
        ObjectSerializer.serialize(filterTestIds, "string", ""),
        ""
      );
    }
    if (filterActive !== undefined) {
      requestContext.setQueryParam(
        "filter[active]",
        ObjectSerializer.serialize(filterActive, "string", ""),
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

  public async listSyntheticsTestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    status?: SyntheticsTestResultStatus,
    runType?: SyntheticsTestResultRunType,
    probeDc?: Array<string>,
    deviceId?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicId' is not null or undefined
    if (publicId === null || publicId === undefined) {
      throw new RequiredError("publicId", "listSyntheticsTestLatestResults");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/{public_id}/results".replace(
      "{public_id}",
      encodeURIComponent(String(publicId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.listSyntheticsTestLatestResults")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        ObjectSerializer.serialize(fromTs, "number", "int64"),
        ""
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        ObjectSerializer.serialize(toTs, "number", "int64"),
        ""
      );
    }
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "SyntheticsTestResultStatus", ""),
        ""
      );
    }
    if (runType !== undefined) {
      requestContext.setQueryParam(
        "runType",
        ObjectSerializer.serialize(runType, "SyntheticsTestResultRunType", ""),
        ""
      );
    }
    if (probeDc !== undefined) {
      requestContext.setQueryParam(
        "probe_dc",
        ObjectSerializer.serialize(probeDc, "Array<string>", ""),
        "multi"
      );
    }
    if (deviceId !== undefined) {
      requestContext.setQueryParam(
        "device_id",
        ObjectSerializer.serialize(deviceId, "Array<string>", ""),
        "multi"
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GlobalVariableJsonPatchRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SuiteJsonPatchRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async pollSyntheticsTestResults(
    resultIds: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'resultIds' is not null or undefined
    if (resultIds === null || resultIds === undefined) {
      throw new RequiredError("resultIds", "pollSyntheticsTestResults");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/tests/poll_results";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.pollSyntheticsTestResults")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (resultIds !== undefined) {
      requestContext.setQueryParam(
        "result_ids",
        ObjectSerializer.serialize(resultIds, "string", ""),
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

  public async removeTestFromSyntheticsDowntime(
    downtimeId: string,
    testId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "removeTestFromSyntheticsDowntime");
    }

    // verify required parameter 'testId' is not null or undefined
    if (testId === null || testId === undefined) {
      throw new RequiredError("testId", "removeTestFromSyntheticsDowntime");
    }

    // Path Params
    const localVarPath =
      "/api/v2/synthetics/downtimes/{downtime_id}/tests/{test_id}"
        .replace("{downtime_id}", encodeURIComponent(String(downtimeId)))
        .replace("{test_id}", encodeURIComponent(String(testId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.removeTestFromSyntheticsDowntime")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OnDemandConcurrencyCapAttributes", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateSyntheticsDowntime(
    downtimeId: string,
    body: SyntheticsDowntimeRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "updateSyntheticsDowntime");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSyntheticsDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/synthetics/downtimes/{downtime_id}".replace(
      "{downtime_id}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SyntheticsApi.updateSyntheticsDowntime")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsDowntimeRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SyntheticsNetworkTestEditRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to abortTestFileMultipartUpload
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async abortTestFileMultipartUpload(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      return;
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
   * @params response Response returned by the server for a request to addTestToSyntheticsDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addTestToSyntheticsDowntime(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
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
   * @params response Response returned by the server for a request to completeTestFileMultipartUpload
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async completeTestFileMultipartUpload(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      return;
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
   * @params response Response returned by the server for a request to createSyntheticsDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsDowntime(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
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
   * @params response Response returned by the server for a request to createSyntheticsNetworkTest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSyntheticsNetworkTest(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsNetworkTestResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsNetworkTestResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsNetworkTestResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsNetworkTestResponse",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteSyntheticsDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSyntheticsDowntime(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      return;
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<DeletedSuitesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeletedSuitesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "DeletedSuitesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as DeletedSuitesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "DeletedSuitesResponse",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<DeletedTestsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeletedTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "DeletedTestsResponse",
        "",
        _config?.preserveLargeIntegers
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
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "DeletedTestsResponse",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsApiMultistepParentTestsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsApiMultistepParentTestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsApiMultistepParentTestsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsApiMultistepParentTestsResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsApiMultistepParentTestsResponse",
          "",
          _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsApiMultistepSubtestsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsApiMultistepSubtestsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsApiMultistepSubtestsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsApiMultistepSubtestsResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsApiMultistepSubtestsResponse",
          "",
          _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<OnDemandConcurrencyCapResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "OnDemandConcurrencyCapResponse",
        "",
        _config?.preserveLargeIntegers
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "OnDemandConcurrencyCapResponse",
        "",
        _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getSyntheticsBrowserTestResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsBrowserTestResult(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestResultResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestResultResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsTestResultResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsTestResultResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsTestResultResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsTestResultResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsTestResultResponse;
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
   * @params response Response returned by the server for a request to getSyntheticsDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsDowntime(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsFastTestResult> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsFastTestResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsFastTestResult",
        "",
        _config?.preserveLargeIntegers
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
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsFastTestResult",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsNetworkTestResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsNetworkTestResponse",
        "",
        _config?.preserveLargeIntegers
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
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsNetworkTestResponse",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getSyntheticsTestResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSyntheticsTestResult(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestResultResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestResultResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsTestResultResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsTestResultResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsTestResultResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsTestResultResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsTestResultResponse;
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestVersionResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsTestVersionResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsTestVersionResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsTestVersionResponse",
        "",
        _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getTestFileDownloadUrl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTestFileDownloadUrl(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestFileDownloadResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestFileDownloadResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestFileDownloadResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestFileDownloadResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsTestFileDownloadResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestFileDownloadResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestFileDownloadResponse;
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
   * @params response Response returned by the server for a request to getTestFileMultipartPresignedUrls
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTestFileMultipartPresignedUrls(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestFileMultipartPresignedUrlsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestFileMultipartPresignedUrlsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestFileMultipartPresignedUrlsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestFileMultipartPresignedUrlsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsTestFileMultipartPresignedUrlsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestFileMultipartPresignedUrlsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestFileMultipartPresignedUrlsResponse;
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestParentSuitesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestParentSuitesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestParentSuitesResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestParentSuitesResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestParentSuitesResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to listSyntheticsBrowserTestLatestResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSyntheticsBrowserTestLatestResults(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestLatestResultsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestLatestResultsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestLatestResultsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsTestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestLatestResultsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestLatestResultsResponse;
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
   * @params response Response returned by the server for a request to listSyntheticsDowntimes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSyntheticsDowntimes(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsDowntimesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsDowntimesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsDowntimesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimesResponse;
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
   * @params response Response returned by the server for a request to listSyntheticsTestLatestResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSyntheticsTestLatestResults(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestLatestResultsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestLatestResultsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestLatestResultsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsTestLatestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestLatestResultsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsTestLatestResultsResponse;
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsTestVersionHistoryResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsTestVersionHistoryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestVersionHistoryResponse",
          "",
          _config?.preserveLargeIntegers
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
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsTestVersionHistoryResponse",
          "",
          _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<GlobalVariableResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GlobalVariableResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GlobalVariableResponse",
        "",
        _config?.preserveLargeIntegers
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
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GlobalVariableResponse",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsSuiteResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteResponse",
        "",
        _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to pollSyntheticsTestResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async pollSyntheticsTestResults(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsPollTestResultsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsPollTestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsPollTestResultsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsPollTestResultsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsPollTestResultsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "SyntheticsPollTestResultsResponse",
          "",
          _config?.preserveLargeIntegers
        ) as SyntheticsPollTestResultsResponse;
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
   * @params response Response returned by the server for a request to removeTestFromSyntheticsDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeTestFromSyntheticsDowntime(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsSuiteSearchResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsSuiteSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteSearchResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsSuiteSearchResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsSuiteSearchResponse",
        "",
        _config?.preserveLargeIntegers
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<OnDemandConcurrencyCapResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnDemandConcurrencyCapResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "OnDemandConcurrencyCapResponse",
        "",
        _config?.preserveLargeIntegers
      ) as OnDemandConcurrencyCapResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "OnDemandConcurrencyCapResponse",
        "",
        _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to updateSyntheticsDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSyntheticsDowntime(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: SyntheticsDowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsDowntimeResponse",
        "",
        _config?.preserveLargeIntegers
      ) as SyntheticsDowntimeResponse;
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
    response: ResponseContext,
    _options?: Configuration
  ): Promise<SyntheticsNetworkTestResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SyntheticsNetworkTestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsNetworkTestResponse",
        "",
        _config?.preserveLargeIntegers
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
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "SyntheticsNetworkTestResponse",
        "",
        _config?.preserveLargeIntegers
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

export interface SyntheticsApiAbortTestFileMultipartUploadRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
  /**
   * @type SyntheticsTestFileAbortMultipartUploadRequest
   */
  body: SyntheticsTestFileAbortMultipartUploadRequest;
}

export interface SyntheticsApiAddTestToSyntheticsDowntimeRequest {
  /**
   * The ID of the downtime.
   * @type string
   */
  downtimeId: string;
  /**
   * The public ID of the Synthetics test to associate with the downtime.
   * @type string
   */
  testId: string;
}

export interface SyntheticsApiCompleteTestFileMultipartUploadRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
  /**
   * @type SyntheticsTestFileCompleteMultipartUploadRequest
   */
  body: SyntheticsTestFileCompleteMultipartUploadRequest;
}

export interface SyntheticsApiCreateSyntheticsDowntimeRequest {
  /**
   * @type SyntheticsDowntimeRequest
   */
  body: SyntheticsDowntimeRequest;
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

export interface SyntheticsApiDeleteSyntheticsDowntimeRequest {
  /**
   * The ID of the downtime to delete.
   * @type string
   */
  downtimeId: string;
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

export interface SyntheticsApiGetSyntheticsBrowserTestResultRequest {
  /**
   * The public ID of the Synthetic browser test to which the target result belongs.
   * @type string
   */
  publicId: string;
  /**
   * The ID of the result to get.
   * @type string
   */
  resultId: string;
  /**
   * The event ID used to look up the result in the event store.
   * @type string
   */
  eventId?: string;
  /**
   * Timestamp in seconds to look up the result.
   * @type number
   */
  timestamp?: number;
}

export interface SyntheticsApiGetSyntheticsDowntimeRequest {
  /**
   * The ID of the downtime to retrieve.
   * @type string
   */
  downtimeId: string;
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

export interface SyntheticsApiGetSyntheticsTestResultRequest {
  /**
   * The public ID of the Synthetic test to which the target result belongs.
   * @type string
   */
  publicId: string;
  /**
   * The ID of the result to get.
   * @type string
   */
  resultId: string;
  /**
   * The event ID used to look up the result in the event store.
   * @type string
   */
  eventId?: string;
  /**
   * Timestamp in seconds to look up the result.
   * @type number
   */
  timestamp?: number;
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

export interface SyntheticsApiGetTestFileDownloadUrlRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
  /**
   * @type SyntheticsTestFileDownloadRequest
   */
  body: SyntheticsTestFileDownloadRequest;
}

export interface SyntheticsApiGetTestFileMultipartPresignedUrlsRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
  /**
   * @type SyntheticsTestFileMultipartPresignedUrlsRequest
   */
  body: SyntheticsTestFileMultipartPresignedUrlsRequest;
}

export interface SyntheticsApiGetTestParentSuitesRequest {
  /**
   * The public ID of the Synthetic test.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiListSyntheticsBrowserTestLatestResultsRequest {
  /**
   * The public ID of the Synthetic browser test for which to search results.
   * @type string
   */
  publicId: string;
  /**
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
   * @type number
   */
  toTs?: number;
  /**
   * Filter results by status.
   * @type SyntheticsTestResultStatus
   */
  status?: SyntheticsTestResultStatus;
  /**
   * Filter results by run type.
   * @type SyntheticsTestResultRunType
   */
  runType?: SyntheticsTestResultRunType;
  /**
   * Locations for which to query results.
   * @type Array<string>
   */
  probeDc?: Array<string>;
  /**
   * Device IDs for which to query results.
   * @type Array<string>
   */
  deviceId?: Array<string>;
}

export interface SyntheticsApiListSyntheticsDowntimesRequest {
  /**
   * Comma-separated list of Synthetics test public IDs to filter downtimes by.
   * @type string
   */
  filterTestIds?: string;
  /**
   * If set to `true`, return only downtimes that are currently active.
   * @type string
   */
  filterActive?: string;
}

export interface SyntheticsApiListSyntheticsTestLatestResultsRequest {
  /**
   * The public ID of the Synthetic test for which to search results.
   * @type string
   */
  publicId: string;
  /**
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
   * @type number
   */
  toTs?: number;
  /**
   * Filter results by status.
   * @type SyntheticsTestResultStatus
   */
  status?: SyntheticsTestResultStatus;
  /**
   * Filter results by run type.
   * @type SyntheticsTestResultRunType
   */
  runType?: SyntheticsTestResultRunType;
  /**
   * Locations for which to query results.
   * @type Array<string>
   */
  probeDc?: Array<string>;
  /**
   * Device IDs for which to query results.
   * @type Array<string>
   */
  deviceId?: Array<string>;
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

export interface SyntheticsApiPollSyntheticsTestResultsRequest {
  /**
   * A JSON-encoded array of result IDs to poll for.
   * @type string
   */
  resultIds: string;
}

export interface SyntheticsApiRemoveTestFromSyntheticsDowntimeRequest {
  /**
   * The ID of the downtime.
   * @type string
   */
  downtimeId: string;
  /**
   * The public ID of the Synthetics test to disassociate from the downtime.
   * @type string
   */
  testId: string;
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

export interface SyntheticsApiUpdateSyntheticsDowntimeRequest {
  /**
   * The ID of the downtime to update.
   * @type string
   */
  downtimeId: string;
  /**
   * @type SyntheticsDowntimeRequest
   */
  body: SyntheticsDowntimeRequest;
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
      responseProcessor || new SyntheticsApiResponseProcessor(configuration);
  }

  /**
   * Abort an in-progress multipart file upload for a Synthetic test. This cancels the upload
   * and releases any storage used by already-uploaded parts.
   * @param param The request object
   */
  public abortTestFileMultipartUpload(
    param: SyntheticsApiAbortTestFileMultipartUploadRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.abortTestFileMultipartUpload(
        param.publicId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.abortTestFileMultipartUpload(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Associate a Synthetics test with a downtime.
   * @param param The request object
   */
  public addTestToSyntheticsDowntime(
    param: SyntheticsApiAddTestToSyntheticsDowntimeRequest,
    options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const requestContextPromise =
      this.requestFactory.addTestToSyntheticsDowntime(
        param.downtimeId,
        param.testId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addTestToSyntheticsDowntime(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Complete a multipart file upload for a Synthetic test. Call this endpoint after all parts
   * have been uploaded using the presigned URLs obtained from the multipart presigned URLs endpoint.
   * @param param The request object
   */
  public completeTestFileMultipartUpload(
    param: SyntheticsApiCompleteTestFileMultipartUploadRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.completeTestFileMultipartUpload(
        param.publicId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.completeTestFileMultipartUpload(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create a new Synthetics downtime.
   * @param param The request object
   */
  public createSyntheticsDowntime(
    param: SyntheticsApiCreateSyntheticsDowntimeRequest,
    options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const requestContextPromise = this.requestFactory.createSyntheticsDowntime(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsDowntime(
            responseContext,
            options
          );
        });
    });
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
            responseContext,
            options
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
          return this.responseProcessor.createSyntheticsSuite(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete a Synthetics downtime by its ID.
   * @param param The request object
   */
  public deleteSyntheticsDowntime(
    param: SyntheticsApiDeleteSyntheticsDowntimeRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSyntheticsDowntime(
      param.downtimeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSyntheticsDowntime(
            responseContext,
            options
          );
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
          return this.responseProcessor.deleteSyntheticsSuites(
            responseContext,
            options
          );
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
          return this.responseProcessor.deleteSyntheticsTests(
            responseContext,
            options
          );
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
          return this.responseProcessor.editSyntheticsSuite(
            responseContext,
            options
          );
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
            responseContext,
            options
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
            responseContext,
            options
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
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a specific full result from a given Synthetic browser test.
   * @param param The request object
   */
  public getSyntheticsBrowserTestResult(
    param: SyntheticsApiGetSyntheticsBrowserTestResultRequest,
    options?: Configuration
  ): Promise<SyntheticsTestResultResponse> {
    const requestContextPromise =
      this.requestFactory.getSyntheticsBrowserTestResult(
        param.publicId,
        param.resultId,
        param.eventId,
        param.timestamp,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsBrowserTestResult(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a Synthetics downtime by its ID.
   * @param param The request object
   */
  public getSyntheticsDowntime(
    param: SyntheticsApiGetSyntheticsDowntimeRequest,
    options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const requestContextPromise = this.requestFactory.getSyntheticsDowntime(
      param.downtimeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsDowntime(
            responseContext,
            options
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
            responseContext,
            options
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
            responseContext,
            options
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
          return this.responseProcessor.getSyntheticsSuite(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a specific full result from a given Synthetic test.
   * @param param The request object
   */
  public getSyntheticsTestResult(
    param: SyntheticsApiGetSyntheticsTestResultRequest,
    options?: Configuration
  ): Promise<SyntheticsTestResultResponse> {
    const requestContextPromise = this.requestFactory.getSyntheticsTestResult(
      param.publicId,
      param.resultId,
      param.eventId,
      param.timestamp,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsTestResult(
            responseContext,
            options
          );
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
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a presigned URL to download a file attached to a Synthetic test.
   * The returned URL is temporary and expires after a short period.
   * @param param The request object
   */
  public getTestFileDownloadUrl(
    param: SyntheticsApiGetTestFileDownloadUrlRequest,
    options?: Configuration
  ): Promise<SyntheticsTestFileDownloadResponse> {
    const requestContextPromise = this.requestFactory.getTestFileDownloadUrl(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTestFileDownloadUrl(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get presigned URLs for uploading a file to a Synthetic test using multipart upload.
   * Returns the presigned URLs for each part along with the bucket key that references the file.
   * @param param The request object
   */
  public getTestFileMultipartPresignedUrls(
    param: SyntheticsApiGetTestFileMultipartPresignedUrlsRequest,
    options?: Configuration
  ): Promise<SyntheticsTestFileMultipartPresignedUrlsResponse> {
    const requestContextPromise =
      this.requestFactory.getTestFileMultipartPresignedUrls(
        param.publicId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTestFileMultipartPresignedUrls(
            responseContext,
            options
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
          return this.responseProcessor.getTestParentSuites(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get the latest result summaries for a given Synthetic browser test.
   * @param param The request object
   */
  public listSyntheticsBrowserTestLatestResults(
    param: SyntheticsApiListSyntheticsBrowserTestLatestResultsRequest,
    options?: Configuration
  ): Promise<SyntheticsTestLatestResultsResponse> {
    const requestContextPromise =
      this.requestFactory.listSyntheticsBrowserTestLatestResults(
        param.publicId,
        param.fromTs,
        param.toTs,
        param.status,
        param.runType,
        param.probeDc,
        param.deviceId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSyntheticsBrowserTestLatestResults(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a list of all Synthetics downtimes for your organization.
   * @param param The request object
   */
  public listSyntheticsDowntimes(
    param: SyntheticsApiListSyntheticsDowntimesRequest = {},
    options?: Configuration
  ): Promise<SyntheticsDowntimesResponse> {
    const requestContextPromise = this.requestFactory.listSyntheticsDowntimes(
      param.filterTestIds,
      param.filterActive,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSyntheticsDowntimes(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get the latest result summaries for a given Synthetic test.
   * @param param The request object
   */
  public listSyntheticsTestLatestResults(
    param: SyntheticsApiListSyntheticsTestLatestResultsRequest,
    options?: Configuration
  ): Promise<SyntheticsTestLatestResultsResponse> {
    const requestContextPromise =
      this.requestFactory.listSyntheticsTestLatestResults(
        param.publicId,
        param.fromTs,
        param.toTs,
        param.status,
        param.runType,
        param.probeDc,
        param.deviceId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSyntheticsTestLatestResults(
            responseContext,
            options
          );
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
            responseContext,
            options
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
          return this.responseProcessor.patchGlobalVariable(
            responseContext,
            options
          );
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
          return this.responseProcessor.patchTestSuite(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Poll for test results given a list of result IDs. This is typically used after
   * triggering tests with CI/CD to retrieve results once they are available.
   * @param param The request object
   */
  public pollSyntheticsTestResults(
    param: SyntheticsApiPollSyntheticsTestResultsRequest,
    options?: Configuration
  ): Promise<SyntheticsPollTestResultsResponse> {
    const requestContextPromise = this.requestFactory.pollSyntheticsTestResults(
      param.resultIds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.pollSyntheticsTestResults(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Disassociate a Synthetics test from a downtime.
   * @param param The request object
   */
  public removeTestFromSyntheticsDowntime(
    param: SyntheticsApiRemoveTestFromSyntheticsDowntimeRequest,
    options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const requestContextPromise =
      this.requestFactory.removeTestFromSyntheticsDowntime(
        param.downtimeId,
        param.testId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeTestFromSyntheticsDowntime(
            responseContext,
            options
          );
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
          return this.responseProcessor.searchSuites(responseContext, options);
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
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Update a Synthetics downtime by its ID.
   * @param param The request object
   */
  public updateSyntheticsDowntime(
    param: SyntheticsApiUpdateSyntheticsDowntimeRequest,
    options?: Configuration
  ): Promise<SyntheticsDowntimeResponse> {
    const requestContextPromise = this.requestFactory.updateSyntheticsDowntime(
      param.downtimeId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSyntheticsDowntime(
            responseContext,
            options
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
            responseContext,
            options
          );
        });
    });
  }
}
