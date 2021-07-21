// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { OrganizationsResponse } from "../models/OrganizationsResponse";
import { PermissionsResponse } from "../models/PermissionsResponse";
import { QuerySortOrder } from "../models/QuerySortOrder";
import { UserCreateRequest } from "../models/UserCreateRequest";
import { UserInvitationResponse } from "../models/UserInvitationResponse";
import { UserInvitationsRequest } from "../models/UserInvitationsRequest";
import { UserInvitationsResponse } from "../models/UserInvitationsResponse";
import { UserResponse } from "../models/UserResponse";
import { UserUpdateRequest } from "../models/UserUpdateRequest";
import { UsersResponse } from "../models/UsersResponse";

/**
 * no description
 */
export class UsersApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create a user for your organization.
   * Create a user
   * @param body
   */
  public async createUser(
    body: UserCreateRequest,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createUser."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/users";

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.createUser"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UserCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Disable a user. Can only be used with an application key belonging to an administrator user.
   * Disable a user
   * @param userId The ID of the user.
   */
  public async disableUser(
    userId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError(
        "Required parameter userId was null or undefined when calling disableUser."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}".replace(
      "{" + "user_id" + "}",
      encodeURIComponent(String(userId))
    );

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.disableUser"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Returns a single user invitation by its UUID.
   * Get a user invitation
   * @param userInvitationUuid The UUID of the user invitation.
   */
  public async getInvitation(
    userInvitationUuid: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'userInvitationUuid' is not null or undefined
    if (userInvitationUuid === null || userInvitationUuid === undefined) {
      throw new RequiredError(
        "Required parameter userInvitationUuid was null or undefined when calling getInvitation."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/user_invitations/{user_invitation_uuid}".replace(
      "{" + "user_invitation_uuid" + "}",
      encodeURIComponent(String(userInvitationUuid))
    );

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.getInvitation"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get a user in the organization specified by the user’s `user_id`.
   * Get user details
   * @param userId The ID of the user.
   */
  public async getUser(
    userId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError(
        "Required parameter userId was null or undefined when calling getUser."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}".replace(
      "{" + "user_id" + "}",
      encodeURIComponent(String(userId))
    );

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.getUser"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get a user organization. Returns the user information and all organizations joined by this user.
   * Get a user organization
   * @param userId The ID of the user.
   */
  public async listUserOrganizations(
    userId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError(
        "Required parameter userId was null or undefined when calling listUserOrganizations."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}/orgs".replace(
      "{" + "user_id" + "}",
      encodeURIComponent(String(userId))
    );

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.listUserOrganizations"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
   * Get a user permissions
   * @param userId The ID of the user.
   */
  public async listUserPermissions(
    userId: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError(
        "Required parameter userId was null or undefined when calling listUserPermissions."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}/permissions".replace(
      "{" + "user_id" + "}",
      encodeURIComponent(String(userId))
    );

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.listUserPermissions"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get the list of all users in the organization. This list includes all users even if they are deactivated or unverified.
   * List all users
   * @param pageSize Size for a given page.
   * @param pageNumber Specific page number to return.
   * @param sort User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;modified_at&#x60;, &#x60;user_count&#x60;.
   * @param sortDir Direction of sort. Options: &#x60;asc&#x60;, &#x60;desc&#x60;.
   * @param filter Filter all users by the given string. Defaults to no filtering.
   * @param filterStatus Filter on status attribute. Comma separated list, with possible values &#x60;Active&#x60;, &#x60;Pending&#x60;, and &#x60;Disabled&#x60;. Defaults to no filtering.
   */
  public async listUsers(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    sortDir?: QuerySortOrder,
    filter?: string,
    filterStatus?: string,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/users";

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.listUsers"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", "")
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "QuerySortOrder", "")
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", "")
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Sends emails to one or more users inviting them to join the organization.
   * Send invitation emails
   * @param body
   */
  public async sendInvitations(
    body: UserInvitationsRequest,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling sendInvitations."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/user_invitations";

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.sendInvitations"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UserInvitationsRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Edit a user. Can only be used with an application key belonging to an administrator user.
   * Update a user
   * @param userId The ID of the user.
   * @param body
   */
  public async updateUser(
    userId: string,
    body: UserUpdateRequest,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError(
        "Required parameter userId was null or undefined when calling updateUser."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateUser."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_id}".replace(
      "{" + "user_id" + "}",
      encodeURIComponent(String(userId))
    );

    // Make Request Context
    const requestContext = getServer(
      config,
      "UsersApi.updateUser"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UserUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

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
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse",
        ""
      ) as UserResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
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

    const body = response.body || "";
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
  public async disableUser(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    response: ResponseContext
  ): Promise<UserInvitationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UserInvitationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserInvitationResponse",
        ""
      ) as UserInvitationResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UserInvitationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserInvitationResponse",
        ""
      ) as UserInvitationResponse;
      return body;
    }

    const body = response.body || "";
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
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse",
        ""
      ) as UserResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    response: ResponseContext
  ): Promise<OrganizationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: OrganizationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationsResponse",
        ""
      ) as OrganizationsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OrganizationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrganizationsResponse",
        ""
      ) as OrganizationsResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    response: ResponseContext
  ): Promise<PermissionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PermissionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PermissionsResponse",
        ""
      ) as PermissionsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PermissionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PermissionsResponse",
        ""
      ) as PermissionsResponse;
      return body;
    }

    const body = response.body || "";
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
  public async listUsers(response: ResponseContext): Promise<UsersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsersResponse",
        ""
      ) as UsersResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsersResponse",
        ""
      ) as UsersResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    response: ResponseContext
  ): Promise<UserInvitationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: UserInvitationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserInvitationsResponse",
        ""
      ) as UserInvitationsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UserInvitationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserInvitationsResponse",
        ""
      ) as UserInvitationsResponse;
      return body;
    }

    const body = response.body || "";
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
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse",
        ""
      ) as UserResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("422", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(422, body);
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

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
