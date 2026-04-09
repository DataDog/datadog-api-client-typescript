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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { SecureEmbedCreateRequest } from "../models/SecureEmbedCreateRequest";
import { SecureEmbedCreateResponse } from "../models/SecureEmbedCreateResponse";
import { SecureEmbedGetResponse } from "../models/SecureEmbedGetResponse";
import { SecureEmbedUpdateRequest } from "../models/SecureEmbedUpdateRequest";
import { SecureEmbedUpdateResponse } from "../models/SecureEmbedUpdateResponse";

export class DashboardSecureEmbedApiRequestFactory extends BaseAPIRequestFactory {
  public async createDashboardSecureEmbed(
    dashboardId: string,
    body: SecureEmbedCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createDashboardSecureEmbed'");
    if (!_config.unstableOperations["v2.createDashboardSecureEmbed"]) {
      throw new Error(
        "Unstable operation 'createDashboardSecureEmbed' is disabled"
      );
    }

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "createDashboardSecureEmbed");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDashboardSecureEmbed");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/{dashboard_id}/shared/secure-embed".replace(
        "{dashboard_id}",
        encodeURIComponent(String(dashboardId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardSecureEmbedApi.createDashboardSecureEmbed")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecureEmbedCreateRequest", ""),
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

  public async deleteDashboardSecureEmbed(
    dashboardId: string,
    token: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteDashboardSecureEmbed'");
    if (!_config.unstableOperations["v2.deleteDashboardSecureEmbed"]) {
      throw new Error(
        "Unstable operation 'deleteDashboardSecureEmbed' is disabled"
      );
    }

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "deleteDashboardSecureEmbed");
    }

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "deleteDashboardSecureEmbed");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/{dashboard_id}/shared/secure-embed/{token}"
        .replace("{dashboard_id}", encodeURIComponent(String(dashboardId)))
        .replace("{token}", encodeURIComponent(String(token)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardSecureEmbedApi.deleteDashboardSecureEmbed")
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

  public async getDashboardSecureEmbed(
    dashboardId: string,
    token: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getDashboardSecureEmbed'");
    if (!_config.unstableOperations["v2.getDashboardSecureEmbed"]) {
      throw new Error(
        "Unstable operation 'getDashboardSecureEmbed' is disabled"
      );
    }

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "getDashboardSecureEmbed");
    }

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "getDashboardSecureEmbed");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/{dashboard_id}/shared/secure-embed/{token}"
        .replace("{dashboard_id}", encodeURIComponent(String(dashboardId)))
        .replace("{token}", encodeURIComponent(String(token)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardSecureEmbedApi.getDashboardSecureEmbed")
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

  public async updateDashboardSecureEmbed(
    dashboardId: string,
    token: string,
    body: SecureEmbedUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateDashboardSecureEmbed'");
    if (!_config.unstableOperations["v2.updateDashboardSecureEmbed"]) {
      throw new Error(
        "Unstable operation 'updateDashboardSecureEmbed' is disabled"
      );
    }

    // verify required parameter 'dashboardId' is not null or undefined
    if (dashboardId === null || dashboardId === undefined) {
      throw new RequiredError("dashboardId", "updateDashboardSecureEmbed");
    }

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError("token", "updateDashboardSecureEmbed");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDashboardSecureEmbed");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dashboard/{dashboard_id}/shared/secure-embed/{token}"
        .replace("{dashboard_id}", encodeURIComponent(String(dashboardId)))
        .replace("{token}", encodeURIComponent(String(token)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DashboardSecureEmbedApi.updateDashboardSecureEmbed")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecureEmbedUpdateRequest", ""),
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

export class DashboardSecureEmbedApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDashboardSecureEmbed
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDashboardSecureEmbed(
    response: ResponseContext
  ): Promise<SecureEmbedCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecureEmbedCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecureEmbedCreateResponse"
      ) as SecureEmbedCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
      const body: SecureEmbedCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecureEmbedCreateResponse",
        ""
      ) as SecureEmbedCreateResponse;
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
   * @params response Response returned by the server for a request to deleteDashboardSecureEmbed
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDashboardSecureEmbed(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
   * @params response Response returned by the server for a request to getDashboardSecureEmbed
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDashboardSecureEmbed(
    response: ResponseContext
  ): Promise<SecureEmbedGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecureEmbedGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecureEmbedGetResponse"
      ) as SecureEmbedGetResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
      const body: SecureEmbedGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecureEmbedGetResponse",
        ""
      ) as SecureEmbedGetResponse;
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
   * @params response Response returned by the server for a request to updateDashboardSecureEmbed
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDashboardSecureEmbed(
    response: ResponseContext
  ): Promise<SecureEmbedUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecureEmbedUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecureEmbedUpdateResponse"
      ) as SecureEmbedUpdateResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
      const body: SecureEmbedUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecureEmbedUpdateResponse",
        ""
      ) as SecureEmbedUpdateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DashboardSecureEmbedApiCreateDashboardSecureEmbedRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
  /**
   * Secure embed creation request body.
   * @type SecureEmbedCreateRequest
   */
  body: SecureEmbedCreateRequest;
}

export interface DashboardSecureEmbedApiDeleteDashboardSecureEmbedRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
  /**
   * The share token identifying the secure embed.
   * @type string
   */
  token: string;
}

export interface DashboardSecureEmbedApiGetDashboardSecureEmbedRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
  /**
   * The share token identifying the secure embed.
   * @type string
   */
  token: string;
}

export interface DashboardSecureEmbedApiUpdateDashboardSecureEmbedRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
  /**
   * The share token identifying the secure embed.
   * @type string
   */
  token: string;
  /**
   * Secure embed update request body.
   * @type SecureEmbedUpdateRequest
   */
  body: SecureEmbedUpdateRequest;
}

export class DashboardSecureEmbedApi {
  private requestFactory: DashboardSecureEmbedApiRequestFactory;
  private responseProcessor: DashboardSecureEmbedApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardSecureEmbedApiRequestFactory,
    responseProcessor?: DashboardSecureEmbedApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new DashboardSecureEmbedApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DashboardSecureEmbedApiResponseProcessor();
  }

  /**
   * Create a secure embed share for a dashboard. The response includes a one-time `credential` used for HMAC-SHA256 signing. Store it securely — it cannot be retrieved again.
   * @param param The request object
   */
  public createDashboardSecureEmbed(
    param: DashboardSecureEmbedApiCreateDashboardSecureEmbedRequest,
    options?: Configuration
  ): Promise<SecureEmbedCreateResponse> {
    const requestContextPromise =
      this.requestFactory.createDashboardSecureEmbed(
        param.dashboardId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboardSecureEmbed(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a secure embed share for a dashboard.
   * @param param The request object
   */
  public deleteDashboardSecureEmbed(
    param: DashboardSecureEmbedApiDeleteDashboardSecureEmbedRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteDashboardSecureEmbed(
        param.dashboardId,
        param.token,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboardSecureEmbed(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve an existing secure embed configuration for a dashboard.
   * @param param The request object
   */
  public getDashboardSecureEmbed(
    param: DashboardSecureEmbedApiGetDashboardSecureEmbedRequest,
    options?: Configuration
  ): Promise<SecureEmbedGetResponse> {
    const requestContextPromise = this.requestFactory.getDashboardSecureEmbed(
      param.dashboardId,
      param.token,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboardSecureEmbed(
            responseContext
          );
        });
    });
  }

  /**
   * Partially update a secure embed configuration. All fields are optional (PATCH semantics).
   * @param param The request object
   */
  public updateDashboardSecureEmbed(
    param: DashboardSecureEmbedApiUpdateDashboardSecureEmbedRequest,
    options?: Configuration
  ): Promise<SecureEmbedUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.updateDashboardSecureEmbed(
        param.dashboardId,
        param.token,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboardSecureEmbed(
            responseContext
          );
        });
    });
  }
}
