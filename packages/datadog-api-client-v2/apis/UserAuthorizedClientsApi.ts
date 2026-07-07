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
import { UserAuthorizedClientData } from "../models/UserAuthorizedClientData";
import { UserAuthorizedClientResponse } from "../models/UserAuthorizedClientResponse";
import { UserAuthorizedClientsResponse } from "../models/UserAuthorizedClientsResponse";

export class UserAuthorizedClientsApiRequestFactory extends BaseAPIRequestFactory {
  public async deleteUserAuthorizedClient(
    userAuthorizedClientId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userAuthorizedClientId' is not null or undefined
    if (
      userAuthorizedClientId === null ||
      userAuthorizedClientId === undefined
    ) {
      throw new RequiredError(
        "userAuthorizedClientId",
        "deleteUserAuthorizedClient"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/user_authorized_clients/{user_authorized_client_id}".replace(
        "{user_authorized_client_id}",
        encodeURIComponent(String(userAuthorizedClientId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UserAuthorizedClientsApi.deleteUserAuthorizedClient")
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

  public async deleteUserAuthorizedClientsByClient(
    clientId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'clientId' is not null or undefined
    if (clientId === null || clientId === undefined) {
      throw new RequiredError(
        "clientId",
        "deleteUserAuthorizedClientsByClient"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/user_authorized_clients/client/{client_id}".replace(
        "{client_id}",
        encodeURIComponent(String(clientId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.UserAuthorizedClientsApi.deleteUserAuthorizedClientsByClient"
      )
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

  public async getUserAuthorizedClient(
    userAuthorizedClientId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userAuthorizedClientId' is not null or undefined
    if (
      userAuthorizedClientId === null ||
      userAuthorizedClientId === undefined
    ) {
      throw new RequiredError(
        "userAuthorizedClientId",
        "getUserAuthorizedClient"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/user_authorized_clients/{user_authorized_client_id}".replace(
        "{user_authorized_client_id}",
        encodeURIComponent(String(userAuthorizedClientId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UserAuthorizedClientsApi.getUserAuthorizedClient")
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

  public async listUserAuthorizedClients(
    pageSize?: number,
    pageNumber?: number,
    filter?: string,
    filterDisabled?: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/user_authorized_clients";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UserAuthorizedClientsApi.listUserAuthorizedClients")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
        ""
      );
    }
    if (filterDisabled !== undefined) {
      requestContext.setQueryParam(
        "filter[disabled]",
        ObjectSerializer.serialize(filterDisabled, "string", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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
}

export class UserAuthorizedClientsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteUserAuthorizedClient
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteUserAuthorizedClient(
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
   * @params response Response returned by the server for a request to deleteUserAuthorizedClientsByClient
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteUserAuthorizedClientsByClient(
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
   * @params response Response returned by the server for a request to getUserAuthorizedClient
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUserAuthorizedClient(
    response: ResponseContext
  ): Promise<UserAuthorizedClientResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UserAuthorizedClientResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserAuthorizedClientResponse"
      ) as UserAuthorizedClientResponse;
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
      const body: UserAuthorizedClientResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserAuthorizedClientResponse",
        ""
      ) as UserAuthorizedClientResponse;
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
   * @params response Response returned by the server for a request to listUserAuthorizedClients
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserAuthorizedClients(
    response: ResponseContext
  ): Promise<UserAuthorizedClientsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UserAuthorizedClientsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserAuthorizedClientsResponse"
      ) as UserAuthorizedClientsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: UserAuthorizedClientsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserAuthorizedClientsResponse",
        ""
      ) as UserAuthorizedClientsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface UserAuthorizedClientsApiDeleteUserAuthorizedClientRequest {
  /**
   * The ID of the user authorized client.
   * @type string
   */
  userAuthorizedClientId: string;
}

export interface UserAuthorizedClientsApiDeleteUserAuthorizedClientsByClientRequest {
  /**
   * The ID of the OAuth2 client.
   * @type string
   */
  clientId: string;
}

export interface UserAuthorizedClientsApiGetUserAuthorizedClientRequest {
  /**
   * The ID of the user authorized client.
   * @type string
   */
  userAuthorizedClientId: string;
}

export interface UserAuthorizedClientsApiListUserAuthorizedClientsRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter results by client name, app title, or app description.
   * @type string
   */
  filter?: string;
  /**
   * Filter results by the user-level disabled status.
   * @type string
   */
  filterDisabled?: string;
  /**
   * Comma-separated list of related resources to include. Options: `oauth2_client`, `oauth2_client.app`.
   * @type string
   */
  include?: string;
}

export class UserAuthorizedClientsApi {
  private requestFactory: UserAuthorizedClientsApiRequestFactory;
  private responseProcessor: UserAuthorizedClientsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UserAuthorizedClientsApiRequestFactory,
    responseProcessor?: UserAuthorizedClientsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new UserAuthorizedClientsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new UserAuthorizedClientsApiResponseProcessor();
  }

  /**
   * Disable the current user's authorization for the specified OAuth2 client.
   * @param param The request object
   */
  public deleteUserAuthorizedClient(
    param: UserAuthorizedClientsApiDeleteUserAuthorizedClientRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteUserAuthorizedClient(
        param.userAuthorizedClientId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteUserAuthorizedClient(
            responseContext
          );
        });
    });
  }

  /**
   * Disable all authorizations the current user has granted to the specified OAuth2 client.
   * @param param The request object
   */
  public deleteUserAuthorizedClientsByClient(
    param: UserAuthorizedClientsApiDeleteUserAuthorizedClientsByClientRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteUserAuthorizedClientsByClient(
        param.clientId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteUserAuthorizedClientsByClient(
            responseContext
          );
        });
    });
  }

  /**
   * Get a single OAuth2 client authorization for the current user.
   * @param param The request object
   */
  public getUserAuthorizedClient(
    param: UserAuthorizedClientsApiGetUserAuthorizedClientRequest,
    options?: Configuration
  ): Promise<UserAuthorizedClientResponse> {
    const requestContextPromise = this.requestFactory.getUserAuthorizedClient(
      param.userAuthorizedClientId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUserAuthorizedClient(
            responseContext
          );
        });
    });
  }

  /**
   * Get a list of all OAuth2 clients authorized by the current user.
   * @param param The request object
   */
  public listUserAuthorizedClients(
    param: UserAuthorizedClientsApiListUserAuthorizedClientsRequest = {},
    options?: Configuration
  ): Promise<UserAuthorizedClientsResponse> {
    const requestContextPromise = this.requestFactory.listUserAuthorizedClients(
      param.pageSize,
      param.pageNumber,
      param.filter,
      param.filterDisabled,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserAuthorizedClients(
            responseContext
          );
        });
    });
  }

  /**
   * Provide a paginated version of listUserAuthorizedClients returning a generator with all the items.
   */
  public async *listUserAuthorizedClientsWithPagination(
    param: UserAuthorizedClientsApiListUserAuthorizedClientsRequest = {},
    options?: Configuration
  ): AsyncGenerator<UserAuthorizedClientData> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext =
        await this.requestFactory.listUserAuthorizedClients(
          param.pageSize,
          param.pageNumber,
          param.filter,
          param.filterDisabled,
          param.include,
          options
        );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listUserAuthorizedClients(
        responseContext
      );
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }
}
