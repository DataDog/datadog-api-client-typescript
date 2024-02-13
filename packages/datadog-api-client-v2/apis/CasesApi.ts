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
import { Case } from "../models/Case";
import { CaseAssignRequest } from "../models/CaseAssignRequest";
import { CaseCreateRequest } from "../models/CaseCreateRequest";
import { CaseEmptyRequest } from "../models/CaseEmptyRequest";
import { CaseResponse } from "../models/CaseResponse";
import { CaseSortableField } from "../models/CaseSortableField";
import { CasesResponse } from "../models/CasesResponse";
import { CaseUpdatePriorityRequest } from "../models/CaseUpdatePriorityRequest";
import { CaseUpdateStatusRequest } from "../models/CaseUpdateStatusRequest";

export class CasesApiRequestFactory extends BaseAPIRequestFactory {
  public async archiveCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration
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
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.archiveCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CaseEmptyRequest", ""),
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

  public async assignCase(
    caseId: string,
    body: CaseAssignRequest,
    _options?: Configuration
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
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.assignCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CaseAssignRequest", ""),
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

  public async createCase(
    body: CaseCreateRequest,
    _options?: Configuration
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
      .getServer("v2.CasesApi.createCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CaseCreateRequest", ""),
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

  public async getCase(
    caseId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "getCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}".replace(
      "{case_id}",
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.getCase")
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
    pageOffset?: number,
    sortField?: CaseSortableField,
    filter?: string,
    sortAsc?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cases";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.searchCases")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64")
      );
    }
    if (sortField !== undefined) {
      requestContext.setQueryParam(
        "sort[field]",
        ObjectSerializer.serialize(sortField, "CaseSortableField", "")
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", "")
      );
    }
    if (sortAsc !== undefined) {
      requestContext.setQueryParam(
        "sort[asc]",
        ObjectSerializer.serialize(sortAsc, "boolean", "")
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
    _options?: Configuration
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
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.unarchiveCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CaseEmptyRequest", ""),
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

  public async unassignCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration
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
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.unassignCase")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CaseEmptyRequest", ""),
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

  public async updatePriority(
    caseId: string,
    body: CaseUpdatePriorityRequest,
    _options?: Configuration
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
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.updatePriority")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CaseUpdatePriorityRequest", ""),
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

  public async updateStatus(
    caseId: string,
    body: CaseUpdateStatusRequest,
    _options?: Configuration
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
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CasesApi.updateStatus")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CaseUpdateStatusRequest", ""),
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
}

export class CasesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to archiveCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async archiveCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to assignCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async assignCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to createCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to getCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to searchCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchCases(response: ResponseContext): Promise<CasesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CasesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CasesResponse"
      ) as CasesResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CasesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CasesResponse",
        ""
      ) as CasesResponse;
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
   * @params response Response returned by the server for a request to unarchiveCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unarchiveCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to unassignCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unassignCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updatePriority
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePriority(
    response: ResponseContext
  ): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateStatus(response: ResponseContext): Promise<CaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse"
      ) as CaseResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
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
      const body: CaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CaseResponse",
        ""
      ) as CaseResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CasesApiArchiveCaseRequest {
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

export interface CasesApiAssignCaseRequest {
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

export interface CasesApiCreateCaseRequest {
  /**
   * Case payload
   * @type CaseCreateRequest
   */
  body: CaseCreateRequest;
}

export interface CasesApiGetCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
}

export interface CasesApiSearchCasesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
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

export interface CasesApiUnarchiveCaseRequest {
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

export interface CasesApiUnassignCaseRequest {
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

export interface CasesApiUpdatePriorityRequest {
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

export interface CasesApiUpdateStatusRequest {
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

export class CasesApi {
  private requestFactory: CasesApiRequestFactory;
  private responseProcessor: CasesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CasesApiRequestFactory,
    responseProcessor?: CasesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CasesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CasesApiResponseProcessor();
  }

  /**
   * Archive case
   * @param param The request object
   */
  public archiveCase(
    param: CasesApiArchiveCaseRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.archiveCase(
      param.caseId,
      param.body,
      options
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
    param: CasesApiAssignCaseRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.assignCase(
      param.caseId,
      param.body,
      options
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
    param: CasesApiCreateCaseRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.createCase(
      param.body,
      options
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
   * Get the details of case by `case_id`
   * @param param The request object
   */
  public getCase(
    param: CasesApiGetCaseRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.getCase(
      param.caseId,
      options
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
   * Search cases.
   * @param param The request object
   */
  public searchCases(
    param: CasesApiSearchCasesRequest = {},
    options?: Configuration
  ): Promise<CasesResponse> {
    const requestContextPromise = this.requestFactory.searchCases(
      param.pageSize,
      param.pageOffset,
      param.sortField,
      param.filter,
      param.sortAsc,
      options
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
    param: CasesApiSearchCasesRequest = {},
    options?: Configuration
  ): AsyncGenerator<Case> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.searchCases(
        param.pageSize,
        param.pageOffset,
        param.sortField,
        param.filter,
        param.sortAsc,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.searchCases(
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Unarchive case
   * @param param The request object
   */
  public unarchiveCase(
    param: CasesApiUnarchiveCaseRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.unarchiveCase(
      param.caseId,
      param.body,
      options
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
    param: CasesApiUnassignCaseRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.unassignCase(
      param.caseId,
      param.body,
      options
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
    param: CasesApiUpdatePriorityRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updatePriority(
      param.caseId,
      param.body,
      options
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
    param: CasesApiUpdateStatusRequest,
    options?: Configuration
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateStatus(
      param.caseId,
      param.body,
      options
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
