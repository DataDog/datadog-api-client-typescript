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
import { GetInvestigationResponse } from "./models/GetInvestigationResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListInvestigationsResponse } from "./models/ListInvestigationsResponse";
import { ListInvestigationsResponseData } from "./models/ListInvestigationsResponseData";
import { TriggerInvestigationRequest } from "./models/TriggerInvestigationRequest";
import { TriggerInvestigationResponse } from "./models/TriggerInvestigationResponse";
import { version } from "../version";

export class BitsAISREApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("bits-ai-sre", version);
    }
  }
  public async getInvestigation(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["BitsAISREApi.v2.getInvestigation"]) {
      throw new Error(
        "Unstable operation 'getInvestigation' is disabled. Enable it by setting `configuration.unstableOperations['BitsAISREApi.v2.getInvestigation'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getInvestigation");
    }

    // Path Params
    const localVarPath = "/api/v2/bits-ai/investigations/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "BitsAISREApi.v2.getInvestigation",
      BitsAISREApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listInvestigations(
    pageOffset?: number,
    pageLimit?: number,
    filterMonitorId?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["BitsAISREApi.v2.listInvestigations"]) {
      throw new Error(
        "Unstable operation 'listInvestigations' is disabled. Enable it by setting `configuration.unstableOperations['BitsAISREApi.v2.listInvestigations'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/bits-ai/investigations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "BitsAISREApi.v2.listInvestigations",
      BitsAISREApi.operationServers,
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterMonitorId !== undefined) {
      requestContext.setQueryParam(
        "filter[monitor_id]",
        serialize(filterMonitorId, TypingInfo, "number", "int64"),
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

  public async triggerInvestigation(
    body: TriggerInvestigationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["BitsAISREApi.v2.triggerInvestigation"]) {
      throw new Error(
        "Unstable operation 'triggerInvestigation' is disabled. Enable it by setting `configuration.unstableOperations['BitsAISREApi.v2.triggerInvestigation'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "triggerInvestigation");
    }

    // Path Params
    const localVarPath = "/api/v2/bits-ai/investigations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "BitsAISREApi.v2.triggerInvestigation",
      BitsAISREApi.operationServers,
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
      serialize(body, TypingInfo, "TriggerInvestigationRequest", ""),
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
}

export class BitsAISREApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getInvestigation(
    response: ResponseContext,
  ): Promise<GetInvestigationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetInvestigationResponse",
      ) as GetInvestigationResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: GetInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetInvestigationResponse",
        "",
      ) as GetInvestigationResponse;
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
   * @params response Response returned by the server for a request to listInvestigations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listInvestigations(
    response: ResponseContext,
  ): Promise<ListInvestigationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListInvestigationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListInvestigationsResponse",
      ) as ListInvestigationsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: ListInvestigationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListInvestigationsResponse",
        "",
      ) as ListInvestigationsResponse;
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
   * @params response Response returned by the server for a request to triggerInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerInvestigation(
    response: ResponseContext,
  ): Promise<TriggerInvestigationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TriggerInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TriggerInvestigationResponse",
      ) as TriggerInvestigationResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: TriggerInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TriggerInvestigationResponse",
        "",
      ) as TriggerInvestigationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface BitsAISREApiGetInvestigationRequest {
  /**
   * The ID of the investigation.
   * @type string
   */
  id: string;
}

export interface BitsAISREApiListInvestigationsRequest {
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Maximum number of investigations to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter investigations by monitor ID.
   * @type number
   */
  filterMonitorId?: number;
}

export interface BitsAISREApiTriggerInvestigationRequest {
  /**
   * Trigger investigation request body.
   * @type TriggerInvestigationRequest
   */
  body: TriggerInvestigationRequest;
}

export class BitsAISREApi {
  private requestFactory: BitsAISREApiRequestFactory;
  private responseProcessor: BitsAISREApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: BitsAISREApiRequestFactory,
    responseProcessor?: BitsAISREApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new BitsAISREApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new BitsAISREApiResponseProcessor();
  }

  /**
   * Get a specific Bits AI SRE investigation by ID.
   * @param param The request object
   */
  public getInvestigation(
    param: BitsAISREApiGetInvestigationRequest,
    options?: Configuration,
  ): Promise<GetInvestigationResponse> {
    const requestContextPromise = this.requestFactory.getInvestigation(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getInvestigation(responseContext);
        });
    });
  }

  /**
   * List all Bits AI SRE investigations for the organization.
   * @param param The request object
   */
  public listInvestigations(
    param: BitsAISREApiListInvestigationsRequest = {},
    options?: Configuration,
  ): Promise<ListInvestigationsResponse> {
    const requestContextPromise = this.requestFactory.listInvestigations(
      param.pageOffset,
      param.pageLimit,
      param.filterMonitorId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listInvestigations(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listInvestigations returning a generator with all the items.
   */
  public async *listInvestigationsWithPagination(
    param: BitsAISREApiListInvestigationsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<ListInvestigationsResponseData> {
    let pageSize = 25;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listInvestigations(
        param.pageOffset,
        param.pageLimit,
        param.filterMonitorId,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listInvestigations(responseContext);
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
   * Trigger a new Bits AI SRE investigation based on a monitor alert.
   * @param param The request object
   */
  public triggerInvestigation(
    param: BitsAISREApiTriggerInvestigationRequest,
    options?: Configuration,
  ): Promise<TriggerInvestigationResponse> {
    const requestContextPromise = this.requestFactory.triggerInvestigation(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerInvestigation(responseContext);
        });
    });
  }
}
