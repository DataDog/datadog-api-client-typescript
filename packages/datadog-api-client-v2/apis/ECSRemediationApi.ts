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
import { RemediationExecuteRequest } from "../models/RemediationExecuteRequest";
import { RemediationExecuteResponse } from "../models/RemediationExecuteResponse";
import { RemediationGetInvestigationResponse } from "../models/RemediationGetInvestigationResponse";
import { RemediationListInvestigationsResponse } from "../models/RemediationListInvestigationsResponse";

export class ECSRemediationApiRequestFactory extends BaseAPIRequestFactory {
  public async executeRemediation(
    body: RemediationExecuteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "executeRemediation");
    }

    // Path Params
    const localVarPath = "/api/ui/orchestration/ecs_remediation/execute";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ECSRemediationApi.executeRemediation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RemediationExecuteRequest", ""),
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

  public async getEcsRemediationInvestigation(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getEcsRemediationInvestigation");
    }

    // Path Params
    const localVarPath = "/api/ui/orchestration/ecs_remediation/investigation";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ECSRemediationApi.getEcsRemediationInvestigation")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (id !== undefined) {
      requestContext.setQueryParam(
        "id",
        ObjectSerializer.serialize(id, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/ui/orchestration/ecs_remediation/investigations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ECSRemediationApi.listEcsRemediationInvestigations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (clusterArn !== undefined) {
      requestContext.setQueryParam(
        "cluster_arn",
        ObjectSerializer.serialize(clusterArn, "string", ""),
        ""
      );
    }
    if (clusterName !== undefined) {
      requestContext.setQueryParam(
        "cluster_name",
        ObjectSerializer.serialize(clusterName, "string", ""),
        ""
      );
    }
    if (serviceArn !== undefined) {
      requestContext.setQueryParam(
        "service_arn",
        ObjectSerializer.serialize(serviceArn, "string", ""),
        ""
      );
    }
    if (taskArn !== undefined) {
      requestContext.setQueryParam(
        "task_arn",
        ObjectSerializer.serialize(taskArn, "string", ""),
        ""
      );
    }
    if (resourceArn !== undefined) {
      requestContext.setQueryParam(
        "resource_arn",
        ObjectSerializer.serialize(resourceArn, "string", ""),
        ""
      );
    }
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "Array<string>", ""),
        "multi"
      );
    }
    if (issueType !== undefined) {
      requestContext.setQueryParam(
        "issue_type",
        ObjectSerializer.serialize(issueType, "string", ""),
        ""
      );
    }
    if (sinceMs !== undefined) {
      requestContext.setQueryParam(
        "since_ms",
        ObjectSerializer.serialize(sinceMs, "number", "int64"),
        ""
      );
    }
    if (untilMs !== undefined) {
      requestContext.setQueryParam(
        "until_ms",
        ObjectSerializer.serialize(untilMs, "number", "int64"),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        ObjectSerializer.serialize(pageSize, "number", "int32"),
        ""
      );
    }
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page_token",
        ObjectSerializer.serialize(pageToken, "string", ""),
        ""
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
    response: ResponseContext
  ): Promise<RemediationExecuteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RemediationExecuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RemediationExecuteResponse"
      ) as RemediationExecuteResponse;
      return body;
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
      const body: RemediationExecuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RemediationExecuteResponse",
        ""
      ) as RemediationExecuteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    response: ResponseContext
  ): Promise<RemediationGetInvestigationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RemediationGetInvestigationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RemediationGetInvestigationResponse"
        ) as RemediationGetInvestigationResponse;
      return body;
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
      const body: RemediationGetInvestigationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RemediationGetInvestigationResponse",
          ""
        ) as RemediationGetInvestigationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
    response: ResponseContext
  ): Promise<RemediationListInvestigationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RemediationListInvestigationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RemediationListInvestigationsResponse"
        ) as RemediationListInvestigationsResponse;
      return body;
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
      const body: RemediationListInvestigationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RemediationListInvestigationsResponse",
          ""
        ) as RemediationListInvestigationsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: ECSRemediationApiRequestFactory,
    responseProcessor?: ECSRemediationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ECSRemediationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ECSRemediationApiResponseProcessor();
  }

  /**
   * Trigger execution of the proposed remediation for an investigation through the configured AWS connection. The investigation must belong to the caller's organization.
   * @param param The request object
   */
  public executeRemediation(
    param: ECSRemediationApiExecuteRemediationRequest,
    options?: Configuration
  ): Promise<RemediationExecuteResponse> {
    const requestContextPromise = this.requestFactory.executeRemediation(
      param.body,
      options
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
    options?: Configuration
  ): Promise<RemediationGetInvestigationResponse> {
    const requestContextPromise =
      this.requestFactory.getEcsRemediationInvestigation(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEcsRemediationInvestigation(
            responseContext
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
    options?: Configuration
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
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listEcsRemediationInvestigations(
            responseContext
          );
        });
    });
  }
}
