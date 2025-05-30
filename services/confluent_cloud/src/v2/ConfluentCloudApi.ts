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
  buildUserAgent,
  isBrowser,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { ConfluentAccountCreateRequest } from "./models/ConfluentAccountCreateRequest";
import { ConfluentAccountResponse } from "./models/ConfluentAccountResponse";
import { ConfluentAccountsResponse } from "./models/ConfluentAccountsResponse";
import { ConfluentAccountUpdateRequest } from "./models/ConfluentAccountUpdateRequest";
import { ConfluentResourceRequest } from "./models/ConfluentResourceRequest";
import { ConfluentResourceResponse } from "./models/ConfluentResourceResponse";
import { ConfluentResourcesResponse } from "./models/ConfluentResourcesResponse";
import { version } from "../version";

export class ConfluentCloudApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("confluent-cloud", version);
    }
  }
  public async createConfluentAccount(
    body: ConfluentAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createConfluentAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integrations/confluent-cloud/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.createConfluentAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "ConfluentAccountCreateRequest", ""),
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

  public async createConfluentResource(
    accountId: string,
    body: ConfluentResourceRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "createConfluentResource");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createConfluentResource");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.createConfluentResource")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "ConfluentResourceRequest", ""),
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

  public async deleteConfluentAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteConfluentAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.deleteConfluentAccount")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async deleteConfluentResource(
    accountId: string,
    resourceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteConfluentResource");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "deleteConfluentResource");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}"
        .replace("{account_id}", encodeURIComponent(String(accountId)))
        .replace("{resource_id}", encodeURIComponent(String(resourceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.deleteConfluentResource")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async getConfluentAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getConfluentAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.getConfluentAccount")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async getConfluentResource(
    accountId: string,
    resourceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getConfluentResource");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "getConfluentResource");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}"
        .replace("{account_id}", encodeURIComponent(String(accountId)))
        .replace("{resource_id}", encodeURIComponent(String(resourceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.getConfluentResource")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async listConfluentAccount(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integrations/confluent-cloud/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.listConfluentAccount")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async listConfluentResource(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "listConfluentResource");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.listConfluentResource")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async updateConfluentAccount(
    accountId: string,
    body: ConfluentAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateConfluentAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateConfluentAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.updateConfluentAccount")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      serialize(body, TypingInfo, "ConfluentAccountUpdateRequest", ""),
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

  public async updateConfluentResource(
    accountId: string,
    resourceId: string,
    body: ConfluentResourceRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateConfluentResource");
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "updateConfluentResource");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateConfluentResource");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}"
        .replace("{account_id}", encodeURIComponent(String(accountId)))
        .replace("{resource_id}", encodeURIComponent(String(resourceId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ConfluentCloudApi.updateConfluentResource")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      serialize(body, TypingInfo, "ConfluentResourceRequest", ""),
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

export class ConfluentCloudApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createConfluentAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createConfluentAccount(
    response: ResponseContext,
  ): Promise<ConfluentAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ConfluentAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountResponse",
      ) as ConfluentAccountResponse;
      return body;
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
      const body: ConfluentAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountResponse",
        "",
      ) as ConfluentAccountResponse;
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
   * @params response Response returned by the server for a request to createConfluentResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createConfluentResource(
    response: ResponseContext,
  ): Promise<ConfluentResourceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ConfluentResourceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourceResponse",
      ) as ConfluentResourceResponse;
      return body;
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
      const body: ConfluentResourceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourceResponse",
        "",
      ) as ConfluentResourceResponse;
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
   * @params response Response returned by the server for a request to deleteConfluentAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteConfluentAccount(
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
   * @params response Response returned by the server for a request to deleteConfluentResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteConfluentResource(
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
   * @params response Response returned by the server for a request to getConfluentAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getConfluentAccount(
    response: ResponseContext,
  ): Promise<ConfluentAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ConfluentAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountResponse",
      ) as ConfluentAccountResponse;
      return body;
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
      const body: ConfluentAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountResponse",
        "",
      ) as ConfluentAccountResponse;
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
   * @params response Response returned by the server for a request to getConfluentResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getConfluentResource(
    response: ResponseContext,
  ): Promise<ConfluentResourceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ConfluentResourceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourceResponse",
      ) as ConfluentResourceResponse;
      return body;
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
      const body: ConfluentResourceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourceResponse",
        "",
      ) as ConfluentResourceResponse;
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
   * @params response Response returned by the server for a request to listConfluentAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listConfluentAccount(
    response: ResponseContext,
  ): Promise<ConfluentAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ConfluentAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountsResponse",
      ) as ConfluentAccountsResponse;
      return body;
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
      const body: ConfluentAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountsResponse",
        "",
      ) as ConfluentAccountsResponse;
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
   * @params response Response returned by the server for a request to listConfluentResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listConfluentResource(
    response: ResponseContext,
  ): Promise<ConfluentResourcesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ConfluentResourcesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourcesResponse",
      ) as ConfluentResourcesResponse;
      return body;
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
      const body: ConfluentResourcesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourcesResponse",
        "",
      ) as ConfluentResourcesResponse;
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
   * @params response Response returned by the server for a request to updateConfluentAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateConfluentAccount(
    response: ResponseContext,
  ): Promise<ConfluentAccountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ConfluentAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountResponse",
      ) as ConfluentAccountResponse;
      return body;
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
      const body: ConfluentAccountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentAccountResponse",
        "",
      ) as ConfluentAccountResponse;
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
   * @params response Response returned by the server for a request to updateConfluentResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateConfluentResource(
    response: ResponseContext,
  ): Promise<ConfluentResourceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ConfluentResourceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourceResponse",
      ) as ConfluentResourceResponse;
      return body;
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
      const body: ConfluentResourceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ConfluentResourceResponse",
        "",
      ) as ConfluentResourceResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ConfluentCloudApiCreateConfluentAccountRequest {
  /**
   * Confluent payload
   * @type ConfluentAccountCreateRequest
   */
  body: ConfluentAccountCreateRequest;
}

export interface ConfluentCloudApiCreateConfluentResourceRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
  /**
   * Confluent payload
   * @type ConfluentResourceRequest
   */
  body: ConfluentResourceRequest;
}

export interface ConfluentCloudApiDeleteConfluentAccountRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
}

export interface ConfluentCloudApiDeleteConfluentResourceRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
  /**
   * Confluent Account Resource ID.
   * @type string
   */
  resourceId: string;
}

export interface ConfluentCloudApiGetConfluentAccountRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
}

export interface ConfluentCloudApiGetConfluentResourceRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
  /**
   * Confluent Account Resource ID.
   * @type string
   */
  resourceId: string;
}

export interface ConfluentCloudApiListConfluentResourceRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
}

export interface ConfluentCloudApiUpdateConfluentAccountRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
  /**
   * Confluent payload
   * @type ConfluentAccountUpdateRequest
   */
  body: ConfluentAccountUpdateRequest;
}

export interface ConfluentCloudApiUpdateConfluentResourceRequest {
  /**
   * Confluent Account ID.
   * @type string
   */
  accountId: string;
  /**
   * Confluent Account Resource ID.
   * @type string
   */
  resourceId: string;
  /**
   * Confluent payload
   * @type ConfluentResourceRequest
   */
  body: ConfluentResourceRequest;
}

export class ConfluentCloudApi {
  private requestFactory: ConfluentCloudApiRequestFactory;
  private responseProcessor: ConfluentCloudApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: ConfluentCloudApiRequestFactory,
    responseProcessor?: ConfluentCloudApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new ConfluentCloudApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ConfluentCloudApiResponseProcessor();
  }

  /**
   * Create a Confluent account.
   * @param param The request object
   */
  public createConfluentAccount(
    param: ConfluentCloudApiCreateConfluentAccountRequest,
    options?: Configuration,
  ): Promise<ConfluentAccountResponse> {
    const requestContextPromise = this.requestFactory.createConfluentAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createConfluentAccount(responseContext);
        });
    });
  }

  /**
   * Create a Confluent resource for the account associated with the provided ID.
   * @param param The request object
   */
  public createConfluentResource(
    param: ConfluentCloudApiCreateConfluentResourceRequest,
    options?: Configuration,
  ): Promise<ConfluentResourceResponse> {
    const requestContextPromise = this.requestFactory.createConfluentResource(
      param.accountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createConfluentResource(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Confluent account with the provided account ID.
   * @param param The request object
   */
  public deleteConfluentAccount(
    param: ConfluentCloudApiDeleteConfluentAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteConfluentAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteConfluentAccount(responseContext);
        });
    });
  }

  /**
   * Delete a Confluent resource with the provided resource id for the account associated with the provided account ID.
   * @param param The request object
   */
  public deleteConfluentResource(
    param: ConfluentCloudApiDeleteConfluentResourceRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteConfluentResource(
      param.accountId,
      param.resourceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteConfluentResource(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the Confluent account with the provided account ID.
   * @param param The request object
   */
  public getConfluentAccount(
    param: ConfluentCloudApiGetConfluentAccountRequest,
    options?: Configuration,
  ): Promise<ConfluentAccountResponse> {
    const requestContextPromise = this.requestFactory.getConfluentAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getConfluentAccount(responseContext);
        });
    });
  }

  /**
   * Get a Confluent resource with the provided resource id for the account associated with the provided account ID.
   * @param param The request object
   */
  public getConfluentResource(
    param: ConfluentCloudApiGetConfluentResourceRequest,
    options?: Configuration,
  ): Promise<ConfluentResourceResponse> {
    const requestContextPromise = this.requestFactory.getConfluentResource(
      param.accountId,
      param.resourceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getConfluentResource(responseContext);
        });
    });
  }

  /**
   * List Confluent accounts.
   * @param param The request object
   */
  public listConfluentAccount(
    options?: Configuration,
  ): Promise<ConfluentAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listConfluentAccount(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listConfluentAccount(responseContext);
        });
    });
  }

  /**
   * Get a Confluent resource for the account associated with the provided ID.
   * @param param The request object
   */
  public listConfluentResource(
    param: ConfluentCloudApiListConfluentResourceRequest,
    options?: Configuration,
  ): Promise<ConfluentResourcesResponse> {
    const requestContextPromise = this.requestFactory.listConfluentResource(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listConfluentResource(responseContext);
        });
    });
  }

  /**
   * Update the Confluent account with the provided account ID.
   * @param param The request object
   */
  public updateConfluentAccount(
    param: ConfluentCloudApiUpdateConfluentAccountRequest,
    options?: Configuration,
  ): Promise<ConfluentAccountResponse> {
    const requestContextPromise = this.requestFactory.updateConfluentAccount(
      param.accountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateConfluentAccount(responseContext);
        });
    });
  }

  /**
   * Update a Confluent resource with the provided resource id for the account associated with the provided account ID.
   * @param param The request object
   */
  public updateConfluentResource(
    param: ConfluentCloudApiUpdateConfluentResourceRequest,
    options?: Configuration,
  ): Promise<ConfluentResourceResponse> {
    const requestContextPromise = this.requestFactory.updateConfluentResource(
      param.accountId,
      param.resourceId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateConfluentResource(
            responseContext,
          );
        });
    });
  }
}
