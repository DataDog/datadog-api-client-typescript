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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { TerraformBackendCreateRequest } from "./models/TerraformBackendCreateRequest";
import { TerraformBackendListResponse } from "./models/TerraformBackendListResponse";
import { TerraformBackendResponse } from "./models/TerraformBackendResponse";
import { TerraformBackendUpdateRequest } from "./models/TerraformBackendUpdateRequest";
import { version } from "../version";

export class TerraformStateFilesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("terraform-state-files", version);
    }
  }
  public async createTerraformBackendSyncConfig(
    body: TerraformBackendCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTerraformBackendSyncConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/iac-api/terraform/backends";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TerraformStateFilesApi.v2.createTerraformBackendSyncConfig",
      TerraformStateFilesApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TerraformBackendCreateRequest", ""),
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

  public async deleteTerraformBackendSyncConfig(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteTerraformBackendSyncConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/iac-api/terraform/backends/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TerraformStateFilesApi.v2.deleteTerraformBackendSyncConfig",
      TerraformStateFilesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTerraformBackendSyncConfigs(
    accountId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/iac-api/terraform/backends";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TerraformStateFilesApi.v2.listTerraformBackendSyncConfigs",
      TerraformStateFilesApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (accountId !== undefined) {
      requestContext.setQueryParam(
        "account_id",
        serialize(accountId, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateTerraformBackendSyncConfig(
    id: string,
    body: TerraformBackendUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateTerraformBackendSyncConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTerraformBackendSyncConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/iac-api/terraform/backends/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TerraformStateFilesApi.v2.updateTerraformBackendSyncConfig",
      TerraformStateFilesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TerraformBackendUpdateRequest", ""),
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

export class TerraformStateFilesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTerraformBackendSyncConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTerraformBackendSyncConfig(
    response: ResponseContext,
  ): Promise<TerraformBackendResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TerraformBackendResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TerraformBackendResponse",
      ) as TerraformBackendResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TerraformBackendResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TerraformBackendResponse",
        "",
      ) as TerraformBackendResponse;
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
   * @params response Response returned by the server for a request to deleteTerraformBackendSyncConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTerraformBackendSyncConfig(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to listTerraformBackendSyncConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTerraformBackendSyncConfigs(
    response: ResponseContext,
  ): Promise<TerraformBackendListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TerraformBackendListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TerraformBackendListResponse",
      ) as TerraformBackendListResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TerraformBackendListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TerraformBackendListResponse",
        "",
      ) as TerraformBackendListResponse;
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
   * @params response Response returned by the server for a request to updateTerraformBackendSyncConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTerraformBackendSyncConfig(
    response: ResponseContext,
  ): Promise<TerraformBackendResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TerraformBackendResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TerraformBackendResponse",
      ) as TerraformBackendResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TerraformBackendResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TerraformBackendResponse",
        "",
      ) as TerraformBackendResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface TerraformStateFilesApiCreateTerraformBackendSyncConfigRequest {
  /**
   * @type TerraformBackendCreateRequest
   */
  body: TerraformBackendCreateRequest;
}

export interface TerraformStateFilesApiDeleteTerraformBackendSyncConfigRequest {
  /**
   * Terraform backend sync configuration ID.
   * @type string
   */
  id: string;
}

export interface TerraformStateFilesApiListTerraformBackendSyncConfigsRequest {
  /**
   * AWS account ID used to filter configurations. Omit to list all configurations for the organization.
   * @type string
   */
  accountId?: string;
}

export interface TerraformStateFilesApiUpdateTerraformBackendSyncConfigRequest {
  /**
   * Terraform backend sync configuration ID.
   * @type string
   */
  id: string;
  /**
   * @type TerraformBackendUpdateRequest
   */
  body: TerraformBackendUpdateRequest;
}

export class TerraformStateFilesApi {
  private requestFactory: TerraformStateFilesApiRequestFactory;
  private responseProcessor: TerraformStateFilesApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: TerraformStateFilesApiRequestFactory,
    responseProcessor?: TerraformStateFilesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new TerraformStateFilesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new TerraformStateFilesApiResponseProcessor();
  }

  /**
   * Create a Terraform backend sync configuration for an AWS account, region, and set of S3 buckets.
   * @param param The request object
   */
  public createTerraformBackendSyncConfig(
    param: TerraformStateFilesApiCreateTerraformBackendSyncConfigRequest,
    options?: Configuration,
  ): Promise<TerraformBackendResponse> {
    const requestContextPromise =
      this.requestFactory.createTerraformBackendSyncConfig(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTerraformBackendSyncConfig(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Terraform backend sync configuration and its synchronized state files.
   * @param param The request object
   */
  public deleteTerraformBackendSyncConfig(
    param: TerraformStateFilesApiDeleteTerraformBackendSyncConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteTerraformBackendSyncConfig(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTerraformBackendSyncConfig(
            responseContext,
          );
        });
    });
  }

  /**
   * List Terraform backend sync configurations, optionally filtered by AWS account ID.
   * @param param The request object
   */
  public listTerraformBackendSyncConfigs(
    param: TerraformStateFilesApiListTerraformBackendSyncConfigsRequest = {},
    options?: Configuration,
  ): Promise<TerraformBackendListResponse> {
    const requestContextPromise =
      this.requestFactory.listTerraformBackendSyncConfigs(
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTerraformBackendSyncConfigs(
            responseContext,
          );
        });
    });
  }

  /**
   * Replace the complete set of buckets in a Terraform backend sync configuration. The account and region cannot be changed. The resource ID in the request body must match the path ID; a mismatch returns 409 Conflict.
   * @param param The request object
   */
  public updateTerraformBackendSyncConfig(
    param: TerraformStateFilesApiUpdateTerraformBackendSyncConfigRequest,
    options?: Configuration,
  ): Promise<TerraformBackendResponse> {
    const requestContextPromise =
      this.requestFactory.updateTerraformBackendSyncConfig(
        param.id,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTerraformBackendSyncConfig(
            responseContext,
          );
        });
    });
  }
}
