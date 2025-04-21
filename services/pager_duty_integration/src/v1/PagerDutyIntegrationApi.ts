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
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { PagerDutyService } from "./models/PagerDutyService";
import { PagerDutyServiceKey } from "./models/PagerDutyServiceKey";
import { PagerDutyServiceName } from "./models/PagerDutyServiceName";

export class PagerDutyIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createPagerDutyIntegrationService(
    body: PagerDutyService,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPagerDutyIntegrationService");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/pagerduty/configuration/services";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.PagerDutyIntegrationApi.createPagerDutyIntegrationService")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "PagerDutyService", ""),
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

  public async deletePagerDutyIntegrationService(
    serviceName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError(
        "serviceName",
        "deletePagerDutyIntegrationService",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/pagerduty/configuration/services/{service_name}".replace(
        "{service_name}",
        encodeURIComponent(String(serviceName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.PagerDutyIntegrationApi.deletePagerDutyIntegrationService")
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

  public async getPagerDutyIntegrationService(
    serviceName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError("serviceName", "getPagerDutyIntegrationService");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/pagerduty/configuration/services/{service_name}".replace(
        "{service_name}",
        encodeURIComponent(String(serviceName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.PagerDutyIntegrationApi.getPagerDutyIntegrationService")
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

  public async updatePagerDutyIntegrationService(
    serviceName: string,
    body: PagerDutyServiceKey,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError(
        "serviceName",
        "updatePagerDutyIntegrationService",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePagerDutyIntegrationService");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/pagerduty/configuration/services/{service_name}".replace(
        "{service_name}",
        encodeURIComponent(String(serviceName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.PagerDutyIntegrationApi.updatePagerDutyIntegrationService")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "PagerDutyServiceKey", ""),
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
}

export class PagerDutyIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createPagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPagerDutyIntegrationService(
    response: ResponseContext,
  ): Promise<PagerDutyServiceName> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: PagerDutyServiceName = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PagerDutyServiceName",
      ) as PagerDutyServiceName;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: PagerDutyServiceName = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PagerDutyServiceName",
        "",
      ) as PagerDutyServiceName;
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
   * @params response Response returned by the server for a request to deletePagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePagerDutyIntegrationService(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to getPagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPagerDutyIntegrationService(
    response: ResponseContext,
  ): Promise<PagerDutyServiceName> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PagerDutyServiceName = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PagerDutyServiceName",
      ) as PagerDutyServiceName;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: PagerDutyServiceName = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PagerDutyServiceName",
        "",
      ) as PagerDutyServiceName;
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
   * @params response Response returned by the server for a request to updatePagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePagerDutyIntegrationService(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest {
  /**
   * Create a new service object request body.
   * @type PagerDutyService
   */
  body: PagerDutyService;
}

export interface PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest {
  /**
   * The service name
   * @type string
   */
  serviceName: string;
}

export interface PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest {
  /**
   * The service name.
   * @type string
   */
  serviceName: string;
}

export interface PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest {
  /**
   * The service name
   * @type string
   */
  serviceName: string;
  /**
   * Update an existing service object request body.
   * @type PagerDutyServiceKey
   */
  body: PagerDutyServiceKey;
}

export class PagerDutyIntegrationApi {
  private requestFactory: PagerDutyIntegrationApiRequestFactory;
  private responseProcessor: PagerDutyIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: PagerDutyIntegrationApiRequestFactory,
    responseProcessor?: PagerDutyIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new PagerDutyIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new PagerDutyIntegrationApiResponseProcessor();
  }

  /**
   * Create a new service object in the PagerDuty integration.
   * @param param The request object
   */
  public createPagerDutyIntegrationService(
    param: PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest,
    options?: Configuration,
  ): Promise<PagerDutyServiceName> {
    const requestContextPromise =
      this.requestFactory.createPagerDutyIntegrationService(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPagerDutyIntegrationService(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a single service object in the Datadog-PagerDuty integration.
   * @param param The request object
   */
  public deletePagerDutyIntegrationService(
    param: PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deletePagerDutyIntegrationService(
        param.serviceName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePagerDutyIntegrationService(
            responseContext,
          );
        });
    });
  }

  /**
   * Get service name in the Datadog-PagerDuty integration.
   * @param param The request object
   */
  public getPagerDutyIntegrationService(
    param: PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest,
    options?: Configuration,
  ): Promise<PagerDutyServiceName> {
    const requestContextPromise =
      this.requestFactory.getPagerDutyIntegrationService(
        param.serviceName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPagerDutyIntegrationService(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a single service object in the Datadog-PagerDuty integration.
   * @param param The request object
   */
  public updatePagerDutyIntegrationService(
    param: PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updatePagerDutyIntegrationService(
        param.serviceName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePagerDutyIntegrationService(
            responseContext,
          );
        });
    });
  }
}
