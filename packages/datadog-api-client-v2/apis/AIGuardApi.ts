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

import { AIGuardEvaluateRequest } from "../models/AIGuardEvaluateRequest";
import { AIGuardEvaluateResponse } from "../models/AIGuardEvaluateResponse";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class AIGuardApiRequestFactory extends BaseAPIRequestFactory {
  public async evaluateAIGuardRequest(
    body: AIGuardEvaluateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "evaluateAIGuardRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/ai-guard/evaluate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGuardApi.evaluateAIGuardRequest")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AIGuardEvaluateRequest", ""),
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

export class AIGuardApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to evaluateAIGuardRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async evaluateAIGuardRequest(
    response: ResponseContext
  ): Promise<AIGuardEvaluateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AIGuardEvaluateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AIGuardEvaluateResponse"
      ) as AIGuardEvaluateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: AIGuardEvaluateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AIGuardEvaluateResponse",
        ""
      ) as AIGuardEvaluateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AIGuardApiEvaluateAIGuardRequestRequest {
  /**
   * @type AIGuardEvaluateRequest
   */
  body: AIGuardEvaluateRequest;
}

export class AIGuardApi {
  private requestFactory: AIGuardApiRequestFactory;
  private responseProcessor: AIGuardApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AIGuardApiRequestFactory,
    responseProcessor?: AIGuardApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AIGuardApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AIGuardApiResponseProcessor();
  }

  /**
   * Analyzes a conversation for security threats such as prompt injection, jailbreak
   * attempts, and other AI-specific attacks. Returns an action recommendation (ALLOW,
   * DENY, or ABORT) along with the detected threat tags.
   * @param param The request object
   */
  public evaluateAIGuardRequest(
    param: AIGuardApiEvaluateAIGuardRequestRequest,
    options?: Configuration
  ): Promise<AIGuardEvaluateResponse> {
    const requestContextPromise = this.requestFactory.evaluateAIGuardRequest(
      param.body,
      options
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
