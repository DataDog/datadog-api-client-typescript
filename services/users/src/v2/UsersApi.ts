import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
  buildUserAgent,
  isBrowser,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { PermissionsResponse } from "./models/PermissionsResponse";
import { QuerySortOrder } from "./models/QuerySortOrder";
import { User } from "./models/User";
import { UserCreateRequest } from "./models/UserCreateRequest";
import { UserInvitationResponse } from "./models/UserInvitationResponse";
import { UserInvitationsRequest } from "./models/UserInvitationsRequest";
import { UserInvitationsResponse } from "./models/UserInvitationsResponse";
import { UserResponse } from "./models/UserResponse";
import { UsersResponse } from "./models/UsersResponse";
import { UserUpdateRequest } from "./models/UserUpdateRequest";
import { version } from "../version";

export class UsersApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("users", version);
    }
  }
  public async createUser(
    body: UserCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createUser");
    }

    // Path Params
    const localVarPath = "/api/v2/users";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.createUser")
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
      serialize(body, TypingInfo, "UserCreateRequest", ""),
      contentType,
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
    userId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "disableUser");
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}".replace(
      "{user_id}",
      encodeURIComponent(String(userId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.disableUser")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getInvitation(
    userInvitationUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userInvitationUuid' is not null or undefined
    if (userInvitationUuid === null || userInvitationUuid === undefined) {
      throw new RequiredError("userInvitationUuid", "getInvitation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/user_invitations/{user_invitation_uuid}".replace(
        "{user_invitation_uuid}",
        encodeURIComponent(String(userInvitationUuid)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.getInvitation")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUser(
    userId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "getUser");
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}".replace(
      "{user_id}",
      encodeURIComponent(String(userId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.getUser")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listUserOrganizations(
    userId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "listUserOrganizations");
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}/orgs".replace(
      "{user_id}",
      encodeURIComponent(String(userId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.listUserOrganizations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listUserPermissions(
    userId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "listUserPermissions");
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}/permissions".replace(
      "{user_id}",
      encodeURIComponent(String(userId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.listUserPermissions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listUsers(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    sortDir?: QuerySortOrder,
    filter?: string,
    filterStatus?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/users";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.listUsers")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        serialize(sortDir, TypingInfo, "QuerySortOrder", ""),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        serialize(filterStatus, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async sendInvitations(
    body: UserInvitationsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "sendInvitations");
    }

    // Path Params
    const localVarPath = "/api/v2/user_invitations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.sendInvitations")
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
      serialize(body, TypingInfo, "UserInvitationsRequest", ""),
      contentType,
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

  public async updateUser(
    userId: string,
    body: UserUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "updateUser");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateUser");
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}".replace(
      "{user_id}",
      encodeURIComponent(String(userId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsersApi.updateUser")
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
      serialize(body, TypingInfo, "UserUpdateRequest", ""),
      contentType,
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
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
      ) as UserResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
        "",
      ) as UserResponse;
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
   * @params response Response returned by the server for a request to disableUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableUser(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
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
   * @params response Response returned by the server for a request to getInvitation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getInvitation(
    response: ResponseContext,
  ): Promise<UserInvitationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserInvitationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserInvitationResponse",
      ) as UserInvitationResponse;
      return body;
    }
    if (
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
      const body: UserInvitationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserInvitationResponse",
        "",
      ) as UserInvitationResponse;
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
   * @params response Response returned by the server for a request to getUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUser(response: ResponseContext): Promise<UserResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
      ) as UserResponse;
      return body;
    }
    if (
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
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
        "",
      ) as UserResponse;
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
   * @params response Response returned by the server for a request to listUserOrganizations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserOrganizations(
    response: ResponseContext,
  ): Promise<UserResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
      ) as UserResponse;
      return body;
    }
    if (
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
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
        "",
      ) as UserResponse;
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
   * @params response Response returned by the server for a request to listUserPermissions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserPermissions(
    response: ResponseContext,
  ): Promise<PermissionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PermissionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PermissionsResponse",
      ) as PermissionsResponse;
      return body;
    }
    if (
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
      const body: PermissionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PermissionsResponse",
        "",
      ) as PermissionsResponse;
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
   * @params response Response returned by the server for a request to listUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUsers(response: ResponseContext): Promise<UsersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsersResponse",
      ) as UsersResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: UsersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsersResponse",
        "",
      ) as UsersResponse;
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
   * @params response Response returned by the server for a request to sendInvitations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sendInvitations(
    response: ResponseContext,
  ): Promise<UserInvitationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: UserInvitationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserInvitationsResponse",
      ) as UserInvitationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: UserInvitationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserInvitationsResponse",
        "",
      ) as UserInvitationsResponse;
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
   * @params response Response returned by the server for a request to updateUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateUser(response: ResponseContext): Promise<UserResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
      ) as UserResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: UserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserResponse",
        "",
      ) as UserResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface UsersApiCreateUserRequest {
  /**
   * @type UserCreateRequest
   */
  body: UserCreateRequest;
}

export interface UsersApiDisableUserRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userId: string;
}

export interface UsersApiGetInvitationRequest {
  /**
   * The UUID of the user invitation.
   * @type string
   */
  userInvitationUuid: string;
}

export interface UsersApiGetUserRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userId: string;
}

export interface UsersApiListUserOrganizationsRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userId: string;
}

export interface UsersApiListUserPermissionsRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userId: string;
}

export interface UsersApiListUsersRequest {
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
   * User attribute to order results by. Sort order is ascending by default.
   * Sort order is descending if the field
   * is prefixed by a negative sign, for example `sort=-name`. Options: `name`,
   * `modified_at`, `user_count`.
   * @type string
   */
  sort?: string;
  /**
   * Direction of sort. Options: `asc`, `desc`.
   * @type QuerySortOrder
   */
  sortDir?: QuerySortOrder;
  /**
   * Filter all users by the given string. Defaults to no filtering.
   * @type string
   */
  filter?: string;
  /**
   * Filter on status attribute.
   * Comma separated list, with possible values `Active`, `Pending`, and `Disabled`.
   * Defaults to no filtering.
   * @type string
   */
  filterStatus?: string;
}

export interface UsersApiSendInvitationsRequest {
  /**
   * @type UserInvitationsRequest
   */
  body: UserInvitationsRequest;
}

export interface UsersApiUpdateUserRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userId: string;
  /**
   * @type UserUpdateRequest
   */
  body: UserUpdateRequest;
}

export class UsersApi {
  private requestFactory: UsersApiRequestFactory;
  private responseProcessor: UsersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: UsersApiRequestFactory,
    responseProcessor?: UsersApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new UsersApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new UsersApiResponseProcessor();
  }

  /**
   * Create a user for your organization.
   * @param param The request object
   */
  public createUser(
    param: UsersApiCreateUserRequest,
    options?: Configuration,
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.createUser(
      param.body,
      options,
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
   * Disable a user. Can only be used with an application key belonging
   * to an administrator user.
   * @param param The request object
   */
  public disableUser(
    param: UsersApiDisableUserRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.disableUser(
      param.userId,
      options,
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
   * Returns a single user invitation by its UUID.
   * @param param The request object
   */
  public getInvitation(
    param: UsersApiGetInvitationRequest,
    options?: Configuration,
  ): Promise<UserInvitationResponse> {
    const requestContextPromise = this.requestFactory.getInvitation(
      param.userInvitationUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getInvitation(responseContext);
        });
    });
  }

  /**
   * Get a user in the organization specified by the user’s `user_id`.
   * @param param The request object
   */
  public getUser(
    param: UsersApiGetUserRequest,
    options?: Configuration,
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.getUser(
      param.userId,
      options,
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
   * Get a user organization. Returns the user information and all organizations
   * joined by this user.
   * @param param The request object
   */
  public listUserOrganizations(
    param: UsersApiListUserOrganizationsRequest,
    options?: Configuration,
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.listUserOrganizations(
      param.userId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserOrganizations(responseContext);
        });
    });
  }

  /**
   * Get a user permission set. Returns a list of the user’s permissions
   * granted by the associated user's roles.
   * @param param The request object
   */
  public listUserPermissions(
    param: UsersApiListUserPermissionsRequest,
    options?: Configuration,
  ): Promise<PermissionsResponse> {
    const requestContextPromise = this.requestFactory.listUserPermissions(
      param.userId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserPermissions(responseContext);
        });
    });
  }

  /**
   * Get the list of all users in the organization. This list includes
   * all users even if they are deactivated or unverified.
   * @param param The request object
   */
  public listUsers(
    param: UsersApiListUsersRequest = {},
    options?: Configuration,
  ): Promise<UsersResponse> {
    const requestContextPromise = this.requestFactory.listUsers(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.sortDir,
      param.filter,
      param.filterStatus,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUsers(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listUsers returning a generator with all the items.
   */
  public async *listUsersWithPagination(
    param: UsersApiListUsersRequest = {},
    options?: Configuration,
  ): AsyncGenerator<User> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listUsers(
        param.pageSize,
        param.pageNumber,
        param.sort,
        param.sortDir,
        param.filter,
        param.filterStatus,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listUsers(responseContext);
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

  /**
   * Sends emails to one or more users inviting them to join the organization.
   * @param param The request object
   */
  public sendInvitations(
    param: UsersApiSendInvitationsRequest,
    options?: Configuration,
  ): Promise<UserInvitationsResponse> {
    const requestContextPromise = this.requestFactory.sendInvitations(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.sendInvitations(responseContext);
        });
    });
  }

  /**
   * Edit a user. Can only be used with an application key belonging
   * to an administrator user.
   * @param param The request object
   */
  public updateUser(
    param: UsersApiUpdateUserRequest,
    options?: Configuration,
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.updateUser(
      param.userId,
      param.body,
      options,
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
