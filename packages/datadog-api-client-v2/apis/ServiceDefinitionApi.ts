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
import { ServiceDefinitionCreateResponse } from "../models/ServiceDefinitionCreateResponse";
import { ServiceDefinitionGetResponse } from "../models/ServiceDefinitionGetResponse";
import { ServiceDefinitionsCreateRequest } from "../models/ServiceDefinitionsCreateRequest";
import { ServiceDefinitionsListResponse } from "../models/ServiceDefinitionsListResponse";

export class ServiceDefinitionApiRequestFactory extends BaseAPIRequestFactory {
  public async createOrUpdateServiceDefinitions(
    body: ServiceDefinitionsCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrUpdateServiceDefinitions");
    }

    // Path Params
    const localVarPath = "/api/v2/services/definitions";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.ServiceDefinitionApi.createOrUpdateServiceDefinitions"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ServiceDefinitionsCreateRequest", ""),
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

  public async deleteServiceDefinition(
    serviceName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError("serviceName", "deleteServiceDefinition");
    }

    // Path Params
    const localVarPath = "/api/v2/services/definitions/{service_name}".replace(
      "{service_name}",
      encodeURIComponent(String(serviceName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.ServiceDefinitionApi.deleteServiceDefinition"
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

  public async getServiceDefinition(
    serviceName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError("serviceName", "getServiceDefinition");
    }

    // Path Params
    const localVarPath = "/api/v2/services/definitions/{service_name}".replace(
      "{service_name}",
      encodeURIComponent(String(serviceName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.ServiceDefinitionApi.getServiceDefinition"
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

  public async listServiceDefinitions(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/services/definitions";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.ServiceDefinitionApi.listServiceDefinitions"
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
}

export class ServiceDefinitionApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOrUpdateServiceDefinitions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrUpdateServiceDefinitions(
    response: ResponseContext
  ): Promise<ServiceDefinitionCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: ServiceDefinitionCreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ServiceDefinitionCreateResponse"
        ) as ServiceDefinitionCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 409 ||
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
      const body: ServiceDefinitionCreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ServiceDefinitionCreateResponse",
          ""
        ) as ServiceDefinitionCreateResponse;
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
   * @params response Response returned by the server for a request to deleteServiceDefinition
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteServiceDefinition(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
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
   * @params response Response returned by the server for a request to getServiceDefinition
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceDefinition(
    response: ResponseContext
  ): Promise<ServiceDefinitionGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: ServiceDefinitionGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServiceDefinitionGetResponse"
      ) as ServiceDefinitionGetResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 409 ||
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
      const body: ServiceDefinitionGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServiceDefinitionGetResponse",
        ""
      ) as ServiceDefinitionGetResponse;
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
   * @params response Response returned by the server for a request to listServiceDefinitions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceDefinitions(
    response: ResponseContext
  ): Promise<ServiceDefinitionsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: ServiceDefinitionsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServiceDefinitionsListResponse"
      ) as ServiceDefinitionsListResponse;
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
      const body: ServiceDefinitionsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServiceDefinitionsListResponse",
        ""
      ) as ServiceDefinitionsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest {
  /**
   * Service Definition YAML/JSON.
   * @type ServiceDefinitionsCreateRequest
   */
  body: ServiceDefinitionsCreateRequest;
}

export interface ServiceDefinitionApiDeleteServiceDefinitionRequest {
  /**
   * The name of the service.
   * @type string
   */
  serviceName: string;
}

export interface ServiceDefinitionApiGetServiceDefinitionRequest {
  /**
   * The name of the service.
   * @type string
   */
  serviceName: string;
}

export class ServiceDefinitionApi {
  private requestFactory: ServiceDefinitionApiRequestFactory;
  private responseProcessor: ServiceDefinitionApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceDefinitionApiRequestFactory,
    responseProcessor?: ServiceDefinitionApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ServiceDefinitionApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceDefinitionApiResponseProcessor();
  }

  /**
   * Create or update service definition in the Datadog Service Catalog.
   * @param param The request object
   */
  public createOrUpdateServiceDefinitions(
    param: ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest,
    options?: Configuration
  ): Promise<ServiceDefinitionCreateResponse> {
    const requestContextPromise =
      this.requestFactory.createOrUpdateServiceDefinitions(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrUpdateServiceDefinitions(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a single service definition in the Datadog Service Catalog.
   * @param param The request object
   */
  public deleteServiceDefinition(
    param: ServiceDefinitionApiDeleteServiceDefinitionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteServiceDefinition(
      param.serviceName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteServiceDefinition(
            responseContext
          );
        });
    });
  }

  /**
   * Get a single service definition from the Datadog Service Catalog.
   * @param param The request object
   */
  public getServiceDefinition(
    param: ServiceDefinitionApiGetServiceDefinitionRequest,
    options?: Configuration
  ): Promise<ServiceDefinitionGetResponse> {
    const requestContextPromise = this.requestFactory.getServiceDefinition(
      param.serviceName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getServiceDefinition(responseContext);
        });
    });
  }

  /**
   * Get a list of all service definitions from the Datadog Service Catalog.
   * @param param The request object
   */
  public listServiceDefinitions(
    options?: Configuration
  ): Promise<ServiceDefinitionsListResponse> {
    const requestContextPromise =
      this.requestFactory.listServiceDefinitions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceDefinitions(responseContext);
        });
    });
  }
}
