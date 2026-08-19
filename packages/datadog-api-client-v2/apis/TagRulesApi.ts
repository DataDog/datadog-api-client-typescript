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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { TagRuleCreateRequest } from "../models/TagRuleCreateRequest";
import { TagRuleInclude } from "../models/TagRuleInclude";
import { TagRuleResponse } from "../models/TagRuleResponse";
import { TagRuleScoreResponse } from "../models/TagRuleScoreResponse";
import { TagRulesListResponse } from "../models/TagRulesListResponse";
import { TagRuleSource } from "../models/TagRuleSource";
import { TagRuleUpdateRequest } from "../models/TagRuleUpdateRequest";

export class TagRulesApiRequestFactory extends BaseAPIRequestFactory {
  public async createTagRule(
    body: TagRuleCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createTagRule'");
    if (!_config.unstableOperations["v2.createTagRule"]) {
      throw new Error("Unstable operation 'createTagRule' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagRule");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/tag_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagRulesApi.createTagRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TagRuleCreateRequest", ""),
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

  public async deleteTagRule(
    ruleId: string,
    hardDelete?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteTagRule'");
    if (!_config.unstableOperations["v2.deleteTagRule"]) {
      throw new Error("Unstable operation 'deleteTagRule' is disabled");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteTagRule");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/tag_rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagRulesApi.deleteTagRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (hardDelete !== undefined) {
      requestContext.setQueryParam(
        "hard_delete",
        ObjectSerializer.serialize(hardDelete, "boolean", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTagRule(
    ruleId: string,
    include?: TagRuleInclude,
    tsStart?: number,
    tsEnd?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getTagRule'");
    if (!_config.unstableOperations["v2.getTagRule"]) {
      throw new Error("Unstable operation 'getTagRule' is disabled");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getTagRule");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/tag_rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagRulesApi.getTagRule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "TagRuleInclude", ""),
        ""
      );
    }
    if (tsStart !== undefined) {
      requestContext.setQueryParam(
        "ts_start",
        ObjectSerializer.serialize(tsStart, "number", "int64"),
        ""
      );
    }
    if (tsEnd !== undefined) {
      requestContext.setQueryParam(
        "ts_end",
        ObjectSerializer.serialize(tsEnd, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTagRuleScore(
    ruleId: string,
    tsStart?: number,
    tsEnd?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getTagRuleScore'");
    if (!_config.unstableOperations["v2.getTagRuleScore"]) {
      throw new Error("Unstable operation 'getTagRuleScore' is disabled");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getTagRuleScore");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/tag_rules/{rule_id}/score".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagRulesApi.getTagRuleScore")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (tsStart !== undefined) {
      requestContext.setQueryParam(
        "ts_start",
        ObjectSerializer.serialize(tsStart, "number", "int64"),
        ""
      );
    }
    if (tsEnd !== undefined) {
      requestContext.setQueryParam(
        "ts_end",
        ObjectSerializer.serialize(tsEnd, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagRules(
    includeDisabled?: boolean,
    includeDeleted?: boolean,
    include?: TagRuleInclude,
    filterSource?: TagRuleSource,
    tsStart?: number,
    tsEnd?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listTagRules'");
    if (!_config.unstableOperations["v2.listTagRules"]) {
      throw new Error("Unstable operation 'listTagRules' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/tag_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagRulesApi.listTagRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (includeDisabled !== undefined) {
      requestContext.setQueryParam(
        "include_disabled",
        ObjectSerializer.serialize(includeDisabled, "boolean", ""),
        ""
      );
    }
    if (includeDeleted !== undefined) {
      requestContext.setQueryParam(
        "include_deleted",
        ObjectSerializer.serialize(includeDeleted, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "TagRuleInclude", ""),
        ""
      );
    }
    if (filterSource !== undefined) {
      requestContext.setQueryParam(
        "filter[source]",
        ObjectSerializer.serialize(filterSource, "TagRuleSource", ""),
        ""
      );
    }
    if (tsStart !== undefined) {
      requestContext.setQueryParam(
        "ts_start",
        ObjectSerializer.serialize(tsStart, "number", "int64"),
        ""
      );
    }
    if (tsEnd !== undefined) {
      requestContext.setQueryParam(
        "ts_end",
        ObjectSerializer.serialize(tsEnd, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateTagRule(
    ruleId: string,
    body: TagRuleUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateTagRule'");
    if (!_config.unstableOperations["v2.updateTagRule"]) {
      throw new Error("Unstable operation 'updateTagRule' is disabled");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateTagRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTagRule");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/tag_rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagRulesApi.updateTagRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TagRuleUpdateRequest", ""),
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
}

export class TagRulesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTagRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagRule(
    response: ResponseContext
  ): Promise<TagRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: TagRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleResponse"
      ) as TagRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TagRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleResponse",
        ""
      ) as TagRuleResponse;
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
   * @params response Response returned by the server for a request to deleteTagRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagRule(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to getTagRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagRule(response: ResponseContext): Promise<TagRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleResponse"
      ) as TagRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TagRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleResponse",
        ""
      ) as TagRuleResponse;
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
   * @params response Response returned by the server for a request to getTagRuleScore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagRuleScore(
    response: ResponseContext
  ): Promise<TagRuleScoreResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagRuleScoreResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleScoreResponse"
      ) as TagRuleScoreResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TagRuleScoreResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleScoreResponse",
        ""
      ) as TagRuleScoreResponse;
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
   * @params response Response returned by the server for a request to listTagRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagRules(
    response: ResponseContext
  ): Promise<TagRulesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRulesListResponse"
      ) as TagRulesListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TagRulesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRulesListResponse",
        ""
      ) as TagRulesListResponse;
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
   * @params response Response returned by the server for a request to updateTagRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagRule(
    response: ResponseContext
  ): Promise<TagRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleResponse"
      ) as TagRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: TagRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagRuleResponse",
        ""
      ) as TagRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface TagRulesApiCreateTagRuleRequest {
  /**
   * @type TagRuleCreateRequest
   */
  body: TagRuleCreateRequest;
}

export interface TagRulesApiDeleteTagRuleRequest {
  /**
   * The unique identifier of the tag rule to delete.
   * @type string
   */
  ruleId: string;
  /**
   * Whether to permanently delete the rule instead of performing a soft delete. Defaults to `false`.
   * @type boolean
   */
  hardDelete?: boolean;
}

export interface TagRulesApiGetTagRuleRequest {
  /**
   * The unique identifier of the tag rule.
   * @type string
   */
  ruleId: string;
  /**
   * Comma-separated list of related resources to include alongside the rule. Currently the only supported value is `score`.
   * @type TagRuleInclude
   */
  include?: TagRuleInclude;
  /**
   * Start of the time window used for compliance score computation, as a Unix timestamp in milliseconds.
   * @type number
   */
  tsStart?: number;
  /**
   * End of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Must be in the past and greater than `ts_start`.
   * @type number
   */
  tsEnd?: number;
}

export interface TagRulesApiGetTagRuleScoreRequest {
  /**
   * The unique identifier of the tag rule.
   * @type string
   */
  ruleId: string;
  /**
   * Start of the time window used for compliance score computation, as a Unix timestamp in milliseconds.
   * @type number
   */
  tsStart?: number;
  /**
   * End of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Must be in the past and greater than `ts_start`.
   * @type number
   */
  tsEnd?: number;
}

export interface TagRulesApiListTagRulesRequest {
  /**
   * Whether to include rules that are currently disabled. Defaults to `false`.
   * @type boolean
   */
  includeDisabled?: boolean;
  /**
   * Whether to include rules that have been soft-deleted. Defaults to `false`.
   * @type boolean
   */
  includeDeleted?: boolean;
  /**
   * Comma-separated list of related resources to include alongside each rule in the response. Currently the only supported value is `score`.
   * @type TagRuleInclude
   */
  include?: TagRuleInclude;
  /**
   * Restrict the result set to rules whose source matches the given value.
   * @type TagRuleSource
   */
  filterSource?: TagRuleSource;
  /**
   * Start of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Defaults to a recent window appropriate for the source.
   * @type number
   */
  tsStart?: number;
  /**
   * End of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Must be in the past and greater than `ts_start`.
   * @type number
   */
  tsEnd?: number;
}

export interface TagRulesApiUpdateTagRuleRequest {
  /**
   * The unique identifier of the tag rule to update.
   * @type string
   */
  ruleId: string;
  /**
   * @type TagRuleUpdateRequest
   */
  body: TagRuleUpdateRequest;
}

export class TagRulesApi {
  private requestFactory: TagRulesApiRequestFactory;
  private responseProcessor: TagRulesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TagRulesApiRequestFactory,
    responseProcessor?: TagRulesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TagRulesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TagRulesApiResponseProcessor();
  }

  /**
   * Create a new tag rule for the organization. The caller's organization is derived from
   * the authenticated user; cross-organization creation is not supported. Fields such as
   * `rule_id`, `version`, and the timestamp/audit fields are assigned by the server.
   * @param param The request object
   */
  public createTagRule(
    param: TagRulesApiCreateTagRuleRequest,
    options?: Configuration
  ): Promise<TagRuleResponse> {
    const requestContextPromise = this.requestFactory.createTagRule(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagRule(responseContext);
        });
    });
  }

  /**
   * Delete a tag rule. By default the rule is soft-deleted so it can be recovered later
   * and so that historical score data remains queryable. Pass `hard_delete=true` to remove
   * the rule permanently.
   * @param param The request object
   */
  public deleteTagRule(
    param: TagRulesApiDeleteTagRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagRule(
      param.ruleId,
      param.hardDelete,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagRule(responseContext);
        });
    });
  }

  /**
   * Retrieve a single tag rule by ID. Optionally include the rule's current compliance
   * score via the `include=score` query parameter. Rules belonging to other organizations
   * cannot be retrieved.
   * @param param The request object
   */
  public getTagRule(
    param: TagRulesApiGetTagRuleRequest,
    options?: Configuration
  ): Promise<TagRuleResponse> {
    const requestContextPromise = this.requestFactory.getTagRule(
      param.ruleId,
      param.include,
      param.tsStart,
      param.tsEnd,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagRule(responseContext);
        });
    });
  }

  /**
   * Retrieve the compliance score for a single tag rule. The score is computed over the
   * requested time window (or a source-appropriate default) and represents the percentage of
   * telemetry within that window that conforms to the rule. A `null` score indicates that
   * no relevant telemetry was found.
   * @param param The request object
   */
  public getTagRuleScore(
    param: TagRulesApiGetTagRuleScoreRequest,
    options?: Configuration
  ): Promise<TagRuleScoreResponse> {
    const requestContextPromise = this.requestFactory.getTagRuleScore(
      param.ruleId,
      param.tsStart,
      param.tsEnd,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagRuleScore(responseContext);
        });
    });
  }

  /**
   * Retrieve all tag rules for the organization. Optionally include disabled or deleted
   * rules, filter by telemetry source, and include each rule's current compliance score
   * via the `include=score` query parameter.
   * @param param The request object
   */
  public listTagRules(
    param: TagRulesApiListTagRulesRequest = {},
    options?: Configuration
  ): Promise<TagRulesListResponse> {
    const requestContextPromise = this.requestFactory.listTagRules(
      param.includeDisabled,
      param.includeDeleted,
      param.include,
      param.filterSource,
      param.tsStart,
      param.tsEnd,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagRules(responseContext);
        });
    });
  }

  /**
   * Update one or more attributes of an existing tag rule. Only the fields supplied in the
   * request body are modified; omitted fields retain their current values. The rule's
   * `source` cannot be changed after creation.
   * @param param The request object
   */
  public updateTagRule(
    param: TagRulesApiUpdateTagRuleRequest,
    options?: Configuration
  ): Promise<TagRuleResponse> {
    const requestContextPromise = this.requestFactory.updateTagRule(
      param.ruleId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagRule(responseContext);
        });
    });
  }
}
