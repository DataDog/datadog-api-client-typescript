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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { PolicyResultResponse } from "./models/PolicyResultResponse";
import { version } from "../version";

export class PolicyManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("policy-management", version);
    }
  }
  public async evaluatePolicyResult(
    policyType: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["PolicyManagementApi.v2.evaluatePolicyResult"]
    ) {
      throw new Error(
        "Unstable operation 'evaluatePolicyResult' is disabled. Enable it by setting `configuration.unstableOperations['PolicyManagementApi.v2.evaluatePolicyResult'] = true`",
      );
    }

    // verify required parameter 'policyType' is not null or undefined
    if (policyType === null || policyType === undefined) {
      throw new RequiredError("policyType", "evaluatePolicyResult");
    }

    // Path Params
    const localVarPath = "/api/v2/policy/{policy_type}/result".replace(
      "{policy_type}",
      encodeURIComponent(String(policyType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "PolicyManagementApi.v2.evaluatePolicyResult",
      PolicyManagementApi.operationServers,
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
    response: ResponseContext,
  ): Promise<PolicyResultResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PolicyResultResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PolicyResultResponse",
      ) as PolicyResultResponse;
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
      const body: PolicyResultResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PolicyResultResponse",
        "",
      ) as PolicyResultResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: PolicyManagementApiRequestFactory,
    responseProcessor?: PolicyManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new PolicyManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new PolicyManagementApiResponseProcessor();
  }

  /**
   * Retrieve the evaluation result for a specific policy type.
   * @param param The request object
   */
  public evaluatePolicyResult(
    param: PolicyManagementApiEvaluatePolicyResultRequest,
    options?: Configuration,
  ): Promise<PolicyResultResponse> {
    const requestContextPromise = this.requestFactory.evaluatePolicyResult(
      param.policyType,
      options,
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
