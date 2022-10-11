import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createSLOCorrection."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.ServiceLevelObjectiveCorrectionsApi.createSLOCorrection"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
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
      throw new RequiredError(
        "Required parameter sloCorrectionId was null or undefined when calling deleteSLOCorrection."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction/{slo_correction_id}".replace(
      "{" + "slo_correction_id" + "}",
      encodeURIComponent(String(sloCorrectionId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.ServiceLevelObjectiveCorrectionsApi.deleteSLOCorrection"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
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
      throw new RequiredError(
        "Required parameter sloCorrectionId was null or undefined when calling getSLOCorrection."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction/{slo_correction_id}".replace(
      "{" + "slo_correction_id" + "}",
      encodeURIComponent(String(sloCorrectionId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.ServiceLevelObjectiveCorrectionsApi.getSLOCorrection"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/slo/correction";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.ServiceLevelObjectiveCorrectionsApi.listSLOCorrection"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
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
      throw new RequiredError(
        "Required parameter sloCorrectionId was null or undefined when calling updateSLOCorrection."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateSLOCorrection."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/slo/correction/{slo_correction_id}".replace(
      "{" + "slo_correction_id" + "}",
      encodeURIComponent(String(sloCorrectionId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.ServiceLevelObjectiveCorrectionsApi.updateSLOCorrection"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
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
    if (response.httpStatusCode == 200) {
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse"
      ) as SLOCorrectionResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
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
   * @params response Response returned by the server for a request to getSLOCorrection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOCorrection(
    response: ResponseContext
  ): Promise<SLOCorrectionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse"
      ) as SLOCorrectionResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
    if (response.httpStatusCode == 200) {
      const body: SLOCorrectionListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionListResponse"
      ) as SLOCorrectionListResponse;
      return body;
    }
    if (response.httpStatusCode == 403 || response.httpStatusCode == 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
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
    if (response.httpStatusCode == 200) {
      const body: SLOCorrectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SLOCorrectionResponse"
      ) as SLOCorrectionResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    const requestContextPromise =
      this.requestFactory.listSLOCorrection(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSLOCorrection(responseContext);
        });
    });
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
