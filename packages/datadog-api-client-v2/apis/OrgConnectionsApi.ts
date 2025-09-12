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
import { OrgConnectionCreateRequest } from "../models/OrgConnectionCreateRequest";
import { OrgConnectionListResponse } from "../models/OrgConnectionListResponse";
import { OrgConnectionResponse } from "../models/OrgConnectionResponse";
import { OrgConnectionUpdateRequest } from "../models/OrgConnectionUpdateRequest";

export class OrgConnectionsApiRequestFactory extends BaseAPIRequestFactory {
  public async createOrgConnections(
    body: OrgConnectionCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrgConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/org_connections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrgConnectionsApi.createOrgConnections")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OrgConnectionCreateRequest", ""),
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

  public async deleteOrgConnections(
    connectionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "deleteOrgConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/org_connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrgConnectionsApi.deleteOrgConnections")
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

  public async listOrgConnections(
    sinkOrgId?: string,
    sourceOrgId?: string,
    limit?: number,
    offset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/org_connections";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrgConnectionsApi.listOrgConnections")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (sinkOrgId !== undefined) {
      requestContext.setQueryParam(
        "sink_org_id",
        ObjectSerializer.serialize(sinkOrgId, "string", ""),
        ""
      );
    }
    if (sourceOrgId !== undefined) {
      requestContext.setQueryParam(
        "source_org_id",
        ObjectSerializer.serialize(sourceOrgId, "string", ""),
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
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64"),
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

  public async updateOrgConnections(
    connectionId: string,
    body: OrgConnectionUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "updateOrgConnections");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/org_connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrgConnectionsApi.updateOrgConnections")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OrgConnectionUpdateRequest", ""),
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

export class OrgConnectionsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrgConnections(
    response: ResponseContext
  ): Promise<OrgConnectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OrgConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConnectionResponse"
      ) as OrgConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: OrgConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConnectionResponse",
        ""
      ) as OrgConnectionResponse;
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
   * @params response Response returned by the server for a request to deleteOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOrgConnections(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to listOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgConnections(
    response: ResponseContext
  ): Promise<OrgConnectionListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OrgConnectionListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConnectionListResponse"
      ) as OrgConnectionListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: OrgConnectionListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConnectionListResponse",
        ""
      ) as OrgConnectionListResponse;
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
   * @params response Response returned by the server for a request to updateOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgConnections(
    response: ResponseContext
  ): Promise<OrgConnectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OrgConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConnectionResponse"
      ) as OrgConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgConnectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConnectionResponse",
        ""
      ) as OrgConnectionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OrgConnectionsApiCreateOrgConnectionsRequest {
  /**
   * @type OrgConnectionCreateRequest
   */
  body: OrgConnectionCreateRequest;
}

export interface OrgConnectionsApiDeleteOrgConnectionsRequest {
  /**
   * The unique identifier of the org connection.
   * @type string
   */
  connectionId: string;
}

export interface OrgConnectionsApiListOrgConnectionsRequest {
  /**
   * The Org ID of the sink org.
   * @type string
   */
  sinkOrgId?: string;
  /**
   * The Org ID of the source org.
   * @type string
   */
  sourceOrgId?: string;
  /**
   * The limit of number of entries you want to return. Default is 1000.
   * @type number
   */
  limit?: number;
  /**
   * The pagination offset which you want to query from. Default is 0.
   * @type number
   */
  offset?: number;
}

export interface OrgConnectionsApiUpdateOrgConnectionsRequest {
  /**
   * The unique identifier of the org connection.
   * @type string
   */
  connectionId: string;
  /**
   * @type OrgConnectionUpdateRequest
   */
  body: OrgConnectionUpdateRequest;
}

export class OrgConnectionsApi {
  private requestFactory: OrgConnectionsApiRequestFactory;
  private responseProcessor: OrgConnectionsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OrgConnectionsApiRequestFactory,
    responseProcessor?: OrgConnectionsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OrgConnectionsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OrgConnectionsApiResponseProcessor();
  }

  /**
   * Create a new org connection between the current org and a target org.
   * @param param The request object
   */
  public createOrgConnections(
    param: OrgConnectionsApiCreateOrgConnectionsRequest,
    options?: Configuration
  ): Promise<OrgConnectionResponse> {
    const requestContextPromise = this.requestFactory.createOrgConnections(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrgConnections(responseContext);
        });
    });
  }

  /**
   * Delete an existing org connection.
   * @param param The request object
   */
  public deleteOrgConnections(
    param: OrgConnectionsApiDeleteOrgConnectionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrgConnections(
      param.connectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOrgConnections(responseContext);
        });
    });
  }

  /**
   * Returns a list of org connections.
   * @param param The request object
   */
  public listOrgConnections(
    param: OrgConnectionsApiListOrgConnectionsRequest = {},
    options?: Configuration
  ): Promise<OrgConnectionListResponse> {
    const requestContextPromise = this.requestFactory.listOrgConnections(
      param.sinkOrgId,
      param.sourceOrgId,
      param.limit,
      param.offset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgConnections(responseContext);
        });
    });
  }

  /**
   * Update an existing org connection.
   * @param param The request object
   */
  public updateOrgConnections(
    param: OrgConnectionsApiUpdateOrgConnectionsRequest,
    options?: Configuration
  ): Promise<OrgConnectionResponse> {
    const requestContextPromise = this.requestFactory.updateOrgConnections(
      param.connectionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgConnections(responseContext);
        });
    });
  }
}
