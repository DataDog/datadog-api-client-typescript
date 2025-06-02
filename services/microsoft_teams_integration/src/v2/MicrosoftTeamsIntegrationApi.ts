import {
  ApiException,
  BaseAPIRequestFactory,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { MicrosoftTeamsCreateTenantBasedHandleRequest } from "./models/MicrosoftTeamsCreateTenantBasedHandleRequest";
import { MicrosoftTeamsCreateWorkflowsWebhookHandleRequest } from "./models/MicrosoftTeamsCreateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsGetChannelByNameResponse } from "./models/MicrosoftTeamsGetChannelByNameResponse";
import { MicrosoftTeamsTenantBasedHandleResponse } from "./models/MicrosoftTeamsTenantBasedHandleResponse";
import { MicrosoftTeamsTenantBasedHandlesResponse } from "./models/MicrosoftTeamsTenantBasedHandlesResponse";
import { MicrosoftTeamsUpdateTenantBasedHandleRequest } from "./models/MicrosoftTeamsUpdateTenantBasedHandleRequest";
import { MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest } from "./models/MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsWorkflowsWebhookHandleResponse } from "./models/MicrosoftTeamsWorkflowsWebhookHandleResponse";
import { MicrosoftTeamsWorkflowsWebhookHandlesResponse } from "./models/MicrosoftTeamsWorkflowsWebhookHandlesResponse";
import { version } from "../version";

export class MicrosoftTeamsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("microsoft-teams-integration", version);
    }
  }
  public async createTenantBasedHandle(
    body: MicrosoftTeamsCreateTenantBasedHandleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTenantBasedHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.createTenantBasedHandle")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "MicrosoftTeamsCreateTenantBasedHandleRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createWorkflowsWebhookHandle(
    body: MicrosoftTeamsCreateWorkflowsWebhookHandleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createWorkflowsWebhookHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.createWorkflowsWebhookHandle")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "MicrosoftTeamsCreateWorkflowsWebhookHandleRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteTenantBasedHandle(
    handleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "deleteTenantBasedHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.deleteTenantBasedHandle")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteWorkflowsWebhookHandle(
    handleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "deleteWorkflowsWebhookHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.deleteWorkflowsWebhookHandle")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getChannelByName(
    tenantName: string,
    teamName: string,
    channelName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tenantName' is not null or undefined
    if (tenantName === null || tenantName === undefined) {
      throw new RequiredError("tenantName", "getChannelByName");
    }

    // verify required parameter 'teamName' is not null or undefined
    if (teamName === null || teamName === undefined) {
      throw new RequiredError("teamName", "getChannelByName");
    }

    // verify required parameter 'channelName' is not null or undefined
    if (channelName === null || channelName === undefined) {
      throw new RequiredError("channelName", "getChannelByName");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/channel/{tenant_name}/{team_name}/{channel_name}"
        .replace("{tenant_name}", encodeURIComponent(String(tenantName)))
        .replace("{team_name}", encodeURIComponent(String(teamName)))
        .replace("{channel_name}", encodeURIComponent(String(channelName)));

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.getChannelByName")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTenantBasedHandle(
    handleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "getTenantBasedHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.getTenantBasedHandle")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getWorkflowsWebhookHandle(
    handleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "getWorkflowsWebhookHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.getWorkflowsWebhookHandle")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTenantBasedHandles(
    tenantId?: string,
    name?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.listTenantBasedHandles")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (tenantId !== undefined) {
      requestContext.setQueryParam(
        "tenant_id",
        serialize(tenantId, TypingInfo, "string", ""),
        "",
      );
    }
    if (name !== undefined) {
      requestContext.setQueryParam(
        "name",
        serialize(name, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listWorkflowsWebhookHandles(
    name?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.listWorkflowsWebhookHandles")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (name !== undefined) {
      requestContext.setQueryParam(
        "name",
        serialize(name, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateTenantBasedHandle(
    handleId: string,
    body: MicrosoftTeamsUpdateTenantBasedHandleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "updateTenantBasedHandle");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTenantBasedHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.updateTenantBasedHandle")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "MicrosoftTeamsUpdateTenantBasedHandleRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateWorkflowsWebhookHandle(
    handleId: string,
    body: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "updateWorkflowsWebhookHandle");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateWorkflowsWebhookHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("MicrosoftTeamsIntegrationApi.v2.updateWorkflowsWebhookHandle")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class MicrosoftTeamsIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTenantBasedHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTenantBasedHandle(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsTenantBasedHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: MicrosoftTeamsTenantBasedHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandleResponse",
      ) as MicrosoftTeamsTenantBasedHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsTenantBasedHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandleResponse",
        "",
      ) as MicrosoftTeamsTenantBasedHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createWorkflowsWebhookHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWorkflowsWebhookHandle(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: MicrosoftTeamsWorkflowsWebhookHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandleResponse",
      ) as MicrosoftTeamsWorkflowsWebhookHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsWorkflowsWebhookHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandleResponse",
        "",
      ) as MicrosoftTeamsWorkflowsWebhookHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteTenantBasedHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTenantBasedHandle(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
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
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteWorkflowsWebhookHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWorkflowsWebhookHandle(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
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
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getChannelByName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getChannelByName(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsGetChannelByNameResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsGetChannelByNameResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsGetChannelByNameResponse",
      ) as MicrosoftTeamsGetChannelByNameResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsGetChannelByNameResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsGetChannelByNameResponse",
        "",
      ) as MicrosoftTeamsGetChannelByNameResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTenantBasedHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenantBasedHandle(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsTenantBasedHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsTenantBasedHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandleResponse",
      ) as MicrosoftTeamsTenantBasedHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsTenantBasedHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandleResponse",
        "",
      ) as MicrosoftTeamsTenantBasedHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getWorkflowsWebhookHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWorkflowsWebhookHandle(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsWorkflowsWebhookHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandleResponse",
      ) as MicrosoftTeamsWorkflowsWebhookHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsWorkflowsWebhookHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandleResponse",
        "",
      ) as MicrosoftTeamsWorkflowsWebhookHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listTenantBasedHandles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTenantBasedHandles(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsTenantBasedHandlesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsTenantBasedHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandlesResponse",
      ) as MicrosoftTeamsTenantBasedHandlesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsTenantBasedHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandlesResponse",
        "",
      ) as MicrosoftTeamsTenantBasedHandlesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listWorkflowsWebhookHandles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listWorkflowsWebhookHandles(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandlesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsWorkflowsWebhookHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandlesResponse",
      ) as MicrosoftTeamsWorkflowsWebhookHandlesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsWorkflowsWebhookHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandlesResponse",
        "",
      ) as MicrosoftTeamsWorkflowsWebhookHandlesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateTenantBasedHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTenantBasedHandle(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsTenantBasedHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsTenantBasedHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandleResponse",
      ) as MicrosoftTeamsTenantBasedHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsTenantBasedHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsTenantBasedHandleResponse",
        "",
      ) as MicrosoftTeamsTenantBasedHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateWorkflowsWebhookHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWorkflowsWebhookHandle(
    response: ResponseContext,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsWorkflowsWebhookHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandleResponse",
      ) as MicrosoftTeamsWorkflowsWebhookHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MicrosoftTeamsWorkflowsWebhookHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MicrosoftTeamsWorkflowsWebhookHandleResponse",
        "",
      ) as MicrosoftTeamsWorkflowsWebhookHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface MicrosoftTeamsIntegrationApiCreateTenantBasedHandleRequest {
  /**
   * Tenant-based handle payload.
   * @type MicrosoftTeamsCreateTenantBasedHandleRequest
   */
  body: MicrosoftTeamsCreateTenantBasedHandleRequest;
}

export interface MicrosoftTeamsIntegrationApiCreateWorkflowsWebhookHandleRequest {
  /**
   * Workflows Webhook handle payload.
   * @type MicrosoftTeamsCreateWorkflowsWebhookHandleRequest
   */
  body: MicrosoftTeamsCreateWorkflowsWebhookHandleRequest;
}

export interface MicrosoftTeamsIntegrationApiDeleteTenantBasedHandleRequest {
  /**
   * Your tenant-based handle id.
   * @type string
   */
  handleId: string;
}

export interface MicrosoftTeamsIntegrationApiDeleteWorkflowsWebhookHandleRequest {
  /**
   * Your Workflows webhook handle id.
   * @type string
   */
  handleId: string;
}

export interface MicrosoftTeamsIntegrationApiGetChannelByNameRequest {
  /**
   * Your tenant name.
   * @type string
   */
  tenantName: string;
  /**
   * Your team name.
   * @type string
   */
  teamName: string;
  /**
   * Your channel name.
   * @type string
   */
  channelName: string;
}

export interface MicrosoftTeamsIntegrationApiGetTenantBasedHandleRequest {
  /**
   * Your tenant-based handle id.
   * @type string
   */
  handleId: string;
}

export interface MicrosoftTeamsIntegrationApiGetWorkflowsWebhookHandleRequest {
  /**
   * Your Workflows webhook handle id.
   * @type string
   */
  handleId: string;
}

export interface MicrosoftTeamsIntegrationApiListTenantBasedHandlesRequest {
  /**
   * Your tenant id.
   * @type string
   */
  tenantId?: string;
  /**
   * Your tenant-based handle name.
   * @type string
   */
  name?: string;
}

export interface MicrosoftTeamsIntegrationApiListWorkflowsWebhookHandlesRequest {
  /**
   * Your Workflows webhook handle name.
   * @type string
   */
  name?: string;
}

export interface MicrosoftTeamsIntegrationApiUpdateTenantBasedHandleRequest {
  /**
   * Your tenant-based handle id.
   * @type string
   */
  handleId: string;
  /**
   * Tenant-based handle payload.
   * @type MicrosoftTeamsUpdateTenantBasedHandleRequest
   */
  body: MicrosoftTeamsUpdateTenantBasedHandleRequest;
}

export interface MicrosoftTeamsIntegrationApiUpdateWorkflowsWebhookHandleRequest {
  /**
   * Your Workflows webhook handle id.
   * @type string
   */
  handleId: string;
  /**
   * Workflows Webhook handle payload.
   * @type MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest
   */
  body: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest;
}

export class MicrosoftTeamsIntegrationApi {
  private requestFactory: MicrosoftTeamsIntegrationApiRequestFactory;
  private responseProcessor: MicrosoftTeamsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: MicrosoftTeamsIntegrationApiRequestFactory,
    responseProcessor?: MicrosoftTeamsIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new MicrosoftTeamsIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new MicrosoftTeamsIntegrationApiResponseProcessor();
  }

  /**
   * Create a tenant-based handle in the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public createTenantBasedHandle(
    param: MicrosoftTeamsIntegrationApiCreateTenantBasedHandleRequest,
    options?: Configuration,
  ): Promise<MicrosoftTeamsTenantBasedHandleResponse> {
    const requestContextPromise = this.requestFactory.createTenantBasedHandle(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTenantBasedHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a Workflows webhook handle in the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public createWorkflowsWebhookHandle(
    param: MicrosoftTeamsIntegrationApiCreateWorkflowsWebhookHandleRequest,
    options?: Configuration,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse> {
    const requestContextPromise =
      this.requestFactory.createWorkflowsWebhookHandle(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWorkflowsWebhookHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a tenant-based handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public deleteTenantBasedHandle(
    param: MicrosoftTeamsIntegrationApiDeleteTenantBasedHandleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTenantBasedHandle(
      param.handleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTenantBasedHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Workflows webhook handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public deleteWorkflowsWebhookHandle(
    param: MicrosoftTeamsIntegrationApiDeleteWorkflowsWebhookHandleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteWorkflowsWebhookHandle(param.handleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWorkflowsWebhookHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the tenant, team, and channel ID of a channel in the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public getChannelByName(
    param: MicrosoftTeamsIntegrationApiGetChannelByNameRequest,
    options?: Configuration,
  ): Promise<MicrosoftTeamsGetChannelByNameResponse> {
    const requestContextPromise = this.requestFactory.getChannelByName(
      param.tenantName,
      param.teamName,
      param.channelName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getChannelByName(responseContext);
        });
    });
  }

  /**
   * Get the tenant, team, and channel information of a tenant-based handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public getTenantBasedHandle(
    param: MicrosoftTeamsIntegrationApiGetTenantBasedHandleRequest,
    options?: Configuration,
  ): Promise<MicrosoftTeamsTenantBasedHandleResponse> {
    const requestContextPromise = this.requestFactory.getTenantBasedHandle(
      param.handleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTenantBasedHandle(responseContext);
        });
    });
  }

  /**
   * Get the name of a Workflows webhook handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public getWorkflowsWebhookHandle(
    param: MicrosoftTeamsIntegrationApiGetWorkflowsWebhookHandleRequest,
    options?: Configuration,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse> {
    const requestContextPromise = this.requestFactory.getWorkflowsWebhookHandle(
      param.handleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWorkflowsWebhookHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of all tenant-based handles from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public listTenantBasedHandles(
    param: MicrosoftTeamsIntegrationApiListTenantBasedHandlesRequest = {},
    options?: Configuration,
  ): Promise<MicrosoftTeamsTenantBasedHandlesResponse> {
    const requestContextPromise = this.requestFactory.listTenantBasedHandles(
      param.tenantId,
      param.name,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTenantBasedHandles(responseContext);
        });
    });
  }

  /**
   * Get a list of all Workflows webhook handles from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public listWorkflowsWebhookHandles(
    param: MicrosoftTeamsIntegrationApiListWorkflowsWebhookHandlesRequest = {},
    options?: Configuration,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandlesResponse> {
    const requestContextPromise =
      this.requestFactory.listWorkflowsWebhookHandles(param.name, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listWorkflowsWebhookHandles(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a tenant-based handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public updateTenantBasedHandle(
    param: MicrosoftTeamsIntegrationApiUpdateTenantBasedHandleRequest,
    options?: Configuration,
  ): Promise<MicrosoftTeamsTenantBasedHandleResponse> {
    const requestContextPromise = this.requestFactory.updateTenantBasedHandle(
      param.handleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTenantBasedHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a Workflows webhook handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public updateWorkflowsWebhookHandle(
    param: MicrosoftTeamsIntegrationApiUpdateWorkflowsWebhookHandleRequest,
    options?: Configuration,
  ): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse> {
    const requestContextPromise =
      this.requestFactory.updateWorkflowsWebhookHandle(
        param.handleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWorkflowsWebhookHandle(
            responseContext,
          );
        });
    });
  }
}
