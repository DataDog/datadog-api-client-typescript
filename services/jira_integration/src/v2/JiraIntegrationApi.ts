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
import { JiraAccountsResponse } from "./models/JiraAccountsResponse";
import { JiraIssueTemplateCreateRequest } from "./models/JiraIssueTemplateCreateRequest";
import { JiraIssueTemplateResponse } from "./models/JiraIssueTemplateResponse";
import { JiraIssueTemplatesResponse } from "./models/JiraIssueTemplatesResponse";
import { JiraIssueTemplateUpdateRequest } from "./models/JiraIssueTemplateUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class JiraIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("jira-integration", version);
    }
  }
  public async createJiraIssueTemplate(
    body: JiraIssueTemplateCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "JiraIntegrationApi.v2.createJiraIssueTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createJiraIssueTemplate' is disabled. Enable it by setting `configuration.unstableOperations['JiraIntegrationApi.v2.createJiraIssueTemplate'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createJiraIssueTemplate");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/jira/issue-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "JiraIntegrationApi.v2.createJiraIssueTemplate",
      JiraIntegrationApi.operationServers,
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
      serialize(body, TypingInfo, "JiraIssueTemplateCreateRequest", ""),
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

  public async deleteJiraAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["JiraIntegrationApi.v2.deleteJiraAccount"]
    ) {
      throw new Error(
        "Unstable operation 'deleteJiraAccount' is disabled. Enable it by setting `configuration.unstableOperations['JiraIntegrationApi.v2.deleteJiraAccount'] = true`",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteJiraAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/jira/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "JiraIntegrationApi.v2.deleteJiraAccount",
      JiraIntegrationApi.operationServers,
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

  public async deleteJiraIssueTemplate(
    issueTemplateId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "JiraIntegrationApi.v2.deleteJiraIssueTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteJiraIssueTemplate' is disabled. Enable it by setting `configuration.unstableOperations['JiraIntegrationApi.v2.deleteJiraIssueTemplate'] = true`",
      );
    }

    // verify required parameter 'issueTemplateId' is not null or undefined
    if (issueTemplateId === null || issueTemplateId === undefined) {
      throw new RequiredError("issueTemplateId", "deleteJiraIssueTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/jira/issue-templates/{issue_template_id}".replace(
        "{issue_template_id}",
        encodeURIComponent(String(issueTemplateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "JiraIntegrationApi.v2.deleteJiraIssueTemplate",
      JiraIntegrationApi.operationServers,
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

  public async getJiraIssueTemplate(
    issueTemplateId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["JiraIntegrationApi.v2.getJiraIssueTemplate"]
    ) {
      throw new Error(
        "Unstable operation 'getJiraIssueTemplate' is disabled. Enable it by setting `configuration.unstableOperations['JiraIntegrationApi.v2.getJiraIssueTemplate'] = true`",
      );
    }

    // verify required parameter 'issueTemplateId' is not null or undefined
    if (issueTemplateId === null || issueTemplateId === undefined) {
      throw new RequiredError("issueTemplateId", "getJiraIssueTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/jira/issue-templates/{issue_template_id}".replace(
        "{issue_template_id}",
        encodeURIComponent(String(issueTemplateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "JiraIntegrationApi.v2.getJiraIssueTemplate",
      JiraIntegrationApi.operationServers,
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

  public async listJiraAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["JiraIntegrationApi.v2.listJiraAccounts"]) {
      throw new Error(
        "Unstable operation 'listJiraAccounts' is disabled. Enable it by setting `configuration.unstableOperations['JiraIntegrationApi.v2.listJiraAccounts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration/jira/accounts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "JiraIntegrationApi.v2.listJiraAccounts",
      JiraIntegrationApi.operationServers,
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

  public async listJiraIssueTemplates(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "JiraIntegrationApi.v2.listJiraIssueTemplates"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listJiraIssueTemplates' is disabled. Enable it by setting `configuration.unstableOperations['JiraIntegrationApi.v2.listJiraIssueTemplates'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/integration/jira/issue-templates";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "JiraIntegrationApi.v2.listJiraIssueTemplates",
      JiraIntegrationApi.operationServers,
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

  public async updateJiraIssueTemplate(
    issueTemplateId: string,
    body: JiraIssueTemplateUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "JiraIntegrationApi.v2.updateJiraIssueTemplate"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateJiraIssueTemplate' is disabled. Enable it by setting `configuration.unstableOperations['JiraIntegrationApi.v2.updateJiraIssueTemplate'] = true`",
      );
    }

    // verify required parameter 'issueTemplateId' is not null or undefined
    if (issueTemplateId === null || issueTemplateId === undefined) {
      throw new RequiredError("issueTemplateId", "updateJiraIssueTemplate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateJiraIssueTemplate");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/jira/issue-templates/{issue_template_id}".replace(
        "{issue_template_id}",
        encodeURIComponent(String(issueTemplateId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "JiraIntegrationApi.v2.updateJiraIssueTemplate",
      JiraIntegrationApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "JiraIssueTemplateUpdateRequest", ""),
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

export class JiraIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createJiraIssueTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createJiraIssueTemplate(
    response: ResponseContext,
  ): Promise<JiraIssueTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: JiraIssueTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplateResponse",
      ) as JiraIssueTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: JiraIssueTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplateResponse",
        "",
      ) as JiraIssueTemplateResponse;
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
   * @params response Response returned by the server for a request to deleteJiraAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteJiraAccount(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400) {
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
   * @params response Response returned by the server for a request to deleteJiraIssueTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteJiraIssueTemplate(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getJiraIssueTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getJiraIssueTemplate(
    response: ResponseContext,
  ): Promise<JiraIssueTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: JiraIssueTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplateResponse",
      ) as JiraIssueTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: JiraIssueTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplateResponse",
        "",
      ) as JiraIssueTemplateResponse;
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
   * @params response Response returned by the server for a request to listJiraAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listJiraAccounts(
    response: ResponseContext,
  ): Promise<JiraAccountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: JiraAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraAccountsResponse",
      ) as JiraAccountsResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: JiraAccountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraAccountsResponse",
        "",
      ) as JiraAccountsResponse;
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
   * @params response Response returned by the server for a request to listJiraIssueTemplates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listJiraIssueTemplates(
    response: ResponseContext,
  ): Promise<JiraIssueTemplatesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: JiraIssueTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplatesResponse",
      ) as JiraIssueTemplatesResponse;
      return body;
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
      const body: JiraIssueTemplatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplatesResponse",
        "",
      ) as JiraIssueTemplatesResponse;
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
   * @params response Response returned by the server for a request to updateJiraIssueTemplate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateJiraIssueTemplate(
    response: ResponseContext,
  ): Promise<JiraIssueTemplateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: JiraIssueTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplateResponse",
      ) as JiraIssueTemplateResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: JiraIssueTemplateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JiraIssueTemplateResponse",
        "",
      ) as JiraIssueTemplateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface JiraIntegrationApiCreateJiraIssueTemplateRequest {
  /**
   * @type JiraIssueTemplateCreateRequest
   */
  body: JiraIssueTemplateCreateRequest;
}

export interface JiraIntegrationApiDeleteJiraAccountRequest {
  /**
   * The ID of the Jira account to delete
   * @type string
   */
  accountId: string;
}

export interface JiraIntegrationApiDeleteJiraIssueTemplateRequest {
  /**
   * The ID of the Jira issue template to delete
   * @type string
   */
  issueTemplateId: string;
}

export interface JiraIntegrationApiGetJiraIssueTemplateRequest {
  /**
   * The ID of the Jira issue template to retrieve
   * @type string
   */
  issueTemplateId: string;
}

export interface JiraIntegrationApiUpdateJiraIssueTemplateRequest {
  /**
   * The ID of the Jira issue template to update
   * @type string
   */
  issueTemplateId: string;
  /**
   * @type JiraIssueTemplateUpdateRequest
   */
  body: JiraIssueTemplateUpdateRequest;
}

export class JiraIntegrationApi {
  private requestFactory: JiraIntegrationApiRequestFactory;
  private responseProcessor: JiraIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: JiraIntegrationApiRequestFactory,
    responseProcessor?: JiraIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new JiraIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new JiraIntegrationApiResponseProcessor();
  }

  /**
   * Create a new Jira issue template.
   * @param param The request object
   */
  public createJiraIssueTemplate(
    param: JiraIntegrationApiCreateJiraIssueTemplateRequest,
    options?: Configuration,
  ): Promise<JiraIssueTemplateResponse> {
    const requestContextPromise = this.requestFactory.createJiraIssueTemplate(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createJiraIssueTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Jira account by ID.
   * @param param The request object
   */
  public deleteJiraAccount(
    param: JiraIntegrationApiDeleteJiraAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteJiraAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteJiraAccount(responseContext);
        });
    });
  }

  /**
   * Delete a Jira issue template by ID.
   * @param param The request object
   */
  public deleteJiraIssueTemplate(
    param: JiraIntegrationApiDeleteJiraIssueTemplateRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteJiraIssueTemplate(
      param.issueTemplateId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteJiraIssueTemplate(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Jira issue template by ID.
   * @param param The request object
   */
  public getJiraIssueTemplate(
    param: JiraIntegrationApiGetJiraIssueTemplateRequest,
    options?: Configuration,
  ): Promise<JiraIssueTemplateResponse> {
    const requestContextPromise = this.requestFactory.getJiraIssueTemplate(
      param.issueTemplateId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getJiraIssueTemplate(responseContext);
        });
    });
  }

  /**
   * Get all Jira accounts for the organization.
   * @param param The request object
   */
  public listJiraAccounts(
    options?: Configuration,
  ): Promise<JiraAccountsResponse> {
    const requestContextPromise = this.requestFactory.listJiraAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listJiraAccounts(responseContext);
        });
    });
  }

  /**
   * Get all Jira issue templates for the organization.
   * @param param The request object
   */
  public listJiraIssueTemplates(
    options?: Configuration,
  ): Promise<JiraIssueTemplatesResponse> {
    const requestContextPromise =
      this.requestFactory.listJiraIssueTemplates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listJiraIssueTemplates(responseContext);
        });
    });
  }

  /**
   * Update a Jira issue template by ID.
   * @param param The request object
   */
  public updateJiraIssueTemplate(
    param: JiraIntegrationApiUpdateJiraIssueTemplateRequest,
    options?: Configuration,
  ): Promise<JiraIssueTemplateResponse> {
    const requestContextPromise = this.requestFactory.updateJiraIssueTemplate(
      param.issueTemplateId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateJiraIssueTemplate(
            responseContext,
          );
        });
    });
  }
}
