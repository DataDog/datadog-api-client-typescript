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
import { AwsOnDemandCreateRequest } from "../models/AwsOnDemandCreateRequest";
import { AwsOnDemandListResponse } from "../models/AwsOnDemandListResponse";
import { AwsOnDemandResponse } from "../models/AwsOnDemandResponse";
import { AwsScanOptionsCreateRequest } from "../models/AwsScanOptionsCreateRequest";
import { AwsScanOptionsListResponse } from "../models/AwsScanOptionsListResponse";
import { AwsScanOptionsResponse } from "../models/AwsScanOptionsResponse";
import { AwsScanOptionsUpdateRequest } from "../models/AwsScanOptionsUpdateRequest";
import { AzureScanOptions } from "../models/AzureScanOptions";
import { AzureScanOptionsArray } from "../models/AzureScanOptionsArray";
import { AzureScanOptionsInputUpdate } from "../models/AzureScanOptionsInputUpdate";
import { GcpScanOptions } from "../models/GcpScanOptions";
import { GcpScanOptionsArray } from "../models/GcpScanOptionsArray";
import { GcpScanOptionsInputUpdate } from "../models/GcpScanOptionsInputUpdate";

export class AgentlessScanningApiRequestFactory extends BaseAPIRequestFactory {
  public async createAwsOnDemandTask(
    body: AwsOnDemandCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAwsOnDemandTask");
    }

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/ondemand/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.createAwsOnDemandTask")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AwsOnDemandCreateRequest", ""),
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

  public async createAwsScanOptions(
    body: AwsScanOptionsCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAwsScanOptions");
    }

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/accounts/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.createAwsScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AwsScanOptionsCreateRequest", ""),
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

  public async createAzureScanOptions(
    body: AzureScanOptions,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAzureScanOptions");
    }

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/accounts/azure";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.createAzureScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AzureScanOptions", ""),
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

  public async createGcpScanOptions(
    body: GcpScanOptions,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGcpScanOptions");
    }

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/accounts/gcp";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.createGcpScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GcpScanOptions", ""),
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

  public async deleteAwsScanOptions(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteAwsScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/aws/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.deleteAwsScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteAzureScanOptions(
    subscriptionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new RequiredError("subscriptionId", "deleteAzureScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/azure/{subscription_id}".replace(
        "{subscription_id}",
        encodeURIComponent(String(subscriptionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.deleteAzureScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteGcpScanOptions(
    projectId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "deleteGcpScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/gcp/{project_id}".replace(
        "{project_id}",
        encodeURIComponent(String(projectId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.deleteGcpScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAwsOnDemandTask(
    taskId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'taskId' is not null or undefined
    if (taskId === null || taskId === undefined) {
      throw new RequiredError("taskId", "getAwsOnDemandTask");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/ondemand/aws/{task_id}".replace(
        "{task_id}",
        encodeURIComponent(String(taskId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.getAwsOnDemandTask")
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

  public async getAwsScanOptions(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getAwsScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/aws/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.getAwsScanOptions")
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

  public async getAzureScanOptions(
    subscriptionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new RequiredError("subscriptionId", "getAzureScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/azure/{subscription_id}".replace(
        "{subscription_id}",
        encodeURIComponent(String(subscriptionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.getAzureScanOptions")
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

  public async getGcpScanOptions(
    projectId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getGcpScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/gcp/{project_id}".replace(
        "{project_id}",
        encodeURIComponent(String(projectId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.getGcpScanOptions")
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

  public async listAwsOnDemandTasks(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/ondemand/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.listAwsOnDemandTasks")
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

  public async listAwsScanOptions(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/accounts/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.listAwsScanOptions")
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

  public async listAzureScanOptions(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/accounts/azure";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.listAzureScanOptions")
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

  public async listGcpScanOptions(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/agentless_scanning/accounts/gcp";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.listGcpScanOptions")
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

  public async updateAwsScanOptions(
    accountId: string,
    body: AwsScanOptionsUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateAwsScanOptions");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAwsScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/aws/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.updateAwsScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AwsScanOptionsUpdateRequest", ""),
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

  public async updateAzureScanOptions(
    subscriptionId: string,
    body: AzureScanOptionsInputUpdate,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new RequiredError("subscriptionId", "updateAzureScanOptions");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAzureScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/azure/{subscription_id}".replace(
        "{subscription_id}",
        encodeURIComponent(String(subscriptionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.updateAzureScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AzureScanOptionsInputUpdate", ""),
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

  public async updateGcpScanOptions(
    projectId: string,
    body: GcpScanOptionsInputUpdate,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "updateGcpScanOptions");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGcpScanOptions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agentless_scanning/accounts/gcp/{project_id}".replace(
        "{project_id}",
        encodeURIComponent(String(projectId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AgentlessScanningApi.updateGcpScanOptions")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GcpScanOptionsInputUpdate", ""),
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

export class AgentlessScanningApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAwsOnDemandTask
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAwsOnDemandTask(
    response: ResponseContext
  ): Promise<AwsOnDemandResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AwsOnDemandResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsOnDemandResponse"
      ) as AwsOnDemandResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: AwsOnDemandResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsOnDemandResponse",
        ""
      ) as AwsOnDemandResponse;
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
   * @params response Response returned by the server for a request to createAwsScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAwsScanOptions(
    response: ResponseContext
  ): Promise<AwsScanOptionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AwsScanOptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsResponse"
      ) as AwsScanOptionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: AwsScanOptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsResponse",
        ""
      ) as AwsScanOptionsResponse;
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
   * @params response Response returned by the server for a request to createAzureScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAzureScanOptions(
    response: ResponseContext
  ): Promise<AzureScanOptions> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AzureScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptions"
      ) as AzureScanOptions;
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
      const body: AzureScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptions",
        ""
      ) as AzureScanOptions;
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
   * @params response Response returned by the server for a request to createGcpScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGcpScanOptions(
    response: ResponseContext
  ): Promise<GcpScanOptions> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: GcpScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptions"
      ) as GcpScanOptions;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: GcpScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptions",
        ""
      ) as GcpScanOptions;
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
   * @params response Response returned by the server for a request to deleteAwsScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAwsScanOptions(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteAzureScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAzureScanOptions(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteGcpScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGcpScanOptions(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getAwsOnDemandTask
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAwsOnDemandTask(
    response: ResponseContext
  ): Promise<AwsOnDemandResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsOnDemandResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsOnDemandResponse"
      ) as AwsOnDemandResponse;
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
      const body: AwsOnDemandResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsOnDemandResponse",
        ""
      ) as AwsOnDemandResponse;
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
   * @params response Response returned by the server for a request to getAwsScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAwsScanOptions(
    response: ResponseContext
  ): Promise<AwsScanOptionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsScanOptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsResponse"
      ) as AwsScanOptionsResponse;
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
      const body: AwsScanOptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsResponse",
        ""
      ) as AwsScanOptionsResponse;
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
   * @params response Response returned by the server for a request to getAzureScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAzureScanOptions(
    response: ResponseContext
  ): Promise<AzureScanOptions> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptions"
      ) as AzureScanOptions;
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
      const body: AzureScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptions",
        ""
      ) as AzureScanOptions;
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
   * @params response Response returned by the server for a request to getGcpScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGcpScanOptions(
    response: ResponseContext
  ): Promise<GcpScanOptions> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GcpScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptions"
      ) as GcpScanOptions;
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
      const body: GcpScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptions",
        ""
      ) as GcpScanOptions;
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
   * @params response Response returned by the server for a request to listAwsOnDemandTasks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAwsOnDemandTasks(
    response: ResponseContext
  ): Promise<AwsOnDemandListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsOnDemandListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsOnDemandListResponse"
      ) as AwsOnDemandListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: AwsOnDemandListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsOnDemandListResponse",
        ""
      ) as AwsOnDemandListResponse;
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
   * @params response Response returned by the server for a request to listAwsScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAwsScanOptions(
    response: ResponseContext
  ): Promise<AwsScanOptionsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsScanOptionsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsListResponse"
      ) as AwsScanOptionsListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: AwsScanOptionsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsScanOptionsListResponse",
        ""
      ) as AwsScanOptionsListResponse;
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
   * @params response Response returned by the server for a request to listAzureScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAzureScanOptions(
    response: ResponseContext
  ): Promise<AzureScanOptionsArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureScanOptionsArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptionsArray"
      ) as AzureScanOptionsArray;
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
      const body: AzureScanOptionsArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptionsArray",
        ""
      ) as AzureScanOptionsArray;
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
   * @params response Response returned by the server for a request to listGcpScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGcpScanOptions(
    response: ResponseContext
  ): Promise<GcpScanOptionsArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GcpScanOptionsArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptionsArray"
      ) as GcpScanOptionsArray;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: GcpScanOptionsArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptionsArray",
        ""
      ) as GcpScanOptionsArray;
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
   * @params response Response returned by the server for a request to updateAwsScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAwsScanOptions(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to updateAzureScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAzureScanOptions(
    response: ResponseContext
  ): Promise<AzureScanOptions> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptions"
      ) as AzureScanOptions;
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
      const body: AzureScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureScanOptions",
        ""
      ) as AzureScanOptions;
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
   * @params response Response returned by the server for a request to updateGcpScanOptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGcpScanOptions(
    response: ResponseContext
  ): Promise<GcpScanOptions> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GcpScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptions"
      ) as GcpScanOptions;
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
      const body: GcpScanOptions = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GcpScanOptions",
        ""
      ) as GcpScanOptions;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AgentlessScanningApiCreateAwsOnDemandTaskRequest {
  /**
   * The definition of the on demand task.
   * @type AwsOnDemandCreateRequest
   */
  body: AwsOnDemandCreateRequest;
}

export interface AgentlessScanningApiCreateAwsScanOptionsRequest {
  /**
   * The definition of the new scan options.
   * @type AwsScanOptionsCreateRequest
   */
  body: AwsScanOptionsCreateRequest;
}

export interface AgentlessScanningApiCreateAzureScanOptionsRequest {
  /**
   * @type AzureScanOptions
   */
  body: AzureScanOptions;
}

export interface AgentlessScanningApiCreateGcpScanOptionsRequest {
  /**
   * The definition of the new scan options.
   * @type GcpScanOptions
   */
  body: GcpScanOptions;
}

export interface AgentlessScanningApiDeleteAwsScanOptionsRequest {
  /**
   * The ID of an AWS account.
   * @type string
   */
  accountId: string;
}

export interface AgentlessScanningApiDeleteAzureScanOptionsRequest {
  /**
   * The Azure subscription ID.
   * @type string
   */
  subscriptionId: string;
}

export interface AgentlessScanningApiDeleteGcpScanOptionsRequest {
  /**
   * The GCP project ID.
   * @type string
   */
  projectId: string;
}

export interface AgentlessScanningApiGetAwsOnDemandTaskRequest {
  /**
   * The UUID of the task.
   * @type string
   */
  taskId: string;
}

export interface AgentlessScanningApiGetAwsScanOptionsRequest {
  /**
   * The ID of an AWS account.
   * @type string
   */
  accountId: string;
}

export interface AgentlessScanningApiGetAzureScanOptionsRequest {
  /**
   * The Azure subscription ID.
   * @type string
   */
  subscriptionId: string;
}

export interface AgentlessScanningApiGetGcpScanOptionsRequest {
  /**
   * The GCP project ID.
   * @type string
   */
  projectId: string;
}

export interface AgentlessScanningApiUpdateAwsScanOptionsRequest {
  /**
   * The ID of an AWS account.
   * @type string
   */
  accountId: string;
  /**
   * New definition of the scan options.
   * @type AwsScanOptionsUpdateRequest
   */
  body: AwsScanOptionsUpdateRequest;
}

export interface AgentlessScanningApiUpdateAzureScanOptionsRequest {
  /**
   * The Azure subscription ID.
   * @type string
   */
  subscriptionId: string;
  /**
   * @type AzureScanOptionsInputUpdate
   */
  body: AzureScanOptionsInputUpdate;
}

export interface AgentlessScanningApiUpdateGcpScanOptionsRequest {
  /**
   * The GCP project ID.
   * @type string
   */
  projectId: string;
  /**
   * New definition of the scan options.
   * @type GcpScanOptionsInputUpdate
   */
  body: GcpScanOptionsInputUpdate;
}

export class AgentlessScanningApi {
  private requestFactory: AgentlessScanningApiRequestFactory;
  private responseProcessor: AgentlessScanningApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AgentlessScanningApiRequestFactory,
    responseProcessor?: AgentlessScanningApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AgentlessScanningApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AgentlessScanningApiResponseProcessor();
  }

  /**
   * Trigger the scan of an AWS resource with a high priority. Agentless scanning must be activated for the AWS account containing the resource to scan.
   * @param param The request object
   */
  public createAwsOnDemandTask(
    param: AgentlessScanningApiCreateAwsOnDemandTaskRequest,
    options?: Configuration
  ): Promise<AwsOnDemandResponse> {
    const requestContextPromise = this.requestFactory.createAwsOnDemandTask(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAwsOnDemandTask(responseContext);
        });
    });
  }

  /**
   * Activate Agentless scan options for an AWS account.
   * @param param The request object
   */
  public createAwsScanOptions(
    param: AgentlessScanningApiCreateAwsScanOptionsRequest,
    options?: Configuration
  ): Promise<AwsScanOptionsResponse> {
    const requestContextPromise = this.requestFactory.createAwsScanOptions(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAwsScanOptions(responseContext);
        });
    });
  }

  /**
   * Activate Agentless scan options for an Azure subscription.
   * @param param The request object
   */
  public createAzureScanOptions(
    param: AgentlessScanningApiCreateAzureScanOptionsRequest,
    options?: Configuration
  ): Promise<AzureScanOptions> {
    const requestContextPromise = this.requestFactory.createAzureScanOptions(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAzureScanOptions(responseContext);
        });
    });
  }

  /**
   * Activate Agentless scan options for a GCP project.
   * @param param The request object
   */
  public createGcpScanOptions(
    param: AgentlessScanningApiCreateGcpScanOptionsRequest,
    options?: Configuration
  ): Promise<GcpScanOptions> {
    const requestContextPromise = this.requestFactory.createGcpScanOptions(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGcpScanOptions(responseContext);
        });
    });
  }

  /**
   * Delete Agentless scan options for an AWS account.
   * @param param The request object
   */
  public deleteAwsScanOptions(
    param: AgentlessScanningApiDeleteAwsScanOptionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAwsScanOptions(
      param.accountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAwsScanOptions(responseContext);
        });
    });
  }

  /**
   * Delete Agentless scan options for an Azure subscription.
   * @param param The request object
   */
  public deleteAzureScanOptions(
    param: AgentlessScanningApiDeleteAzureScanOptionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAzureScanOptions(
      param.subscriptionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAzureScanOptions(responseContext);
        });
    });
  }

  /**
   * Delete Agentless scan options for a GCP project.
   * @param param The request object
   */
  public deleteGcpScanOptions(
    param: AgentlessScanningApiDeleteGcpScanOptionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteGcpScanOptions(
      param.projectId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGcpScanOptions(responseContext);
        });
    });
  }

  /**
   * Fetch the data of a specific on demand task.
   * @param param The request object
   */
  public getAwsOnDemandTask(
    param: AgentlessScanningApiGetAwsOnDemandTaskRequest,
    options?: Configuration
  ): Promise<AwsOnDemandResponse> {
    const requestContextPromise = this.requestFactory.getAwsOnDemandTask(
      param.taskId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAwsOnDemandTask(responseContext);
        });
    });
  }

  /**
   * Fetches the Agentless scan options for an activated account.
   * @param param The request object
   */
  public getAwsScanOptions(
    param: AgentlessScanningApiGetAwsScanOptionsRequest,
    options?: Configuration
  ): Promise<AwsScanOptionsResponse> {
    const requestContextPromise = this.requestFactory.getAwsScanOptions(
      param.accountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAwsScanOptions(responseContext);
        });
    });
  }

  /**
   * Fetches the Agentless scan options for an activated subscription.
   * @param param The request object
   */
  public getAzureScanOptions(
    param: AgentlessScanningApiGetAzureScanOptionsRequest,
    options?: Configuration
  ): Promise<AzureScanOptions> {
    const requestContextPromise = this.requestFactory.getAzureScanOptions(
      param.subscriptionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAzureScanOptions(responseContext);
        });
    });
  }

  /**
   * Fetches the Agentless scan options for an activated GCP project.
   * @param param The request object
   */
  public getGcpScanOptions(
    param: AgentlessScanningApiGetGcpScanOptionsRequest,
    options?: Configuration
  ): Promise<GcpScanOptions> {
    const requestContextPromise = this.requestFactory.getGcpScanOptions(
      param.projectId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGcpScanOptions(responseContext);
        });
    });
  }

  /**
   * Fetches the most recent 1000 AWS on demand tasks.
   * @param param The request object
   */
  public listAwsOnDemandTasks(
    options?: Configuration
  ): Promise<AwsOnDemandListResponse> {
    const requestContextPromise =
      this.requestFactory.listAwsOnDemandTasks(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAwsOnDemandTasks(responseContext);
        });
    });
  }

  /**
   * Fetches the scan options configured for AWS accounts.
   * @param param The request object
   */
  public listAwsScanOptions(
    options?: Configuration
  ): Promise<AwsScanOptionsListResponse> {
    const requestContextPromise =
      this.requestFactory.listAwsScanOptions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAwsScanOptions(responseContext);
        });
    });
  }

  /**
   * Fetches the scan options configured for Azure accounts.
   * @param param The request object
   */
  public listAzureScanOptions(
    options?: Configuration
  ): Promise<AzureScanOptionsArray> {
    const requestContextPromise =
      this.requestFactory.listAzureScanOptions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAzureScanOptions(responseContext);
        });
    });
  }

  /**
   * Fetches the scan options configured for all GCP projects.
   * @param param The request object
   */
  public listGcpScanOptions(
    options?: Configuration
  ): Promise<GcpScanOptionsArray> {
    const requestContextPromise =
      this.requestFactory.listGcpScanOptions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGcpScanOptions(responseContext);
        });
    });
  }

  /**
   * Update the Agentless scan options for an activated account.
   * @param param The request object
   */
  public updateAwsScanOptions(
    param: AgentlessScanningApiUpdateAwsScanOptionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateAwsScanOptions(
      param.accountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAwsScanOptions(responseContext);
        });
    });
  }

  /**
   * Update the Agentless scan options for an activated subscription.
   * @param param The request object
   */
  public updateAzureScanOptions(
    param: AgentlessScanningApiUpdateAzureScanOptionsRequest,
    options?: Configuration
  ): Promise<AzureScanOptions> {
    const requestContextPromise = this.requestFactory.updateAzureScanOptions(
      param.subscriptionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAzureScanOptions(responseContext);
        });
    });
  }

  /**
   * Update the Agentless scan options for an activated GCP project.
   * @param param The request object
   */
  public updateGcpScanOptions(
    param: AgentlessScanningApiUpdateGcpScanOptionsRequest,
    options?: Configuration
  ): Promise<GcpScanOptions> {
    const requestContextPromise = this.requestFactory.updateGcpScanOptions(
      param.projectId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGcpScanOptions(responseContext);
        });
    });
  }
}
