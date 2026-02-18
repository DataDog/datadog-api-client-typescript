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
import { FormCreateRequest } from "./models/FormCreateRequest";
import { FormPublicationRequest } from "./models/FormPublicationRequest";
import { FormPublicationResponse } from "./models/FormPublicationResponse";
import { FormResponse } from "./models/FormResponse";
import { FormsListResponse } from "./models/FormsListResponse";
import { FormSubmissionRequest } from "./models/FormSubmissionRequest";
import { FormSubmissionResponse } from "./models/FormSubmissionResponse";
import { FormUpdateRequest } from "./models/FormUpdateRequest";
import { FormVersionRequest } from "./models/FormVersionRequest";
import { FormVersionResponse } from "./models/FormVersionResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class FormsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("forms", version);
    }
  }
  public async createAndPublishForm(
    body: FormCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.createAndPublishForm"]) {
      throw new Error(
        "Unstable operation 'createAndPublishForm' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.createAndPublishForm'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAndPublishForm");
    }

    // Path Params
    const localVarPath = "/api/v2/forms/create_and_publish";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.createAndPublishForm",
      FormsApi.operationServers,
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
      serialize(body, TypingInfo, "FormCreateRequest", ""),
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

  public async createForm(
    body: FormCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.createForm"]) {
      throw new Error(
        "Unstable operation 'createForm' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.createForm'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createForm");
    }

    // Path Params
    const localVarPath = "/api/v2/forms";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.createForm",
      FormsApi.operationServers,
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
      serialize(body, TypingInfo, "FormCreateRequest", ""),
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

  public async deleteForm(
    formId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.deleteForm"]) {
      throw new Error(
        "Unstable operation 'deleteForm' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.deleteForm'] = true`",
      );
    }

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("formId", "deleteForm");
    }

    // Path Params
    const localVarPath = "/api/v2/forms/{form_id}".replace(
      "{form_id}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.deleteForm",
      FormsApi.operationServers,
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

  public async getForm(
    formId: string,
    version?: number,
    publishedVersion?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.getForm"]) {
      throw new Error(
        "Unstable operation 'getForm' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.getForm'] = true`",
      );
    }

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("formId", "getForm");
    }

    // Path Params
    const localVarPath = "/api/v2/forms/{form_id}".replace(
      "{form_id}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.getForm",
      FormsApi.operationServers,
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
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        serialize(version, TypingInfo, "number", ""),
        "",
      );
    }
    if (publishedVersion !== undefined) {
      requestContext.setQueryParam(
        "published_version",
        serialize(publishedVersion, TypingInfo, "boolean", ""),
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

  public async listForms(
    name?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.listForms"]) {
      throw new Error(
        "Unstable operation 'listForms' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.listForms'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/forms";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.listForms",
      FormsApi.operationServers,
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
    if (name !== undefined) {
      requestContext.setQueryParam(
        "name",
        serialize(name, TypingInfo, "string", ""),
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

  public async publishForm(
    formId: string,
    body: FormPublicationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.publishForm"]) {
      throw new Error(
        "Unstable operation 'publishForm' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.publishForm'] = true`",
      );
    }

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("formId", "publishForm");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "publishForm");
    }

    // Path Params
    const localVarPath = "/api/v2/forms/{form_id}/publish".replace(
      "{form_id}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.publishForm",
      FormsApi.operationServers,
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
      serialize(body, TypingInfo, "FormPublicationRequest", ""),
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

  public async submitForm(
    formId: string,
    body: FormSubmissionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.submitForm"]) {
      throw new Error(
        "Unstable operation 'submitForm' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.submitForm'] = true`",
      );
    }

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("formId", "submitForm");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitForm");
    }

    // Path Params
    const localVarPath = "/api/v2/forms/{form_id}/submit".replace(
      "{form_id}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.submitForm",
      FormsApi.operationServers,
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
      serialize(body, TypingInfo, "FormSubmissionRequest", ""),
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

  public async updateForm(
    formId: string,
    body: FormUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.updateForm"]) {
      throw new Error(
        "Unstable operation 'updateForm' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.updateForm'] = true`",
      );
    }

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("formId", "updateForm");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateForm");
    }

    // Path Params
    const localVarPath = "/api/v2/forms/{form_id}".replace(
      "{form_id}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.updateForm",
      FormsApi.operationServers,
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
      serialize(body, TypingInfo, "FormUpdateRequest", ""),
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

  public async upsertAndPublishFormVersion(
    formId: string,
    body: FormVersionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["FormsApi.v2.upsertAndPublishFormVersion"]
    ) {
      throw new Error(
        "Unstable operation 'upsertAndPublishFormVersion' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.upsertAndPublishFormVersion'] = true`",
      );
    }

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("formId", "upsertAndPublishFormVersion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertAndPublishFormVersion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/forms/{form_id}/versions/upsert_and_publish".replace(
        "{form_id}",
        encodeURIComponent(String(formId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.upsertAndPublishFormVersion",
      FormsApi.operationServers,
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
      serialize(body, TypingInfo, "FormVersionRequest", ""),
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

  public async upsertFormVersion(
    formId: string,
    body: FormVersionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["FormsApi.v2.upsertFormVersion"]) {
      throw new Error(
        "Unstable operation 'upsertFormVersion' is disabled. Enable it by setting `configuration.unstableOperations['FormsApi.v2.upsertFormVersion'] = true`",
      );
    }

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("formId", "upsertFormVersion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertFormVersion");
    }

    // Path Params
    const localVarPath = "/api/v2/forms/{form_id}/versions".replace(
      "{form_id}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "FormsApi.v2.upsertFormVersion",
      FormsApi.operationServers,
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
      serialize(body, TypingInfo, "FormVersionRequest", ""),
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

export class FormsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAndPublishForm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAndPublishForm(
    response: ResponseContext,
  ): Promise<FormResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
      ) as FormResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
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
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
        "",
      ) as FormResponse;
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
   * @params response Response returned by the server for a request to createForm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createForm(response: ResponseContext): Promise<FormResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
      ) as FormResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
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
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
        "",
      ) as FormResponse;
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
   * @params response Response returned by the server for a request to deleteForm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteForm(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
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
   * @params response Response returned by the server for a request to getForm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getForm(response: ResponseContext): Promise<FormResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
      ) as FormResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
        "",
      ) as FormResponse;
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
   * @params response Response returned by the server for a request to listForms
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listForms(
    response: ResponseContext,
  ): Promise<FormsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormsListResponse",
      ) as FormsListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
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
      const body: FormsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormsListResponse",
        "",
      ) as FormsListResponse;
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
   * @params response Response returned by the server for a request to publishForm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async publishForm(
    response: ResponseContext,
  ): Promise<FormPublicationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormPublicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormPublicationResponse",
      ) as FormPublicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FormPublicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormPublicationResponse",
        "",
      ) as FormPublicationResponse;
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
   * @params response Response returned by the server for a request to submitForm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitForm(
    response: ResponseContext,
  ): Promise<FormSubmissionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormSubmissionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormSubmissionResponse",
      ) as FormSubmissionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FormSubmissionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormSubmissionResponse",
        "",
      ) as FormSubmissionResponse;
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
   * @params response Response returned by the server for a request to updateForm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateForm(response: ResponseContext): Promise<FormResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
      ) as FormResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
        "",
      ) as FormResponse;
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
   * @params response Response returned by the server for a request to upsertAndPublishFormVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertAndPublishFormVersion(
    response: ResponseContext,
  ): Promise<FormResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
      ) as FormResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FormResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormResponse",
        "",
      ) as FormResponse;
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
   * @params response Response returned by the server for a request to upsertFormVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertFormVersion(
    response: ResponseContext,
  ): Promise<FormVersionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FormVersionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormVersionResponse",
      ) as FormVersionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: FormVersionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FormVersionResponse",
        "",
      ) as FormVersionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface FormsApiCreateAndPublishFormRequest {
  /**
   * @type FormCreateRequest
   */
  body: FormCreateRequest;
}

export interface FormsApiCreateFormRequest {
  /**
   * @type FormCreateRequest
   */
  body: FormCreateRequest;
}

export interface FormsApiDeleteFormRequest {
  /**
   * The ID of the form.
   * @type string
   */
  formId: string;
}

export interface FormsApiGetFormRequest {
  /**
   * The ID of the form.
   * @type string
   */
  formId: string;
  /**
   * The version number of the form.
   * @type number
   */
  version?: number;
  /**
   * Whether to get the published version.
   * @type boolean
   */
  publishedVersion?: boolean;
}

export interface FormsApiListFormsRequest {
  /**
   * Filter forms by name.
   * @type string
   */
  name?: string;
}

export interface FormsApiPublishFormRequest {
  /**
   * The ID of the form.
   * @type string
   */
  formId: string;
  /**
   * @type FormPublicationRequest
   */
  body: FormPublicationRequest;
}

export interface FormsApiSubmitFormRequest {
  /**
   * The ID of the form.
   * @type string
   */
  formId: string;
  /**
   * @type FormSubmissionRequest
   */
  body: FormSubmissionRequest;
}

export interface FormsApiUpdateFormRequest {
  /**
   * The ID of the form.
   * @type string
   */
  formId: string;
  /**
   * @type FormUpdateRequest
   */
  body: FormUpdateRequest;
}

export interface FormsApiUpsertAndPublishFormVersionRequest {
  /**
   * The ID of the form.
   * @type string
   */
  formId: string;
  /**
   * @type FormVersionRequest
   */
  body: FormVersionRequest;
}

export interface FormsApiUpsertFormVersionRequest {
  /**
   * The ID of the form.
   * @type string
   */
  formId: string;
  /**
   * @type FormVersionRequest
   */
  body: FormVersionRequest;
}

export class FormsApi {
  private requestFactory: FormsApiRequestFactory;
  private responseProcessor: FormsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: FormsApiRequestFactory,
    responseProcessor?: FormsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new FormsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new FormsApiResponseProcessor();
  }

  /**
   * Create a new form and publish it immediately.
   * @param param The request object
   */
  public createAndPublishForm(
    param: FormsApiCreateAndPublishFormRequest,
    options?: Configuration,
  ): Promise<FormResponse> {
    const requestContextPromise = this.requestFactory.createAndPublishForm(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAndPublishForm(responseContext);
        });
    });
  }

  /**
   * Create a new form with the specified configuration.
   * @param param The request object
   */
  public createForm(
    param: FormsApiCreateFormRequest,
    options?: Configuration,
  ): Promise<FormResponse> {
    const requestContextPromise = this.requestFactory.createForm(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createForm(responseContext);
        });
    });
  }

  /**
   * Delete a form by ID.
   * @param param The request object
   */
  public deleteForm(
    param: FormsApiDeleteFormRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteForm(
      param.formId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteForm(responseContext);
        });
    });
  }

  /**
   * Get a form by ID.
   * @param param The request object
   */
  public getForm(
    param: FormsApiGetFormRequest,
    options?: Configuration,
  ): Promise<FormResponse> {
    const requestContextPromise = this.requestFactory.getForm(
      param.formId,
      param.version,
      param.publishedVersion,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getForm(responseContext);
        });
    });
  }

  /**
   * Get a list of all forms.
   * @param param The request object
   */
  public listForms(
    param: FormsApiListFormsRequest = {},
    options?: Configuration,
  ): Promise<FormsListResponse> {
    const requestContextPromise = this.requestFactory.listForms(
      param.name,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listForms(responseContext);
        });
    });
  }

  /**
   * Publish a specific version of a form.
   * @param param The request object
   */
  public publishForm(
    param: FormsApiPublishFormRequest,
    options?: Configuration,
  ): Promise<FormPublicationResponse> {
    const requestContextPromise = this.requestFactory.publishForm(
      param.formId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.publishForm(responseContext);
        });
    });
  }

  /**
   * Submit data to a form.
   * @param param The request object
   */
  public submitForm(
    param: FormsApiSubmitFormRequest,
    options?: Configuration,
  ): Promise<FormSubmissionResponse> {
    const requestContextPromise = this.requestFactory.submitForm(
      param.formId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitForm(responseContext);
        });
    });
  }

  /**
   * Update a form by ID.
   * @param param The request object
   */
  public updateForm(
    param: FormsApiUpdateFormRequest,
    options?: Configuration,
  ): Promise<FormResponse> {
    const requestContextPromise = this.requestFactory.updateForm(
      param.formId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateForm(responseContext);
        });
    });
  }

  /**
   * Create or update a form version and publish it immediately.
   * @param param The request object
   */
  public upsertAndPublishFormVersion(
    param: FormsApiUpsertAndPublishFormVersionRequest,
    options?: Configuration,
  ): Promise<FormResponse> {
    const requestContextPromise =
      this.requestFactory.upsertAndPublishFormVersion(
        param.formId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertAndPublishFormVersion(
            responseContext,
          );
        });
    });
  }

  /**
   * Create or update a form version.
   * @param param The request object
   */
  public upsertFormVersion(
    param: FormsApiUpsertFormVersionRequest,
    options?: Configuration,
  ): Promise<FormVersionResponse> {
    const requestContextPromise = this.requestFactory.upsertFormVersion(
      param.formId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertFormVersion(responseContext);
        });
    });
  }
}
