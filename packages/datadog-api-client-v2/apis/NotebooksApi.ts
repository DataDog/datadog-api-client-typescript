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
import { NotebookSearchResponse } from "../models/NotebookSearchResponse";

export class NotebooksApiRequestFactory extends BaseAPIRequestFactory {
  public async searchNotebooks(
    query?: string,
    sort?: string,
    include?: string,
    page?: number,
    limit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchNotebooks'");
    if (!_config.unstableOperations["v2.searchNotebooks"]) {
      throw new Error("Unstable operation 'searchNotebooks' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/notebooks/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.NotebooksApi.searchNotebooks")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        ObjectSerializer.serialize(page, "number", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
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

export class NotebooksApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to searchNotebooks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchNotebooks(
    response: ResponseContext
  ): Promise<NotebookSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotebookSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookSearchResponse"
      ) as NotebookSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 500 ||
      response.httpStatusCode === 503
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
      const body: NotebookSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookSearchResponse",
        ""
      ) as NotebookSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface NotebooksApiSearchNotebooksRequest {
  /**
   * Search query string.
   * @type string
   */
  query?: string;
  /**
   * Sort field for results.
   * @type string
   */
  sort?: string;
  /**
   * Additional data to include in the response.
   * @type string
   */
  include?: string;
  /**
   * Page number for pagination.
   * @type number
   */
  page?: number;
  /**
   * Maximum number of results to return.
   * @type number
   */
  limit?: number;
}

export class NotebooksApi {
  private requestFactory: NotebooksApiRequestFactory;
  private responseProcessor: NotebooksApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: NotebooksApiRequestFactory,
    responseProcessor?: NotebooksApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new NotebooksApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new NotebooksApiResponseProcessor();
  }

  /**
   * Search for notebooks using a query string.
   * @param param The request object
   */
  public searchNotebooks(
    param: NotebooksApiSearchNotebooksRequest = {},
    options?: Configuration
  ): Promise<NotebookSearchResponse> {
    const requestContextPromise = this.requestFactory.searchNotebooks(
      param.query,
      param.sort,
      param.include,
      param.page,
      param.limit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchNotebooks(responseContext);
        });
    });
  }
}
