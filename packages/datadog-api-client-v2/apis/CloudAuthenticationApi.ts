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
import { AWSCloudAuthIntakeMappingCreateRequest } from "../models/AWSCloudAuthIntakeMappingCreateRequest";
import { AWSCloudAuthIntakeMappingResponse } from "../models/AWSCloudAuthIntakeMappingResponse";
import { AWSCloudAuthIntakeMappingsResponse } from "../models/AWSCloudAuthIntakeMappingsResponse";
import { AWSCloudAuthPersonaMappingCreateRequest } from "../models/AWSCloudAuthPersonaMappingCreateRequest";
import { AWSCloudAuthPersonaMappingResponse } from "../models/AWSCloudAuthPersonaMappingResponse";
import { AWSCloudAuthPersonaMappingsResponse } from "../models/AWSCloudAuthPersonaMappingsResponse";
import { GitHubCloudAuthIntakeMappingCreateRequest } from "../models/GitHubCloudAuthIntakeMappingCreateRequest";
import { GitHubCloudAuthIntakeMappingResponse } from "../models/GitHubCloudAuthIntakeMappingResponse";
import { GitHubCloudAuthIntakeMappingsResponse } from "../models/GitHubCloudAuthIntakeMappingsResponse";
import { GitHubCloudAuthPersonaMappingCreateRequest } from "../models/GitHubCloudAuthPersonaMappingCreateRequest";
import { GitHubCloudAuthPersonaMappingResponse } from "../models/GitHubCloudAuthPersonaMappingResponse";
import { GitHubCloudAuthPersonaMappingsResponse } from "../models/GitHubCloudAuthPersonaMappingsResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { OIDCCloudAuthPersonaMappingCreateRequest } from "../models/OIDCCloudAuthPersonaMappingCreateRequest";
import { OIDCCloudAuthPersonaMappingResponse } from "../models/OIDCCloudAuthPersonaMappingResponse";
import { OIDCCloudAuthPersonaMappingsResponse } from "../models/OIDCCloudAuthPersonaMappingsResponse";
import { OIDCCloudAuthProviderCreateRequest } from "../models/OIDCCloudAuthProviderCreateRequest";
import { OIDCCloudAuthProviderResponse } from "../models/OIDCCloudAuthProviderResponse";
import { OIDCCloudAuthProvidersResponse } from "../models/OIDCCloudAuthProvidersResponse";

export class CloudAuthenticationApiRequestFactory extends BaseAPIRequestFactory {
  public async createAWSCloudAuthIntakeMapping(
    body: AWSCloudAuthIntakeMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAWSCloudAuthIntakeMapping'");
    if (!_config.unstableOperations["v2.createAWSCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'createAWSCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSCloudAuthIntakeMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.createAWSCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "AWSCloudAuthIntakeMappingCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async createAWSCloudAuthPersonaMapping(
    body: AWSCloudAuthPersonaMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAWSCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.createAWSCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'createAWSCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSCloudAuthPersonaMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.createAWSCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "AWSCloudAuthPersonaMappingCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async createGitHubCloudAuthIntakeMapping(
    body: GitHubCloudAuthIntakeMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createGitHubCloudAuthIntakeMapping'"
    );
    if (!_config.unstableOperations["v2.createGitHubCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'createGitHubCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGitHubCloudAuthIntakeMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/github/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.createGitHubCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "GitHubCloudAuthIntakeMappingCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async createGitHubCloudAuthPersonaMapping(
    body: GitHubCloudAuthPersonaMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createGitHubCloudAuthPersonaMapping'"
    );
    if (!_config.unstableOperations["v2.createGitHubCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'createGitHubCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGitHubCloudAuthPersonaMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/github/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudAuthenticationApi.createGitHubCloudAuthPersonaMapping"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "GitHubCloudAuthPersonaMappingCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async createOIDCCloudAuthPersonaMapping(
    body: OIDCCloudAuthPersonaMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createOIDCCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.createOIDCCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'createOIDCCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOIDCCloudAuthPersonaMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/oidc/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.createOIDCCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "OIDCCloudAuthPersonaMappingCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async createOIDCCloudAuthProvider(
    body: OIDCCloudAuthProviderCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createOIDCCloudAuthProvider'");
    if (!_config.unstableOperations["v2.createOIDCCloudAuthProvider"]) {
      throw new Error(
        "Unstable operation 'createOIDCCloudAuthProvider' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOIDCCloudAuthProvider");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/oidc/provider";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.createOIDCCloudAuthProvider")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "OIDCCloudAuthProviderCreateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async deleteAWSCloudAuthIntakeMapping(
    intakeMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAWSCloudAuthIntakeMapping'");
    if (!_config.unstableOperations["v2.deleteAWSCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'deleteAWSCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'intakeMappingId' is not null or undefined
    if (intakeMappingId === null || intakeMappingId === undefined) {
      throw new RequiredError(
        "intakeMappingId",
        "deleteAWSCloudAuthIntakeMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/aws/intake_mapping/{intake_mapping_id}".replace(
        "{intake_mapping_id}",
        encodeURIComponent(String(intakeMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.deleteAWSCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteAWSCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAWSCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.deleteAWSCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'deleteAWSCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "deleteAWSCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/aws/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.deleteAWSCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteGitHubCloudAuthIntakeMapping(
    intakeMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteGitHubCloudAuthIntakeMapping'"
    );
    if (!_config.unstableOperations["v2.deleteGitHubCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'deleteGitHubCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'intakeMappingId' is not null or undefined
    if (intakeMappingId === null || intakeMappingId === undefined) {
      throw new RequiredError(
        "intakeMappingId",
        "deleteGitHubCloudAuthIntakeMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/github/intake_mapping/{intake_mapping_id}".replace(
        "{intake_mapping_id}",
        encodeURIComponent(String(intakeMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.deleteGitHubCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteGitHubCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteGitHubCloudAuthPersonaMapping'"
    );
    if (!_config.unstableOperations["v2.deleteGitHubCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'deleteGitHubCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "deleteGitHubCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/github/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudAuthenticationApi.deleteGitHubCloudAuthPersonaMapping"
      )
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteOIDCCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteOIDCCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.deleteOIDCCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'deleteOIDCCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "deleteOIDCCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/oidc/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.deleteOIDCCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteOIDCCloudAuthProvider(
    providerId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteOIDCCloudAuthProvider'");
    if (!_config.unstableOperations["v2.deleteOIDCCloudAuthProvider"]) {
      throw new Error(
        "Unstable operation 'deleteOIDCCloudAuthProvider' is disabled"
      );
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "deleteOIDCCloudAuthProvider");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/oidc/provider/{provider_id}".replace(
      "{provider_id}",
      encodeURIComponent(String(providerId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.deleteOIDCCloudAuthProvider")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAWSCloudAuthIntakeMapping(
    intakeMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAWSCloudAuthIntakeMapping'");
    if (!_config.unstableOperations["v2.getAWSCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'getAWSCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'intakeMappingId' is not null or undefined
    if (intakeMappingId === null || intakeMappingId === undefined) {
      throw new RequiredError(
        "intakeMappingId",
        "getAWSCloudAuthIntakeMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/aws/intake_mapping/{intake_mapping_id}".replace(
        "{intake_mapping_id}",
        encodeURIComponent(String(intakeMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getAWSCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAWSCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAWSCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.getAWSCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'getAWSCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "getAWSCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/aws/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getAWSCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGitHubCloudAuthIntakeMapping(
    intakeMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGitHubCloudAuthIntakeMapping'");
    if (!_config.unstableOperations["v2.getGitHubCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'getGitHubCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'intakeMappingId' is not null or undefined
    if (intakeMappingId === null || intakeMappingId === undefined) {
      throw new RequiredError(
        "intakeMappingId",
        "getGitHubCloudAuthIntakeMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/github/intake_mapping/{intake_mapping_id}".replace(
        "{intake_mapping_id}",
        encodeURIComponent(String(intakeMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getGitHubCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGitHubCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGitHubCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.getGitHubCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'getGitHubCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "getGitHubCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/github/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getGitHubCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getOIDCCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getOIDCCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.getOIDCCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'getOIDCCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "getOIDCCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/oidc/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getOIDCCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getOIDCCloudAuthProvider(
    providerId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getOIDCCloudAuthProvider'");
    if (!_config.unstableOperations["v2.getOIDCCloudAuthProvider"]) {
      throw new Error(
        "Unstable operation 'getOIDCCloudAuthProvider' is disabled"
      );
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "getOIDCCloudAuthProvider");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/oidc/provider/{provider_id}".replace(
      "{provider_id}",
      encodeURIComponent(String(providerId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getOIDCCloudAuthProvider")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listAWSCloudAuthIntakeMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSCloudAuthIntakeMappings'");
    if (!_config.unstableOperations["v2.listAWSCloudAuthIntakeMappings"]) {
      throw new Error(
        "Unstable operation 'listAWSCloudAuthIntakeMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listAWSCloudAuthIntakeMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listAWSCloudAuthPersonaMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSCloudAuthPersonaMappings'");
    if (!_config.unstableOperations["v2.listAWSCloudAuthPersonaMappings"]) {
      throw new Error(
        "Unstable operation 'listAWSCloudAuthPersonaMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listAWSCloudAuthPersonaMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listGitHubCloudAuthIntakeMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGitHubCloudAuthIntakeMappings'");
    if (!_config.unstableOperations["v2.listGitHubCloudAuthIntakeMappings"]) {
      throw new Error(
        "Unstable operation 'listGitHubCloudAuthIntakeMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/wif/github/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listGitHubCloudAuthIntakeMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listGitHubCloudAuthPersonaMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listGitHubCloudAuthPersonaMappings'"
    );
    if (!_config.unstableOperations["v2.listGitHubCloudAuthPersonaMappings"]) {
      throw new Error(
        "Unstable operation 'listGitHubCloudAuthPersonaMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/wif/github/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listGitHubCloudAuthPersonaMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listOIDCCloudAuthPersonaMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listOIDCCloudAuthPersonaMappings'");
    if (!_config.unstableOperations["v2.listOIDCCloudAuthPersonaMappings"]) {
      throw new Error(
        "Unstable operation 'listOIDCCloudAuthPersonaMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/wif/oidc/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listOIDCCloudAuthPersonaMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listOIDCCloudAuthProviders(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listOIDCCloudAuthProviders'");
    if (!_config.unstableOperations["v2.listOIDCCloudAuthProviders"]) {
      throw new Error(
        "Unstable operation 'listOIDCCloudAuthProviders' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/wif/oidc/provider";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listOIDCCloudAuthProviders")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

export class CloudAuthenticationApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAWSCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSCloudAuthIntakeMapping(
    response: ResponseContext
  ): Promise<AWSCloudAuthIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AWSCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthIntakeMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AWSCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to createAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to createGitHubCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGitHubCloudAuthIntakeMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthIntakeMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to createGitHubCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGitHubCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to createOIDCCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOIDCCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<OIDCCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OIDCCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OIDCCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OIDCCloudAuthPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: OIDCCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OIDCCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OIDCCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to createOIDCCloudAuthProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOIDCCloudAuthProvider(
    response: ResponseContext
  ): Promise<OIDCCloudAuthProviderResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OIDCCloudAuthProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "OIDCCloudAuthProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as OIDCCloudAuthProviderResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: OIDCCloudAuthProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "OIDCCloudAuthProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as OIDCCloudAuthProviderResponse;
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
   * @params response Response returned by the server for a request to deleteAWSCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSCloudAuthIntakeMapping(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSCloudAuthPersonaMapping(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteGitHubCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGitHubCloudAuthIntakeMapping(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteGitHubCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGitHubCloudAuthPersonaMapping(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteOIDCCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOIDCCloudAuthPersonaMapping(
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
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteOIDCCloudAuthProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOIDCCloudAuthProvider(
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
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getAWSCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAWSCloudAuthIntakeMapping(
    response: ResponseContext
  ): Promise<AWSCloudAuthIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthIntakeMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AWSCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to getAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAWSCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthPersonaMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to getGitHubCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGitHubCloudAuthIntakeMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthIntakeMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthIntakeMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to getGitHubCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGitHubCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthPersonaMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to getOIDCCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOIDCCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<OIDCCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OIDCCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OIDCCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OIDCCloudAuthPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: OIDCCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OIDCCloudAuthPersonaMappingResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OIDCCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to getOIDCCloudAuthProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOIDCCloudAuthProvider(
    response: ResponseContext
  ): Promise<OIDCCloudAuthProviderResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OIDCCloudAuthProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "OIDCCloudAuthProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as OIDCCloudAuthProviderResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: OIDCCloudAuthProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "OIDCCloudAuthProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as OIDCCloudAuthProviderResponse;
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
   * @params response Response returned by the server for a request to listAWSCloudAuthIntakeMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSCloudAuthIntakeMappings(
    response: ResponseContext
  ): Promise<AWSCloudAuthIntakeMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthIntakeMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthIntakeMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthIntakeMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AWSCloudAuthIntakeMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthIntakeMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthIntakeMappingsResponse;
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
   * @params response Response returned by the server for a request to listAWSCloudAuthPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSCloudAuthPersonaMappings(
    response: ResponseContext
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthPersonaMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: AWSCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AWSCloudAuthPersonaMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AWSCloudAuthPersonaMappingsResponse;
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
   * @params response Response returned by the server for a request to listGitHubCloudAuthIntakeMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGitHubCloudAuthIntakeMappings(
    response: ResponseContext
  ): Promise<GitHubCloudAuthIntakeMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthIntakeMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthIntakeMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthIntakeMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: GitHubCloudAuthIntakeMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthIntakeMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthIntakeMappingsResponse;
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
   * @params response Response returned by the server for a request to listGitHubCloudAuthPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGitHubCloudAuthPersonaMappings(
    response: ResponseContext
  ): Promise<GitHubCloudAuthPersonaMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthPersonaMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: GitHubCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "GitHubCloudAuthPersonaMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as GitHubCloudAuthPersonaMappingsResponse;
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
   * @params response Response returned by the server for a request to listOIDCCloudAuthPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOIDCCloudAuthPersonaMappings(
    response: ResponseContext
  ): Promise<OIDCCloudAuthPersonaMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OIDCCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OIDCCloudAuthPersonaMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OIDCCloudAuthPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: OIDCCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "OIDCCloudAuthPersonaMappingsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as OIDCCloudAuthPersonaMappingsResponse;
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
   * @params response Response returned by the server for a request to listOIDCCloudAuthProviders
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOIDCCloudAuthProviders(
    response: ResponseContext
  ): Promise<OIDCCloudAuthProvidersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OIDCCloudAuthProvidersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "OIDCCloudAuthProvidersResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as OIDCCloudAuthProvidersResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: OIDCCloudAuthProvidersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "OIDCCloudAuthProvidersResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as OIDCCloudAuthProvidersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CloudAuthenticationApiCreateAWSCloudAuthIntakeMappingRequest {
  /**
   * @type AWSCloudAuthIntakeMappingCreateRequest
   */
  body: AWSCloudAuthIntakeMappingCreateRequest;
}

export interface CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest {
  /**
   * @type AWSCloudAuthPersonaMappingCreateRequest
   */
  body: AWSCloudAuthPersonaMappingCreateRequest;
}

export interface CloudAuthenticationApiCreateGitHubCloudAuthIntakeMappingRequest {
  /**
   * @type GitHubCloudAuthIntakeMappingCreateRequest
   */
  body: GitHubCloudAuthIntakeMappingCreateRequest;
}

export interface CloudAuthenticationApiCreateGitHubCloudAuthPersonaMappingRequest {
  /**
   * @type GitHubCloudAuthPersonaMappingCreateRequest
   */
  body: GitHubCloudAuthPersonaMappingCreateRequest;
}

export interface CloudAuthenticationApiCreateOIDCCloudAuthPersonaMappingRequest {
  /**
   * @type OIDCCloudAuthPersonaMappingCreateRequest
   */
  body: OIDCCloudAuthPersonaMappingCreateRequest;
}

export interface CloudAuthenticationApiCreateOIDCCloudAuthProviderRequest {
  /**
   * @type OIDCCloudAuthProviderCreateRequest
   */
  body: OIDCCloudAuthProviderCreateRequest;
}

export interface CloudAuthenticationApiDeleteAWSCloudAuthIntakeMappingRequest {
  /**
   * The ID of the intake mapping
   * @type string
   */
  intakeMappingId: string;
}

export interface CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiDeleteGitHubCloudAuthIntakeMappingRequest {
  /**
   * The ID of the intake mapping
   * @type string
   */
  intakeMappingId: string;
}

export interface CloudAuthenticationApiDeleteGitHubCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiDeleteOIDCCloudAuthPersonaMappingRequest {
  /**
   * UUID of the Custom OIDC persona mapping.
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiDeleteOIDCCloudAuthProviderRequest {
  /**
   * UUID of the Custom OIDC provider.
   * @type string
   */
  providerId: string;
}

export interface CloudAuthenticationApiGetAWSCloudAuthIntakeMappingRequest {
  /**
   * The ID of the intake mapping
   * @type string
   */
  intakeMappingId: string;
}

export interface CloudAuthenticationApiGetAWSCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiGetGitHubCloudAuthIntakeMappingRequest {
  /**
   * The ID of the intake mapping
   * @type string
   */
  intakeMappingId: string;
}

export interface CloudAuthenticationApiGetGitHubCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiGetOIDCCloudAuthPersonaMappingRequest {
  /**
   * UUID of the Custom OIDC persona mapping.
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiGetOIDCCloudAuthProviderRequest {
  /**
   * UUID of the Custom OIDC provider.
   * @type string
   */
  providerId: string;
}

export class CloudAuthenticationApi {
  private requestFactory: CloudAuthenticationApiRequestFactory;
  private responseProcessor: CloudAuthenticationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CloudAuthenticationApiRequestFactory,
    responseProcessor?: CloudAuthenticationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CloudAuthenticationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new CloudAuthenticationApiResponseProcessor(configuration);
  }

  /**
   * Create an AWS cloud authentication intake mapping to authorize an AWS ARN pattern for Agent authentication. The AWS account must already be integrated with Datadog, and managed API key rotation must be enabled for the organization. Patterns that conflict with existing intake or persona mappings are rejected.
   * @param param The request object
   */
  public createAWSCloudAuthIntakeMapping(
    param: CloudAuthenticationApiCreateAWSCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<AWSCloudAuthIntakeMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createAWSCloudAuthIntakeMapping(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Create an AWS cloud authentication persona mapping. This endpoint associates an AWS IAM principal with a Datadog user.
   * @param param The request object
   */
  public createAWSCloudAuthPersonaMapping(
    param: CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createAWSCloudAuthPersonaMapping(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Create a GitHub cloud authentication intake mapping. This endpoint entitles a matching GitHub Actions OIDC principal to request Datadog API keys.
   * @param param The request object
   */
  public createGitHubCloudAuthIntakeMapping(
    param: CloudAuthenticationApiCreateGitHubCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createGitHubCloudAuthIntakeMapping(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGitHubCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Create a GitHub cloud authentication persona mapping. This endpoint associates a GitHub Actions OIDC principal with a Datadog user. The mapped principal can request an impersonation token.
   * @param param The request object
   */
  public createGitHubCloudAuthPersonaMapping(
    param: CloudAuthenticationApiCreateGitHubCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createGitHubCloudAuthPersonaMapping(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGitHubCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Map token claims from a registered Custom OIDC provider to a Datadog user or service account. The caller must be authorized to map to the target account.
   * @param param The request object
   */
  public createOIDCCloudAuthPersonaMapping(
    param: CloudAuthenticationApiCreateOIDCCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<OIDCCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createOIDCCloudAuthPersonaMapping(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOIDCCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Register an OIDC issuer, signing-key discovery configuration, and accepted audiences. Provider names and issuer URLs must be unique within the organization.
   * @param param The request object
   */
  public createOIDCCloudAuthProvider(
    param: CloudAuthenticationApiCreateOIDCCloudAuthProviderRequest,
    options?: Configuration
  ): Promise<OIDCCloudAuthProviderResponse> {
    const requestContextPromise =
      this.requestFactory.createOIDCCloudAuthProvider(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOIDCCloudAuthProvider(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an AWS cloud authentication intake mapping by ID.
   * @param param The request object
   */
  public deleteAWSCloudAuthIntakeMapping(
    param: CloudAuthenticationApiDeleteAWSCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAWSCloudAuthIntakeMapping(
        param.intakeMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an AWS cloud authentication persona mapping by ID. This removes the association between an AWS IAM principal and a Datadog user.
   * @param param The request object
   */
  public deleteAWSCloudAuthPersonaMapping(
    param: CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAWSCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a GitHub cloud authentication intake mapping by ID. This removes a GitHub Actions OIDC principal's entitlement to request Datadog API keys.
   * @param param The request object
   */
  public deleteGitHubCloudAuthIntakeMapping(
    param: CloudAuthenticationApiDeleteGitHubCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGitHubCloudAuthIntakeMapping(
        param.intakeMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGitHubCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a GitHub cloud authentication persona mapping by ID. This removes the association between a GitHub Actions OIDC principal and a Datadog user.
   * @param param The request object
   */
  public deleteGitHubCloudAuthPersonaMapping(
    param: CloudAuthenticationApiDeleteGitHubCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGitHubCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGitHubCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a Custom OIDC persona mapping.
   * @param param The request object
   */
  public deleteOIDCCloudAuthPersonaMapping(
    param: CloudAuthenticationApiDeleteOIDCCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOIDCCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOIDCCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a Custom OIDC provider. Delete all persona and intake mappings referencing it first; otherwise the request returns a conflict.
   * @param param The request object
   */
  public deleteOIDCCloudAuthProvider(
    param: CloudAuthenticationApiDeleteOIDCCloudAuthProviderRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOIDCCloudAuthProvider(
        param.providerId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOIDCCloudAuthProvider(
            responseContext
          );
        });
    });
  }

  /**
   * Get an AWS cloud authentication intake mapping by ID.
   * @param param The request object
   */
  public getAWSCloudAuthIntakeMapping(
    param: CloudAuthenticationApiGetAWSCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<AWSCloudAuthIntakeMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getAWSCloudAuthIntakeMapping(
        param.intakeMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAWSCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific AWS cloud authentication persona mapping by ID. This endpoint retrieves a single configured persona mapping that associates an AWS IAM principal with a Datadog user.
   * @param param The request object
   */
  public getAWSCloudAuthPersonaMapping(
    param: CloudAuthenticationApiGetAWSCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getAWSCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAWSCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific GitHub cloud authentication intake mapping by ID. This endpoint retrieves a single configured intake mapping that entitles a matching GitHub Actions OIDC principal to request Datadog API keys.
   * @param param The request object
   */
  public getGitHubCloudAuthIntakeMapping(
    param: CloudAuthenticationApiGetGitHubCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getGitHubCloudAuthIntakeMapping(
        param.intakeMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGitHubCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific GitHub cloud authentication persona mapping by ID. This endpoint retrieves a single configured persona mapping that associates a GitHub Actions OIDC principal with a Datadog user. The mapped principal can request an impersonation token.
   * @param param The request object
   */
  public getGitHubCloudAuthPersonaMapping(
    param: CloudAuthenticationApiGetGitHubCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getGitHubCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGitHubCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a Custom OIDC persona mapping by UUID.
   * @param param The request object
   */
  public getOIDCCloudAuthPersonaMapping(
    param: CloudAuthenticationApiGetOIDCCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<OIDCCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getOIDCCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOIDCCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a Custom OIDC provider by UUID.
   * @param param The request object
   */
  public getOIDCCloudAuthProvider(
    param: CloudAuthenticationApiGetOIDCCloudAuthProviderRequest,
    options?: Configuration
  ): Promise<OIDCCloudAuthProviderResponse> {
    const requestContextPromise = this.requestFactory.getOIDCCloudAuthProvider(
      param.providerId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOIDCCloudAuthProvider(
            responseContext
          );
        });
    });
  }

  /**
   * List AWS cloud authentication intake mappings configured for the organization.
   * @param param The request object
   */
  public listAWSCloudAuthIntakeMappings(
    options?: Configuration
  ): Promise<AWSCloudAuthIntakeMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listAWSCloudAuthIntakeMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSCloudAuthIntakeMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List all AWS cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate AWS IAM principals with Datadog users.
   * @param param The request object
   */
  public listAWSCloudAuthPersonaMappings(
    options?: Configuration
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listAWSCloudAuthPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSCloudAuthPersonaMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List all GitHub cloud authentication intake mappings. This endpoint retrieves all configured intake mappings that entitle matching GitHub Actions OIDC principals to request Datadog API keys.
   * @param param The request object
   */
  public listGitHubCloudAuthIntakeMappings(
    options?: Configuration
  ): Promise<GitHubCloudAuthIntakeMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listGitHubCloudAuthIntakeMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGitHubCloudAuthIntakeMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List all GitHub cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate GitHub Actions OpenID Connect (OIDC) principals with Datadog users. Mapped principals can request impersonation tokens.
   * @param param The request object
   */
  public listGitHubCloudAuthPersonaMappings(
    options?: Configuration
  ): Promise<GitHubCloudAuthPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listGitHubCloudAuthPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGitHubCloudAuthPersonaMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List all Custom OIDC persona mappings in the organization.
   * @param param The request object
   */
  public listOIDCCloudAuthPersonaMappings(
    options?: Configuration
  ): Promise<OIDCCloudAuthPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listOIDCCloudAuthPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOIDCCloudAuthPersonaMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List all Custom OIDC providers in the organization.
   * @param param The request object
   */
  public listOIDCCloudAuthProviders(
    options?: Configuration
  ): Promise<OIDCCloudAuthProvidersResponse> {
    const requestContextPromise =
      this.requestFactory.listOIDCCloudAuthProviders(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOIDCCloudAuthProviders(
            responseContext
          );
        });
    });
  }
}
