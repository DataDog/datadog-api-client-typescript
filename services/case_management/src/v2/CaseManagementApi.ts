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
import { Case } from "./models/Case";
import { CaseAssignRequest } from "./models/CaseAssignRequest";
import { CaseCreateRequest } from "./models/CaseCreateRequest";
import { CaseEmptyRequest } from "./models/CaseEmptyRequest";
import { CaseResponse } from "./models/CaseResponse";
import { CaseSortableField } from "./models/CaseSortableField";
import { CasesResponse } from "./models/CasesResponse";
import { CaseUpdatePriorityRequest } from "./models/CaseUpdatePriorityRequest";
import { CaseUpdateStatusRequest } from "./models/CaseUpdateStatusRequest";
import { ProjectCreateRequest } from "./models/ProjectCreateRequest";
import { ProjectResponse } from "./models/ProjectResponse";
import { ProjectsResponse } from "./models/ProjectsResponse";
import { version } from "../version";

export class CaseManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("case-management", version);
    }
  }
  public async archiveCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "archiveCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "archiveCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/archive".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.archiveCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseEmptyRequest", ""),
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

  public async assignCase(
    caseId: string,
    body: CaseAssignRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "assignCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "assignCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/assign".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.assignCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseAssignRequest", ""),
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

  public async createCase(
    body: CaseCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.createCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseCreateRequest", ""),
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

  public async createProject(
    body: ProjectCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createProject");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.createProject")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ProjectCreateRequest", ""),
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

  public async deleteProject(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "deleteProject");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.deleteProject")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getCase(
    caseId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "getCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.getCase")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async getProject(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getProject");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.getProject")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async getProjects(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cases/projects";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.getProjects")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async searchCases(
    pageSize?: number,
    pageNumber?: number,
    sortField?: CaseSortableField,
    filter?: string,
    sortAsc?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cases";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.searchCases")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    if (sortField !== undefined) {
      requestContext.setQueryParam(
        "sort[field]",
        serialize(sortField, TypingInfo, "CaseSortableField", ""),
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
    if (sortAsc !== undefined) {
      requestContext.setQueryParam(
        "sort[asc]",
        serialize(sortAsc, TypingInfo, "boolean", ""),
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

  public async unarchiveCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "unarchiveCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "unarchiveCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/unarchive".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.unarchiveCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseEmptyRequest", ""),
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

  public async unassignCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "unassignCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "unassignCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/unassign".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.unassignCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseEmptyRequest", ""),
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

  public async updatePriority(
    caseId: string,
    body: CaseUpdatePriorityRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updatePriority");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePriority");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/priority".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.updatePriority")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseUpdatePriorityRequest", ""),
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

  public async updateStatus(
    caseId: string,
    body: CaseUpdateStatusRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateStatus");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateStatus");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/status".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CaseManagementApi.updateStatus")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseUpdateStatusRequest", ""),
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

export class CaseManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to archiveCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async archiveCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to assignCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async assignCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to createCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to createProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createProject(
    response: ResponseContext,
  ): Promise<ProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
      ) as ProjectResponse;
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
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
        "",
      ) as ProjectResponse;
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
   * @params response Response returned by the server for a request to deleteProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteProject(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to getProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProject(response: ResponseContext): Promise<ProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
      ) as ProjectResponse;
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
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
        "",
      ) as ProjectResponse;
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
   * @params response Response returned by the server for a request to getProjects
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProjects(
    response: ResponseContext,
  ): Promise<ProjectsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectsResponse",
      ) as ProjectsResponse;
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
      const body: ProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectsResponse",
        "",
      ) as ProjectsResponse;
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
   * @params response Response returned by the server for a request to searchCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchCases(response: ResponseContext): Promise<CasesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CasesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CasesResponse",
      ) as CasesResponse;
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
      const body: CasesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CasesResponse",
        "",
      ) as CasesResponse;
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
   * @params response Response returned by the server for a request to unarchiveCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unarchiveCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to unassignCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unassignCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updatePriority
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePriority(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateStatus(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CaseManagementApiArchiveCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Archive case payload
   * @type CaseEmptyRequest
   */
  body: CaseEmptyRequest;
}

export interface CaseManagementApiAssignCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Assign case payload
   * @type CaseAssignRequest
   */
  body: CaseAssignRequest;
}

export interface CaseManagementApiCreateCaseRequest {
  /**
   * Case payload
   * @type CaseCreateRequest
   */
  body: CaseCreateRequest;
}

export interface CaseManagementApiCreateProjectRequest {
  /**
   * Project payload
   * @type ProjectCreateRequest
   */
  body: ProjectCreateRequest;
}

export interface CaseManagementApiDeleteProjectRequest {
  /**
   * Project UUID
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiGetCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
}

export interface CaseManagementApiGetProjectRequest {
  /**
   * Project UUID
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiSearchCasesRequest {
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
   * Specify which field to sort
   * @type CaseSortableField
   */
  sortField?: CaseSortableField;
  /**
   * Search query
   * @type string
   */
  filter?: string;
  /**
   * Specify if order is ascending or not
   * @type boolean
   */
  sortAsc?: boolean;
}

export interface CaseManagementApiUnarchiveCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Unarchive case payload
   * @type CaseEmptyRequest
   */
  body: CaseEmptyRequest;
}

export interface CaseManagementApiUnassignCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Unassign case payload
   * @type CaseEmptyRequest
   */
  body: CaseEmptyRequest;
}

export interface CaseManagementApiUpdatePriorityRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case priority update payload
   * @type CaseUpdatePriorityRequest
   */
  body: CaseUpdatePriorityRequest;
}

export interface CaseManagementApiUpdateStatusRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case status update payload
   * @type CaseUpdateStatusRequest
   */
  body: CaseUpdateStatusRequest;
}

export class CaseManagementApi {
  private requestFactory: CaseManagementApiRequestFactory;
  private responseProcessor: CaseManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: CaseManagementApiRequestFactory,
    responseProcessor?: CaseManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new CaseManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CaseManagementApiResponseProcessor();
  }

  /**
   * Archive case
   * @param param The request object
   */
  public archiveCase(
    param: CaseManagementApiArchiveCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.archiveCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.archiveCase(responseContext);
        });
    });
  }

  /**
   * Assign case to a user
   * @param param The request object
   */
  public assignCase(
    param: CaseManagementApiAssignCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.assignCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.assignCase(responseContext);
        });
    });
  }

  /**
   * Create a Case
   * @param param The request object
   */
  public createCase(
    param: CaseManagementApiCreateCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.createCase(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCase(responseContext);
        });
    });
  }

  /**
   * Create a project.
   * @param param The request object
   */
  public createProject(
    param: CaseManagementApiCreateProjectRequest,
    options?: Configuration,
  ): Promise<ProjectResponse> {
    const requestContextPromise = this.requestFactory.createProject(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createProject(responseContext);
        });
    });
  }

  /**
   * Remove a project using the project's `id`.
   * @param param The request object
   */
  public deleteProject(
    param: CaseManagementApiDeleteProjectRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteProject(responseContext);
        });
    });
  }

  /**
   * Get the details of case by `case_id`
   * @param param The request object
   */
  public getCase(
    param: CaseManagementApiGetCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.getCase(
      param.caseId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCase(responseContext);
        });
    });
  }

  /**
   * Get the details of a project by `project_id`.
   * @param param The request object
   */
  public getProject(
    param: CaseManagementApiGetProjectRequest,
    options?: Configuration,
  ): Promise<ProjectResponse> {
    const requestContextPromise = this.requestFactory.getProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProject(responseContext);
        });
    });
  }

  /**
   * Get all projects.
   * @param param The request object
   */
  public getProjects(options?: Configuration): Promise<ProjectsResponse> {
    const requestContextPromise = this.requestFactory.getProjects(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProjects(responseContext);
        });
    });
  }

  /**
   * Search cases.
   * @param param The request object
   */
  public searchCases(
    param: CaseManagementApiSearchCasesRequest = {},
    options?: Configuration,
  ): Promise<CasesResponse> {
    const requestContextPromise = this.requestFactory.searchCases(
      param.pageSize,
      param.pageNumber,
      param.sortField,
      param.filter,
      param.sortAsc,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchCases(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchCases returning a generator with all the items.
   */
  public async *searchCasesWithPagination(
    param: CaseManagementApiSearchCasesRequest = {},
    options?: Configuration,
  ): AsyncGenerator<Case> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.searchCases(
        param.pageSize,
        param.pageNumber,
        param.sortField,
        param.filter,
        param.sortAsc,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchCases(responseContext);
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
   * Unarchive case
   * @param param The request object
   */
  public unarchiveCase(
    param: CaseManagementApiUnarchiveCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.unarchiveCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unarchiveCase(responseContext);
        });
    });
  }

  /**
   * Unassign case
   * @param param The request object
   */
  public unassignCase(
    param: CaseManagementApiUnassignCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.unassignCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unassignCase(responseContext);
        });
    });
  }

  /**
   * Update case priority
   * @param param The request object
   */
  public updatePriority(
    param: CaseManagementApiUpdatePriorityRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updatePriority(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePriority(responseContext);
        });
    });
  }

  /**
   * Update case status
   * @param param The request object
   */
  public updateStatus(
    param: CaseManagementApiUpdateStatusRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateStatus(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateStatus(responseContext);
        });
    });
  }
}
