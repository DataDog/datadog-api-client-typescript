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
import { SLOCorrection } from "../models/SLOCorrection";
import { SLOCorrectionCreateRequest } from "../models/SLOCorrectionCreateRequest";
import { SLOCorrectionListResponse } from "../models/SLOCorrectionListResponse";
import { SLOCorrectionResponse } from "../models/SLOCorrectionResponse";
import { SLOCorrectionUpdateRequest } from "../models/SLOCorrectionUpdateRequest";

export class ServiceLevelObjectiveCorrectionsApiRequestFactory extends BaseAPIRequestFactory {
  public async createSLOCorrection(
    body: SLOCorrectionCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSLOCorrection");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectiveCorrectionsApi.createSLOCorrection")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SLOCorrectionCreateRequest", ""),
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

  public async deleteSLOCorrection(
    sloCorrectionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloCorrectionId' is not null or undefined
    if (sloCorrectionId === null || sloCorrectionId === undefined) {
      throw new RequiredError("sloCorrectionId", "deleteSLOCorrection");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction/{slo_correction_id}".replace(
      "{slo_correction_id}",
      encodeURIComponent(String(sloCorrectionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectiveCorrectionsApi.deleteSLOCorrection")
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

  public async getSLOCorrection(
    sloCorrectionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloCorrectionId' is not null or undefined
    if (sloCorrectionId === null || sloCorrectionId === undefined) {
      throw new RequiredError("sloCorrectionId", "getSLOCorrection");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction/{slo_correction_id}".replace(
      "{slo_correction_id}",
      encodeURIComponent(String(sloCorrectionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectiveCorrectionsApi.getSLOCorrection")
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

  public async listSLOCorrection(
    offset?: number,
    limit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/slo/correction";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectiveCorrectionsApi.listSLOCorrection")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64"),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
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

  public async updateSLOCorrection(
    sloCorrectionId: string,
    body: SLOCorrectionUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloCorrectionId' is not null or undefined
    if (sloCorrectionId === null || sloCorrectionId === undefined) {
      throw new RequiredError("sloCorrectionId", "updateSLOCorrection");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSLOCorrection");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction/{slo_correction_id}".replace(
      "{slo_correction_id}",
      encodeURIComponent(String(sloCorrectionId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectiveCorrectionsApi.updateSLOCorrection")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SLOCorrectionUpdateRequest", ""),
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

export class ServiceLevelObjectiveCorrectionsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSLOCorrection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSLOCorrection(
    response: ResponseContext
  ): Promise<SLOCorrectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse"
      ) as SLOCorrectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse",
        ""
      ) as SLOCorrectionResponse;
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
   * @params response Response returned by the server for a request to deleteSLOCorrection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSLOCorrection(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      return;
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
   * @params response Response returned by the server for a request to getSLOCorrection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOCorrection(
    response: ResponseContext
  ): Promise<SLOCorrectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse"
      ) as SLOCorrectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse",
        ""
      ) as SLOCorrectionResponse;
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
   * @params response Response returned by the server for a request to listSLOCorrection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSLOCorrection(
    response: ResponseContext
  ): Promise<SLOCorrectionListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SLOCorrectionListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionListResponse"
      ) as SLOCorrectionListResponse;
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
      const body: SLOCorrectionListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionListResponse",
        ""
      ) as SLOCorrectionListResponse;
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
   * @params response Response returned by the server for a request to updateSLOCorrection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSLOCorrection(
    response: ResponseContext
  ): Promise<SLOCorrectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse"
      ) as SLOCorrectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse",
        ""
      ) as SLOCorrectionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest {
  /**
   * Create an SLO Correction
   * @type SLOCorrectionCreateRequest
   */
  body: SLOCorrectionCreateRequest;
}

export interface ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
   * @type string
   */
  sloCorrectionId: string;
}

export interface ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
   * @type string
   */
  sloCorrectionId: string;
}

export interface ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest {
  /**
   * The specific offset to use as the beginning of the returned response.
   * @type number
   */
  offset?: number;
  /**
   * The number of SLO corrections to return in the response. Default is 25.
   * @type number
   */
  limit?: number;
}

export interface ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
   * @type string
   */
  sloCorrectionId: string;
  /**
   * The edited SLO correction object.
   * @type SLOCorrectionUpdateRequest
   */
  body: SLOCorrectionUpdateRequest;
}

export class ServiceLevelObjectiveCorrectionsApi {
  private requestFactory: ServiceLevelObjectiveCorrectionsApiRequestFactory;
  private responseProcessor: ServiceLevelObjectiveCorrectionsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceLevelObjectiveCorrectionsApiRequestFactory,
    responseProcessor?: ServiceLevelObjectiveCorrectionsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new ServiceLevelObjectiveCorrectionsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new ServiceLevelObjectiveCorrectionsApiResponseProcessor();
  }

  /**
   * Create an SLO Correction.
   * @param param The request object
   */
  public createSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const requestContextPromise = this.requestFactory.createSLOCorrection(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Permanently delete the specified SLO correction object.
   * @param param The request object
   */
  public deleteSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSLOCorrection(
      param.sloCorrectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Get an SLO correction.
   * @param param The request object
   */
  public getSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const requestContextPromise = this.requestFactory.getSLOCorrection(
      param.sloCorrectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Get all Service Level Objective corrections.
   * @param param The request object
   */
  public listSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest = {},
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    const requestContextPromise = this.requestFactory.listSLOCorrection(
      param.offset,
      param.limit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listSLOCorrection returning a generator with all the items.
   */
  public async *listSLOCorrectionWithPagination(
    param: ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest = {},
    options?: Configuration
  ): AsyncGenerator<SLOCorrection> {
    let pageSize = 25;
    if (param.limit !== undefined) {
      pageSize = param.limit;
    }
    param.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listSLOCorrection(
        param.offset,
        param.limit,
        options
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listSLOCorrection(responseContext);
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
      if (param.offset === undefined) {
        param.offset = pageSize;
      } else {
        param.offset = param.offset + pageSize;
      }
    }
  }

  /**
   * Update the specified SLO correction object.
   * @param param The request object
   */
  public updateSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const requestContextPromise = this.requestFactory.updateSLOCorrection(
      param.sloCorrectionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSLOCorrection(responseContext);
        });
    });
  }
}
