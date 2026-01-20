import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
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
import { SecurityEntityRiskScoresResponse } from "../models/SecurityEntityRiskScoresResponse";

export class EntityRiskScoresApiRequestFactory extends BaseAPIRequestFactory {
  public async listEntityRiskScores(
    from?: number,
    to?: number,
    pageSize?: number,
    pageNumber?: number,
    pageQueryId?: string,
    filterSort?: string,
    filterQuery?: string,
    entityType?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listEntityRiskScores'");
    if (!_config.unstableOperations["v2.listEntityRiskScores"]) {
      throw new Error("Unstable operation 'listEntityRiskScores' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/security-entities/risk-scores";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EntityRiskScoresApi.listEntityRiskScores")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "number", "int64"),
        ""
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "number", "int64"),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
      );
    }
    if (pageQueryId !== undefined) {
      requestContext.setQueryParam(
        "page[queryId]",
        ObjectSerializer.serialize(pageQueryId, "string", ""),
        ""
      );
    }
    if (filterSort !== undefined) {
      requestContext.setQueryParam(
        "filter[sort]",
        ObjectSerializer.serialize(filterSort, "string", ""),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (entityType !== undefined) {
      requestContext.setQueryParam(
        "entityType",
        ObjectSerializer.serialize(entityType, "Array<string>", ""),
        "multi"
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

export class EntityRiskScoresApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listEntityRiskScores
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listEntityRiskScores(
    response: ResponseContext
  ): Promise<SecurityEntityRiskScoresResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityEntityRiskScoresResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityEntityRiskScoresResponse"
        ) as SecurityEntityRiskScoresResponse;
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
      const body: SecurityEntityRiskScoresResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityEntityRiskScoresResponse",
          ""
        ) as SecurityEntityRiskScoresResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface EntityRiskScoresApiListEntityRiskScoresRequest {
  /**
   * Start time for the query in Unix timestamp (milliseconds). Defaults to 2 weeks ago.
   * @type number
   */
  from?: number;
  /**
   * End time for the query in Unix timestamp (milliseconds). Defaults to now.
   * @type number
   */
  to?: number;
  /**
   * Size of the page to return. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * Page number to return (1-indexed).
   * @type number
   */
  pageNumber?: number;
  /**
   * Query ID for pagination consistency.
   * @type string
   */
  pageQueryId?: string;
  /**
   * Sort order for results. Format: `field:direction` where direction is `asc` or `desc`.
   * Supported fields: `riskScore`, `lastDetected`, `firstDetected`, `entityName`, `signalsDetected`.
   * @type string
   */
  filterSort?: string;
  /**
   * Supports filtering by entity attributes, risk scores, severity, and more.
   * Example: `severity:critical AND entityType:aws_iam_user`
   * @type string
   */
  filterQuery?: string;
  /**
   * Filter by entity type(s). Can specify multiple values.
   * @type Array<string>
   */
  entityType?: Array<string>;
}

export class EntityRiskScoresApi {
  private requestFactory: EntityRiskScoresApiRequestFactory;
  private responseProcessor: EntityRiskScoresApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: EntityRiskScoresApiRequestFactory,
    responseProcessor?: EntityRiskScoresApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new EntityRiskScoresApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new EntityRiskScoresApiResponseProcessor();
  }

  /**
   * Get a list of entity risk scores for your organization. Entity risk scores provide security risk assessment for entities like cloud resources, identities, or services based on detected signals, misconfigurations, and identity risks.
   * @param param The request object
   */
  public listEntityRiskScores(
    param: EntityRiskScoresApiListEntityRiskScoresRequest = {},
    options?: Configuration
  ): Promise<SecurityEntityRiskScoresResponse> {
    const requestContextPromise = this.requestFactory.listEntityRiskScores(
      param.from,
      param.to,
      param.pageSize,
      param.pageNumber,
      param.pageQueryId,
      param.filterSort,
      param.filterQuery,
      param.entityType,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listEntityRiskScores(responseContext);
        });
    });
  }
}
