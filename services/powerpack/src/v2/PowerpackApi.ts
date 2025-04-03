import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { ListPowerpacksResponse } from "./models/ListPowerpacksResponse";
import { Powerpack } from "./models/Powerpack";
import { PowerpackData } from "./models/PowerpackData";
import { PowerpackResponse } from "./models/PowerpackResponse";

export class PowerpackApiRequestFactory extends BaseAPIRequestFactory {
  public async createPowerpack(
    body: Powerpack,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPowerpack");
    }

    // Path Params
    const localVarPath = "/api/v2/powerpacks";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.PowerpackApi.createPowerpack")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "Powerpack", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deletePowerpack(
    powerpackId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'powerpackId' is not null or undefined
    if (powerpackId === null || powerpackId === undefined) {
      throw new RequiredError("powerpackId", "deletePowerpack");
    }

    // Path Params
    const localVarPath = "/api/v2/powerpacks/{powerpack_id}".replace(
      "{powerpack_id}",
      encodeURIComponent(String(powerpackId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.PowerpackApi.deletePowerpack")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getPowerpack(
    powerpackId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'powerpackId' is not null or undefined
    if (powerpackId === null || powerpackId === undefined) {
      throw new RequiredError("powerpackId", "getPowerpack");
    }

    // Path Params
    const localVarPath = "/api/v2/powerpacks/{powerpack_id}".replace(
      "{powerpack_id}",
      encodeURIComponent(String(powerpackId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.PowerpackApi.getPowerpack")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listPowerpacks(
    pageLimit?: number,
    pageOffset?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/powerpacks";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.PowerpackApi.listPowerpacks")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updatePowerpack(
    powerpackId: string,
    body: Powerpack,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'powerpackId' is not null or undefined
    if (powerpackId === null || powerpackId === undefined) {
      throw new RequiredError("powerpackId", "updatePowerpack");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePowerpack");
    }

    // Path Params
    const localVarPath = "/api/v2/powerpacks/{powerpack_id}".replace(
      "{powerpack_id}",
      encodeURIComponent(String(powerpackId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.PowerpackApi.updatePowerpack")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "Powerpack", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class PowerpackApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createPowerpack
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPowerpack(
    response: ResponseContext,
  ): Promise<PowerpackResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: PowerpackResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PowerpackResponse",
      ) as PowerpackResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: PowerpackResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PowerpackResponse",
        "",
      ) as PowerpackResponse;
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
   * @params response Response returned by the server for a request to deletePowerpack
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePowerpack(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      return;
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
   * @params response Response returned by the server for a request to getPowerpack
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPowerpack(
    response: ResponseContext,
  ): Promise<PowerpackResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: PowerpackResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PowerpackResponse",
      ) as PowerpackResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: PowerpackResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PowerpackResponse",
        "",
      ) as PowerpackResponse;
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
   * @params response Response returned by the server for a request to listPowerpacks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listPowerpacks(
    response: ResponseContext,
  ): Promise<ListPowerpacksResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: ListPowerpacksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListPowerpacksResponse",
      ) as ListPowerpacksResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: ListPowerpacksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListPowerpacksResponse",
        "",
      ) as ListPowerpacksResponse;
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
   * @params response Response returned by the server for a request to updatePowerpack
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePowerpack(
    response: ResponseContext,
  ): Promise<PowerpackResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: PowerpackResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PowerpackResponse",
      ) as PowerpackResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: PowerpackResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PowerpackResponse",
        "",
      ) as PowerpackResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface PowerpackApiCreatePowerpackRequest {
  /**
   * Create a powerpack request body.
   * @type Powerpack
   */
  body: Powerpack;
}

export interface PowerpackApiDeletePowerpackRequest {
  /**
   * Powerpack id
   * @type string
   */
  powerpackId: string;
}

export interface PowerpackApiGetPowerpackRequest {
  /**
   * ID of the powerpack.
   * @type string
   */
  powerpackId: string;
}

export interface PowerpackApiListPowerpacksRequest {
  /**
   * Maximum number of powerpacks in the response.
   * @type number
   */
  pageLimit?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
}

export interface PowerpackApiUpdatePowerpackRequest {
  /**
   * ID of the powerpack.
   * @type string
   */
  powerpackId: string;
  /**
   * Update a powerpack request body.
   * @type Powerpack
   */
  body: Powerpack;
}

export class PowerpackApi {
  private requestFactory: PowerpackApiRequestFactory;
  private responseProcessor: PowerpackApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: PowerpackApiRequestFactory,
    responseProcessor?: PowerpackApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new PowerpackApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new PowerpackApiResponseProcessor();
  }

  /**
   * Create a powerpack.
   * @param param The request object
   */
  public createPowerpack(
    param: PowerpackApiCreatePowerpackRequest,
    options?: Configuration,
  ): Promise<PowerpackResponse> {
    const requestContextPromise = this.requestFactory.createPowerpack(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPowerpack(responseContext);
        });
    });
  }

  /**
   * Delete a powerpack.
   * @param param The request object
   */
  public deletePowerpack(
    param: PowerpackApiDeletePowerpackRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deletePowerpack(
      param.powerpackId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePowerpack(responseContext);
        });
    });
  }

  /**
   * Get a powerpack.
   * @param param The request object
   */
  public getPowerpack(
    param: PowerpackApiGetPowerpackRequest,
    options?: Configuration,
  ): Promise<PowerpackResponse> {
    const requestContextPromise = this.requestFactory.getPowerpack(
      param.powerpackId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPowerpack(responseContext);
        });
    });
  }

  /**
   * Get a list of all powerpacks.
   * @param param The request object
   */
  public listPowerpacks(
    param: PowerpackApiListPowerpacksRequest = {},
    options?: Configuration,
  ): Promise<ListPowerpacksResponse> {
    const requestContextPromise = this.requestFactory.listPowerpacks(
      param.pageLimit,
      param.pageOffset,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listPowerpacks(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listPowerpacks returning a generator with all the items.
   */
  public async *listPowerpacksWithPagination(
    param: PowerpackApiListPowerpacksRequest = {},
    options?: Configuration,
  ): AsyncGenerator<PowerpackData> {
    let pageSize = 25;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listPowerpacks(
        param.pageLimit,
        param.pageOffset,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listPowerpacks(responseContext);
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
   * Update a powerpack.
   * @param param The request object
   */
  public updatePowerpack(
    param: PowerpackApiUpdatePowerpackRequest,
    options?: Configuration,
  ): Promise<PowerpackResponse> {
    const requestContextPromise = this.requestFactory.updatePowerpack(
      param.powerpackId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePowerpack(responseContext);
        });
    });
  }
}
