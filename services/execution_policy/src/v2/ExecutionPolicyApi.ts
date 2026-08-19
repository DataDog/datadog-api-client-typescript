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
import { ExecutionPolicyCreateRequest } from "./models/ExecutionPolicyCreateRequest";
import { ExecutionPolicyEffect } from "./models/ExecutionPolicyEffect";
import { ExecutionPolicyIntegration } from "./models/ExecutionPolicyIntegration";
import { ExecutionPolicyListResponse } from "./models/ExecutionPolicyListResponse";
import { ExecutionPolicyResponse } from "./models/ExecutionPolicyResponse";
import { ExecutionPolicyUpdateRequest } from "./models/ExecutionPolicyUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class ExecutionPolicyApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("execution-policy", version);
    }
  }
  public async createExecutionPolicy(
    body: ExecutionPolicyCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ExecutionPolicyApi.v2.createExecutionPolicy"]
    ) {
      throw new Error(
        "Unstable operation 'createExecutionPolicy' is disabled. Enable it by setting `configuration.unstableOperations['ExecutionPolicyApi.v2.createExecutionPolicy'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createExecutionPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/execution-policies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ExecutionPolicyApi.v2.createExecutionPolicy",
      ExecutionPolicyApi.operationServers,
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
      serialize(body, TypingInfo, "ExecutionPolicyCreateRequest", ""),
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

  public async deleteExecutionPolicy(
    policyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ExecutionPolicyApi.v2.deleteExecutionPolicy"]
    ) {
      throw new Error(
        "Unstable operation 'deleteExecutionPolicy' is disabled. Enable it by setting `configuration.unstableOperations['ExecutionPolicyApi.v2.deleteExecutionPolicy'] = true`",
      );
    }

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "deleteExecutionPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions/execution-policies/{policy_id}".replace(
        "{policy_id}",
        encodeURIComponent(String(policyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ExecutionPolicyApi.v2.deleteExecutionPolicy",
      ExecutionPolicyApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getExecutionPolicy(
    policyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ExecutionPolicyApi.v2.getExecutionPolicy"]
    ) {
      throw new Error(
        "Unstable operation 'getExecutionPolicy' is disabled. Enable it by setting `configuration.unstableOperations['ExecutionPolicyApi.v2.getExecutionPolicy'] = true`",
      );
    }

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "getExecutionPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions/execution-policies/{policy_id}".replace(
        "{policy_id}",
        encodeURIComponent(String(policyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ExecutionPolicyApi.v2.getExecutionPolicy",
      ExecutionPolicyApi.operationServers,
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

  public async listExecutionPolicies(
    pageSize?: number,
    pageNumber?: number,
    filterName?: string,
    filterIds?: Array<string>,
    filterIntegration?: Array<ExecutionPolicyIntegration>,
    filterEffects?: Array<ExecutionPolicyEffect>,
    filterCreatorIds?: Array<string>,
    sort?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ExecutionPolicyApi.v2.listExecutionPolicies"]
    ) {
      throw new Error(
        "Unstable operation 'listExecutionPolicies' is disabled. Enable it by setting `configuration.unstableOperations['ExecutionPolicyApi.v2.listExecutionPolicies'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/actions/execution-policies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ExecutionPolicyApi.v2.listExecutionPolicies",
      ExecutionPolicyApi.operationServers,
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

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterIds !== undefined) {
      requestContext.setQueryParam(
        "filter[ids]",
        serialize(filterIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterIntegration !== undefined) {
      requestContext.setQueryParam(
        "filter[integration]",
        serialize(
          filterIntegration,
          TypingInfo,
          "Array<ExecutionPolicyIntegration>",
          "",
        ),
        "multi",
      );
    }
    if (filterEffects !== undefined) {
      requestContext.setQueryParam(
        "filter[effects]",
        serialize(
          filterEffects,
          TypingInfo,
          "Array<ExecutionPolicyEffect>",
          "",
        ),
        "multi",
      );
    }
    if (filterCreatorIds !== undefined) {
      requestContext.setQueryParam(
        "filter[creator_ids]",
        serialize(filterCreatorIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateExecutionPolicy(
    policyId: string,
    body: ExecutionPolicyUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ExecutionPolicyApi.v2.updateExecutionPolicy"]
    ) {
      throw new Error(
        "Unstable operation 'updateExecutionPolicy' is disabled. Enable it by setting `configuration.unstableOperations['ExecutionPolicyApi.v2.updateExecutionPolicy'] = true`",
      );
    }

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "updateExecutionPolicy");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateExecutionPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions/execution-policies/{policy_id}".replace(
        "{policy_id}",
        encodeURIComponent(String(policyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ExecutionPolicyApi.v2.updateExecutionPolicy",
      ExecutionPolicyApi.operationServers,
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
      serialize(body, TypingInfo, "ExecutionPolicyUpdateRequest", ""),
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

export class ExecutionPolicyApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createExecutionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExecutionPolicy(
    response: ResponseContext,
  ): Promise<ExecutionPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ExecutionPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyResponse",
      ) as ExecutionPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ExecutionPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyResponse",
        "",
      ) as ExecutionPolicyResponse;
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
   * @params response Response returned by the server for a request to deleteExecutionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteExecutionPolicy(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to getExecutionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExecutionPolicy(
    response: ResponseContext,
  ): Promise<ExecutionPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ExecutionPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyResponse",
      ) as ExecutionPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
      const body: ExecutionPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyResponse",
        "",
      ) as ExecutionPolicyResponse;
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
   * @params response Response returned by the server for a request to listExecutionPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExecutionPolicies(
    response: ResponseContext,
  ): Promise<ExecutionPolicyListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ExecutionPolicyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyListResponse",
      ) as ExecutionPolicyListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ExecutionPolicyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyListResponse",
        "",
      ) as ExecutionPolicyListResponse;
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
   * @params response Response returned by the server for a request to updateExecutionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateExecutionPolicy(
    response: ResponseContext,
  ): Promise<ExecutionPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ExecutionPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyResponse",
      ) as ExecutionPolicyResponse;
      return body;
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
      const body: ExecutionPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ExecutionPolicyResponse",
        "",
      ) as ExecutionPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ExecutionPolicyApiCreateExecutionPolicyRequest {
  /**
   * The execution policy to create.
   * @type ExecutionPolicyCreateRequest
   */
  body: ExecutionPolicyCreateRequest;
}

export interface ExecutionPolicyApiDeleteExecutionPolicyRequest {
  /**
   * The ID of the execution policy.
   * @type string
   */
  policyId: string;
}

export interface ExecutionPolicyApiGetExecutionPolicyRequest {
  /**
   * The ID of the execution policy.
   * @type string
   */
  policyId: string;
}

export interface ExecutionPolicyApiListExecutionPoliciesRequest {
  /**
   * The number of execution policies to return per page.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter execution policies by name.
   * @type string
   */
  filterName?: string;
  /**
   * Filter execution policies by a list of IDs.
   * @type Array<string>
   */
  filterIds?: Array<string>;
  /**
   * Filter execution policies by a list of integrations.
   * @type Array<ExecutionPolicyIntegration>
   */
  filterIntegration?: Array<ExecutionPolicyIntegration>;
  /**
   * Filter execution policies by a list of effects.
   * @type Array<ExecutionPolicyEffect>
   */
  filterEffects?: Array<ExecutionPolicyEffect>;
  /**
   * Filter execution policies by a list of creator IDs.
   * @type Array<string>
   */
  filterCreatorIds?: Array<string>;
  /**
   * The sort order for the results. Prefix a field with `-` to sort in
   * descending order. Valid fields are `name`, `effect`, `integration`,
   * `created_at`, and `updated_at`.
   * @type Array<string>
   */
  sort?: Array<string>;
}

export interface ExecutionPolicyApiUpdateExecutionPolicyRequest {
  /**
   * The ID of the execution policy.
   * @type string
   */
  policyId: string;
  /**
   * The new execution policy.
   * @type ExecutionPolicyUpdateRequest
   */
  body: ExecutionPolicyUpdateRequest;
}

export class ExecutionPolicyApi {
  private requestFactory: ExecutionPolicyApiRequestFactory;
  private responseProcessor: ExecutionPolicyApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ExecutionPolicyApiRequestFactory,
    responseProcessor?: ExecutionPolicyApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ExecutionPolicyApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ExecutionPolicyApiResponseProcessor();
  }

  /**
   * Create a new execution policy.
   * @param param The request object
   */
  public createExecutionPolicy(
    param: ExecutionPolicyApiCreateExecutionPolicyRequest,
    options?: Configuration,
  ): Promise<ExecutionPolicyResponse> {
    const requestContextPromise = this.requestFactory.createExecutionPolicy(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createExecutionPolicy(responseContext);
        });
    });
  }

  /**
   * Delete a specific execution policy.
   * @param param The request object
   */
  public deleteExecutionPolicy(
    param: ExecutionPolicyApiDeleteExecutionPolicyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteExecutionPolicy(
      param.policyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteExecutionPolicy(responseContext);
        });
    });
  }

  /**
   * Retrieve an existing execution policy by ID.
   * @param param The request object
   */
  public getExecutionPolicy(
    param: ExecutionPolicyApiGetExecutionPolicyRequest,
    options?: Configuration,
  ): Promise<ExecutionPolicyResponse> {
    const requestContextPromise = this.requestFactory.getExecutionPolicy(
      param.policyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExecutionPolicy(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of execution policies for the current organization.
   * @param param The request object
   */
  public listExecutionPolicies(
    param: ExecutionPolicyApiListExecutionPoliciesRequest = {},
    options?: Configuration,
  ): Promise<ExecutionPolicyListResponse> {
    const requestContextPromise = this.requestFactory.listExecutionPolicies(
      param.pageSize,
      param.pageNumber,
      param.filterName,
      param.filterIds,
      param.filterIntegration,
      param.filterEffects,
      param.filterCreatorIds,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listExecutionPolicies(responseContext);
        });
    });
  }

  /**
   * Update an existing execution policy.
   * Returns the execution policy object when the request is successful.
   * @param param The request object
   */
  public updateExecutionPolicy(
    param: ExecutionPolicyApiUpdateExecutionPolicyRequest,
    options?: Configuration,
  ): Promise<ExecutionPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateExecutionPolicy(
      param.policyId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateExecutionPolicy(responseContext);
        });
    });
  }
}
