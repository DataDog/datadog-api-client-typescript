import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AzureAccount } from "./models/AzureAccount";
import { version } from "../version";

export class AzureIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("azure-integration", version);
    }
  }
  public async createAzureIntegration(
    body: AzureAccount,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAzureIntegration");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/azure";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AzureIntegrationApi.v1.createAzureIntegration",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AzureAccount", ""),
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

  public async deleteAzureIntegration(
    body: AzureAccount,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteAzureIntegration");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/azure";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AzureIntegrationApi.v1.deleteAzureIntegration",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AzureAccount", ""),
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

  public async listAzureIntegration(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/integration/azure";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AzureIntegrationApi.v1.listAzureIntegration",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateAzureHostFilters(
    body: AzureAccount,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAzureHostFilters");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/azure/host_filters";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AzureIntegrationApi.v1.updateAzureHostFilters",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AzureAccount", ""),
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

  public async updateAzureIntegration(
    body: AzureAccount,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAzureIntegration");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/azure";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AzureIntegrationApi.v1.updateAzureIntegration",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AzureAccount", ""),
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

export class AzureIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAzureIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAzureIntegration(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
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
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to deleteAzureIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAzureIntegration(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
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
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to listAzureIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAzureIntegration(
    response: ResponseContext,
  ): Promise<Array<AzureAccount>> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Array<AzureAccount> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<AzureAccount>",
      ) as Array<AzureAccount>;
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
      const body: Array<AzureAccount> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<AzureAccount>",
        "",
      ) as Array<AzureAccount>;
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
   * @params response Response returned by the server for a request to updateAzureHostFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAzureHostFilters(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
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
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to updateAzureIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAzureIntegration(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
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
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AzureIntegrationApiCreateAzureIntegrationRequest {
  /**
   * Create a Datadog-Azure integration for your Datadog account request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export interface AzureIntegrationApiDeleteAzureIntegrationRequest {
  /**
   * Delete a given Datadog-Azure integration request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export interface AzureIntegrationApiUpdateAzureHostFiltersRequest {
  /**
   * Update a Datadog-Azure integration's host filters request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export interface AzureIntegrationApiUpdateAzureIntegrationRequest {
  /**
   * Update a Datadog-Azure integration request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export class AzureIntegrationApi {
  private requestFactory: AzureIntegrationApiRequestFactory;
  private responseProcessor: AzureIntegrationApiResponseProcessor;
  private configuration: Configuration;

  private operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: AzureIntegrationApiRequestFactory,
    responseProcessor?: AzureIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new AzureIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AzureIntegrationApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Create a Datadog-Azure integration.
   *
   * Using the `POST` method updates your integration configuration by adding your new
   * configuration to the existing one in your Datadog organization.
   *
   * Using the `PUT` method updates your integration configuration by replacing your
   * current configuration with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public createAzureIntegration(
    param: AzureIntegrationApiCreateAzureIntegrationRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createAzureIntegration(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAzureIntegration(responseContext);
        });
    });
  }

  /**
   * Delete a given Datadog-Azure integration from your Datadog account.
   * @param param The request object
   */
  public deleteAzureIntegration(
    param: AzureIntegrationApiDeleteAzureIntegrationRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAzureIntegration(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAzureIntegration(responseContext);
        });
    });
  }

  /**
   * List all Datadog-Azure integrations configured in your Datadog account.
   * @param param The request object
   */
  public listAzureIntegration(
    options?: Configuration,
  ): Promise<Array<AzureAccount>> {
    const requestContextPromise =
      this.requestFactory.listAzureIntegration(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAzureIntegration(responseContext);
        });
    });
  }

  /**
   * Update the defined list of host filters for a given Datadog-Azure integration.
   * @param param The request object
   */
  public updateAzureHostFilters(
    param: AzureIntegrationApiUpdateAzureHostFiltersRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateAzureHostFilters(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAzureHostFilters(responseContext);
        });
    });
  }

  /**
   * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`.
   * Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`,
   * use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
   * @param param The request object
   */
  public updateAzureIntegration(
    param: AzureIntegrationApiUpdateAzureIntegrationRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateAzureIntegration(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAzureIntegration(responseContext);
        });
    });
  }
}
