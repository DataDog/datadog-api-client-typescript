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
import { ApplicationSecurityWafCustomRuleCreateRequest } from "./models/ApplicationSecurityWafCustomRuleCreateRequest";
import { ApplicationSecurityWafCustomRuleListResponse } from "./models/ApplicationSecurityWafCustomRuleListResponse";
import { ApplicationSecurityWafCustomRuleResponse } from "./models/ApplicationSecurityWafCustomRuleResponse";
import { ApplicationSecurityWafCustomRuleUpdateRequest } from "./models/ApplicationSecurityWafCustomRuleUpdateRequest";
import { ApplicationSecurityWafExclusionFilterCreateRequest } from "./models/ApplicationSecurityWafExclusionFilterCreateRequest";
import { ApplicationSecurityWafExclusionFilterResponse } from "./models/ApplicationSecurityWafExclusionFilterResponse";
import { ApplicationSecurityWafExclusionFiltersResponse } from "./models/ApplicationSecurityWafExclusionFiltersResponse";
import { ApplicationSecurityWafExclusionFilterUpdateRequest } from "./models/ApplicationSecurityWafExclusionFilterUpdateRequest";

export class ApplicationSecurityApiRequestFactory extends BaseAPIRequestFactory {
  public async createApplicationSecurityWafCustomRule(
    body: ApplicationSecurityWafCustomRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createApplicationSecurityWafCustomRule");
    }

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/asm/waf/custom_rules";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.createApplicationSecurityWafCustomRule",
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "ApplicationSecurityWafCustomRuleCreateRequest",
        "",
      ),
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

  public async createApplicationSecurityWafExclusionFilter(
    body: ApplicationSecurityWafExclusionFilterCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createApplicationSecurityWafExclusionFilter",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.createApplicationSecurityWafExclusionFilter",
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterCreateRequest",
        "",
      ),
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

  public async deleteApplicationSecurityWafCustomRule(
    customRuleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customRuleId' is not null or undefined
    if (customRuleId === null || customRuleId === undefined) {
      throw new RequiredError(
        "customRuleId",
        "deleteApplicationSecurityWafCustomRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}".replace(
        "{custom_rule_id}",
        encodeURIComponent(String(customRuleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.deleteApplicationSecurityWafCustomRule",
      )
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

  public async deleteApplicationSecurityWafExclusionFilter(
    exclusionFilterId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError(
        "exclusionFilterId",
        "deleteApplicationSecurityWafExclusionFilter",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.deleteApplicationSecurityWafExclusionFilter",
      )
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

  public async getApplicationSecurityWafCustomRule(
    customRuleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customRuleId' is not null or undefined
    if (customRuleId === null || customRuleId === undefined) {
      throw new RequiredError(
        "customRuleId",
        "getApplicationSecurityWafCustomRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}".replace(
        "{custom_rule_id}",
        encodeURIComponent(String(customRuleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.getApplicationSecurityWafCustomRule",
      )
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

  public async getApplicationSecurityWafExclusionFilter(
    exclusionFilterId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError(
        "exclusionFilterId",
        "getApplicationSecurityWafExclusionFilter",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.getApplicationSecurityWafExclusionFilter",
      )
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

  public async listApplicationSecurityWAFCustomRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/remote_config/products/asm/waf/custom_rules";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.listApplicationSecurityWAFCustomRules",
      )
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

  public async listApplicationSecurityWafExclusionFilters(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.listApplicationSecurityWafExclusionFilters",
      )
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

  public async updateApplicationSecurityWafCustomRule(
    customRuleId: string,
    body: ApplicationSecurityWafCustomRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customRuleId' is not null or undefined
    if (customRuleId === null || customRuleId === undefined) {
      throw new RequiredError(
        "customRuleId",
        "updateApplicationSecurityWafCustomRule",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateApplicationSecurityWafCustomRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}".replace(
        "{custom_rule_id}",
        encodeURIComponent(String(customRuleId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.updateApplicationSecurityWafCustomRule",
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "ApplicationSecurityWafCustomRuleUpdateRequest",
        "",
      ),
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

  public async updateApplicationSecurityWafExclusionFilter(
    exclusionFilterId: string,
    body: ApplicationSecurityWafExclusionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError(
        "exclusionFilterId",
        "updateApplicationSecurityWafExclusionFilter",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateApplicationSecurityWafExclusionFilter",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.updateApplicationSecurityWafExclusionFilter",
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterUpdateRequest",
        "",
      ),
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

export class ApplicationSecurityApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createApplicationSecurityWafCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApplicationSecurityWafCustomRule(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafCustomRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ApplicationSecurityWafCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleResponse",
      ) as ApplicationSecurityWafCustomRuleResponse;
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
      const body: ApplicationSecurityWafCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleResponse",
        "",
      ) as ApplicationSecurityWafCustomRuleResponse;
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
   * @params response Response returned by the server for a request to createApplicationSecurityWafExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApplicationSecurityWafExclusionFilter(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityWafExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterResponse",
      ) as ApplicationSecurityWafExclusionFilterResponse;
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
      const body: ApplicationSecurityWafExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterResponse",
        "",
      ) as ApplicationSecurityWafExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to deleteApplicationSecurityWafCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApplicationSecurityWafCustomRule(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
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
   * @params response Response returned by the server for a request to deleteApplicationSecurityWafExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApplicationSecurityWafExclusionFilter(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
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
   * @params response Response returned by the server for a request to getApplicationSecurityWafCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApplicationSecurityWafCustomRule(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafCustomRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityWafCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleResponse",
      ) as ApplicationSecurityWafCustomRuleResponse;
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
      const body: ApplicationSecurityWafCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleResponse",
        "",
      ) as ApplicationSecurityWafCustomRuleResponse;
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
   * @params response Response returned by the server for a request to getApplicationSecurityWafExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApplicationSecurityWafExclusionFilter(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityWafExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterResponse",
      ) as ApplicationSecurityWafExclusionFilterResponse;
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
      const body: ApplicationSecurityWafExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterResponse",
        "",
      ) as ApplicationSecurityWafExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to listApplicationSecurityWAFCustomRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApplicationSecurityWAFCustomRules(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafCustomRuleListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityWafCustomRuleListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleListResponse",
      ) as ApplicationSecurityWafCustomRuleListResponse;
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
      const body: ApplicationSecurityWafCustomRuleListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleListResponse",
        "",
      ) as ApplicationSecurityWafCustomRuleListResponse;
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
   * @params response Response returned by the server for a request to listApplicationSecurityWafExclusionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApplicationSecurityWafExclusionFilters(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafExclusionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityWafExclusionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFiltersResponse",
      ) as ApplicationSecurityWafExclusionFiltersResponse;
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
      const body: ApplicationSecurityWafExclusionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFiltersResponse",
        "",
      ) as ApplicationSecurityWafExclusionFiltersResponse;
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
   * @params response Response returned by the server for a request to updateApplicationSecurityWafCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApplicationSecurityWafCustomRule(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafCustomRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityWafCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleResponse",
      ) as ApplicationSecurityWafCustomRuleResponse;
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
      const body: ApplicationSecurityWafCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafCustomRuleResponse",
        "",
      ) as ApplicationSecurityWafCustomRuleResponse;
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
   * @params response Response returned by the server for a request to updateApplicationSecurityWafExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApplicationSecurityWafExclusionFilter(
    response: ResponseContext,
  ): Promise<ApplicationSecurityWafExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityWafExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterResponse",
      ) as ApplicationSecurityWafExclusionFilterResponse;
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
      const body: ApplicationSecurityWafExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationSecurityWafExclusionFilterResponse",
        "",
      ) as ApplicationSecurityWafExclusionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ApplicationSecurityApiCreateApplicationSecurityWafCustomRuleRequest {
  /**
   * The definition of the new WAF Custom Rule.
   * @type ApplicationSecurityWafCustomRuleCreateRequest
   */
  body: ApplicationSecurityWafCustomRuleCreateRequest;
}

export interface ApplicationSecurityApiCreateApplicationSecurityWafExclusionFilterRequest {
  /**
   * The definition of the new WAF exclusion filter.
   * @type ApplicationSecurityWafExclusionFilterCreateRequest
   */
  body: ApplicationSecurityWafExclusionFilterCreateRequest;
}

export interface ApplicationSecurityApiDeleteApplicationSecurityWafCustomRuleRequest {
  /**
   * The ID of the custom rule.
   * @type string
   */
  customRuleId: string;
}

export interface ApplicationSecurityApiDeleteApplicationSecurityWafExclusionFilterRequest {
  /**
   * The identifier of the WAF exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
}

export interface ApplicationSecurityApiGetApplicationSecurityWafCustomRuleRequest {
  /**
   * The ID of the custom rule.
   * @type string
   */
  customRuleId: string;
}

export interface ApplicationSecurityApiGetApplicationSecurityWafExclusionFilterRequest {
  /**
   * The identifier of the WAF exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
}

export interface ApplicationSecurityApiUpdateApplicationSecurityWafCustomRuleRequest {
  /**
   * The ID of the custom rule.
   * @type string
   */
  customRuleId: string;
  /**
   * New definition of the WAF Custom Rule.
   * @type ApplicationSecurityWafCustomRuleUpdateRequest
   */
  body: ApplicationSecurityWafCustomRuleUpdateRequest;
}

export interface ApplicationSecurityApiUpdateApplicationSecurityWafExclusionFilterRequest {
  /**
   * The identifier of the WAF exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
  /**
   * The exclusion filter to update.
   * @type ApplicationSecurityWafExclusionFilterUpdateRequest
   */
  body: ApplicationSecurityWafExclusionFilterUpdateRequest;
}

export class ApplicationSecurityApi {
  private requestFactory: ApplicationSecurityApiRequestFactory;
  private responseProcessor: ApplicationSecurityApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: ApplicationSecurityApiRequestFactory,
    responseProcessor?: ApplicationSecurityApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ApplicationSecurityApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ApplicationSecurityApiResponseProcessor();
  }

  /**
   * Create a new WAF custom rule with the given parameters.
   * @param param The request object
   */
  public createApplicationSecurityWafCustomRule(
    param: ApplicationSecurityApiCreateApplicationSecurityWafCustomRuleRequest,
    options?: Configuration,
  ): Promise<ApplicationSecurityWafCustomRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createApplicationSecurityWafCustomRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApplicationSecurityWafCustomRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new WAF exclusion filter with the given parameters.
   *
   * A request matched by an exclusion filter will be ignored by the Application Security WAF product.
   * Go to https://app.datadoghq.com/security/appsec/passlist to review existing exclusion filters (also called passlist entries).
   * @param param The request object
   */
  public createApplicationSecurityWafExclusionFilter(
    param: ApplicationSecurityApiCreateApplicationSecurityWafExclusionFilterRequest,
    options?: Configuration,
  ): Promise<ApplicationSecurityWafExclusionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.createApplicationSecurityWafExclusionFilter(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApplicationSecurityWafExclusionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific WAF custom rule.
   * @param param The request object
   */
  public deleteApplicationSecurityWafCustomRule(
    param: ApplicationSecurityApiDeleteApplicationSecurityWafCustomRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteApplicationSecurityWafCustomRule(
        param.customRuleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApplicationSecurityWafCustomRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific WAF exclusion filter using its identifier.
   * @param param The request object
   */
  public deleteApplicationSecurityWafExclusionFilter(
    param: ApplicationSecurityApiDeleteApplicationSecurityWafExclusionFilterRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteApplicationSecurityWafExclusionFilter(
        param.exclusionFilterId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApplicationSecurityWafExclusionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a WAF custom rule by ID.
   * @param param The request object
   */
  public getApplicationSecurityWafCustomRule(
    param: ApplicationSecurityApiGetApplicationSecurityWafCustomRuleRequest,
    options?: Configuration,
  ): Promise<ApplicationSecurityWafCustomRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getApplicationSecurityWafCustomRule(
        param.customRuleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApplicationSecurityWafCustomRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a specific WAF exclusion filter using its identifier.
   * @param param The request object
   */
  public getApplicationSecurityWafExclusionFilter(
    param: ApplicationSecurityApiGetApplicationSecurityWafExclusionFilterRequest,
    options?: Configuration,
  ): Promise<ApplicationSecurityWafExclusionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.getApplicationSecurityWafExclusionFilter(
        param.exclusionFilterId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApplicationSecurityWafExclusionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a list of WAF custom rule.
   * @param param The request object
   */
  public listApplicationSecurityWAFCustomRules(
    options?: Configuration,
  ): Promise<ApplicationSecurityWafCustomRuleListResponse> {
    const requestContextPromise =
      this.requestFactory.listApplicationSecurityWAFCustomRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApplicationSecurityWAFCustomRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a list of WAF exclusion filters.
   * @param param The request object
   */
  public listApplicationSecurityWafExclusionFilters(
    options?: Configuration,
  ): Promise<ApplicationSecurityWafExclusionFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listApplicationSecurityWafExclusionFilters(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApplicationSecurityWafExclusionFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a specific WAF custom Rule.
   * Returns the Custom Rule object when the request is successful.
   * @param param The request object
   */
  public updateApplicationSecurityWafCustomRule(
    param: ApplicationSecurityApiUpdateApplicationSecurityWafCustomRuleRequest,
    options?: Configuration,
  ): Promise<ApplicationSecurityWafCustomRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateApplicationSecurityWafCustomRule(
        param.customRuleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApplicationSecurityWafCustomRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a specific WAF exclusion filter using its identifier.
   * Returns the exclusion filter object when the request is successful.
   * @param param The request object
   */
  public updateApplicationSecurityWafExclusionFilter(
    param: ApplicationSecurityApiUpdateApplicationSecurityWafExclusionFilterRequest,
    options?: Configuration,
  ): Promise<ApplicationSecurityWafExclusionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.updateApplicationSecurityWafExclusionFilter(
        param.exclusionFilterId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApplicationSecurityWafExclusionFilter(
            responseContext,
          );
        });
    });
  }
}
