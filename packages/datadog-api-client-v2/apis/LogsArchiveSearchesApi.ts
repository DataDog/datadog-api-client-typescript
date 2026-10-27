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
import { ArchiveSearchCreateRequest } from "../models/ArchiveSearchCreateRequest";
import { ArchiveSearchListResponse } from "../models/ArchiveSearchListResponse";
import { ArchiveSearchRehydrateRequest } from "../models/ArchiveSearchRehydrateRequest";
import { ArchiveSearchResponse } from "../models/ArchiveSearchResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class LogsArchiveSearchesApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelArchiveSearch(
    archiveSearchId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cancelArchiveSearch'");
    if (!_config.unstableOperations["v2.cancelArchiveSearch"]) {
      throw new Error("Unstable operation 'cancelArchiveSearch' is disabled");
    }

    // verify required parameter 'archiveSearchId' is not null or undefined
    if (archiveSearchId === null || archiveSearchId === undefined) {
      throw new RequiredError("archiveSearchId", "cancelArchiveSearch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/archive_searches/{archive_search_id}/cancel".replace(
        "{archive_search_id}",
        encodeURIComponent(String(archiveSearchId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchiveSearchesApi.cancelArchiveSearch")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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

  public async createArchiveSearch(
    body: ArchiveSearchCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createArchiveSearch'");
    if (!_config.unstableOperations["v2.createArchiveSearch"]) {
      throw new Error("Unstable operation 'createArchiveSearch' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createArchiveSearch");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/archive_searches";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchiveSearchesApi.createArchiveSearch")
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
      ObjectSerializer.serialize(body, "ArchiveSearchCreateRequest", ""),
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

  public async getArchiveSearch(
    archiveSearchId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getArchiveSearch'");
    if (!_config.unstableOperations["v2.getArchiveSearch"]) {
      throw new Error("Unstable operation 'getArchiveSearch' is disabled");
    }

    // verify required parameter 'archiveSearchId' is not null or undefined
    if (archiveSearchId === null || archiveSearchId === undefined) {
      throw new RequiredError("archiveSearchId", "getArchiveSearch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/archive_searches/{archive_search_id}".replace(
        "{archive_search_id}",
        encodeURIComponent(String(archiveSearchId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchiveSearchesApi.getArchiveSearch")
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

  public async listArchiveSearches(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listArchiveSearches'");
    if (!_config.unstableOperations["v2.listArchiveSearches"]) {
      throw new Error("Unstable operation 'listArchiveSearches' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/archive_searches";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchiveSearchesApi.listArchiveSearches")
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

  public async rehydrateArchiveSearch(
    archiveSearchId: string,
    body: ArchiveSearchRehydrateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'rehydrateArchiveSearch'");
    if (!_config.unstableOperations["v2.rehydrateArchiveSearch"]) {
      throw new Error(
        "Unstable operation 'rehydrateArchiveSearch' is disabled"
      );
    }

    // verify required parameter 'archiveSearchId' is not null or undefined
    if (archiveSearchId === null || archiveSearchId === undefined) {
      throw new RequiredError("archiveSearchId", "rehydrateArchiveSearch");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "rehydrateArchiveSearch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/archive_searches/{archive_search_id}".replace(
        "{archive_search_id}",
        encodeURIComponent(String(archiveSearchId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsArchiveSearchesApi.rehydrateArchiveSearch")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      ObjectSerializer.serialize(body, "ArchiveSearchRehydrateRequest", ""),
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
}

export class LogsArchiveSearchesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelArchiveSearch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelArchiveSearch(
    response: ResponseContext
  ): Promise<ArchiveSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse"
      ) as ArchiveSearchResponse;
      return body;
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
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse",
        ""
      ) as ArchiveSearchResponse;
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
   * @params response Response returned by the server for a request to createArchiveSearch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createArchiveSearch(
    response: ResponseContext
  ): Promise<ArchiveSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse"
      ) as ArchiveSearchResponse;
      return body;
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
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse",
        ""
      ) as ArchiveSearchResponse;
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
   * @params response Response returned by the server for a request to getArchiveSearch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getArchiveSearch(
    response: ResponseContext
  ): Promise<ArchiveSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse"
      ) as ArchiveSearchResponse;
      return body;
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
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse",
        ""
      ) as ArchiveSearchResponse;
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
   * @params response Response returned by the server for a request to listArchiveSearches
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listArchiveSearches(
    response: ResponseContext
  ): Promise<ArchiveSearchListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArchiveSearchListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchListResponse"
      ) as ArchiveSearchListResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: ArchiveSearchListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchListResponse",
        ""
      ) as ArchiveSearchListResponse;
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
   * @params response Response returned by the server for a request to rehydrateArchiveSearch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async rehydrateArchiveSearch(
    response: ResponseContext
  ): Promise<ArchiveSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse"
      ) as ArchiveSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 412
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
      const body: ArchiveSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ArchiveSearchResponse",
        ""
      ) as ArchiveSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface LogsArchiveSearchesApiCancelArchiveSearchRequest {
  /**
   * Unique identifier of the Archive Search.
   * @type string
   */
  archiveSearchId: string;
}

export interface LogsArchiveSearchesApiCreateArchiveSearchRequest {
  /**
   * @type ArchiveSearchCreateRequest
   */
  body: ArchiveSearchCreateRequest;
}

export interface LogsArchiveSearchesApiGetArchiveSearchRequest {
  /**
   * Unique identifier of the Archive Search.
   * @type string
   */
  archiveSearchId: string;
}

export interface LogsArchiveSearchesApiRehydrateArchiveSearchRequest {
  /**
   * Unique identifier of the Archive Search.
   * @type string
   */
  archiveSearchId: string;
  /**
   * @type ArchiveSearchRehydrateRequest
   */
  body: ArchiveSearchRehydrateRequest;
}

export class LogsArchiveSearchesApi {
  private requestFactory: LogsArchiveSearchesApiRequestFactory;
  private responseProcessor: LogsArchiveSearchesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsArchiveSearchesApiRequestFactory,
    responseProcessor?: LogsArchiveSearchesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsArchiveSearchesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsArchiveSearchesApiResponseProcessor();
  }

  /**
   * Cancel a running Archive Search. Cancelling an Archive Search that has already finished is a
   * no-op: it returns the resource unchanged instead of returning an error.
   * @param param The request object
   */
  public cancelArchiveSearch(
    param: LogsArchiveSearchesApiCancelArchiveSearchRequest,
    options?: Configuration
  ): Promise<ArchiveSearchResponse> {
    const requestContextPromise = this.requestFactory.cancelArchiveSearch(
      param.archiveSearchId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelArchiveSearch(responseContext);
        });
    });
  }

  /**
   * Start a search over the logs stored in an archive.
   *
   * Without a `rehydration` object, the search only scans the archive and reports how much data
   * matched. With one, the matched logs are also indexed into a retained historical view, which
   * requires the `logs_write_historical_view` permission.
   * @param param The request object
   */
  public createArchiveSearch(
    param: LogsArchiveSearchesApiCreateArchiveSearchRequest,
    options?: Configuration
  ): Promise<ArchiveSearchResponse> {
    const requestContextPromise = this.requestFactory.createArchiveSearch(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createArchiveSearch(responseContext);
        });
    });
  }

  /**
   * Get a single Archive Search, including its status and the amount of archive data scanned when the search finishes.
   * @param param The request object
   */
  public getArchiveSearch(
    param: LogsArchiveSearchesApiGetArchiveSearchRequest,
    options?: Configuration
  ): Promise<ArchiveSearchResponse> {
    const requestContextPromise = this.requestFactory.getArchiveSearch(
      param.archiveSearchId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getArchiveSearch(responseContext);
        });
    });
  }

  /**
   * List the organization's Archive Searches that haven't expired, up to 5,000. When more
   * exist, `meta.truncated` is `true`.
   * @param param The request object
   */
  public listArchiveSearches(
    options?: Configuration
  ): Promise<ArchiveSearchListResponse> {
    const requestContextPromise =
      this.requestFactory.listArchiveSearches(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listArchiveSearches(responseContext);
        });
    });
  }

  /**
   * Turn a plain Archive Search into a Search & Rehydration by indexing the matched logs into a
   * retained historical view. Rehydration is the only thing this endpoint can change, and it only
   * applies to a search that has already finished scanning.
   * @param param The request object
   */
  public rehydrateArchiveSearch(
    param: LogsArchiveSearchesApiRehydrateArchiveSearchRequest,
    options?: Configuration
  ): Promise<ArchiveSearchResponse> {
    const requestContextPromise = this.requestFactory.rehydrateArchiveSearch(
      param.archiveSearchId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.rehydrateArchiveSearch(responseContext);
        });
    });
  }
}
