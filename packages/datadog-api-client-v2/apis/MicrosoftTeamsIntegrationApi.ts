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
import { MicrosoftTeamsApiHandleInfoResponse } from "../models/MicrosoftTeamsApiHandleInfoResponse";
import { MicrosoftTeamsApiHandlesResponse } from "../models/MicrosoftTeamsApiHandlesResponse";
import { MicrosoftTeamsCreateApiHandleRequest } from "../models/MicrosoftTeamsCreateApiHandleRequest";
import { MicrosoftTeamsCreateApiHandleResponse } from "../models/MicrosoftTeamsCreateApiHandleResponse";
import { MicrosoftTeamsGetChannelByNameResponse } from "../models/MicrosoftTeamsGetChannelByNameResponse";
import { MicrosoftTeamsUpdateApiHandleRequest } from "../models/MicrosoftTeamsUpdateApiHandleRequest";

export class MicrosoftTeamsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createApiHandle(
    body: MicrosoftTeamsCreateApiHandleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createApiHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MicrosoftTeamsIntegrationApi.createApiHandle")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
        "MicrosoftTeamsCreateApiHandleRequest",
        ""
      ),
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

  public async deleteApiHandle(
    handleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "deleteApiHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MicrosoftTeamsIntegrationApi.deleteApiHandle")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getApiHandle(
    handleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "getApiHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MicrosoftTeamsIntegrationApi.getApiHandle")
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

  public async getApiHandleByName(
    handleName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleName' is not null or undefined
    if (handleName === null || handleName === undefined) {
      throw new RequiredError("handleName", "getApiHandleByName");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles/name/{handle_name}".replace(
        "{handle_name}",
        encodeURIComponent(String(handleName))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MicrosoftTeamsIntegrationApi.getApiHandleByName")
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

  public async getChannelByName(
    tenantName: string,
    teamName: string,
    channelName: string,
    _options?: Configuration
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
      .getServer("v2.MicrosoftTeamsIntegrationApi.getChannelByName")
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

  public async listApiHandles(
    tenantId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MicrosoftTeamsIntegrationApi.listApiHandles")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (tenantId !== undefined) {
      requestContext.setQueryParam(
        "tenant_id",
        ObjectSerializer.serialize(tenantId, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateApiHandle(
    handleId: string,
    body: MicrosoftTeamsUpdateApiHandleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "updateApiHandle");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateApiHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}".replace(
        "{handle_id}",
        encodeURIComponent(String(handleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.MicrosoftTeamsIntegrationApi.updateApiHandle")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "MicrosoftTeamsUpdateApiHandleRequest",
        ""
      ),
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
}

export class MicrosoftTeamsIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createApiHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApiHandle(
    response: ResponseContext
  ): Promise<MicrosoftTeamsCreateApiHandleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: MicrosoftTeamsCreateApiHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsCreateApiHandleResponse"
        ) as MicrosoftTeamsCreateApiHandleResponse;
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
      const body: MicrosoftTeamsCreateApiHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsCreateApiHandleResponse",
          ""
        ) as MicrosoftTeamsCreateApiHandleResponse;
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
   * @params response Response returned by the server for a request to deleteApiHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApiHandle(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 412 ||
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
   * @params response Response returned by the server for a request to getApiHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApiHandle(
    response: ResponseContext
  ): Promise<MicrosoftTeamsApiHandleInfoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsApiHandleInfoResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandleInfoResponse"
        ) as MicrosoftTeamsApiHandleInfoResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412 ||
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
      const body: MicrosoftTeamsApiHandleInfoResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandleInfoResponse",
          ""
        ) as MicrosoftTeamsApiHandleInfoResponse;
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
   * @params response Response returned by the server for a request to getApiHandleByName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApiHandleByName(
    response: ResponseContext
  ): Promise<MicrosoftTeamsApiHandleInfoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsApiHandleInfoResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandleInfoResponse"
        ) as MicrosoftTeamsApiHandleInfoResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412 ||
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
      const body: MicrosoftTeamsApiHandleInfoResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandleInfoResponse",
          ""
        ) as MicrosoftTeamsApiHandleInfoResponse;
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
   * @params response Response returned by the server for a request to getChannelByName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getChannelByName(
    response: ResponseContext
  ): Promise<MicrosoftTeamsGetChannelByNameResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsGetChannelByNameResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsGetChannelByNameResponse"
        ) as MicrosoftTeamsGetChannelByNameResponse;
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
      const body: MicrosoftTeamsGetChannelByNameResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsGetChannelByNameResponse",
          ""
        ) as MicrosoftTeamsGetChannelByNameResponse;
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
   * @params response Response returned by the server for a request to listApiHandles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApiHandles(
    response: ResponseContext
  ): Promise<MicrosoftTeamsApiHandlesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsApiHandlesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandlesResponse"
        ) as MicrosoftTeamsApiHandlesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412 ||
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
      const body: MicrosoftTeamsApiHandlesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandlesResponse",
          ""
        ) as MicrosoftTeamsApiHandlesResponse;
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
   * @params response Response returned by the server for a request to updateApiHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApiHandle(
    response: ResponseContext
  ): Promise<MicrosoftTeamsApiHandleInfoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: MicrosoftTeamsApiHandleInfoResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandleInfoResponse"
        ) as MicrosoftTeamsApiHandleInfoResponse;
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
      const body: MicrosoftTeamsApiHandleInfoResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MicrosoftTeamsApiHandleInfoResponse",
          ""
        ) as MicrosoftTeamsApiHandleInfoResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface MicrosoftTeamsIntegrationApiCreateApiHandleRequest {
  /**
   * Handle payload.
   * @type MicrosoftTeamsCreateApiHandleRequest
   */
  body: MicrosoftTeamsCreateApiHandleRequest;
}

export interface MicrosoftTeamsIntegrationApiDeleteApiHandleRequest {
  /**
   * Your handle id.
   * @type string
   */
  handleId: string;
}

export interface MicrosoftTeamsIntegrationApiGetApiHandleRequest {
  /**
   * Your handle id.
   * @type string
   */
  handleId: string;
}

export interface MicrosoftTeamsIntegrationApiGetApiHandleByNameRequest {
  /**
   * Your handle name.
   * @type string
   */
  handleName: string;
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

export interface MicrosoftTeamsIntegrationApiListApiHandlesRequest {
  /**
   * Your tenant id.
   * @type string
   */
  tenantId?: string;
}

export interface MicrosoftTeamsIntegrationApiUpdateApiHandleRequest {
  /**
   * Your handle id.
   * @type string
   */
  handleId: string;
  /**
   * Opsgenie service payload.
   * @type MicrosoftTeamsUpdateApiHandleRequest
   */
  body: MicrosoftTeamsUpdateApiHandleRequest;
}

export class MicrosoftTeamsIntegrationApi {
  private requestFactory: MicrosoftTeamsIntegrationApiRequestFactory;
  private responseProcessor: MicrosoftTeamsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: MicrosoftTeamsIntegrationApiRequestFactory,
    responseProcessor?: MicrosoftTeamsIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new MicrosoftTeamsIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new MicrosoftTeamsIntegrationApiResponseProcessor();
  }

  /**
   * Create a handle in the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public createApiHandle(
    param: MicrosoftTeamsIntegrationApiCreateApiHandleRequest,
    options?: Configuration
  ): Promise<MicrosoftTeamsCreateApiHandleResponse> {
    const requestContextPromise = this.requestFactory.createApiHandle(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApiHandle(responseContext);
        });
    });
  }

  /**
   * Delete a handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public deleteApiHandle(
    param: MicrosoftTeamsIntegrationApiDeleteApiHandleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteApiHandle(
      param.handleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApiHandle(responseContext);
        });
    });
  }

  /**
   * Get the tenant, team, and channel information of a handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public getApiHandle(
    param: MicrosoftTeamsIntegrationApiGetApiHandleRequest,
    options?: Configuration
  ): Promise<MicrosoftTeamsApiHandleInfoResponse> {
    const requestContextPromise = this.requestFactory.getApiHandle(
      param.handleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApiHandle(responseContext);
        });
    });
  }

  /**
   * Get the tenant, team, and channel information of a handle by name from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public getApiHandleByName(
    param: MicrosoftTeamsIntegrationApiGetApiHandleByNameRequest,
    options?: Configuration
  ): Promise<MicrosoftTeamsApiHandleInfoResponse> {
    const requestContextPromise = this.requestFactory.getApiHandleByName(
      param.handleName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApiHandleByName(responseContext);
        });
    });
  }

  /**
   * Get the tenant, team, and channel ID of a channel in the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public getChannelByName(
    param: MicrosoftTeamsIntegrationApiGetChannelByNameRequest,
    options?: Configuration
  ): Promise<MicrosoftTeamsGetChannelByNameResponse> {
    const requestContextPromise = this.requestFactory.getChannelByName(
      param.tenantName,
      param.teamName,
      param.channelName,
      options
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
   * Get a list of all handles from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public listApiHandles(
    param: MicrosoftTeamsIntegrationApiListApiHandlesRequest = {},
    options?: Configuration
  ): Promise<MicrosoftTeamsApiHandlesResponse> {
    const requestContextPromise = this.requestFactory.listApiHandles(
      param.tenantId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApiHandles(responseContext);
        });
    });
  }

  /**
   * Update a handle from the Datadog Microsoft Teams integration.
   * @param param The request object
   */
  public updateApiHandle(
    param: MicrosoftTeamsIntegrationApiUpdateApiHandleRequest,
    options?: Configuration
  ): Promise<MicrosoftTeamsApiHandleInfoResponse> {
    const requestContextPromise = this.requestFactory.updateApiHandle(
      param.handleId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApiHandle(responseContext);
        });
    });
  }
}
