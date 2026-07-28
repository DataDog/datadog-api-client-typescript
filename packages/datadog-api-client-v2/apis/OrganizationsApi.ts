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
  HttpFile,
} from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { GlobalOrgData } from "../models/GlobalOrgData";
import { GlobalOrgsResponse } from "../models/GlobalOrgsResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ManagedOrgsResponse } from "../models/ManagedOrgsResponse";
import { MaxSessionDurationUpdateRequest } from "../models/MaxSessionDurationUpdateRequest";
import { McpCrossAppAccessIssuerUrlUpdateRequest } from "../models/McpCrossAppAccessIssuerUrlUpdateRequest";
import { OrgConfigGetResponse } from "../models/OrgConfigGetResponse";
import { OrgConfigListResponse } from "../models/OrgConfigListResponse";
import { OrgConfigWriteRequest } from "../models/OrgConfigWriteRequest";
import { OrgSAMLPreferencesUpdateRequest } from "../models/OrgSAMLPreferencesUpdateRequest";
import { SAMLConfigurationResponse } from "../models/SAMLConfigurationResponse";
import { SAMLConfigurationsResponse } from "../models/SAMLConfigurationsResponse";
import { SAMLConfigurationUpdateRequest } from "../models/SAMLConfigurationUpdateRequest";

export class OrganizationsApiRequestFactory extends BaseAPIRequestFactory {
  public async getOrgConfig(
    orgConfigName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgConfigName' is not null or undefined
    if (orgConfigName === null || orgConfigName === undefined) {
      throw new RequiredError("orgConfigName", "getOrgConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/org_configs/{org_config_name}".replace(
      "{org_config_name}",
      encodeURIComponent(String(orgConfigName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.getOrgConfig")
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

  public async getSAMLConfiguration(
    samlConfigUuid: string,
    _options?: Configuration
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
        encodeURIComponent(String(samlConfigUuid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.getSAMLConfiguration")
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

  public async listGlobalOrgs(
    userHandle: string,
    pageLimit?: number,
    pageCursor?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userHandle' is not null or undefined
    if (userHandle === null || userHandle === undefined) {
      throw new RequiredError("userHandle", "listGlobalOrgs");
    }

    // Path Params
    const localVarPath = "/api/v2/global_orgs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.listGlobalOrgs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (userHandle !== undefined) {
      requestContext.setQueryParam(
        "user_handle",
        ObjectSerializer.serialize(userHandle, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32"),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
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

  public async listOrgConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/org_configs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.listOrgConfigs")
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

  public async listOrgs(
    filterName?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/org";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.listOrgs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        ObjectSerializer.serialize(filterName, "string", ""),
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

  public async listSAMLConfigurations(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/saml_configurations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.listSAMLConfigurations")
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

  public async updateLoginOrgConfigsMaxSessionDuration(
    body: MaxSessionDurationUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateLoginOrgConfigsMaxSessionDuration"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/login/org_configs/max_session_duration";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.updateLoginOrgConfigsMaxSessionDuration")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MaxSessionDurationUpdateRequest", ""),
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

  public async updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl(
    body: McpCrossAppAccessIssuerUrlUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/login/org_configs/mcp_cross_app_access_issuer_url";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OrganizationsApi.updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl"
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "McpCrossAppAccessIssuerUrlUpdateRequest",
        ""
      ),
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

  public async updateOrgConfig(
    orgConfigName: string,
    body: OrgConfigWriteRequest,
    _options?: Configuration
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
      encodeURIComponent(String(orgConfigName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.updateOrgConfig")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OrgConfigWriteRequest", ""),
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

  public async updateOrgSamlConfigurations(
    body: OrgSAMLPreferencesUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateOrgSamlConfigurations'");
    if (!_config.unstableOperations["v2.updateOrgSamlConfigurations"]) {
      throw new Error(
        "Unstable operation 'updateOrgSamlConfigurations' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgSamlConfigurations");
    }

    // Path Params
    const localVarPath = "/api/v2/org/saml_configurations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.updateOrgSamlConfigurations")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OrgSAMLPreferencesUpdateRequest", ""),
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

  public async updateSAMLConfiguration(
    samlConfigUuid: string,
    body: SAMLConfigurationUpdateRequest,
    _options?: Configuration
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
        encodeURIComponent(String(samlConfigUuid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.updateSAMLConfiguration")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SAMLConfigurationUpdateRequest", ""),
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

  public async uploadIdPMetadata(
    idpFile?: HttpFile,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/saml_configurations/idp_metadata";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OrganizationsApi.uploadIdPMetadata")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Form Params
    const localVarFormParams = new FormData();
    if (idpFile !== undefined) {
      // TODO: replace .append with .set
      localVarFormParams.append("idp_file", idpFile.data, idpFile.name);
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
    response: ResponseContext
  ): Promise<OrgConfigGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OrgConfigGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConfigGetResponse"
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
      const body: OrgConfigGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConfigGetResponse",
        ""
      ) as OrgConfigGetResponse;
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
   * @params response Response returned by the server for a request to getSAMLConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSAMLConfiguration(
    response: ResponseContext
  ): Promise<SAMLConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SAMLConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SAMLConfigurationResponse"
      ) as SAMLConfigurationResponse;
      return body;
    }
    if (
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
      const body: SAMLConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SAMLConfigurationResponse",
        ""
      ) as SAMLConfigurationResponse;
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
   * @params response Response returned by the server for a request to listGlobalOrgs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGlobalOrgs(
    response: ResponseContext
  ): Promise<GlobalOrgsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GlobalOrgsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalOrgsResponse"
      ) as GlobalOrgsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GlobalOrgsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GlobalOrgsResponse",
        ""
      ) as GlobalOrgsResponse;
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
   * @params response Response returned by the server for a request to listOrgConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgConfigs(
    response: ResponseContext
  ): Promise<OrgConfigListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OrgConfigListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConfigListResponse"
      ) as OrgConfigListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: OrgConfigListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConfigListResponse",
        ""
      ) as OrgConfigListResponse;
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
   * @params response Response returned by the server for a request to listOrgs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgs(
    response: ResponseContext
  ): Promise<ManagedOrgsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ManagedOrgsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ManagedOrgsResponse"
      ) as ManagedOrgsResponse;
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
      const body: ManagedOrgsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ManagedOrgsResponse",
        ""
      ) as ManagedOrgsResponse;
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
   * @params response Response returned by the server for a request to listSAMLConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSAMLConfigurations(
    response: ResponseContext
  ): Promise<SAMLConfigurationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SAMLConfigurationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SAMLConfigurationsResponse"
      ) as SAMLConfigurationsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: SAMLConfigurationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SAMLConfigurationsResponse",
        ""
      ) as SAMLConfigurationsResponse;
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
   * @params response Response returned by the server for a request to updateLoginOrgConfigsMaxSessionDuration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLoginOrgConfigsMaxSessionDuration(
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
   * @params response Response returned by the server for a request to updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl(
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
   * @params response Response returned by the server for a request to updateOrgConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgConfig(
    response: ResponseContext
  ): Promise<OrgConfigGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OrgConfigGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConfigGetResponse"
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
      const body: OrgConfigGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgConfigGetResponse",
        ""
      ) as OrgConfigGetResponse;
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
   * @params response Response returned by the server for a request to updateOrgSamlConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgSamlConfigurations(
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
   * @params response Response returned by the server for a request to updateSAMLConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSAMLConfiguration(
    response: ResponseContext
  ): Promise<SAMLConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SAMLConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SAMLConfigurationResponse"
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
      const body: SAMLConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SAMLConfigurationResponse",
        ""
      ) as SAMLConfigurationResponse;
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
   * @params response Response returned by the server for a request to uploadIdPMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadIdPMetadata(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
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

export interface OrganizationsApiListGlobalOrgsRequest {
  /**
   * The handle of the authenticated user.
   * @type string
   */
  userHandle: string;
  /**
   * Maximum number of results returned.
   * @type number
   */
  pageLimit?: number;
  /**
   * String to query the next page of results.
   * This key is provided with each valid response from the API in `meta.page.next_cursor`.
   * @type string
   */
  pageCursor?: string;
}

export interface OrganizationsApiListOrgsRequest {
  /**
   * Filter managed organizations by name.
   * @type string
   */
  filterName?: string;
}

export interface OrganizationsApiUpdateLoginOrgConfigsMaxSessionDurationRequest {
  /**
   * @type MaxSessionDurationUpdateRequest
   */
  body: MaxSessionDurationUpdateRequest;
}

export interface OrganizationsApiUpdateLoginOrgConfigsMcpCrossAppAccessIssuerUrlRequest {
  /**
   * @type McpCrossAppAccessIssuerUrlUpdateRequest
   */
  body: McpCrossAppAccessIssuerUrlUpdateRequest;
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

  public constructor(
    configuration: Configuration,
    requestFactory?: OrganizationsApiRequestFactory,
    responseProcessor?: OrganizationsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OrganizationsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OrganizationsApiResponseProcessor();
  }

  /**
   * Return the name, description, and value of a specific Org Config.
   * @param param The request object
   */
  public getOrgConfig(
    param: OrganizationsApiGetOrgConfigRequest,
    options?: Configuration
  ): Promise<OrgConfigGetResponse> {
    const requestContextPromise = this.requestFactory.getOrgConfig(
      param.orgConfigName,
      options
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
    options?: Configuration
  ): Promise<SAMLConfigurationResponse> {
    const requestContextPromise = this.requestFactory.getSAMLConfiguration(
      param.samlConfigUuid,
      options
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
   * Returns organizations across regions for the authenticated user. The `user_handle` query parameter must match the authenticated user's handle.
   * @param param The request object
   */
  public listGlobalOrgs(
    param: OrganizationsApiListGlobalOrgsRequest,
    options?: Configuration
  ): Promise<GlobalOrgsResponse> {
    const requestContextPromise = this.requestFactory.listGlobalOrgs(
      param.userHandle,
      param.pageLimit,
      param.pageCursor,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGlobalOrgs(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listGlobalOrgs returning a generator with all the items.
   */
  public async *listGlobalOrgsWithPagination(
    param: OrganizationsApiListGlobalOrgsRequest,
    options?: Configuration
  ): AsyncGenerator<GlobalOrgData> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listGlobalOrgs(
        param.userHandle,
        param.pageLimit,
        param.pageCursor,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listGlobalOrgs(
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
      if (results.length === 0) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageNextCursor = cursorMetaPage.nextCursor;
      if (cursorMetaPageNextCursor === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageNextCursor;
    }
  }

  /**
   * Returns all Org Configs (name, description, and value).
   * @param param The request object
   */
  public listOrgConfigs(
    options?: Configuration
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
    options?: Configuration
  ): Promise<ManagedOrgsResponse> {
    const requestContextPromise = this.requestFactory.listOrgs(
      param.filterName,
      options
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
    options?: Configuration
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
   * Update the maximum session duration for the current organization.
   * The duration is specified in seconds.
   * @param param The request object
   */
  public updateLoginOrgConfigsMaxSessionDuration(
    param: OrganizationsApiUpdateLoginOrgConfigsMaxSessionDurationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateLoginOrgConfigsMaxSessionDuration(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLoginOrgConfigsMaxSessionDuration(
            responseContext
          );
        });
    });
  }

  /**
   * Update the Okta OIDC issuer URL used for MCP Cross-App Access (XAA)
   * for the current organization. The URL must be a bare Okta issuer such
   * as `https://your-subdomain.okta.com` (no path, port, query, or fragment).
   * Provide an empty string to unset the issuer URL and opt the organization
   * out of MCP Cross-App Access.
   * @param param The request object
   */
  public updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl(
    param: OrganizationsApiUpdateLoginOrgConfigsMcpCrossAppAccessIssuerUrlRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl(
            responseContext
          );
        });
    });
  }

  /**
   * Update the value of a specific Org Config.
   * @param param The request object
   */
  public updateOrgConfig(
    param: OrganizationsApiUpdateOrgConfigRequest,
    options?: Configuration
  ): Promise<OrgConfigGetResponse> {
    const requestContextPromise = this.requestFactory.updateOrgConfig(
      param.orgConfigName,
      param.body,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateOrgSamlConfigurations(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgSamlConfigurations(
            responseContext
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
    options?: Configuration
  ): Promise<SAMLConfigurationResponse> {
    const requestContextPromise = this.requestFactory.updateSAMLConfiguration(
      param.samlConfigUuid,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSAMLConfiguration(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.uploadIdPMetadata(
      param.idpFile,
      options
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
