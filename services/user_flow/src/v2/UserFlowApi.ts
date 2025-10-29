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
import { SankeyRequest } from "./models/SankeyRequest";
import { SankeyResponse } from "./models/SankeyResponse";
import { version } from "../version";

export class UserFlowApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("user-flow", version);
    }
  }
  public async getRumSankey(
    body: SankeyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["UserFlowApi.v2.getRumSankey"]) {
      throw new Error(
        "Unstable operation 'getRumSankey' is disabled. Enable it by setting `configuration.unstableOperations['UserFlowApi.v2.getRumSankey'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getRumSankey");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/sankey";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UserFlowApi.v2.getRumSankey",
      UserFlowApi.operationServers,
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
      serialize(body, TypingInfo, "SankeyRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }
}

export class UserFlowApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRumSankey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumSankey(
    response: ResponseContext,
  ): Promise<SankeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SankeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SankeyResponse",
      ) as SankeyResponse;
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
      const body: SankeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SankeyResponse",
        "",
      ) as SankeyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface UserFlowApiGetRumSankeyRequest {
  /**
   * @type SankeyRequest
   */
  body: SankeyRequest;
}

export class UserFlowApi {
  private requestFactory: UserFlowApiRequestFactory;
  private responseProcessor: UserFlowApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: UserFlowApiRequestFactory,
    responseProcessor?: UserFlowApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new UserFlowApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new UserFlowApiResponseProcessor();
  }

  /**
   * Generate Sankey diagrams to visualize user flow paths and drop-off points
   * @param param The request object
   */
  public getRumSankey(
    param: UserFlowApiGetRumSankeyRequest,
    options?: Configuration,
  ): Promise<SankeyResponse> {
    const requestContextPromise = this.requestFactory.getRumSankey(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumSankey(responseContext);
        });
    });
  }
}
