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
import { GetInvestigationResponse } from "../models/GetInvestigationResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListInvestigationsResponse } from "../models/ListInvestigationsResponse";
import { ListInvestigationsResponseData } from "../models/ListInvestigationsResponseData";
import { TriggerInvestigationRequest } from "../models/TriggerInvestigationRequest";
import { TriggerInvestigationResponse } from "../models/TriggerInvestigationResponse";

export class BitsAIApiRequestFactory extends BaseAPIRequestFactory {
  public async getInvestigation(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getInvestigation'");
    if (!_config.unstableOperations["v2.getInvestigation"]) {
      throw new Error("Unstable operation 'getInvestigation' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getInvestigation");
    }

    // Path Params
    const localVarPath = "/api/v2/bits-ai/investigations/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.BitsAIApi.getInvestigation")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listInvestigations(
    pageOffset?: number,
    pageLimit?: number,
    filterMonitorId?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listInvestigations'");
    if (!_config.unstableOperations["v2.listInvestigations"]) {
      throw new Error("Unstable operation 'listInvestigations' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/bits-ai/investigations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.BitsAIApi.listInvestigations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (filterMonitorId !== undefined) {
      requestContext.setQueryParam(
        "filter[monitor_id]",
        ObjectSerializer.serialize(filterMonitorId, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async triggerInvestigation(
    body: TriggerInvestigationRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'triggerInvestigation'");
    if (!_config.unstableOperations["v2.triggerInvestigation"]) {
      throw new Error("Unstable operation 'triggerInvestigation' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "triggerInvestigation");
    }

    // Path Params
    const localVarPath = "/api/v2/bits-ai/investigations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.BitsAIApi.triggerInvestigation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TriggerInvestigationRequest", ""),
      contentType
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

export class BitsAIApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getInvestigation(
    response: ResponseContext
  ): Promise<GetInvestigationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetInvestigationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetInvestigationResponse"
      ) as GetInvestigationResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: GetInvestigationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetInvestigationResponse",
        ""
      ) as GetInvestigationResponse;
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
   * @params response Response returned by the server for a request to listInvestigations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listInvestigations(
    response: ResponseContext
  ): Promise<ListInvestigationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListInvestigationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListInvestigationsResponse"
      ) as ListInvestigationsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: ListInvestigationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListInvestigationsResponse",
        ""
      ) as ListInvestigationsResponse;
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
   * @params response Response returned by the server for a request to triggerInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerInvestigation(
    response: ResponseContext
  ): Promise<TriggerInvestigationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TriggerInvestigationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TriggerInvestigationResponse"
      ) as TriggerInvestigationResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: TriggerInvestigationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TriggerInvestigationResponse",
        ""
      ) as TriggerInvestigationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface BitsAIApiGetInvestigationRequest {
  /**
   * The ID of the investigation.
   * @type string
   */
  id: string;
}

export interface BitsAIApiListInvestigationsRequest {
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Maximum number of investigations to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter investigations by monitor ID.
   * @type number
   */
  filterMonitorId?: number;
}

export interface BitsAIApiTriggerInvestigationRequest {
  /**
   * Trigger investigation request body.
   * @type TriggerInvestigationRequest
   */
  body: TriggerInvestigationRequest;
}

export class BitsAIApi {
  private requestFactory: BitsAIApiRequestFactory;
  private responseProcessor: BitsAIApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: BitsAIApiRequestFactory,
    responseProcessor?: BitsAIApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new BitsAIApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new BitsAIApiResponseProcessor();
  }

  /**
   * Get a specific Bits AI investigation by ID.
   * @param param The request object
   */
  public getInvestigation(
    param: BitsAIApiGetInvestigationRequest,
    options?: Configuration
  ): Promise<GetInvestigationResponse> {
    const requestContextPromise = this.requestFactory.getInvestigation(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getInvestigation(responseContext);
        });
    });
  }

  /**
   * List all Bits AI investigations for the organization.
   * @param param The request object
   */
  public listInvestigations(
    param: BitsAIApiListInvestigationsRequest = {},
    options?: Configuration
  ): Promise<ListInvestigationsResponse> {
    const requestContextPromise = this.requestFactory.listInvestigations(
      param.pageOffset,
      param.pageLimit,
      param.filterMonitorId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listInvestigations(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listInvestigations returning a generator with all the items.
   */
  public async *listInvestigationsWithPagination(
    param: BitsAIApiListInvestigationsRequest = {},
    options?: Configuration
  ): AsyncGenerator<ListInvestigationsResponseData> {
    let pageSize = 25;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listInvestigations(
        param.pageOffset,
        param.pageLimit,
        param.filterMonitorId,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listInvestigations(
        responseContext
      );
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Trigger a new Bits AI investigation based on a monitor alert.
   * @param param The request object
   */
  public triggerInvestigation(
    param: BitsAIApiTriggerInvestigationRequest,
    options?: Configuration
  ): Promise<TriggerInvestigationResponse> {
    const requestContextPromise = this.requestFactory.triggerInvestigation(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerInvestigation(responseContext);
        });
    });
  }
}
