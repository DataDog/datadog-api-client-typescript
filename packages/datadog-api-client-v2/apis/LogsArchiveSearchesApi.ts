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
import { ArchiveSearchResponse } from "../models/ArchiveSearchResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class LogsArchiveSearchesApiRequestFactory extends BaseAPIRequestFactory {
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
}

export class LogsArchiveSearchesApiResponseProcessor {
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
}
