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
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { FunnelRequest } from "./models/FunnelRequest";
import { FunnelResponse } from "./models/FunnelResponse";
import { FunnelSuggestionRequest } from "./models/FunnelSuggestionRequest";
import { FunnelSuggestionResponse } from "./models/FunnelSuggestionResponse";
import { version } from "../version";

export class FunnelApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("funnel", version);
    }
  }
  public async getRumFunnel(
    body: FunnelRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FunnelApi.v2.getRumFunnel"]) {
      throw new Error(
        "Unstable operation 'getRumFunnel' is disabled. Enable it by setting `configuration.unstableOperations['FunnelApi.v2.getRumFunnel'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getRumFunnel");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/funnel";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FunnelApi.v2.getRumFunnel",
      FunnelApi.operationServers,
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
      serialize(body, TypingInfo, "FunnelRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }

  public async getRumFunnelStepSuggestions(
    body: FunnelSuggestionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FunnelApi.v2.getRumFunnelStepSuggestions"]
    ) {
      throw new Error(
        "Unstable operation 'getRumFunnelStepSuggestions' is disabled. Enable it by setting `configuration.unstableOperations['FunnelApi.v2.getRumFunnelStepSuggestions'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getRumFunnelStepSuggestions");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/funnel/new_step_suggestions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FunnelApi.v2.getRumFunnelStepSuggestions",
      FunnelApi.operationServers,
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
      serialize(body, TypingInfo, "FunnelSuggestionRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }
}

export class FunnelApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRumFunnel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumFunnel(
    response: ResponseContext,
  ): Promise<FunnelResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FunnelResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FunnelResponse",
      ) as FunnelResponse;
      return body;
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
      const body: FunnelResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FunnelResponse",
        "",
      ) as FunnelResponse;
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
   * @params response Response returned by the server for a request to getRumFunnelStepSuggestions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumFunnelStepSuggestions(
    response: ResponseContext,
  ): Promise<FunnelSuggestionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FunnelSuggestionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FunnelSuggestionResponse",
      ) as FunnelSuggestionResponse;
      return body;
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
      const body: FunnelSuggestionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FunnelSuggestionResponse",
        "",
      ) as FunnelSuggestionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface FunnelApiGetRumFunnelRequest {
  /**
   * @type FunnelRequest
   */
  body: FunnelRequest;
}

export interface FunnelApiGetRumFunnelStepSuggestionsRequest {
  /**
   * @type FunnelSuggestionRequest
   */
  body: FunnelSuggestionRequest;
}

export class FunnelApi {
  private requestFactory: FunnelApiRequestFactory;
  private responseProcessor: FunnelApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: FunnelApiRequestFactory,
    responseProcessor?: FunnelApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new FunnelApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new FunnelApiResponseProcessor();
  }

  /**
   * Analyze conversion funnels to understand user drop-off patterns
   * @param param The request object
   */
  public getRumFunnel(
    param: FunnelApiGetRumFunnelRequest,
    options?: Configuration,
  ): Promise<FunnelResponse> {
    const requestContextPromise = this.requestFactory.getRumFunnel(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumFunnel(responseContext);
        });
    });
  }

  /**
   * Get suggested steps for building conversion funnels
   * @param param The request object
   */
  public getRumFunnelStepSuggestions(
    param: FunnelApiGetRumFunnelStepSuggestionsRequest,
    options?: Configuration,
  ): Promise<FunnelSuggestionResponse> {
    const requestContextPromise =
      this.requestFactory.getRumFunnelStepSuggestions(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumFunnelStepSuggestions(
            responseContext,
          );
        });
    });
  }
}
