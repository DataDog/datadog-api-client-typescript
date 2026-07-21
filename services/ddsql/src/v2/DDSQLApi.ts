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
import { DdsqlTabularQueryFetchRequest } from "./models/DdsqlTabularQueryFetchRequest";
import { DdsqlTabularQueryRequest } from "./models/DdsqlTabularQueryRequest";
import { DdsqlTabularQueryResponse } from "./models/DdsqlTabularQueryResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class DDSQLApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("ddsql", version);
    }
  }
  public async executeDdsqlTabularQuery(
    body: DdsqlTabularQueryRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["DDSQLApi.v2.executeDdsqlTabularQuery"]) {
      throw new Error(
        "Unstable operation 'executeDdsqlTabularQuery' is disabled. Enable it by setting `configuration.unstableOperations['DDSQLApi.v2.executeDdsqlTabularQuery'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "executeDdsqlTabularQuery");
    }

    // Path Params
    const localVarPath = "/api/v2/ddsql/query/tabular";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DDSQLApi.v2.executeDdsqlTabularQuery",
      DDSQLApi.operationServers,
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
      serialize(body, TypingInfo, "DdsqlTabularQueryRequest", ""),
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

  public async fetchDdsqlTabularQuery(
    body: DdsqlTabularQueryFetchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["DDSQLApi.v2.fetchDdsqlTabularQuery"]) {
      throw new Error(
        "Unstable operation 'fetchDdsqlTabularQuery' is disabled. Enable it by setting `configuration.unstableOperations['DDSQLApi.v2.fetchDdsqlTabularQuery'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "fetchDdsqlTabularQuery");
    }

    // Path Params
    const localVarPath = "/api/v2/ddsql/query/tabular/fetch";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DDSQLApi.v2.fetchDdsqlTabularQuery",
      DDSQLApi.operationServers,
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
      serialize(body, TypingInfo, "DdsqlTabularQueryFetchRequest", ""),
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

export class DDSQLApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to executeDdsqlTabularQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async executeDdsqlTabularQuery(
    response: ResponseContext,
  ): Promise<DdsqlTabularQueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DdsqlTabularQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DdsqlTabularQueryResponse",
      ) as DdsqlTabularQueryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
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
      const body: DdsqlTabularQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DdsqlTabularQueryResponse",
        "",
      ) as DdsqlTabularQueryResponse;
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
   * @params response Response returned by the server for a request to fetchDdsqlTabularQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async fetchDdsqlTabularQuery(
    response: ResponseContext,
  ): Promise<DdsqlTabularQueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DdsqlTabularQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DdsqlTabularQueryResponse",
      ) as DdsqlTabularQueryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
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
      const body: DdsqlTabularQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DdsqlTabularQueryResponse",
        "",
      ) as DdsqlTabularQueryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DDSQLApiExecuteDdsqlTabularQueryRequest {
  /**
   * @type DdsqlTabularQueryRequest
   */
  body: DdsqlTabularQueryRequest;
}

export interface DDSQLApiFetchDdsqlTabularQueryRequest {
  /**
   * @type DdsqlTabularQueryFetchRequest
   */
  body: DdsqlTabularQueryFetchRequest;
}

export class DDSQLApi {
  private requestFactory: DDSQLApiRequestFactory;
  private responseProcessor: DDSQLApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DDSQLApiRequestFactory,
    responseProcessor?: DDSQLApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new DDSQLApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DDSQLApiResponseProcessor();
  }

  /**
   * Submit a DDSQL statement and return either a `running` state with an opaque `query_id`
   * for the client to poll, or a `completed` state with the column-major result set inlined
   * when the query finishes quickly enough to be served synchronously.
   * @param param The request object
   */
  public executeDdsqlTabularQuery(
    param: DDSQLApiExecuteDdsqlTabularQueryRequest,
    options?: Configuration,
  ): Promise<DdsqlTabularQueryResponse> {
    const requestContextPromise = this.requestFactory.executeDdsqlTabularQuery(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.executeDdsqlTabularQuery(
            responseContext,
          );
        });
    });
  }

  /**
   * Poll a previously submitted DDSQL query for results. Pass the opaque `query_id` returned
   * by a prior `ExecuteDdsqlTabularQuery` (or by a prior `FetchDdsqlTabularQuery` that
   * returned `state: running`) and the server returns either a `running` state to poll again
   * or a `completed` state with the column-major result set inlined.
   * @param param The request object
   */
  public fetchDdsqlTabularQuery(
    param: DDSQLApiFetchDdsqlTabularQueryRequest,
    options?: Configuration,
  ): Promise<DdsqlTabularQueryResponse> {
    const requestContextPromise = this.requestFactory.fetchDdsqlTabularQuery(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.fetchDdsqlTabularQuery(responseContext);
        });
    });
  }
}
