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
import { AssignSeatsUserRequest } from "./models/AssignSeatsUserRequest";
import { AssignSeatsUserResponse } from "./models/AssignSeatsUserResponse";
import { SeatUserDataArray } from "./models/SeatUserDataArray";
import { UnassignSeatsUserRequest } from "./models/UnassignSeatsUserRequest";
import { version } from "../version";

export class SeatsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("seats", version);
    }
  }
  public async assignSeatsUser(
    body: AssignSeatsUserRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "assignSeatsUser");
    }

    // Path Params
    const localVarPath = "/api/v2/seats/users";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SeatsApi.v2.assignSeatsUser",
      SeatsApi.operationServers,
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
      serialize(body, TypingInfo, "AssignSeatsUserRequest", ""),
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

  public async getSeatsUsers(
    productCode: string,
    pageLimit?: number,
    pageCursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'productCode' is not null or undefined
    if (productCode === null || productCode === undefined) {
      throw new RequiredError("productCode", "getSeatsUsers");
    }

    // Path Params
    const localVarPath = "/api/v2/seats/users";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SeatsApi.v2.getSeatsUsers",
      SeatsApi.operationServers,
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
    if (productCode !== undefined) {
      requestContext.setQueryParam(
        "product_code",
        serialize(productCode, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async unassignSeatsUser(
    body: UnassignSeatsUserRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "unassignSeatsUser");
    }

    // Path Params
    const localVarPath = "/api/v2/seats/users";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SeatsApi.v2.unassignSeatsUser",
      SeatsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UnassignSeatsUserRequest", ""),
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

export class SeatsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to assignSeatsUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async assignSeatsUser(
    response: ResponseContext,
  ): Promise<AssignSeatsUserResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: AssignSeatsUserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AssignSeatsUserResponse",
      ) as AssignSeatsUserResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 422 ||
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
      const body: AssignSeatsUserResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AssignSeatsUserResponse",
        "",
      ) as AssignSeatsUserResponse;
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
   * @params response Response returned by the server for a request to getSeatsUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSeatsUsers(
    response: ResponseContext,
  ): Promise<SeatUserDataArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SeatUserDataArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeatUserDataArray",
      ) as SeatUserDataArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 422 ||
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
      const body: SeatUserDataArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeatUserDataArray",
        "",
      ) as SeatUserDataArray;
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
   * @params response Response returned by the server for a request to unassignSeatsUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unassignSeatsUser(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 422 ||
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
}

export interface SeatsApiAssignSeatsUserRequest {
  /**
   * @type AssignSeatsUserRequest
   */
  body: AssignSeatsUserRequest;
}

export interface SeatsApiGetSeatsUsersRequest {
  /**
   * The product code for which to retrieve seat users.
   * @type string
   */
  productCode: string;
  /**
   * Maximum number of results to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Cursor for pagination.
   * @type string
   */
  pageCursor?: string;
}

export interface SeatsApiUnassignSeatsUserRequest {
  /**
   * @type UnassignSeatsUserRequest
   */
  body: UnassignSeatsUserRequest;
}

export class SeatsApi {
  private requestFactory: SeatsApiRequestFactory;
  private responseProcessor: SeatsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SeatsApiRequestFactory,
    responseProcessor?: SeatsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new SeatsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SeatsApiResponseProcessor();
  }

  /**
   * Assign seats to users for a product code.
   * @param param The request object
   */
  public assignSeatsUser(
    param: SeatsApiAssignSeatsUserRequest,
    options?: Configuration,
  ): Promise<AssignSeatsUserResponse> {
    const requestContextPromise = this.requestFactory.assignSeatsUser(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.assignSeatsUser(responseContext);
        });
    });
  }

  /**
   * Get the list of users assigned seats for a product code.
   * @param param The request object
   */
  public getSeatsUsers(
    param: SeatsApiGetSeatsUsersRequest,
    options?: Configuration,
  ): Promise<SeatUserDataArray> {
    const requestContextPromise = this.requestFactory.getSeatsUsers(
      param.productCode,
      param.pageLimit,
      param.pageCursor,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSeatsUsers(responseContext);
        });
    });
  }

  /**
   * Unassign seats from users for a product code.
   * @param param The request object
   */
  public unassignSeatsUser(
    param: SeatsApiUnassignSeatsUserRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unassignSeatsUser(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unassignSeatsUser(responseContext);
        });
    });
  }
}
