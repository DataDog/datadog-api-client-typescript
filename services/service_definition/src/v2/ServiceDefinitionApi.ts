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
import { ServiceDefinitionCreateResponse } from "./models/ServiceDefinitionCreateResponse";
import { ServiceDefinitionData } from "./models/ServiceDefinitionData";
import { ServiceDefinitionGetResponse } from "./models/ServiceDefinitionGetResponse";
import { ServiceDefinitionSchemaVersions } from "./models/ServiceDefinitionSchemaVersions";
import { ServiceDefinitionsCreateRequest } from "./models/ServiceDefinitionsCreateRequest";
import { ServiceDefinitionsListResponse } from "./models/ServiceDefinitionsListResponse";

export class ServiceDefinitionApiRequestFactory extends BaseAPIRequestFactory {
  public async createOrUpdateServiceDefinitions(
    body: ServiceDefinitionsCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrUpdateServiceDefinitions");
    }

    // Path Params
    const localVarPath = "/api/v2/services/definitions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceDefinitionApi.createOrUpdateServiceDefinitions")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ServiceDefinitionsCreateRequest", ""),
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

  public async deleteServiceDefinition(
    serviceName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError("serviceName", "deleteServiceDefinition");
    }

    // Path Params
    const localVarPath = "/api/v2/services/definitions/{service_name}".replace(
      "{service_name}",
      encodeURIComponent(String(serviceName)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceDefinitionApi.deleteServiceDefinition")
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

  public async getServiceDefinition(
    serviceName: string,
    schemaVersion?: ServiceDefinitionSchemaVersions,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceName' is not null or undefined
    if (serviceName === null || serviceName === undefined) {
      throw new RequiredError("serviceName", "getServiceDefinition");
    }

    // Path Params
    const localVarPath = "/api/v2/services/definitions/{service_name}".replace(
      "{service_name}",
      encodeURIComponent(String(serviceName)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceDefinitionApi.getServiceDefinition")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (schemaVersion !== undefined) {
      requestContext.setQueryParam(
        "schema_version",
        serialize(
          schemaVersion,
          TypingInfo,
          "ServiceDefinitionSchemaVersions",
          "",
        ),
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

  public async listServiceDefinitions(
    pageSize?: number,
    pageNumber?: number,
    schemaVersion?: ServiceDefinitionSchemaVersions,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/services/definitions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceDefinitionApi.listServiceDefinitions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (schemaVersion !== undefined) {
      requestContext.setQueryParam(
        "schema_version",
        serialize(
          schemaVersion,
          TypingInfo,
          "ServiceDefinitionSchemaVersions",
          "",
        ),
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
    response: ResponseContext,
  ): Promise<ServiceDefinitionCreateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceDefinitionCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceDefinitionCreateResponse",
      ) as ServiceDefinitionCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: ServiceDefinitionCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceDefinitionCreateResponse",
        "",
      ) as ServiceDefinitionCreateResponse;
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
   * @params response Response returned by the server for a request to deleteServiceDefinition
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteServiceDefinition(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getServiceDefinition
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceDefinition(
    response: ResponseContext,
  ): Promise<ServiceDefinitionGetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceDefinitionGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceDefinitionGetResponse",
      ) as ServiceDefinitionGetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: ServiceDefinitionGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceDefinitionGetResponse",
        "",
      ) as ServiceDefinitionGetResponse;
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
   * @params response Response returned by the server for a request to listServiceDefinitions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceDefinitions(
    response: ResponseContext,
  ): Promise<ServiceDefinitionsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceDefinitionsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceDefinitionsListResponse",
      ) as ServiceDefinitionsListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: ServiceDefinitionsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceDefinitionsListResponse",
        "",
      ) as ServiceDefinitionsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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
  /**
   * The schema version desired in the response.
   * @type ServiceDefinitionSchemaVersions
   */
  schemaVersion?: ServiceDefinitionSchemaVersions;
}

export interface ServiceDefinitionApiListServiceDefinitionsRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * The schema version desired in the response.
   * @type ServiceDefinitionSchemaVersions
   */
  schemaVersion?: ServiceDefinitionSchemaVersions;
}

export class ServiceDefinitionApi {
  private requestFactory: ServiceDefinitionApiRequestFactory;
  private responseProcessor: ServiceDefinitionApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: ServiceDefinitionApiRequestFactory,
    responseProcessor?: ServiceDefinitionApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ServiceDefinitionApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ServiceDefinitionApiResponseProcessor();
  }

  /**
   * Create or update service definition in the Datadog Service Catalog.
   * @param param The request object
   */
  public createOrUpdateServiceDefinitions(
    param: ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest,
    options?: Configuration,
  ): Promise<ServiceDefinitionCreateResponse> {
    const requestContextPromise =
      this.requestFactory.createOrUpdateServiceDefinitions(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrUpdateServiceDefinitions(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteServiceDefinition(
      param.serviceName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteServiceDefinition(
            responseContext,
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
    options?: Configuration,
  ): Promise<ServiceDefinitionGetResponse> {
    const requestContextPromise = this.requestFactory.getServiceDefinition(
      param.serviceName,
      param.schemaVersion,
      options,
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
    param: ServiceDefinitionApiListServiceDefinitionsRequest = {},
    options?: Configuration,
  ): Promise<ServiceDefinitionsListResponse> {
    const requestContextPromise = this.requestFactory.listServiceDefinitions(
      param.pageSize,
      param.pageNumber,
      param.schemaVersion,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceDefinitions(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listServiceDefinitions returning a generator with all the items.
   */
  public async *listServiceDefinitionsWithPagination(
    param: ServiceDefinitionApiListServiceDefinitionsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<ServiceDefinitionData> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listServiceDefinitions(
        param.pageSize,
        param.pageNumber,
        param.schemaVersion,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listServiceDefinitions(responseContext);
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
      param.pageNumber = param.pageNumber + 1;
    }
  }
}
