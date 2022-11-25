import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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
import { User } from "../models/User";
import { UserDisableResponse } from "../models/UserDisableResponse";
import { UserListResponse } from "../models/UserListResponse";
import { UserResponse } from "../models/UserResponse";

export class UsersApiRequestFactory extends BaseAPIRequestFactory {
  public async createUser(
    body: User,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createUser");
    }

    // Path Params
    const localVarPath = "/api/v1/user";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.UsersApi.createUser"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "User", ""),
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

  public async disableUser(
    userHandle: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userHandle' is not null or undefined
    if (userHandle === null || userHandle === undefined) {
      throw new RequiredError("userHandle", "disableUser");
    }

    // Path Params
    const localVarPath = "/api/v1/user/{user_handle}".replace(
      "{user_handle}",
      encodeURIComponent(String(userHandle))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.UsersApi.disableUser"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUser(
    userHandle: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userHandle' is not null or undefined
    if (userHandle === null || userHandle === undefined) {
      throw new RequiredError("userHandle", "getUser");
    }

    // Path Params
    const localVarPath = "/api/v1/user/{user_handle}".replace(
      "{user_handle}",
      encodeURIComponent(String(userHandle))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.UsersApi.getUser"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listUsers(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/user";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.UsersApi.listUsers"
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

  public async updateUser(
    userHandle: string,
    body: User,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userHandle' is not null or undefined
    if (userHandle === null || userHandle === undefined) {
      throw new RequiredError("userHandle", "updateUser");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateUser");
    }

    // Path Params
    const localVarPath = "/api/v1/user/{user_handle}".replace(
      "{user_handle}",
      encodeURIComponent(String(userHandle))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.UsersApi.updateUser"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "User", ""),
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

export class UsersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createUser(response: ResponseContext): Promise<UserResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse"
      ) as UserResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse",
        ""
      ) as UserResponse;
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
   * @params response Response returned by the server for a request to disableUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableUser(
    response: ResponseContext
  ): Promise<UserDisableResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: UserDisableResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserDisableResponse"
      ) as UserDisableResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UserDisableResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserDisableResponse",
        ""
      ) as UserDisableResponse;
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
   * @params response Response returned by the server for a request to getUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUser(response: ResponseContext): Promise<UserResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse"
      ) as UserResponse;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse",
        ""
      ) as UserResponse;
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
   * @params response Response returned by the server for a request to listUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUsers(response: ResponseContext): Promise<UserListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: UserListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserListResponse"
      ) as UserListResponse;
      return body;
    }
    if (response.httpStatusCode == 403 || response.httpStatusCode == 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UserListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserListResponse",
        ""
      ) as UserListResponse;
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
   * @params response Response returned by the server for a request to updateUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateUser(response: ResponseContext): Promise<UserResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse"
      ) as UserResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse",
        ""
      ) as UserResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface UsersApiCreateUserRequest {
  /**
   * User object that needs to be created.
   * @type User
   */
  body: User;
}

export interface UsersApiDisableUserRequest {
  /**
   * The handle of the user.
   * @type string
   */
  userHandle: string;
}

export interface UsersApiGetUserRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userHandle: string;
}

export interface UsersApiUpdateUserRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userHandle: string;
  /**
   * Description of the update.
   * @type User
   */
  body: User;
}

export class UsersApi {
  private requestFactory: UsersApiRequestFactory;
  private responseProcessor: UsersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsersApiRequestFactory,
    responseProcessor?: UsersApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new UsersApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new UsersApiResponseProcessor();
  }

  /**
   * Create a user for your organization.
   *
   * **Note**: Users can only be created with the admin access role
   * if application keys belong to administrators.
   * @param param The request object
   */
  public createUser(
    param: UsersApiCreateUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.createUser(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createUser(responseContext);
        });
    });
  }

  /**
   * Delete a user from an organization.
   *
   * **Note**: This endpoint can only be used with application keys belonging to
   * administrators.
   * @param param The request object
   */
  public disableUser(
    param: UsersApiDisableUserRequest,
    options?: Configuration
  ): Promise<UserDisableResponse> {
    const requestContextPromise = this.requestFactory.disableUser(
      param.userHandle,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableUser(responseContext);
        });
    });
  }

  /**
   * Get a user's details.
   * @param param The request object
   */
  public getUser(
    param: UsersApiGetUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.getUser(
      param.userHandle,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUser(responseContext);
        });
    });
  }

  /**
   * List all users for your organization.
   * @param param The request object
   */
  public listUsers(options?: Configuration): Promise<UserListResponse> {
    const requestContextPromise = this.requestFactory.listUsers(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUsers(responseContext);
        });
    });
  }

  /**
   * Update a user information.
   *
   * **Note**: It can only be used with application keys belonging to administrators.
   * @param param The request object
   */
  public updateUser(
    param: UsersApiUpdateUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.updateUser(
      param.userHandle,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateUser(responseContext);
        });
    });
  }
}
