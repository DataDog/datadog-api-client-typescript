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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { PolicyResultResponse } from "../models/PolicyResultResponse";

export class PolicyManagementApiRequestFactory extends BaseAPIRequestFactory {
  public async evaluatePolicyResult(
    policyType: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'evaluatePolicyResult'");
    if (!_config.unstableOperations["v2.evaluatePolicyResult"]) {
      throw new Error("Unstable operation 'evaluatePolicyResult' is disabled");
    }

    // verify required parameter 'policyType' is not null or undefined
    if (policyType === null || policyType === undefined) {
      throw new RequiredError("policyType", "evaluatePolicyResult");
    }

    // Path Params
    const localVarPath = "/api/v2/policy/{policy_type}/result".replace(
      "{policy_type}",
      encodeURIComponent(String(policyType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.PolicyManagementApi.evaluatePolicyResult")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class PolicyManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to evaluatePolicyResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async evaluatePolicyResult(
    response: ResponseContext
  ): Promise<PolicyResultResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PolicyResultResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PolicyResultResponse"
      ) as PolicyResultResponse;
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
      const body: PolicyResultResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PolicyResultResponse",
        ""
      ) as PolicyResultResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface PolicyManagementApiEvaluatePolicyResultRequest {
  /**
   * The type of policy to evaluate (e.g., SAML, HIPAA).
   * @type string
   */
  policyType: string;
}

export class PolicyManagementApi {
  private requestFactory: PolicyManagementApiRequestFactory;
  private responseProcessor: PolicyManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PolicyManagementApiRequestFactory,
    responseProcessor?: PolicyManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new PolicyManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PolicyManagementApiResponseProcessor();
  }

  /**
   * Retrieve the evaluation result for a specific policy type.
   * @param param The request object
   */
  public evaluatePolicyResult(
    param: PolicyManagementApiEvaluatePolicyResultRequest,
    options?: Configuration
  ): Promise<PolicyResultResponse> {
    const requestContextPromise = this.requestFactory.evaluatePolicyResult(
      param.policyType,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.evaluatePolicyResult(responseContext);
        });
    });
  }
}
