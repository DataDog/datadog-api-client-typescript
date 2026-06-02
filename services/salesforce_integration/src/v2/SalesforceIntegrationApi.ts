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
import { SalesforceIncidentsOrganizationsResponse } from "./models/SalesforceIncidentsOrganizationsResponse";
import { SalesforceIncidentsTemplateCreateRequest } from "./models/SalesforceIncidentsTemplateCreateRequest";
import { SalesforceIncidentsTemplateResponse } from "./models/SalesforceIncidentsTemplateResponse";
import { SalesforceIncidentsTemplatesResponse } from "./models/SalesforceIncidentsTemplatesResponse";
import { SalesforceIncidentsTemplateUpdateRequest } from "./models/SalesforceIncidentsTemplateUpdateRequest";
import { version } from "../version";

export class SalesforceIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("salesforce-integration", version);
    }
  }
  public async createIncidentTemplate(
    body: SalesforceIncidentsTemplateCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/salesforce-incidents/incident-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SalesforceIntegrationApi.v2.createIncidentTemplate",
      SalesforceIntegrationApi.operationServers,
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
        "SalesforceIncidentsTemplateCreateRequest",
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

  public async deleteIncidentTemplate(
    incidentTemplateId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'incidentTemplateId' is not null or undefined
    if (incidentTemplateId === null || incidentTemplateId === undefined) {
      throw new RequiredError("incidentTemplateId", "deleteIncidentTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/salesforce-incidents/incident-templates/{incident_template_id}".replace(
        "{incident_template_id}",
        encodeURIComponent(String(incidentTemplateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SalesforceIntegrationApi.v2.deleteIncidentTemplate",
      SalesforceIntegrationApi.operationServers,
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

  public async deleteSalesforceOrganization(
    salesforceOrgId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'salesforceOrgId' is not null or undefined
    if (salesforceOrgId === null || salesforceOrgId === undefined) {
      throw new RequiredError(
        "salesforceOrgId",
        "deleteSalesforceOrganization",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/salesforce-incidents/organizations/{salesforce_org_id}".replace(
        "{salesforce_org_id}",
        encodeURIComponent(String(salesforceOrgId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SalesforceIntegrationApi.v2.deleteSalesforceOrganization",
      SalesforceIntegrationApi.operationServers,
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

  public async getIncidentTemplates(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/integration/salesforce-incidents/incident-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SalesforceIntegrationApi.v2.getIncidentTemplates",
      SalesforceIntegrationApi.operationServers,
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

  public async getSalesforceOrganizations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/integration/salesforce-incidents/organizations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SalesforceIntegrationApi.v2.getSalesforceOrganizations",
      SalesforceIntegrationApi.operationServers,
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

  public async updateIncidentTemplate(
    incidentTemplateId: string,
    body: SalesforceIncidentsTemplateUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'incidentTemplateId' is not null or undefined
    if (incidentTemplateId === null || incidentTemplateId === undefined) {
      throw new RequiredError("incidentTemplateId", "updateIncidentTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/salesforce-incidents/incident-templates/{incident_template_id}".replace(
        "{incident_template_id}",
        encodeURIComponent(String(incidentTemplateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SalesforceIntegrationApi.v2.updateIncidentTemplate",
      SalesforceIntegrationApi.operationServers,
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
        "SalesforceIncidentsTemplateUpdateRequest",
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

export class SalesforceIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createIncidentTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentTemplate(
    response: ResponseContext,
  ): Promise<SalesforceIncidentsTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: SalesforceIncidentsTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsTemplateResponse",
      ) as SalesforceIncidentsTemplateResponse;
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
      const body: SalesforceIncidentsTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsTemplateResponse",
        "",
      ) as SalesforceIncidentsTemplateResponse;
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
   * @params response Response returned by the server for a request to deleteIncidentTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentTemplate(
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
   * @params response Response returned by the server for a request to deleteSalesforceOrganization
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSalesforceOrganization(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getIncidentTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentTemplates(
    response: ResponseContext,
  ): Promise<SalesforceIncidentsTemplatesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SalesforceIncidentsTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsTemplatesResponse",
      ) as SalesforceIncidentsTemplatesResponse;
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
      const body: SalesforceIncidentsTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsTemplatesResponse",
        "",
      ) as SalesforceIncidentsTemplatesResponse;
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
   * @params response Response returned by the server for a request to getSalesforceOrganizations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSalesforceOrganizations(
    response: ResponseContext,
  ): Promise<SalesforceIncidentsOrganizationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SalesforceIncidentsOrganizationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsOrganizationsResponse",
      ) as SalesforceIncidentsOrganizationsResponse;
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
      const body: SalesforceIncidentsOrganizationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsOrganizationsResponse",
        "",
      ) as SalesforceIncidentsOrganizationsResponse;
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
   * @params response Response returned by the server for a request to updateIncidentTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentTemplate(
    response: ResponseContext,
  ): Promise<SalesforceIncidentsTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SalesforceIncidentsTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsTemplateResponse",
      ) as SalesforceIncidentsTemplateResponse;
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
      const body: SalesforceIncidentsTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SalesforceIncidentsTemplateResponse",
        "",
      ) as SalesforceIncidentsTemplateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SalesforceIntegrationApiCreateIncidentTemplateRequest {
  /**
   * Salesforce incident template payload.
   * @type SalesforceIncidentsTemplateCreateRequest
   */
  body: SalesforceIncidentsTemplateCreateRequest;
}

export interface SalesforceIntegrationApiDeleteIncidentTemplateRequest {
  /**
   * The ID of the Salesforce incident template.
   * @type string
   */
  incidentTemplateId: string;
}

export interface SalesforceIntegrationApiDeleteSalesforceOrganizationRequest {
  /**
   * The Datadog-assigned ID of the connected Salesforce organization.
   * @type string
   */
  salesforceOrgId: string;
}

export interface SalesforceIntegrationApiUpdateIncidentTemplateRequest {
  /**
   * The ID of the Salesforce incident template.
   * @type string
   */
  incidentTemplateId: string;
  /**
   * Salesforce incident template payload.
   * @type SalesforceIncidentsTemplateUpdateRequest
   */
  body: SalesforceIncidentsTemplateUpdateRequest;
}

export class SalesforceIntegrationApi {
  private requestFactory: SalesforceIntegrationApiRequestFactory;
  private responseProcessor: SalesforceIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SalesforceIntegrationApiRequestFactory,
    responseProcessor?: SalesforceIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new SalesforceIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SalesforceIntegrationApiResponseProcessor();
  }

  /**
   * Create a new Salesforce incident template for your organization. Template
   * names must be unique within an organization.
   * @param param The request object
   */
  public createIncidentTemplate(
    param: SalesforceIntegrationApiCreateIncidentTemplateRequest,
    options?: Configuration,
  ): Promise<SalesforceIncidentsTemplateResponse> {
    const requestContextPromise = this.requestFactory.createIncidentTemplate(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentTemplate(responseContext);
        });
    });
  }

  /**
   * Delete a single Salesforce incident template from your organization.
   * @param param The request object
   */
  public deleteIncidentTemplate(
    param: SalesforceIntegrationApiDeleteIncidentTemplateRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentTemplate(
      param.incidentTemplateId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentTemplate(responseContext);
        });
    });
  }

  /**
   * Disconnect a Salesforce organization from your Datadog organization.
   * This also deletes any incident templates referencing the organization.
   * @param param The request object
   */
  public deleteSalesforceOrganization(
    param: SalesforceIntegrationApiDeleteSalesforceOrganizationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSalesforceOrganization(
        param.salesforceOrgId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSalesforceOrganization(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all Salesforce incident templates configured for your organization.
   * @param param The request object
   */
  public getIncidentTemplates(
    options?: Configuration,
  ): Promise<SalesforceIncidentsTemplatesResponse> {
    const requestContextPromise =
      this.requestFactory.getIncidentTemplates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentTemplates(responseContext);
        });
    });
  }

  /**
   * Get all Salesforce organizations connected to your Datadog organization
   * through the Salesforce integration. Salesforce organizations are connected
   * through the OAuth setup flow in the Datadog Salesforce integration page.
   * @param param The request object
   */
  public getSalesforceOrganizations(
    options?: Configuration,
  ): Promise<SalesforceIncidentsOrganizationsResponse> {
    const requestContextPromise =
      this.requestFactory.getSalesforceOrganizations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSalesforceOrganizations(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a single Salesforce incident template in your organization.
   * @param param The request object
   */
  public updateIncidentTemplate(
    param: SalesforceIntegrationApiUpdateIncidentTemplateRequest,
    options?: Configuration,
  ): Promise<SalesforceIncidentsTemplateResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentTemplate(
      param.incidentTemplateId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentTemplate(responseContext);
        });
    });
  }
}
