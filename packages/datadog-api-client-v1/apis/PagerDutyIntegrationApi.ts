import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { PagerDutyService } from "../models/PagerDutyService";
import { PagerDutyServiceKey } from "../models/PagerDutyServiceKey";
import { PagerDutyServiceName } from "../models/PagerDutyServiceName";

export class PagerDutyIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createPagerDutyIntegrationService(
    body: PagerDutyService,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createPagerDutyIntegrationService."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/integration/pagerduty/configuration/services";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "PagerDutyIntegrationApi.createPagerDutyIntegrationService"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PagerDutyService", ""),
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

  public async deletePagerDutyIntegrationService(
    serviceName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError(
        "Required parameter serviceName was null or undefined when calling deletePagerDutyIntegrationService."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/pagerduty/configuration/services/{service_name}".replace(
        "{" + "service_name" + "}",
        encodeURIComponent(String(serviceName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "PagerDutyIntegrationApi.deletePagerDutyIntegrationService"
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

  public async getPagerDutyIntegrationService(
    serviceName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError(
        "Required parameter serviceName was null or undefined when calling getPagerDutyIntegrationService."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/pagerduty/configuration/services/{service_name}".replace(
        "{" + "service_name" + "}",
        encodeURIComponent(String(serviceName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "PagerDutyIntegrationApi.getPagerDutyIntegrationService"
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

  public async updatePagerDutyIntegrationService(
    serviceName: string,
    body: PagerDutyServiceKey,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError(
        "Required parameter serviceName was null or undefined when calling updatePagerDutyIntegrationService."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updatePagerDutyIntegrationService."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/pagerduty/configuration/services/{service_name}".replace(
        "{" + "service_name" + "}",
        encodeURIComponent(String(serviceName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "PagerDutyIntegrationApi.updatePagerDutyIntegrationService"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PagerDutyServiceKey", ""),
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

export class PagerDutyIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createPagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPagerDutyIntegrationService(
    response: ResponseContext
  ): Promise<PagerDutyServiceName> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: PagerDutyServiceName = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PagerDutyServiceName",
        ""
      ) as PagerDutyServiceName;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PagerDutyServiceName = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PagerDutyServiceName",
        ""
      ) as PagerDutyServiceName;
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
   * @params response Response returned by the server for a request to deletePagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePagerDutyIntegrationService(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
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
   * @params response Response returned by the server for a request to getPagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPagerDutyIntegrationService(
    response: ResponseContext
  ): Promise<PagerDutyServiceName> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PagerDutyServiceName = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PagerDutyServiceName",
        ""
      ) as PagerDutyServiceName;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PagerDutyServiceName = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PagerDutyServiceName",
        ""
      ) as PagerDutyServiceName;
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
   * @params response Response returned by the server for a request to updatePagerDutyIntegrationService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePagerDutyIntegrationService(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
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
    configuration: Configuration,
    requestFactory?: PagerDutyIntegrationApiRequestFactory,
    responseProcessor?: PagerDutyIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new PagerDutyIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PagerDutyIntegrationApiResponseProcessor();
  }

  /**
   * Create a new service object in the PagerDuty integration.
   * @param param The request object
   */
  public createPagerDutyIntegrationService(
    param: PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    const requestContextPromise =
      this.requestFactory.createPagerDutyIntegrationService(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPagerDutyIntegrationService(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deletePagerDutyIntegrationService(
        param.serviceName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePagerDutyIntegrationService(
            responseContext
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
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    const requestContextPromise =
      this.requestFactory.getPagerDutyIntegrationService(
        param.serviceName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPagerDutyIntegrationService(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updatePagerDutyIntegrationService(
        param.serviceName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePagerDutyIntegrationService(
            responseContext
          );
        });
    });
  }
}
