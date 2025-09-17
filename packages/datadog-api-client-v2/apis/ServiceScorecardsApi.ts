import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
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
import { CreateRuleRequest } from "../models/CreateRuleRequest";
import { CreateRuleResponse } from "../models/CreateRuleResponse";
import { ListRulesResponse } from "../models/ListRulesResponse";
import { ListRulesResponseDataItem } from "../models/ListRulesResponseDataItem";
import { OutcomesBatchRequest } from "../models/OutcomesBatchRequest";
import { OutcomesBatchResponse } from "../models/OutcomesBatchResponse";
import { OutcomesResponse } from "../models/OutcomesResponse";
import { OutcomesResponseDataItem } from "../models/OutcomesResponseDataItem";
import { UpdateOutcomesAsyncRequest } from "../models/UpdateOutcomesAsyncRequest";
import { UpdateRuleRequest } from "../models/UpdateRuleRequest";
import { UpdateRuleResponse } from "../models/UpdateRuleResponse";

export class ServiceScorecardsApiRequestFactory extends BaseAPIRequestFactory {
  public async createScorecardOutcomesBatch(
    body: OutcomesBatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createScorecardOutcomesBatch'");
    if (!_config.unstableOperations["v2.createScorecardOutcomesBatch"]) {
      throw new Error(
        "Unstable operation 'createScorecardOutcomesBatch' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createScorecardOutcomesBatch");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/outcomes/batch";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceScorecardsApi.createScorecardOutcomesBatch")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OutcomesBatchRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createScorecardRule(
    body: CreateRuleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createScorecardRule'");
    if (!_config.unstableOperations["v2.createScorecardRule"]) {
      throw new Error("Unstable operation 'createScorecardRule' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createScorecardRule");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceScorecardsApi.createScorecardRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateRuleRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteScorecardRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteScorecardRule'");
    if (!_config.unstableOperations["v2.deleteScorecardRule"]) {
      throw new Error("Unstable operation 'deleteScorecardRule' is disabled");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteScorecardRule");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceScorecardsApi.deleteScorecardRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listScorecardOutcomes(
    pageSize?: number,
    pageOffset?: number,
    include?: string,
    fieldsOutcome?: string,
    fieldsRule?: string,
    filterOutcomeServiceName?: string,
    filterOutcomeState?: string,
    filterRuleEnabled?: boolean,
    filterRuleId?: string,
    filterRuleName?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listScorecardOutcomes'");
    if (!_config.unstableOperations["v2.listScorecardOutcomes"]) {
      throw new Error("Unstable operation 'listScorecardOutcomes' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/outcomes";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceScorecardsApi.listScorecardOutcomes")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }
    if (fieldsOutcome !== undefined) {
      requestContext.setQueryParam(
        "fields[outcome]",
        ObjectSerializer.serialize(fieldsOutcome, "string", ""),
        ""
      );
    }
    if (fieldsRule !== undefined) {
      requestContext.setQueryParam(
        "fields[rule]",
        ObjectSerializer.serialize(fieldsRule, "string", ""),
        ""
      );
    }
    if (filterOutcomeServiceName !== undefined) {
      requestContext.setQueryParam(
        "filter[outcome][service_name]",
        ObjectSerializer.serialize(filterOutcomeServiceName, "string", ""),
        ""
      );
    }
    if (filterOutcomeState !== undefined) {
      requestContext.setQueryParam(
        "filter[outcome][state]",
        ObjectSerializer.serialize(filterOutcomeState, "string", ""),
        ""
      );
    }
    if (filterRuleEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][enabled]",
        ObjectSerializer.serialize(filterRuleEnabled, "boolean", ""),
        ""
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][id]",
        ObjectSerializer.serialize(filterRuleId, "string", ""),
        ""
      );
    }
    if (filterRuleName !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][name]",
        ObjectSerializer.serialize(filterRuleName, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listScorecardRules(
    pageSize?: number,
    pageOffset?: number,
    include?: string,
    filterRuleId?: string,
    filterRuleEnabled?: boolean,
    filterRuleCustom?: boolean,
    filterRuleName?: string,
    filterRuleDescription?: string,
    fieldsRule?: string,
    fieldsScorecard?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listScorecardRules'");
    if (!_config.unstableOperations["v2.listScorecardRules"]) {
      throw new Error("Unstable operation 'listScorecardRules' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceScorecardsApi.listScorecardRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][id]",
        ObjectSerializer.serialize(filterRuleId, "string", ""),
        ""
      );
    }
    if (filterRuleEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][enabled]",
        ObjectSerializer.serialize(filterRuleEnabled, "boolean", ""),
        ""
      );
    }
    if (filterRuleCustom !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][custom]",
        ObjectSerializer.serialize(filterRuleCustom, "boolean", ""),
        ""
      );
    }
    if (filterRuleName !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][name]",
        ObjectSerializer.serialize(filterRuleName, "string", ""),
        ""
      );
    }
    if (filterRuleDescription !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][description]",
        ObjectSerializer.serialize(filterRuleDescription, "string", ""),
        ""
      );
    }
    if (fieldsRule !== undefined) {
      requestContext.setQueryParam(
        "fields[rule]",
        ObjectSerializer.serialize(fieldsRule, "string", ""),
        ""
      );
    }
    if (fieldsScorecard !== undefined) {
      requestContext.setQueryParam(
        "fields[scorecard]",
        ObjectSerializer.serialize(fieldsScorecard, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateScorecardOutcomesAsync(
    body: UpdateOutcomesAsyncRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateScorecardOutcomesAsync'");
    if (!_config.unstableOperations["v2.updateScorecardOutcomesAsync"]) {
      throw new Error(
        "Unstable operation 'updateScorecardOutcomesAsync' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateScorecardOutcomesAsync");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/outcomes";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceScorecardsApi.updateScorecardOutcomesAsync")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateOutcomesAsyncRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateScorecardRule(
    ruleId: string,
    body: UpdateRuleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateScorecardRule'");
    if (!_config.unstableOperations["v2.updateScorecardRule"]) {
      throw new Error("Unstable operation 'updateScorecardRule' is disabled");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateScorecardRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateScorecardRule");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceScorecardsApi.updateScorecardRule")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateRuleRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class ServiceScorecardsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createScorecardOutcomesBatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createScorecardOutcomesBatch(
    response: ResponseContext
  ): Promise<OutcomesBatchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OutcomesBatchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OutcomesBatchResponse"
      ) as OutcomesBatchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OutcomesBatchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OutcomesBatchResponse",
        ""
      ) as OutcomesBatchResponse;
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
   * @params response Response returned by the server for a request to createScorecardRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createScorecardRule(
    response: ResponseContext
  ): Promise<CreateRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: CreateRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateRuleResponse"
      ) as CreateRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CreateRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateRuleResponse",
        ""
      ) as CreateRuleResponse;
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
   * @params response Response returned by the server for a request to deleteScorecardRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteScorecardRule(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
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
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listScorecardOutcomes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardOutcomes(
    response: ResponseContext
  ): Promise<OutcomesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OutcomesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OutcomesResponse"
      ) as OutcomesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OutcomesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OutcomesResponse",
        ""
      ) as OutcomesResponse;
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
   * @params response Response returned by the server for a request to listScorecardRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardRules(
    response: ResponseContext
  ): Promise<ListRulesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListRulesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListRulesResponse"
      ) as ListRulesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListRulesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListRulesResponse",
        ""
      ) as ListRulesResponse;
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
   * @params response Response returned by the server for a request to updateScorecardOutcomesAsync
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScorecardOutcomesAsync(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
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
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
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
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateScorecardRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScorecardRule(
    response: ResponseContext
  ): Promise<UpdateRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UpdateRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateRuleResponse"
      ) as UpdateRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UpdateRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateRuleResponse",
        ""
      ) as UpdateRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ServiceScorecardsApiCreateScorecardOutcomesBatchRequest {
  /**
   * Set of scorecard outcomes.
   * @type OutcomesBatchRequest
   */
  body: OutcomesBatchRequest;
}

export interface ServiceScorecardsApiCreateScorecardRuleRequest {
  /**
   * Rule attributes.
   * @type CreateRuleRequest
   */
  body: CreateRuleRequest;
}

export interface ServiceScorecardsApiDeleteScorecardRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface ServiceScorecardsApiListScorecardOutcomesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100. Test change to trigger client generation.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Include related rule details in the response.
   * @type string
   */
  include?: string;
  /**
   * Return only specified values in the outcome attributes.
   * @type string
   */
  fieldsOutcome?: string;
  /**
   * Return only specified values in the included rule details.
   * @type string
   */
  fieldsRule?: string;
  /**
   * Filter the outcomes on a specific service name.
   * @type string
   */
  filterOutcomeServiceName?: string;
  /**
   * Filter the outcomes by a specific state.
   * @type string
   */
  filterOutcomeState?: string;
  /**
   * Filter outcomes on whether a rule is enabled/disabled.
   * @type boolean
   */
  filterRuleEnabled?: boolean;
  /**
   * Filter outcomes based on rule ID.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Filter outcomes based on rule name.
   * @type string
   */
  filterRuleName?: string;
}

export interface ServiceScorecardsApiListScorecardRulesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100. Test change to trigger client generation.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Include related scorecard details in the response.
   * @type string
   */
  include?: string;
  /**
   * Filter the rules on a rule ID.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Filter for enabled rules only.
   * @type boolean
   */
  filterRuleEnabled?: boolean;
  /**
   * Filter for custom rules only.
   * @type boolean
   */
  filterRuleCustom?: boolean;
  /**
   * Filter rules on the rule name.
   * @type string
   */
  filterRuleName?: string;
  /**
   * Filter rules on the rule description.
   * @type string
   */
  filterRuleDescription?: string;
  /**
   * Return only specific fields in the response for rule attributes.
   * @type string
   */
  fieldsRule?: string;
  /**
   * Return only specific fields in the included response for scorecard attributes.
   * @type string
   */
  fieldsScorecard?: string;
}

export interface ServiceScorecardsApiUpdateScorecardOutcomesAsyncRequest {
  /**
   * Set of scorecard outcomes.
   * @type UpdateOutcomesAsyncRequest
   */
  body: UpdateOutcomesAsyncRequest;
}

export interface ServiceScorecardsApiUpdateScorecardRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * Rule attributes.
   * @type UpdateRuleRequest
   */
  body: UpdateRuleRequest;
}

export class ServiceScorecardsApi {
  private requestFactory: ServiceScorecardsApiRequestFactory;
  private responseProcessor: ServiceScorecardsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceScorecardsApiRequestFactory,
    responseProcessor?: ServiceScorecardsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ServiceScorecardsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceScorecardsApiResponseProcessor();
  }

  /**
   * Sets multiple service-rule outcomes in a single batched request.
   * @param param The request object
   */
  public createScorecardOutcomesBatch(
    param: ServiceScorecardsApiCreateScorecardOutcomesBatchRequest,
    options?: Configuration
  ): Promise<OutcomesBatchResponse> {
    const requestContextPromise =
      this.requestFactory.createScorecardOutcomesBatch(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createScorecardOutcomesBatch(
            responseContext
          );
        });
    });
  }

  /**
   * Creates a new rule.
   * @param param The request object
   */
  public createScorecardRule(
    param: ServiceScorecardsApiCreateScorecardRuleRequest,
    options?: Configuration
  ): Promise<CreateRuleResponse> {
    const requestContextPromise = this.requestFactory.createScorecardRule(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createScorecardRule(responseContext);
        });
    });
  }

  /**
   * Deletes a single rule.
   * @param param The request object
   */
  public deleteScorecardRule(
    param: ServiceScorecardsApiDeleteScorecardRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteScorecardRule(
      param.ruleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteScorecardRule(responseContext);
        });
    });
  }

  /**
   * Fetches all rule outcomes.
   * @param param The request object
   */
  public listScorecardOutcomes(
    param: ServiceScorecardsApiListScorecardOutcomesRequest = {},
    options?: Configuration
  ): Promise<OutcomesResponse> {
    const requestContextPromise = this.requestFactory.listScorecardOutcomes(
      param.pageSize,
      param.pageOffset,
      param.include,
      param.fieldsOutcome,
      param.fieldsRule,
      param.filterOutcomeServiceName,
      param.filterOutcomeState,
      param.filterRuleEnabled,
      param.filterRuleId,
      param.filterRuleName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardOutcomes(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listScorecardOutcomes returning a generator with all the items.
   */
  public async *listScorecardOutcomesWithPagination(
    param: ServiceScorecardsApiListScorecardOutcomesRequest = {},
    options?: Configuration
  ): AsyncGenerator<OutcomesResponseDataItem> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listScorecardOutcomes(
        param.pageSize,
        param.pageOffset,
        param.include,
        param.fieldsOutcome,
        param.fieldsRule,
        param.filterOutcomeServiceName,
        param.filterOutcomeState,
        param.filterRuleEnabled,
        param.filterRuleId,
        param.filterRuleName,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listScorecardOutcomes(
        responseContext
      );
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Fetch all rules.
   * @param param The request object
   */
  public listScorecardRules(
    param: ServiceScorecardsApiListScorecardRulesRequest = {},
    options?: Configuration
  ): Promise<ListRulesResponse> {
    const requestContextPromise = this.requestFactory.listScorecardRules(
      param.pageSize,
      param.pageOffset,
      param.include,
      param.filterRuleId,
      param.filterRuleEnabled,
      param.filterRuleCustom,
      param.filterRuleName,
      param.filterRuleDescription,
      param.fieldsRule,
      param.fieldsScorecard,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardRules(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listScorecardRules returning a generator with all the items.
   */
  public async *listScorecardRulesWithPagination(
    param: ServiceScorecardsApiListScorecardRulesRequest = {},
    options?: Configuration
  ): AsyncGenerator<ListRulesResponseDataItem> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listScorecardRules(
        param.pageSize,
        param.pageOffset,
        param.include,
        param.filterRuleId,
        param.filterRuleEnabled,
        param.filterRuleCustom,
        param.filterRuleName,
        param.filterRuleDescription,
        param.fieldsRule,
        param.fieldsScorecard,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listScorecardRules(
        responseContext
      );
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Updates multiple scorecard rule outcomes in a single batched request.
   * @param param The request object
   */
  public updateScorecardOutcomesAsync(
    param: ServiceScorecardsApiUpdateScorecardOutcomesAsyncRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateScorecardOutcomesAsync(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScorecardOutcomesAsync(
            responseContext
          );
        });
    });
  }

  /**
   * Updates an existing rule.
   * @param param The request object
   */
  public updateScorecardRule(
    param: ServiceScorecardsApiUpdateScorecardRuleRequest,
    options?: Configuration
  ): Promise<UpdateRuleResponse> {
    const requestContextPromise = this.requestFactory.updateScorecardRule(
      param.ruleId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScorecardRule(responseContext);
        });
    });
  }
}
