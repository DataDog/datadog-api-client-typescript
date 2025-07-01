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
import { LogsAPIErrorResponse } from "../models/LogsAPIErrorResponse";
import { LogsIndex } from "../models/LogsIndex";
import { LogsIndexesOrder } from "../models/LogsIndexesOrder";
import { LogsIndexListResponse } from "../models/LogsIndexListResponse";
import { LogsIndexUpdateRequest } from "../models/LogsIndexUpdateRequest";

export class LogsIndexesApiRequestFactory extends BaseAPIRequestFactory {
  public async createLogsIndex(
    body: LogsIndex,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLogsIndex");
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/indexes";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.LogsIndexesApi.createLogsIndex")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsIndex", ""),
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

  public async deleteLogsIndex(
    name: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("name", "deleteLogsIndex");
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/indexes/{name}".replace(
      "{name}",
      encodeURIComponent(String(name))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.LogsIndexesApi.deleteLogsIndex")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLogsIndex(
    name: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("name", "getLogsIndex");
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/indexes/{name}".replace(
      "{name}",
      encodeURIComponent(String(name))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.LogsIndexesApi.getLogsIndex")
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

  public async getLogsIndexOrder(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/logs/config/index-order";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.LogsIndexesApi.getLogsIndexOrder")
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

  public async listLogIndexes(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/logs/config/indexes";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.LogsIndexesApi.listLogIndexes")
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

  public async updateLogsIndex(
    name: string,
    body: LogsIndexUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("name", "updateLogsIndex");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLogsIndex");
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/indexes/{name}".replace(
      "{name}",
      encodeURIComponent(String(name))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.LogsIndexesApi.updateLogsIndex")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsIndexUpdateRequest", ""),
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

  public async updateLogsIndexOrder(
    body: LogsIndexesOrder,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLogsIndexOrder");
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/index-order";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.LogsIndexesApi.updateLogsIndexOrder")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsIndexesOrder", ""),
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

export class LogsIndexesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createLogsIndex
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLogsIndex(response: ResponseContext): Promise<LogsIndex> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsIndex = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndex"
      ) as LogsIndex;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: LogsAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "LogsAPIErrorResponse"
        ) as LogsAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<LogsAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<LogsAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: LogsIndex = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndex",
        ""
      ) as LogsIndex;
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
   * @params response Response returned by the server for a request to deleteLogsIndex
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLogsIndex(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
    if (response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: LogsAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "LogsAPIErrorResponse"
        ) as LogsAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<LogsAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<LogsAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getLogsIndex
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsIndex(response: ResponseContext): Promise<LogsIndex> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsIndex = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndex"
      ) as LogsIndex;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
    if (response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: LogsAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "LogsAPIErrorResponse"
        ) as LogsAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<LogsAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<LogsAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: LogsIndex = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndex",
        ""
      ) as LogsIndex;
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
   * @params response Response returned by the server for a request to getLogsIndexOrder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsIndexOrder(
    response: ResponseContext
  ): Promise<LogsIndexesOrder> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsIndexesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndexesOrder"
      ) as LogsIndexesOrder;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: LogsIndexesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndexesOrder",
        ""
      ) as LogsIndexesOrder;
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
   * @params response Response returned by the server for a request to listLogIndexes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogIndexes(
    response: ResponseContext
  ): Promise<LogsIndexListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsIndexListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndexListResponse"
      ) as LogsIndexListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: LogsIndexListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndexListResponse",
        ""
      ) as LogsIndexListResponse;
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
   * @params response Response returned by the server for a request to updateLogsIndex
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsIndex(response: ResponseContext): Promise<LogsIndex> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsIndex = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndex"
      ) as LogsIndex;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: LogsAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "LogsAPIErrorResponse"
        ) as LogsAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<LogsAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<LogsAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 403) {
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
      const body: LogsIndex = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndex",
        ""
      ) as LogsIndex;
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
   * @params response Response returned by the server for a request to updateLogsIndexOrder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsIndexOrder(
    response: ResponseContext
  ): Promise<LogsIndexesOrder> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LogsIndexesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndexesOrder"
      ) as LogsIndexesOrder;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: LogsAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "LogsAPIErrorResponse"
        ) as LogsAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<LogsAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<LogsAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: LogsIndexesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsIndexesOrder",
        ""
      ) as LogsIndexesOrder;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface LogsIndexesApiCreateLogsIndexRequest {
  /**
   * Object containing the new index.
   * @type LogsIndex
   */
  body: LogsIndex;
}

export interface LogsIndexesApiDeleteLogsIndexRequest {
  /**
   * Name of the log index.
   * @type string
   */
  name: string;
}

export interface LogsIndexesApiGetLogsIndexRequest {
  /**
   * Name of the log index.
   * @type string
   */
  name: string;
}

export interface LogsIndexesApiUpdateLogsIndexRequest {
  /**
   * Name of the log index.
   * @type string
   */
  name: string;
  /**
   * Object containing the new `LogsIndexUpdateRequest`.
   * @type LogsIndexUpdateRequest
   */
  body: LogsIndexUpdateRequest;
}

export interface LogsIndexesApiUpdateLogsIndexOrderRequest {
  /**
   * Object containing the new ordered list of index names
   * @type LogsIndexesOrder
   */
  body: LogsIndexesOrder;
}

export class LogsIndexesApi {
  private requestFactory: LogsIndexesApiRequestFactory;
  private responseProcessor: LogsIndexesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsIndexesApiRequestFactory,
    responseProcessor?: LogsIndexesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsIndexesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsIndexesApiResponseProcessor();
  }

  /**
   * Creates a new index. Returns the Index object passed in the request body when the request is successful.
   * @param param The request object
   */
  public createLogsIndex(
    param: LogsIndexesApiCreateLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    const requestContextPromise = this.requestFactory.createLogsIndex(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsIndex(responseContext);
        });
    });
  }

  /**
   * Delete an existing index from your organization. Index deletions are permanent and cannot be reverted.
   * You cannot recreate an index with the same name as deleted ones.
   * @param param The request object
   */
  public deleteLogsIndex(
    param: LogsIndexesApiDeleteLogsIndexRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLogsIndex(
      param.name,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLogsIndex(responseContext);
        });
    });
  }

  /**
   * Get one log index from your organization. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsIndex(
    param: LogsIndexesApiGetLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    const requestContextPromise = this.requestFactory.getLogsIndex(
      param.name,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsIndex(responseContext);
        });
    });
  }

  /**
   * Get the current order of your log indexes. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsIndexOrder(options?: Configuration): Promise<LogsIndexesOrder> {
    const requestContextPromise =
      this.requestFactory.getLogsIndexOrder(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsIndexOrder(responseContext);
        });
    });
  }

  /**
   * The Index object describes the configuration of a log index.
   * This endpoint returns an array of the `LogIndex` objects of your organization.
   * @param param The request object
   */
  public listLogIndexes(
    options?: Configuration
  ): Promise<LogsIndexListResponse> {
    const requestContextPromise = this.requestFactory.listLogIndexes(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogIndexes(responseContext);
        });
    });
  }

  /**
   * Update an index as identified by its name.
   * Returns the Index object passed in the request body when the request is successful.
   *
   * Using the `PUT` method updates your index’s configuration by **replacing**
   * your current configuration with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public updateLogsIndex(
    param: LogsIndexesApiUpdateLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    const requestContextPromise = this.requestFactory.updateLogsIndex(
      param.name,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsIndex(responseContext);
        });
    });
  }

  /**
   * This endpoint updates the index order of your organization.
   * It returns the index order object passed in the request body when the request is successful.
   * @param param The request object
   */
  public updateLogsIndexOrder(
    param: LogsIndexesApiUpdateLogsIndexOrderRequest,
    options?: Configuration
  ): Promise<LogsIndexesOrder> {
    const requestContextPromise = this.requestFactory.updateLogsIndexOrder(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsIndexOrder(responseContext);
        });
    });
  }
}
