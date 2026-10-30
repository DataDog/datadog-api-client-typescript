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
import { AIGuardEvaluateRequest } from "./models/AIGuardEvaluateRequest";
import { AIGuardEvaluateResponse } from "./models/AIGuardEvaluateResponse";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class AIGuardApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("ai-guard", version);
    }
  }
  public async evaluateAIGuardRequest(
    body: AIGuardEvaluateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["AIGuardApi.v2.evaluateAIGuardRequest"]) {
      throw new Error(
        "Unstable operation 'evaluateAIGuardRequest' is disabled. Enable it by setting `configuration.unstableOperations['AIGuardApi.v2.evaluateAIGuardRequest'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "evaluateAIGuardRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/ai-guard/evaluate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AIGuardApi.v2.evaluateAIGuardRequest",
      AIGuardApi.operationServers,
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
      serialize(body, TypingInfo, "AIGuardEvaluateRequest", ""),
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

export class AIGuardApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to evaluateAIGuardRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async evaluateAIGuardRequest(
    response: ResponseContext,
  ): Promise<AIGuardEvaluateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AIGuardEvaluateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIGuardEvaluateResponse",
      ) as AIGuardEvaluateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413
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
      const body: AIGuardEvaluateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AIGuardEvaluateResponse",
        "",
      ) as AIGuardEvaluateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AIGuardApiEvaluateAIGuardRequestRequest {
  /**
   * The conversation to evaluate for security threats.
   * @type AIGuardEvaluateRequest
   */
  body: AIGuardEvaluateRequest;
}

export class AIGuardApi {
  private requestFactory: AIGuardApiRequestFactory;
  private responseProcessor: AIGuardApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: AIGuardApiRequestFactory,
    responseProcessor?: AIGuardApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AIGuardApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AIGuardApiResponseProcessor();
  }

  /**
   * Analyzes a conversation for security threats such as prompt injection,
   * jailbreak attempts, and other AI-specific attacks. Returns an action
   * recommendation (`ALLOW`, `DENY`, or `ABORT`) along with the detected threat
   * tags and their confidence scores.
   * AI Guard must be activated for the organization, and the calling user or
   * application key requires the `ai_guard_evaluate` permission. The action is a
   * recommendation for the caller to enforce: ALLOW permits the interaction,
   * DENY blocks the interaction, and ABORT terminates the workflow.
   * This endpoint is rate limited to `700` requests per minute per organization.
   * Organization token limits can also result in a 429 response.
   * Malformed messages return a 400 response. Requests exceeding the raw-input
   * limit of 1,000,000 tokens return a 413 response; this limit applies to the
   * input context, not only the size of the HTTP request body.
   * @param param The request object
   */
  public evaluateAIGuardRequest(
    param: AIGuardApiEvaluateAIGuardRequestRequest,
    options?: Configuration,
  ): Promise<AIGuardEvaluateResponse> {
    const requestContextPromise = this.requestFactory.evaluateAIGuardRequest(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.evaluateAIGuardRequest(responseContext);
        });
    });
  }
}
