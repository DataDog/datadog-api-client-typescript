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
import { RemediationExecuteRequest } from "./models/RemediationExecuteRequest";
import { RemediationExecuteResponse } from "./models/RemediationExecuteResponse";
import { RemediationGetInvestigationResponse } from "./models/RemediationGetInvestigationResponse";
import { RemediationListInvestigationsResponse } from "./models/RemediationListInvestigationsResponse";
import { version } from "../version";

export class ECSRemediationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("ecs-remediation", version);
    }
  }
  public async executeRemediation(
    body: RemediationExecuteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "executeRemediation");
    }

    // Path Params
    const localVarPath = "/api/ui/orchestration/ecs_remediation/execute";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ECSRemediationApi.v2.executeRemediation",
      ECSRemediationApi.operationServers,
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
      serialize(body, TypingInfo, "RemediationExecuteRequest", ""),
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

  public async getEcsRemediationInvestigation(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getEcsRemediationInvestigation");
    }

    // Path Params
    const localVarPath = "/api/ui/orchestration/ecs_remediation/investigation";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ECSRemediationApi.v2.getEcsRemediationInvestigation",
      ECSRemediationApi.operationServers,
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
    if (id !== undefined) {
      requestContext.setQueryParam(
        "id",
        serialize(id, TypingInfo, "string", ""),
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

  public async listEcsRemediationInvestigations(
    clusterArn?: string,
    clusterName?: string,
    serviceArn?: string,
    taskArn?: string,
    resourceArn?: string,
    status?: Array<string>,
    issueType?: string,
    sinceMs?: number,
    untilMs?: number,
    pageSize?: number,
    pageToken?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/ui/orchestration/ecs_remediation/investigations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ECSRemediationApi.v2.listEcsRemediationInvestigations",
      ECSRemediationApi.operationServers,
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
    if (clusterArn !== undefined) {
      requestContext.setQueryParam(
        "cluster_arn",
        serialize(clusterArn, TypingInfo, "string", ""),
        "",
      );
    }
    if (clusterName !== undefined) {
      requestContext.setQueryParam(
        "cluster_name",
        serialize(clusterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (serviceArn !== undefined) {
      requestContext.setQueryParam(
        "service_arn",
        serialize(serviceArn, TypingInfo, "string", ""),
        "",
      );
    }
    if (taskArn !== undefined) {
      requestContext.setQueryParam(
        "task_arn",
        serialize(taskArn, TypingInfo, "string", ""),
        "",
      );
    }
    if (resourceArn !== undefined) {
      requestContext.setQueryParam(
        "resource_arn",
        serialize(resourceArn, TypingInfo, "string", ""),
        "",
      );
    }
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        serialize(status, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (issueType !== undefined) {
      requestContext.setQueryParam(
        "issue_type",
        serialize(issueType, TypingInfo, "string", ""),
        "",
      );
    }
    if (sinceMs !== undefined) {
      requestContext.setQueryParam(
        "since_ms",
        serialize(sinceMs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (untilMs !== undefined) {
      requestContext.setQueryParam(
        "until_ms",
        serialize(untilMs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        serialize(pageSize, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page_token",
        serialize(pageToken, TypingInfo, "string", ""),
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
}

export class ECSRemediationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to executeRemediation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async executeRemediation(
    response: ResponseContext,
  ): Promise<RemediationExecuteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RemediationExecuteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RemediationExecuteResponse",
      ) as RemediationExecuteResponse;
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
      const body: RemediationExecuteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RemediationExecuteResponse",
        "",
      ) as RemediationExecuteResponse;
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
   * @params response Response returned by the server for a request to getEcsRemediationInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEcsRemediationInvestigation(
    response: ResponseContext,
  ): Promise<RemediationGetInvestigationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RemediationGetInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RemediationGetInvestigationResponse",
      ) as RemediationGetInvestigationResponse;
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
      const body: RemediationGetInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RemediationGetInvestigationResponse",
        "",
      ) as RemediationGetInvestigationResponse;
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
   * @params response Response returned by the server for a request to listEcsRemediationInvestigations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listEcsRemediationInvestigations(
    response: ResponseContext,
  ): Promise<RemediationListInvestigationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RemediationListInvestigationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RemediationListInvestigationsResponse",
      ) as RemediationListInvestigationsResponse;
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
      const body: RemediationListInvestigationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RemediationListInvestigationsResponse",
        "",
      ) as RemediationListInvestigationsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ECSRemediationApiExecuteRemediationRequest {
  /**
   * The investigation to remediate and the AWS connection to use.
   * @type RemediationExecuteRequest
   */
  body: RemediationExecuteRequest;
}

export interface ECSRemediationApiGetEcsRemediationInvestigationRequest {
  /**
   * The investigation ID.
   * @type string
   */
  id: string;
}

export interface ECSRemediationApiListEcsRemediationInvestigationsRequest {
  /**
   * Filter by ECS cluster ARN.
   * @type string
   */
  clusterArn?: string;
  /**
   * Filter by ECS cluster name.
   * @type string
   */
  clusterName?: string;
  /**
   * Filter by ECS service ARN.
   * @type string
   */
  serviceArn?: string;
  /**
   * Filter by ECS task ARN.
   * @type string
   */
  taskArn?: string;
  /**
   * Filter by resource ARN. Matches services, daemons, and standalone tasks.
   * @type string
   */
  resourceArn?: string;
  /**
   * Filter by investigation status. Repeatable. Accepted values: open, approval_required, executing, succeeded, failed. Unknown values are ignored.
   * @type Array<string>
   */
  status?: Array<string>;
  /**
   * Filter by issue type.
   * @type string
   */
  issueType?: string;
  /**
   * Start of the created-at time range, in epoch milliseconds.
   * @type number
   */
  sinceMs?: number;
  /**
   * End of the created-at time range, in epoch milliseconds.
   * @type number
   */
  untilMs?: number;
  /**
   * Maximum number of investigations to return. Clamped to 200.
   * @type number
   */
  pageSize?: number;
  /**
   * Pagination token returned by a previous call.
   * @type string
   */
  pageToken?: string;
}

export class ECSRemediationApi {
  private requestFactory: ECSRemediationApiRequestFactory;
  private responseProcessor: ECSRemediationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ECSRemediationApiRequestFactory,
    responseProcessor?: ECSRemediationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new ECSRemediationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ECSRemediationApiResponseProcessor();
  }

  /**
   * Trigger execution of the proposed remediation for an investigation through the configured AWS connection. The investigation must belong to the caller's organization.
   * @param param The request object
   */
  public executeRemediation(
    param: ECSRemediationApiExecuteRemediationRequest,
    options?: Configuration,
  ): Promise<RemediationExecuteResponse> {
    const requestContextPromise = this.requestFactory.executeRemediation(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.executeRemediation(responseContext);
        });
    });
  }

  /**
   * Get a single ECS remediation investigation by ID, including its proposed plan, history, and ECS workload metadata.
   * @param param The request object
   */
  public getEcsRemediationInvestigation(
    param: ECSRemediationApiGetEcsRemediationInvestigationRequest,
    options?: Configuration,
  ): Promise<RemediationGetInvestigationResponse> {
    const requestContextPromise =
      this.requestFactory.getEcsRemediationInvestigation(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEcsRemediationInvestigation(
            responseContext,
          );
        });
    });
  }

  /**
   * List ECS remediation investigations for the caller's organization. All filters are optional and applied together. Results are returned in pages.
   * @param param The request object
   */
  public listEcsRemediationInvestigations(
    param: ECSRemediationApiListEcsRemediationInvestigationsRequest = {},
    options?: Configuration,
  ): Promise<RemediationListInvestigationsResponse> {
    const requestContextPromise =
      this.requestFactory.listEcsRemediationInvestigations(
        param.clusterArn,
        param.clusterName,
        param.serviceArn,
        param.taskArn,
        param.resourceArn,
        param.status,
        param.issueType,
        param.sinceMs,
        param.untilMs,
        param.pageSize,
        param.pageToken,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listEcsRemediationInvestigations(
            responseContext,
          );
        });
    });
  }
}
