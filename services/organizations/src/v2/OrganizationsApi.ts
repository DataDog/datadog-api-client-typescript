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
  HttpFile,
} from "@datadog/datadog-api-client";

import FormData from "form-data";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ManagedOrgsResponse } from "./models/ManagedOrgsResponse";
import { OrgConfigGetResponse } from "./models/OrgConfigGetResponse";
import { OrgConfigListResponse } from "./models/OrgConfigListResponse";
import { OrgConfigWriteRequest } from "./models/OrgConfigWriteRequest";
import { OrgSAMLPreferencesUpdateRequest } from "./models/OrgSAMLPreferencesUpdateRequest";
import { SAMLConfigurationResponse } from "./models/SAMLConfigurationResponse";
import { SAMLConfigurationsResponse } from "./models/SAMLConfigurationsResponse";
import { SAMLConfigurationUpdateRequest } from "./models/SAMLConfigurationUpdateRequest";
import { version } from "../version";

export class OrganizationsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("organizations", version);
    }
  }
  public async getOrgConfig(
    orgConfigName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgConfigName' is not null or undefined
    if (orgConfigName === null || orgConfigName === undefined) {
      throw new RequiredError("orgConfigName", "getOrgConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/org_configs/{org_config_name}".replace(
      "{org_config_name}",
      encodeURIComponent(String(orgConfigName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.getOrgConfig",
      OrganizationsApi.operationServers,
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

  public async getSAMLConfiguration(
    samlConfigUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'samlConfigUuid' is not null or undefined
    if (samlConfigUuid === null || samlConfigUuid === undefined) {
      throw new RequiredError("samlConfigUuid", "getSAMLConfiguration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/saml_configurations/{saml_config_uuid}".replace(
        "{saml_config_uuid}",
        encodeURIComponent(String(samlConfigUuid)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.getSAMLConfiguration",
      OrganizationsApi.operationServers,
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

  public async listOrgConfigs(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/org_configs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.listOrgConfigs",
      OrganizationsApi.operationServers,
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

  public async listOrgs(
    filterName?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/org";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.listOrgs",
      OrganizationsApi.operationServers,
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

    // Query Params
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
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

  public async listSAMLConfigurations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/saml_configurations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.listSAMLConfigurations",
      OrganizationsApi.operationServers,
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

  public async updateOrgConfig(
    orgConfigName: string,
    body: OrgConfigWriteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgConfigName' is not null or undefined
    if (orgConfigName === null || orgConfigName === undefined) {
      throw new RequiredError("orgConfigName", "updateOrgConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/org_configs/{org_config_name}".replace(
      "{org_config_name}",
      encodeURIComponent(String(orgConfigName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.updateOrgConfig",
      OrganizationsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgConfigWriteRequest", ""),
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

  public async updateOrgSamlConfigurations(
    body: OrgSAMLPreferencesUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OrganizationsApi.v2.updateOrgSamlConfigurations"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateOrgSamlConfigurations' is disabled. Enable it by setting `configuration.unstableOperations['OrganizationsApi.v2.updateOrgSamlConfigurations'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgSamlConfigurations");
    }

    // Path Params
    const localVarPath = "/api/v2/org/saml_configurations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.updateOrgSamlConfigurations",
      OrganizationsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "OrgSAMLPreferencesUpdateRequest", ""),
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

  public async updateSAMLConfiguration(
    samlConfigUuid: string,
    body: SAMLConfigurationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'samlConfigUuid' is not null or undefined
    if (samlConfigUuid === null || samlConfigUuid === undefined) {
      throw new RequiredError("samlConfigUuid", "updateSAMLConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSAMLConfiguration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/saml_configurations/{saml_config_uuid}".replace(
        "{saml_config_uuid}",
        encodeURIComponent(String(samlConfigUuid)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.updateSAMLConfiguration",
      OrganizationsApi.operationServers,
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
      serialize(body, TypingInfo, "SAMLConfigurationUpdateRequest", ""),
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

  public async uploadIdPMetadata(
    idpFile?: HttpFile,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/saml_configurations/idp_metadata";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrganizationsApi.v2.uploadIdPMetadata",
      OrganizationsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Form Params
    const localVarFormParams = new FormData();
    if (idpFile !== undefined) {
      // TODO: replace .append with .set
      localVarFormParams.append("idp_file", idpFile as any);
    }
    requestContext.setBody(localVarFormParams);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class OrganizationsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getOrgConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOrgConfig(
    response: ResponseContext,
  ): Promise<OrgConfigGetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgConfigGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConfigGetResponse",
      ) as OrgConfigGetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgConfigGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConfigGetResponse",
        "",
      ) as OrgConfigGetResponse;
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
   * @params response Response returned by the server for a request to getSAMLConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSAMLConfiguration(
    response: ResponseContext,
  ): Promise<SAMLConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SAMLConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SAMLConfigurationResponse",
      ) as SAMLConfigurationResponse;
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
      const body: SAMLConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SAMLConfigurationResponse",
        "",
      ) as SAMLConfigurationResponse;
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
   * @params response Response returned by the server for a request to listOrgConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgConfigs(
    response: ResponseContext,
  ): Promise<OrgConfigListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgConfigListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConfigListResponse",
      ) as OrgConfigListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgConfigListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConfigListResponse",
        "",
      ) as OrgConfigListResponse;
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
   * @params response Response returned by the server for a request to listOrgs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgs(
    response: ResponseContext,
  ): Promise<ManagedOrgsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ManagedOrgsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ManagedOrgsResponse",
      ) as ManagedOrgsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: ManagedOrgsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ManagedOrgsResponse",
        "",
      ) as ManagedOrgsResponse;
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
   * @params response Response returned by the server for a request to listSAMLConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSAMLConfigurations(
    response: ResponseContext,
  ): Promise<SAMLConfigurationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SAMLConfigurationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SAMLConfigurationsResponse",
      ) as SAMLConfigurationsResponse;
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
      const body: SAMLConfigurationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SAMLConfigurationsResponse",
        "",
      ) as SAMLConfigurationsResponse;
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
   * @params response Response returned by the server for a request to updateOrgConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgConfig(
    response: ResponseContext,
  ): Promise<OrgConfigGetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgConfigGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConfigGetResponse",
      ) as OrgConfigGetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgConfigGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConfigGetResponse",
        "",
      ) as OrgConfigGetResponse;
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
   * @params response Response returned by the server for a request to updateOrgSamlConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgSamlConfigurations(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to updateSAMLConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSAMLConfiguration(
    response: ResponseContext,
  ): Promise<SAMLConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SAMLConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SAMLConfigurationResponse",
      ) as SAMLConfigurationResponse;
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
      const body: SAMLConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SAMLConfigurationResponse",
        "",
      ) as SAMLConfigurationResponse;
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
   * @params response Response returned by the server for a request to uploadIdPMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadIdPMetadata(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
}

export interface OrganizationsApiGetOrgConfigRequest {
  /**
   * The name of an Org Config.
   * @type string
   */
  orgConfigName: string;
}

export interface OrganizationsApiGetSAMLConfigurationRequest {
  /**
   * The UUID of the SAML configuration.
   * @type string
   */
  samlConfigUuid: string;
}

export interface OrganizationsApiListOrgsRequest {
  /**
   * Filter managed organizations by name.
   * @type string
   */
  filterName?: string;
}

export interface OrganizationsApiUpdateOrgConfigRequest {
  /**
   * The name of an Org Config.
   * @type string
   */
  orgConfigName: string;
  /**
   * @type OrgConfigWriteRequest
   */
  body: OrgConfigWriteRequest;
}

export interface OrganizationsApiUpdateOrgSamlConfigurationsRequest {
  /**
   * @type OrgSAMLPreferencesUpdateRequest
   */
  body: OrgSAMLPreferencesUpdateRequest;
}

export interface OrganizationsApiUpdateSAMLConfigurationRequest {
  /**
   * The UUID of the SAML configuration.
   * @type string
   */
  samlConfigUuid: string;
  /**
   * @type SAMLConfigurationUpdateRequest
   */
  body: SAMLConfigurationUpdateRequest;
}

export interface OrganizationsApiUploadIdPMetadataRequest {
  /**
   * The IdP metadata XML file
   * @type HttpFile
   */
  idpFile?: HttpFile;
}

export class OrganizationsApi {
  private requestFactory: OrganizationsApiRequestFactory;
  private responseProcessor: OrganizationsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OrganizationsApiRequestFactory,
    responseProcessor?: OrganizationsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new OrganizationsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OrganizationsApiResponseProcessor();
  }

  /**
   * Return the name, description, and value of a specific Org Config.
   * @param param The request object
   */
  public getOrgConfig(
    param: OrganizationsApiGetOrgConfigRequest,
    options?: Configuration,
  ): Promise<OrgConfigGetResponse> {
    const requestContextPromise = this.requestFactory.getOrgConfig(
      param.orgConfigName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOrgConfig(responseContext);
        });
    });
  }

  /**
   * Get a single SAML configuration for the current organization by its UUID.
   * @param param The request object
   */
  public getSAMLConfiguration(
    param: OrganizationsApiGetSAMLConfigurationRequest,
    options?: Configuration,
  ): Promise<SAMLConfigurationResponse> {
    const requestContextPromise = this.requestFactory.getSAMLConfiguration(
      param.samlConfigUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSAMLConfiguration(responseContext);
        });
    });
  }

  /**
   * Returns all Org Configs (name, description, and value).
   * @param param The request object
   */
  public listOrgConfigs(
    options?: Configuration,
  ): Promise<OrgConfigListResponse> {
    const requestContextPromise = this.requestFactory.listOrgConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgConfigs(responseContext);
        });
    });
  }

  /**
   * Returns the current organization and its managed organizations in JSON:API format.
   * @param param The request object
   */
  public listOrgs(
    param: OrganizationsApiListOrgsRequest = {},
    options?: Configuration,
  ): Promise<ManagedOrgsResponse> {
    const requestContextPromise = this.requestFactory.listOrgs(
      param.filterName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgs(responseContext);
        });
    });
  }

  /**
   * Get the list of SAML configurations for the current organization. An organization has at most one SAML configuration.
   * @param param The request object
   */
  public listSAMLConfigurations(
    options?: Configuration,
  ): Promise<SAMLConfigurationsResponse> {
    const requestContextPromise =
      this.requestFactory.listSAMLConfigurations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSAMLConfigurations(responseContext);
        });
    });
  }

  /**
   * Update the value of a specific Org Config.
   * @param param The request object
   */
  public updateOrgConfig(
    param: OrganizationsApiUpdateOrgConfigRequest,
    options?: Configuration,
  ): Promise<OrgConfigGetResponse> {
    const requestContextPromise = this.requestFactory.updateOrgConfig(
      param.orgConfigName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgConfig(responseContext);
        });
    });
  }

  /**
   * Update the SAML preferences for the current organization.
   *
   * Use this endpoint to set the just-in-time (JIT) provisioning domains and the default role
   * assigned to just-in-time provisioned users.
   * @param param The request object
   */
  public updateOrgSamlConfigurations(
    param: OrganizationsApiUpdateOrgSamlConfigurationsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateOrgSamlConfigurations(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgSamlConfigurations(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a single SAML configuration for the current organization.
   *
   * Use this endpoint to enable or disable identity-provider-initiated login, set the
   * just-in-time provisioning domains, and set the default role assigned to
   * just-in-time provisioned users. A default role is required to enable just-in-time provisioning.
   * @param param The request object
   */
  public updateSAMLConfiguration(
    param: OrganizationsApiUpdateSAMLConfigurationRequest,
    options?: Configuration,
  ): Promise<SAMLConfigurationResponse> {
    const requestContextPromise = this.requestFactory.updateSAMLConfiguration(
      param.samlConfigUuid,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSAMLConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Endpoint for uploading IdP metadata for SAML setup.
   *
   * Use this endpoint to upload or replace IdP metadata for SAML login configuration.
   * @param param The request object
   */
  public uploadIdPMetadata(
    param: OrganizationsApiUploadIdPMetadataRequest = {},
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.uploadIdPMetadata(
      param.idpFile,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadIdPMetadata(responseContext);
        });
    });
  }
}
