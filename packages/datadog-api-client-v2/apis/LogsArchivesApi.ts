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
import { LogsArchive } from "../models/LogsArchive";
import { LogsArchiveCreateRequest } from "../models/LogsArchiveCreateRequest";
import { LogsArchiveOrder } from "../models/LogsArchiveOrder";
import { LogsArchives } from "../models/LogsArchives";
import { RelationshipToRole } from "../models/RelationshipToRole";
import { RolesResponse } from "../models/RolesResponse";

export class LogsArchivesApiRequestFactory extends BaseAPIRequestFactory {
  public async addReadRoleToArchive(
    archiveId: string,
    body: RelationshipToRole,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'archiveId' is not null or undefined
    if (archiveId === null || archiveId === undefined) {
      throw new RequiredError("archiveId", "addReadRoleToArchive");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "addReadRoleToArchive");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/archives/{archive_id}/readers".replace(
        "{archive_id}",
        encodeURIComponent(String(archiveId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.addReadRoleToArchive")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RelationshipToRole", ""),
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

  public async createLogsArchive(
    body: LogsArchiveCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLogsArchive");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/archives";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.createLogsArchive")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsArchiveCreateRequest", ""),
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

  public async deleteLogsArchive(
    archiveId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'archiveId' is not null or undefined
    if (archiveId === null || archiveId === undefined) {
      throw new RequiredError("archiveId", "deleteLogsArchive");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/archives/{archive_id}".replace(
      "{archive_id}",
      encodeURIComponent(String(archiveId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.deleteLogsArchive")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLogsArchive(
    archiveId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'archiveId' is not null or undefined
    if (archiveId === null || archiveId === undefined) {
      throw new RequiredError("archiveId", "getLogsArchive");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/archives/{archive_id}".replace(
      "{archive_id}",
      encodeURIComponent(String(archiveId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.getLogsArchive")
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

  public async getLogsArchiveOrder(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/config/archive-order";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.getLogsArchiveOrder")
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

  public async listArchiveReadRoles(
    archiveId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'archiveId' is not null or undefined
    if (archiveId === null || archiveId === undefined) {
      throw new RequiredError("archiveId", "listArchiveReadRoles");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/archives/{archive_id}/readers".replace(
        "{archive_id}",
        encodeURIComponent(String(archiveId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.listArchiveReadRoles")
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

  public async listLogsArchives(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/config/archives";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.listLogsArchives")
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

  public async removeRoleFromArchive(
    archiveId: string,
    body: RelationshipToRole,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'archiveId' is not null or undefined
    if (archiveId === null || archiveId === undefined) {
      throw new RequiredError("archiveId", "removeRoleFromArchive");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "removeRoleFromArchive");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/archives/{archive_id}/readers".replace(
        "{archive_id}",
        encodeURIComponent(String(archiveId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.removeRoleFromArchive")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RelationshipToRole", ""),
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

  public async updateLogsArchive(
    archiveId: string,
    body: LogsArchiveCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'archiveId' is not null or undefined
    if (archiveId === null || archiveId === undefined) {
      throw new RequiredError("archiveId", "updateLogsArchive");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLogsArchive");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/archives/{archive_id}".replace(
      "{archive_id}",
      encodeURIComponent(String(archiveId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.updateLogsArchive")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsArchiveCreateRequest", ""),
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

  public async updateLogsArchiveOrder(
    body: LogsArchiveOrder,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLogsArchiveOrder");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/archive-order";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchivesApi.updateLogsArchiveOrder")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsArchiveOrder", ""),
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

export class LogsArchivesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addReadRoleToArchive
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addReadRoleToArchive(response: ResponseContext): Promise<void> {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to createLogsArchive
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLogsArchive(
    response: ResponseContext
  ): Promise<LogsArchive> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsArchive = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchive"
      ) as LogsArchive;
      return body;
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
      const body: LogsArchive = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchive",
        ""
      ) as LogsArchive;
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
   * @params response Response returned by the server for a request to deleteLogsArchive
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLogsArchive(response: ResponseContext): Promise<void> {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getLogsArchive
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsArchive(response: ResponseContext): Promise<LogsArchive> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsArchive = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchive"
      ) as LogsArchive;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LogsArchive = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchive",
        ""
      ) as LogsArchive;
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
   * @params response Response returned by the server for a request to getLogsArchiveOrder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsArchiveOrder(
    response: ResponseContext
  ): Promise<LogsArchiveOrder> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsArchiveOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchiveOrder"
      ) as LogsArchiveOrder;
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
      const body: LogsArchiveOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchiveOrder",
        ""
      ) as LogsArchiveOrder;
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
   * @params response Response returned by the server for a request to listArchiveReadRoles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listArchiveReadRoles(
    response: ResponseContext
  ): Promise<RolesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RolesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RolesResponse"
      ) as RolesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: RolesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RolesResponse",
        ""
      ) as RolesResponse;
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
   * @params response Response returned by the server for a request to listLogsArchives
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsArchives(
    response: ResponseContext
  ): Promise<LogsArchives> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsArchives = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchives"
      ) as LogsArchives;
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
      const body: LogsArchives = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchives",
        ""
      ) as LogsArchives;
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
   * @params response Response returned by the server for a request to removeRoleFromArchive
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeRoleFromArchive(response: ResponseContext): Promise<void> {
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to updateLogsArchive
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsArchive(
    response: ResponseContext
  ): Promise<LogsArchive> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsArchive = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchive"
      ) as LogsArchive;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LogsArchive = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchive",
        ""
      ) as LogsArchive;
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
   * @params response Response returned by the server for a request to updateLogsArchiveOrder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsArchiveOrder(
    response: ResponseContext
  ): Promise<LogsArchiveOrder> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsArchiveOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchiveOrder"
      ) as LogsArchiveOrder;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: LogsArchiveOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsArchiveOrder",
        ""
      ) as LogsArchiveOrder;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface LogsArchivesApiAddReadRoleToArchiveRequest {
  /**
   * The ID of the archive.
   * @type string
   */
  archiveId: string;
  /**
   * @type RelationshipToRole
   */
  body: RelationshipToRole;
}

export interface LogsArchivesApiCreateLogsArchiveRequest {
  /**
   * The definition of the new archive.
   * @type LogsArchiveCreateRequest
   */
  body: LogsArchiveCreateRequest;
}

export interface LogsArchivesApiDeleteLogsArchiveRequest {
  /**
   * The ID of the archive.
   * @type string
   */
  archiveId: string;
}

export interface LogsArchivesApiGetLogsArchiveRequest {
  /**
   * The ID of the archive.
   * @type string
   */
  archiveId: string;
}

export interface LogsArchivesApiListArchiveReadRolesRequest {
  /**
   * The ID of the archive.
   * @type string
   */
  archiveId: string;
}

export interface LogsArchivesApiRemoveRoleFromArchiveRequest {
  /**
   * The ID of the archive.
   * @type string
   */
  archiveId: string;
  /**
   * @type RelationshipToRole
   */
  body: RelationshipToRole;
}

export interface LogsArchivesApiUpdateLogsArchiveRequest {
  /**
   * The ID of the archive.
   * @type string
   */
  archiveId: string;
  /**
   * New definition of the archive.
   * @type LogsArchiveCreateRequest
   */
  body: LogsArchiveCreateRequest;
}

export interface LogsArchivesApiUpdateLogsArchiveOrderRequest {
  /**
   * An object containing the new ordered list of archive IDs.
   * @type LogsArchiveOrder
   */
  body: LogsArchiveOrder;
}

export class LogsArchivesApi {
  private requestFactory: LogsArchivesApiRequestFactory;
  private responseProcessor: LogsArchivesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsArchivesApiRequestFactory,
    responseProcessor?: LogsArchivesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsArchivesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsArchivesApiResponseProcessor();
  }

  /**
   * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
   * @param param The request object
   */
  public addReadRoleToArchive(
    param: LogsArchivesApiAddReadRoleToArchiveRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.addReadRoleToArchive(
      param.archiveId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addReadRoleToArchive(responseContext);
        });
    });
  }

  /**
   * Create an archive in your organization.
   * @param param The request object
   */
  public createLogsArchive(
    param: LogsArchivesApiCreateLogsArchiveRequest,
    options?: Configuration
  ): Promise<LogsArchive> {
    const requestContextPromise = this.requestFactory.createLogsArchive(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsArchive(responseContext);
        });
    });
  }

  /**
   * Delete a given archive from your organization.
   * @param param The request object
   */
  public deleteLogsArchive(
    param: LogsArchivesApiDeleteLogsArchiveRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLogsArchive(
      param.archiveId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLogsArchive(responseContext);
        });
    });
  }

  /**
   * Get a specific archive from your organization.
   * @param param The request object
   */
  public getLogsArchive(
    param: LogsArchivesApiGetLogsArchiveRequest,
    options?: Configuration
  ): Promise<LogsArchive> {
    const requestContextPromise = this.requestFactory.getLogsArchive(
      param.archiveId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsArchive(responseContext);
        });
    });
  }

  /**
   * Get the current order of your archives.
   * This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsArchiveOrder(
    options?: Configuration
  ): Promise<LogsArchiveOrder> {
    const requestContextPromise =
      this.requestFactory.getLogsArchiveOrder(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsArchiveOrder(responseContext);
        });
    });
  }

  /**
   * Returns all read roles a given archive is restricted to.
   * @param param The request object
   */
  public listArchiveReadRoles(
    param: LogsArchivesApiListArchiveReadRolesRequest,
    options?: Configuration
  ): Promise<RolesResponse> {
    const requestContextPromise = this.requestFactory.listArchiveReadRoles(
      param.archiveId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listArchiveReadRoles(responseContext);
        });
    });
  }

  /**
   * Get the list of configured logs archives with their definitions.
   * @param param The request object
   */
  public listLogsArchives(options?: Configuration): Promise<LogsArchives> {
    const requestContextPromise = this.requestFactory.listLogsArchives(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogsArchives(responseContext);
        });
    });
  }

  /**
   * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
   * @param param The request object
   */
  public removeRoleFromArchive(
    param: LogsArchivesApiRemoveRoleFromArchiveRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.removeRoleFromArchive(
      param.archiveId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeRoleFromArchive(responseContext);
        });
    });
  }

  /**
   * Update a given archive configuration.
   *
   * **Note**: Using this method updates your archive configuration by **replacing**
   * your current configuration with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public updateLogsArchive(
    param: LogsArchivesApiUpdateLogsArchiveRequest,
    options?: Configuration
  ): Promise<LogsArchive> {
    const requestContextPromise = this.requestFactory.updateLogsArchive(
      param.archiveId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsArchive(responseContext);
        });
    });
  }

  /**
   * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change
   * the structure and content of the data processed by other archives.
   *
   * **Note**: Using the `PUT` method updates your archive's order by replacing the current order
   * with the new one.
   * @param param The request object
   */
  public updateLogsArchiveOrder(
    param: LogsArchivesApiUpdateLogsArchiveOrderRequest,
    options?: Configuration
  ): Promise<LogsArchiveOrder> {
    const requestContextPromise = this.requestFactory.updateLogsArchiveOrder(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsArchiveOrder(responseContext);
        });
    });
  }
}
