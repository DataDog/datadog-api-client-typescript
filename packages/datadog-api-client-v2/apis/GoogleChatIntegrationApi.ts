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
import { GoogleChatAppNamedSpaceResponse } from "../models/GoogleChatAppNamedSpaceResponse";
import { GoogleChatCreateOrganizationHandleRequest } from "../models/GoogleChatCreateOrganizationHandleRequest";
import { GoogleChatOrganizationHandleResponse } from "../models/GoogleChatOrganizationHandleResponse";
import { GoogleChatOrganizationHandlesResponse } from "../models/GoogleChatOrganizationHandlesResponse";
import { GoogleChatUpdateOrganizationHandleRequest } from "../models/GoogleChatUpdateOrganizationHandleRequest";

export class GoogleChatIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createOrganizationHandle(
    organizationBindingId: string,
    body: GoogleChatCreateOrganizationHandleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "createOrganizationHandle"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrganizationHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GoogleChatIntegrationApi.createOrganizationHandle")
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
        "GoogleChatCreateOrganizationHandleRequest",
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

  public async deleteOrganizationHandle(
    organizationBindingId: string,
    handleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "deleteOrganizationHandle"
      );
    }

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "deleteOrganizationHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}"
        .replace(
          "{organization_binding_id}",
          encodeURIComponent(String(organizationBindingId))
        )
        .replace("{handle_id}", encodeURIComponent(String(handleId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GoogleChatIntegrationApi.deleteOrganizationHandle")
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

  public async getOrganizationHandle(
    organizationBindingId: string,
    handleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError("organizationBindingId", "getOrganizationHandle");
    }

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "getOrganizationHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}"
        .replace(
          "{organization_binding_id}",
          encodeURIComponent(String(organizationBindingId))
        )
        .replace("{handle_id}", encodeURIComponent(String(handleId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GoogleChatIntegrationApi.getOrganizationHandle")
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

  public async getSpaceByDisplayName(
    domainName: string,
    spaceDisplayName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'domainName' is not null or undefined
    if (domainName === null || domainName === undefined) {
      throw new RequiredError("domainName", "getSpaceByDisplayName");
    }

    // verify required parameter 'spaceDisplayName' is not null or undefined
    if (spaceDisplayName === null || spaceDisplayName === undefined) {
      throw new RequiredError("spaceDisplayName", "getSpaceByDisplayName");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/app/named-spaces/{domain_name}/{space_display_name}"
        .replace("{domain_name}", encodeURIComponent(String(domainName)))
        .replace(
          "{space_display_name}",
          encodeURIComponent(String(spaceDisplayName))
        );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GoogleChatIntegrationApi.getSpaceByDisplayName")
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

  public async listOrganizationHandles(
    organizationBindingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "listOrganizationHandles"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GoogleChatIntegrationApi.listOrganizationHandles")
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

  public async updateOrganizationHandle(
    organizationBindingId: string,
    handleId: string,
    body: GoogleChatUpdateOrganizationHandleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "updateOrganizationHandle"
      );
    }

    // verify required parameter 'handleId' is not null or undefined
    if (handleId === null || handleId === undefined) {
      throw new RequiredError("handleId", "updateOrganizationHandle");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrganizationHandle");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}"
        .replace(
          "{organization_binding_id}",
          encodeURIComponent(String(organizationBindingId))
        )
        .replace("{handle_id}", encodeURIComponent(String(handleId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.GoogleChatIntegrationApi.updateOrganizationHandle")
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
        "GoogleChatUpdateOrganizationHandleRequest",
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

export class GoogleChatIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrganizationHandle(
    response: ResponseContext
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: GoogleChatOrganizationHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandleResponse"
        ) as GoogleChatOrganizationHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GoogleChatOrganizationHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandleResponse",
          ""
        ) as GoogleChatOrganizationHandleResponse;
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
   * @params response Response returned by the server for a request to deleteOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOrganizationHandle(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOrganizationHandle(
    response: ResponseContext
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandleResponse"
        ) as GoogleChatOrganizationHandleResponse;
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
      const body: GoogleChatOrganizationHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandleResponse",
          ""
        ) as GoogleChatOrganizationHandleResponse;
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
   * @params response Response returned by the server for a request to getSpaceByDisplayName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSpaceByDisplayName(
    response: ResponseContext
  ): Promise<GoogleChatAppNamedSpaceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GoogleChatAppNamedSpaceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatAppNamedSpaceResponse"
        ) as GoogleChatAppNamedSpaceResponse;
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
      const body: GoogleChatAppNamedSpaceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatAppNamedSpaceResponse",
          ""
        ) as GoogleChatAppNamedSpaceResponse;
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
   * @params response Response returned by the server for a request to listOrganizationHandles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrganizationHandles(
    response: ResponseContext
  ): Promise<GoogleChatOrganizationHandlesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationHandlesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandlesResponse"
        ) as GoogleChatOrganizationHandlesResponse;
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
      const body: GoogleChatOrganizationHandlesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandlesResponse",
          ""
        ) as GoogleChatOrganizationHandlesResponse;
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
   * @params response Response returned by the server for a request to updateOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrganizationHandle(
    response: ResponseContext
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandleResponse"
        ) as GoogleChatOrganizationHandleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GoogleChatOrganizationHandleResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GoogleChatOrganizationHandleResponse",
          ""
        ) as GoogleChatOrganizationHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface GoogleChatIntegrationApiCreateOrganizationHandleRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Organization handle payload.
   * @type GoogleChatCreateOrganizationHandleRequest
   */
  body: GoogleChatCreateOrganizationHandleRequest;
}

export interface GoogleChatIntegrationApiDeleteOrganizationHandleRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Your organization handle ID.
   * @type string
   */
  handleId: string;
}

export interface GoogleChatIntegrationApiGetOrganizationHandleRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Your organization handle ID.
   * @type string
   */
  handleId: string;
}

export interface GoogleChatIntegrationApiGetSpaceByDisplayNameRequest {
  /**
   * The Google Chat domain name.
   * @type string
   */
  domainName: string;
  /**
   * The Google Chat space display name.
   * @type string
   */
  spaceDisplayName: string;
}

export interface GoogleChatIntegrationApiListOrganizationHandlesRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
}

export interface GoogleChatIntegrationApiUpdateOrganizationHandleRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Your organization handle ID.
   * @type string
   */
  handleId: string;
  /**
   * Organization handle payload.
   * @type GoogleChatUpdateOrganizationHandleRequest
   */
  body: GoogleChatUpdateOrganizationHandleRequest;
}

export class GoogleChatIntegrationApi {
  private requestFactory: GoogleChatIntegrationApiRequestFactory;
  private responseProcessor: GoogleChatIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: GoogleChatIntegrationApiRequestFactory,
    responseProcessor?: GoogleChatIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new GoogleChatIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new GoogleChatIntegrationApiResponseProcessor();
  }

  /**
   * Create an organization handle in the Datadog Google Chat integration.
   * @param param The request object
   */
  public createOrganizationHandle(
    param: GoogleChatIntegrationApiCreateOrganizationHandleRequest,
    options?: Configuration
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const requestContextPromise = this.requestFactory.createOrganizationHandle(
      param.organizationBindingId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrganizationHandle(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an organization handle from the Datadog Google Chat integration.
   * @param param The request object
   */
  public deleteOrganizationHandle(
    param: GoogleChatIntegrationApiDeleteOrganizationHandleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrganizationHandle(
      param.organizationBindingId,
      param.handleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOrganizationHandle(
            responseContext
          );
        });
    });
  }

  /**
   * Get an organization handle from the Datadog Google Chat integration.
   * @param param The request object
   */
  public getOrganizationHandle(
    param: GoogleChatIntegrationApiGetOrganizationHandleRequest,
    options?: Configuration
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const requestContextPromise = this.requestFactory.getOrganizationHandle(
      param.organizationBindingId,
      param.handleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOrganizationHandle(responseContext);
        });
    });
  }

  /**
   * Get the resource name and organization binding ID of a space in the Datadog Google Chat integration.
   * @param param The request object
   */
  public getSpaceByDisplayName(
    param: GoogleChatIntegrationApiGetSpaceByDisplayNameRequest,
    options?: Configuration
  ): Promise<GoogleChatAppNamedSpaceResponse> {
    const requestContextPromise = this.requestFactory.getSpaceByDisplayName(
      param.domainName,
      param.spaceDisplayName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSpaceByDisplayName(responseContext);
        });
    });
  }

  /**
   * Get a list of all organization handles from the Datadog Google Chat integration.
   * @param param The request object
   */
  public listOrganizationHandles(
    param: GoogleChatIntegrationApiListOrganizationHandlesRequest,
    options?: Configuration
  ): Promise<GoogleChatOrganizationHandlesResponse> {
    const requestContextPromise = this.requestFactory.listOrganizationHandles(
      param.organizationBindingId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrganizationHandles(
            responseContext
          );
        });
    });
  }

  /**
   * Update an organization handle from the Datadog Google Chat integration.
   * @param param The request object
   */
  public updateOrganizationHandle(
    param: GoogleChatIntegrationApiUpdateOrganizationHandleRequest,
    options?: Configuration
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const requestContextPromise = this.requestFactory.updateOrganizationHandle(
      param.organizationBindingId,
      param.handleId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrganizationHandle(
            responseContext
          );
        });
    });
  }
}
