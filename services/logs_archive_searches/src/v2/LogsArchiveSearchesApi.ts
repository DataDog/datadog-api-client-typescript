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
import { ArchiveSearchCreateRequest } from "./models/ArchiveSearchCreateRequest";
import { ArchiveSearchResponse } from "./models/ArchiveSearchResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class LogsArchiveSearchesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("logs-archive-searches", version);
    }
  }
  public async createArchiveSearch(
    body: ArchiveSearchCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsArchiveSearchesApi.v2.createArchiveSearch"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createArchiveSearch' is disabled. Enable it by setting `configuration.unstableOperations['LogsArchiveSearchesApi.v2.createArchiveSearch'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createArchiveSearch");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/archive_searches";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsArchiveSearchesApi.v2.createArchiveSearch",
      LogsArchiveSearchesApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ArchiveSearchCreateRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LogsArchiveSearchesApi.v2.getArchiveSearch"]
    ) {
      throw new Error(
        "Unstable operation 'getArchiveSearch' is disabled. Enable it by setting `configuration.unstableOperations['LogsArchiveSearchesApi.v2.getArchiveSearch'] = true`",
      );
    }

    // verify required parameter 'archiveSearchId' is not null or undefined
    if (archiveSearchId === null || archiveSearchId === undefined) {
      throw new RequiredError("archiveSearchId", "getArchiveSearch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/archive_searches/{archive_search_id}".replace(
        "{archive_search_id}",
        encodeURIComponent(String(archiveSearchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsArchiveSearchesApi.v2.getArchiveSearch",
      LogsArchiveSearchesApi.operationServers,
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
    response: ResponseContext,
  ): Promise<ArchiveSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ArchiveSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArchiveSearchResponse",
      ) as ArchiveSearchResponse;
      return body;
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
      const body: ArchiveSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArchiveSearchResponse",
        "",
      ) as ArchiveSearchResponse;
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
   * @params response Response returned by the server for a request to getArchiveSearch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getArchiveSearch(
    response: ResponseContext,
  ): Promise<ArchiveSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ArchiveSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArchiveSearchResponse",
      ) as ArchiveSearchResponse;
      return body;
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
      const body: ArchiveSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArchiveSearchResponse",
        "",
      ) as ArchiveSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: LogsArchiveSearchesApiRequestFactory,
    responseProcessor?: LogsArchiveSearchesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new LogsArchiveSearchesApiRequestFactory(this.configuration);
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
    options?: Configuration,
  ): Promise<ArchiveSearchResponse> {
    const requestContextPromise = this.requestFactory.createArchiveSearch(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<ArchiveSearchResponse> {
    const requestContextPromise = this.requestFactory.getArchiveSearch(
      param.archiveSearchId,
      options,
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
