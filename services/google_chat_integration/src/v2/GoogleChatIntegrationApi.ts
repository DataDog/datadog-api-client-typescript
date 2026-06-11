import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
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
import { GoogleChatAppNamedSpaceResponse } from "./models/GoogleChatAppNamedSpaceResponse";
import { GoogleChatCreateOrganizationHandleRequest } from "./models/GoogleChatCreateOrganizationHandleRequest";
import { GoogleChatDelegatedUserResponse } from "./models/GoogleChatDelegatedUserResponse";
import { GoogleChatOrganizationHandleResponse } from "./models/GoogleChatOrganizationHandleResponse";
import { GoogleChatOrganizationHandlesResponse } from "./models/GoogleChatOrganizationHandlesResponse";
import { GoogleChatOrganizationResponse } from "./models/GoogleChatOrganizationResponse";
import { GoogleChatOrganizationsResponse } from "./models/GoogleChatOrganizationsResponse";
import { GoogleChatTargetAudienceCreateRequest } from "./models/GoogleChatTargetAudienceCreateRequest";
import { GoogleChatTargetAudienceResponse } from "./models/GoogleChatTargetAudienceResponse";
import { GoogleChatTargetAudiencesResponse } from "./models/GoogleChatTargetAudiencesResponse";
import { GoogleChatTargetAudienceUpdateRequest } from "./models/GoogleChatTargetAudienceUpdateRequest";
import { GoogleChatUpdateOrganizationHandleRequest } from "./models/GoogleChatUpdateOrganizationHandleRequest";
import { version } from "../version";

export class GoogleChatIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("google-chat-integration", version);
    }
  }
  public async createGoogleChatTargetAudience(
    organizationBindingId: string,
    body: GoogleChatTargetAudienceCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "createGoogleChatTargetAudience",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGoogleChatTargetAudience");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.createGoogleChatTargetAudience",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
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
      serialize(body, TypingInfo, "GoogleChatTargetAudienceCreateRequest", ""),
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

  public async createOrganizationHandle(
    organizationBindingId: string,
    body: GoogleChatCreateOrganizationHandleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "createOrganizationHandle",
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
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.createOrganizationHandle",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
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
        "GoogleChatCreateOrganizationHandleRequest",
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

  public async deleteGoogleChatDelegatedUser(
    organizationBindingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "deleteGoogleChatDelegatedUser",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/delegated-user".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.deleteGoogleChatDelegatedUser",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
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

  public async deleteGoogleChatOrganization(
    organizationBindingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "deleteGoogleChatOrganization",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.deleteGoogleChatOrganization",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
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

  public async deleteGoogleChatTargetAudience(
    organizationBindingId: string,
    targetAudienceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "deleteGoogleChatTargetAudience",
      );
    }

    // verify required parameter 'targetAudienceId' is not null or undefined
    if (targetAudienceId === null || targetAudienceId === undefined) {
      throw new RequiredError(
        "targetAudienceId",
        "deleteGoogleChatTargetAudience",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences/{target_audience_id}"
        .replace(
          "{organization_binding_id}",
          encodeURIComponent(String(organizationBindingId)),
        )
        .replace(
          "{target_audience_id}",
          encodeURIComponent(String(targetAudienceId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.deleteGoogleChatTargetAudience",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
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

  public async deleteOrganizationHandle(
    organizationBindingId: string,
    handleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "deleteOrganizationHandle",
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
          encodeURIComponent(String(organizationBindingId)),
        )
        .replace("{handle_id}", encodeURIComponent(String(handleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.deleteOrganizationHandle",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
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

  public async getGoogleChatDelegatedUser(
    organizationBindingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "getGoogleChatDelegatedUser",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/delegated-user".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.getGoogleChatDelegatedUser",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async getGoogleChatOrganization(
    organizationBindingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "getGoogleChatOrganization",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.getGoogleChatOrganization",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async getGoogleChatTargetAudience(
    organizationBindingId: string,
    targetAudienceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "getGoogleChatTargetAudience",
      );
    }

    // verify required parameter 'targetAudienceId' is not null or undefined
    if (targetAudienceId === null || targetAudienceId === undefined) {
      throw new RequiredError(
        "targetAudienceId",
        "getGoogleChatTargetAudience",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences/{target_audience_id}"
        .replace(
          "{organization_binding_id}",
          encodeURIComponent(String(organizationBindingId)),
        )
        .replace(
          "{target_audience_id}",
          encodeURIComponent(String(targetAudienceId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.getGoogleChatTargetAudience",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async getOrganizationHandle(
    organizationBindingId: string,
    handleId: string,
    _options?: Configuration,
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
          encodeURIComponent(String(organizationBindingId)),
        )
        .replace("{handle_id}", encodeURIComponent(String(handleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.getOrganizationHandle",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async getSpaceByDisplayName(
    domainName: string,
    spaceDisplayName: string,
    _options?: Configuration,
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
          encodeURIComponent(String(spaceDisplayName)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.getSpaceByDisplayName",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async listGoogleChatOrganizations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/google-chat/organizations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.listGoogleChatOrganizations",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async listGoogleChatTargetAudiences(
    organizationBindingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "listGoogleChatTargetAudiences",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.listGoogleChatTargetAudiences",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async listOrganizationHandles(
    organizationBindingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "listOrganizationHandles",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles".replace(
        "{organization_binding_id}",
        encodeURIComponent(String(organizationBindingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.listOrganizationHandles",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
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

  public async updateGoogleChatTargetAudience(
    organizationBindingId: string,
    targetAudienceId: string,
    body: GoogleChatTargetAudienceUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "updateGoogleChatTargetAudience",
      );
    }

    // verify required parameter 'targetAudienceId' is not null or undefined
    if (targetAudienceId === null || targetAudienceId === undefined) {
      throw new RequiredError(
        "targetAudienceId",
        "updateGoogleChatTargetAudience",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGoogleChatTargetAudience");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/google-chat/organizations/{organization_binding_id}/target-audiences/{target_audience_id}"
        .replace(
          "{organization_binding_id}",
          encodeURIComponent(String(organizationBindingId)),
        )
        .replace(
          "{target_audience_id}",
          encodeURIComponent(String(targetAudienceId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.updateGoogleChatTargetAudience",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
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
      serialize(body, TypingInfo, "GoogleChatTargetAudienceUpdateRequest", ""),
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

  public async updateOrganizationHandle(
    organizationBindingId: string,
    handleId: string,
    body: GoogleChatUpdateOrganizationHandleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'organizationBindingId' is not null or undefined
    if (organizationBindingId === null || organizationBindingId === undefined) {
      throw new RequiredError(
        "organizationBindingId",
        "updateOrganizationHandle",
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
          encodeURIComponent(String(organizationBindingId)),
        )
        .replace("{handle_id}", encodeURIComponent(String(handleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "GoogleChatIntegrationApi.v2.updateOrganizationHandle",
      GoogleChatIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
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
        "GoogleChatUpdateOrganizationHandleRequest",
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

export class GoogleChatIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createGoogleChatTargetAudience
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGoogleChatTargetAudience(
    response: ResponseContext,
  ): Promise<GoogleChatTargetAudienceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: GoogleChatTargetAudienceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudienceResponse",
      ) as GoogleChatTargetAudienceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: GoogleChatTargetAudienceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudienceResponse",
        "",
      ) as GoogleChatTargetAudienceResponse;
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
   * @params response Response returned by the server for a request to createOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrganizationHandle(
    response: ResponseContext,
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: GoogleChatOrganizationHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandleResponse",
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
      const body: GoogleChatOrganizationHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandleResponse",
        "",
      ) as GoogleChatOrganizationHandleResponse;
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
   * @params response Response returned by the server for a request to deleteGoogleChatDelegatedUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGoogleChatDelegatedUser(
    response: ResponseContext,
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteGoogleChatOrganization
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGoogleChatOrganization(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteGoogleChatTargetAudience
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGoogleChatTargetAudience(
    response: ResponseContext,
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOrganizationHandle(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getGoogleChatDelegatedUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGoogleChatDelegatedUser(
    response: ResponseContext,
  ): Promise<GoogleChatDelegatedUserResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatDelegatedUserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatDelegatedUserResponse",
      ) as GoogleChatDelegatedUserResponse;
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
      const body: GoogleChatDelegatedUserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatDelegatedUserResponse",
        "",
      ) as GoogleChatDelegatedUserResponse;
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
   * @params response Response returned by the server for a request to getGoogleChatOrganization
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGoogleChatOrganization(
    response: ResponseContext,
  ): Promise<GoogleChatOrganizationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationResponse",
      ) as GoogleChatOrganizationResponse;
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
      const body: GoogleChatOrganizationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationResponse",
        "",
      ) as GoogleChatOrganizationResponse;
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
   * @params response Response returned by the server for a request to getGoogleChatTargetAudience
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGoogleChatTargetAudience(
    response: ResponseContext,
  ): Promise<GoogleChatTargetAudienceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatTargetAudienceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudienceResponse",
      ) as GoogleChatTargetAudienceResponse;
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
      const body: GoogleChatTargetAudienceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudienceResponse",
        "",
      ) as GoogleChatTargetAudienceResponse;
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
   * @params response Response returned by the server for a request to getOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOrganizationHandle(
    response: ResponseContext,
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandleResponse",
      ) as GoogleChatOrganizationHandleResponse;
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
      const body: GoogleChatOrganizationHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandleResponse",
        "",
      ) as GoogleChatOrganizationHandleResponse;
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
   * @params response Response returned by the server for a request to getSpaceByDisplayName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSpaceByDisplayName(
    response: ResponseContext,
  ): Promise<GoogleChatAppNamedSpaceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatAppNamedSpaceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatAppNamedSpaceResponse",
      ) as GoogleChatAppNamedSpaceResponse;
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
      const body: GoogleChatAppNamedSpaceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatAppNamedSpaceResponse",
        "",
      ) as GoogleChatAppNamedSpaceResponse;
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
   * @params response Response returned by the server for a request to listGoogleChatOrganizations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGoogleChatOrganizations(
    response: ResponseContext,
  ): Promise<GoogleChatOrganizationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationsResponse",
      ) as GoogleChatOrganizationsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: GoogleChatOrganizationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationsResponse",
        "",
      ) as GoogleChatOrganizationsResponse;
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
   * @params response Response returned by the server for a request to listGoogleChatTargetAudiences
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGoogleChatTargetAudiences(
    response: ResponseContext,
  ): Promise<GoogleChatTargetAudiencesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatTargetAudiencesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudiencesResponse",
      ) as GoogleChatTargetAudiencesResponse;
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
      const body: GoogleChatTargetAudiencesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudiencesResponse",
        "",
      ) as GoogleChatTargetAudiencesResponse;
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
   * @params response Response returned by the server for a request to listOrganizationHandles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrganizationHandles(
    response: ResponseContext,
  ): Promise<GoogleChatOrganizationHandlesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandlesResponse",
      ) as GoogleChatOrganizationHandlesResponse;
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
      const body: GoogleChatOrganizationHandlesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandlesResponse",
        "",
      ) as GoogleChatOrganizationHandlesResponse;
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
   * @params response Response returned by the server for a request to updateGoogleChatTargetAudience
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGoogleChatTargetAudience(
    response: ResponseContext,
  ): Promise<GoogleChatTargetAudienceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatTargetAudienceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudienceResponse",
      ) as GoogleChatTargetAudienceResponse;
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
      const body: GoogleChatTargetAudienceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatTargetAudienceResponse",
        "",
      ) as GoogleChatTargetAudienceResponse;
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
   * @params response Response returned by the server for a request to updateOrganizationHandle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrganizationHandle(
    response: ResponseContext,
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GoogleChatOrganizationHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandleResponse",
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
      const body: GoogleChatOrganizationHandleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GoogleChatOrganizationHandleResponse",
        "",
      ) as GoogleChatOrganizationHandleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface GoogleChatIntegrationApiCreateGoogleChatTargetAudienceRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Target audience payload.
   * @type GoogleChatTargetAudienceCreateRequest
   */
  body: GoogleChatTargetAudienceCreateRequest;
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

export interface GoogleChatIntegrationApiDeleteGoogleChatDelegatedUserRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
}

export interface GoogleChatIntegrationApiDeleteGoogleChatOrganizationRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
}

export interface GoogleChatIntegrationApiDeleteGoogleChatTargetAudienceRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Your target audience ID.
   * @type string
   */
  targetAudienceId: string;
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

export interface GoogleChatIntegrationApiGetGoogleChatDelegatedUserRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
}

export interface GoogleChatIntegrationApiGetGoogleChatOrganizationRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
}

export interface GoogleChatIntegrationApiGetGoogleChatTargetAudienceRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Your target audience ID.
   * @type string
   */
  targetAudienceId: string;
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

export interface GoogleChatIntegrationApiListGoogleChatTargetAudiencesRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
}

export interface GoogleChatIntegrationApiListOrganizationHandlesRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
}

export interface GoogleChatIntegrationApiUpdateGoogleChatTargetAudienceRequest {
  /**
   * Your organization binding ID.
   * @type string
   */
  organizationBindingId: string;
  /**
   * Your target audience ID.
   * @type string
   */
  targetAudienceId: string;
  /**
   * Target audience payload.
   * @type GoogleChatTargetAudienceUpdateRequest
   */
  body: GoogleChatTargetAudienceUpdateRequest;
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: GoogleChatIntegrationApiRequestFactory,
    responseProcessor?: GoogleChatIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new GoogleChatIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new GoogleChatIntegrationApiResponseProcessor();
  }

  /**
   * Create a target audience for a Google Chat organization binding in the Datadog Google Chat integration.
   * @param param The request object
   */
  public createGoogleChatTargetAudience(
    param: GoogleChatIntegrationApiCreateGoogleChatTargetAudienceRequest,
    options?: Configuration,
  ): Promise<GoogleChatTargetAudienceResponse> {
    const requestContextPromise =
      this.requestFactory.createGoogleChatTargetAudience(
        param.organizationBindingId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGoogleChatTargetAudience(
            responseContext,
          );
        });
    });
  }

  /**
   * Create an organization handle in the Datadog Google Chat integration.
   * @param param The request object
   */
  public createOrganizationHandle(
    param: GoogleChatIntegrationApiCreateOrganizationHandleRequest,
    options?: Configuration,
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const requestContextPromise = this.requestFactory.createOrganizationHandle(
      param.organizationBindingId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrganizationHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete the delegated user for a Google Chat organization binding from the Datadog Google Chat integration.
   * @param param The request object
   */
  public deleteGoogleChatDelegatedUser(
    param: GoogleChatIntegrationApiDeleteGoogleChatDelegatedUserRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGoogleChatDelegatedUser(
        param.organizationBindingId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGoogleChatDelegatedUser(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Google Chat organization binding from the Datadog Google Chat integration.
   * @param param The request object
   */
  public deleteGoogleChatOrganization(
    param: GoogleChatIntegrationApiDeleteGoogleChatOrganizationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGoogleChatOrganization(
        param.organizationBindingId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGoogleChatOrganization(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a target audience from a Google Chat organization binding in the Datadog Google Chat integration.
   * @param param The request object
   */
  public deleteGoogleChatTargetAudience(
    param: GoogleChatIntegrationApiDeleteGoogleChatTargetAudienceRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGoogleChatTargetAudience(
        param.organizationBindingId,
        param.targetAudienceId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGoogleChatTargetAudience(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrganizationHandle(
      param.organizationBindingId,
      param.handleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOrganizationHandle(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the delegated user for a Google Chat organization binding in the Datadog Google Chat integration.
   * @param param The request object
   */
  public getGoogleChatDelegatedUser(
    param: GoogleChatIntegrationApiGetGoogleChatDelegatedUserRequest,
    options?: Configuration,
  ): Promise<GoogleChatDelegatedUserResponse> {
    const requestContextPromise =
      this.requestFactory.getGoogleChatDelegatedUser(
        param.organizationBindingId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGoogleChatDelegatedUser(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Google Chat organization binding from the Datadog Google Chat integration.
   * @param param The request object
   */
  public getGoogleChatOrganization(
    param: GoogleChatIntegrationApiGetGoogleChatOrganizationRequest,
    options?: Configuration,
  ): Promise<GoogleChatOrganizationResponse> {
    const requestContextPromise = this.requestFactory.getGoogleChatOrganization(
      param.organizationBindingId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGoogleChatOrganization(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a target audience for a Google Chat organization binding in the Datadog Google Chat integration.
   * @param param The request object
   */
  public getGoogleChatTargetAudience(
    param: GoogleChatIntegrationApiGetGoogleChatTargetAudienceRequest,
    options?: Configuration,
  ): Promise<GoogleChatTargetAudienceResponse> {
    const requestContextPromise =
      this.requestFactory.getGoogleChatTargetAudience(
        param.organizationBindingId,
        param.targetAudienceId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGoogleChatTargetAudience(
            responseContext,
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
    options?: Configuration,
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const requestContextPromise = this.requestFactory.getOrganizationHandle(
      param.organizationBindingId,
      param.handleId,
      options,
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
    options?: Configuration,
  ): Promise<GoogleChatAppNamedSpaceResponse> {
    const requestContextPromise = this.requestFactory.getSpaceByDisplayName(
      param.domainName,
      param.spaceDisplayName,
      options,
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
   * Get a list of all Google Chat organization bindings in the Datadog Google Chat integration.
   * @param param The request object
   */
  public listGoogleChatOrganizations(
    options?: Configuration,
  ): Promise<GoogleChatOrganizationsResponse> {
    const requestContextPromise =
      this.requestFactory.listGoogleChatOrganizations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGoogleChatOrganizations(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of all target audiences for a Google Chat organization binding in the Datadog Google Chat integration.
   * @param param The request object
   */
  public listGoogleChatTargetAudiences(
    param: GoogleChatIntegrationApiListGoogleChatTargetAudiencesRequest,
    options?: Configuration,
  ): Promise<GoogleChatTargetAudiencesResponse> {
    const requestContextPromise =
      this.requestFactory.listGoogleChatTargetAudiences(
        param.organizationBindingId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGoogleChatTargetAudiences(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of all organization handles from the Datadog Google Chat integration.
   * @param param The request object
   */
  public listOrganizationHandles(
    param: GoogleChatIntegrationApiListOrganizationHandlesRequest,
    options?: Configuration,
  ): Promise<GoogleChatOrganizationHandlesResponse> {
    const requestContextPromise = this.requestFactory.listOrganizationHandles(
      param.organizationBindingId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrganizationHandles(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a target audience for a Google Chat organization binding in the Datadog Google Chat integration.
   * @param param The request object
   */
  public updateGoogleChatTargetAudience(
    param: GoogleChatIntegrationApiUpdateGoogleChatTargetAudienceRequest,
    options?: Configuration,
  ): Promise<GoogleChatTargetAudienceResponse> {
    const requestContextPromise =
      this.requestFactory.updateGoogleChatTargetAudience(
        param.organizationBindingId,
        param.targetAudienceId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGoogleChatTargetAudience(
            responseContext,
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
    options?: Configuration,
  ): Promise<GoogleChatOrganizationHandleResponse> {
    const requestContextPromise = this.requestFactory.updateOrganizationHandle(
      param.organizationBindingId,
      param.handleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrganizationHandle(
            responseContext,
          );
        });
    });
  }
}
