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
import { TagPoliciesListResponse } from "../models/TagPoliciesListResponse";
import { TagPolicyCreateRequest } from "../models/TagPolicyCreateRequest";
import { TagPolicyInclude } from "../models/TagPolicyInclude";
import { TagPolicyResponse } from "../models/TagPolicyResponse";
import { TagPolicyScoreResponse } from "../models/TagPolicyScoreResponse";
import { TagPolicySource } from "../models/TagPolicySource";
import { TagPolicyUpdateRequest } from "../models/TagPolicyUpdateRequest";

export class TagPoliciesApiRequestFactory extends BaseAPIRequestFactory {
  public async createTagPolicy(
    body: TagPolicyCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createTagPolicy'");
    if (!_config.unstableOperations["v2.createTagPolicy"]) {
      throw new Error("Unstable operation 'createTagPolicy' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/tag-policies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagPoliciesApi.createTagPolicy")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TagPolicyCreateRequest", ""),
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

  public async deleteTagPolicy(
    policyId: string,
    hardDelete?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteTagPolicy'");
    if (!_config.unstableOperations["v2.deleteTagPolicy"]) {
      throw new Error("Unstable operation 'deleteTagPolicy' is disabled");
    }

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "deleteTagPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/tag-policies/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagPoliciesApi.deleteTagPolicy")
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

  public async getTagPolicy(
    policyId: string,
    include?: TagPolicyInclude,
    tsStart?: number,
    tsEnd?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getTagPolicy'");
    if (!_config.unstableOperations["v2.getTagPolicy"]) {
      throw new Error("Unstable operation 'getTagPolicy' is disabled");
    }

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "getTagPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/tag-policies/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagPoliciesApi.getTagPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "TagPolicyInclude", ""),
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

  public async getTagPolicyScore(
    policyId: string,
    tsStart?: number,
    tsEnd?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getTagPolicyScore'");
    if (!_config.unstableOperations["v2.getTagPolicyScore"]) {
      throw new Error("Unstable operation 'getTagPolicyScore' is disabled");
    }

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "getTagPolicyScore");
    }

    // Path Params
    const localVarPath = "/api/v2/tag-policies/{policy_id}/score".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagPoliciesApi.getTagPolicyScore")
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

  public async listTagPolicies(
    includeDisabled?: boolean,
    includeDeleted?: boolean,
    include?: TagPolicyInclude,
    filterSource?: TagPolicySource,
    tsStart?: number,
    tsEnd?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listTagPolicies'");
    if (!_config.unstableOperations["v2.listTagPolicies"]) {
      throw new Error("Unstable operation 'listTagPolicies' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/tag-policies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagPoliciesApi.listTagPolicies")
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
        ObjectSerializer.serialize(include, "TagPolicyInclude", ""),
        ""
      );
    }
    if (filterSource !== undefined) {
      requestContext.setQueryParam(
        "filter[source]",
        ObjectSerializer.serialize(filterSource, "TagPolicySource", ""),
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

  public async updateTagPolicy(
    policyId: string,
    body: TagPolicyUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateTagPolicy'");
    if (!_config.unstableOperations["v2.updateTagPolicy"]) {
      throw new Error("Unstable operation 'updateTagPolicy' is disabled");
    }

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "updateTagPolicy");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTagPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/tag-policies/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TagPoliciesApi.updateTagPolicy")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TagPolicyUpdateRequest", ""),
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

export class TagPoliciesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTagPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagPolicy(
    response: ResponseContext
  ): Promise<TagPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: TagPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyResponse"
      ) as TagPolicyResponse;
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
      const body: TagPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyResponse",
        ""
      ) as TagPolicyResponse;
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
   * @params response Response returned by the server for a request to deleteTagPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagPolicy(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getTagPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagPolicy(
    response: ResponseContext
  ): Promise<TagPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyResponse"
      ) as TagPolicyResponse;
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
      const body: TagPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyResponse",
        ""
      ) as TagPolicyResponse;
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
   * @params response Response returned by the server for a request to getTagPolicyScore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagPolicyScore(
    response: ResponseContext
  ): Promise<TagPolicyScoreResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagPolicyScoreResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyScoreResponse"
      ) as TagPolicyScoreResponse;
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
      const body: TagPolicyScoreResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyScoreResponse",
        ""
      ) as TagPolicyScoreResponse;
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
   * @params response Response returned by the server for a request to listTagPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagPolicies(
    response: ResponseContext
  ): Promise<TagPoliciesListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagPoliciesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPoliciesListResponse"
      ) as TagPoliciesListResponse;
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
      const body: TagPoliciesListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPoliciesListResponse",
        ""
      ) as TagPoliciesListResponse;
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
   * @params response Response returned by the server for a request to updateTagPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagPolicy(
    response: ResponseContext
  ): Promise<TagPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyResponse"
      ) as TagPolicyResponse;
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
      const body: TagPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPolicyResponse",
        ""
      ) as TagPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface TagPoliciesApiCreateTagPolicyRequest {
  /**
   * @type TagPolicyCreateRequest
   */
  body: TagPolicyCreateRequest;
}

export interface TagPoliciesApiDeleteTagPolicyRequest {
  /**
   * The unique identifier of the tag policy to delete.
   * @type string
   */
  policyId: string;
  /**
   * Whether to permanently delete the policy instead of performing a soft delete. Defaults to `false`.
   * @type boolean
   */
  hardDelete?: boolean;
}

export interface TagPoliciesApiGetTagPolicyRequest {
  /**
   * The unique identifier of the tag policy.
   * @type string
   */
  policyId: string;
  /**
   * Comma-separated list of related resources to include alongside the policy. Currently the only supported value is `score`.
   * @type TagPolicyInclude
   */
  include?: TagPolicyInclude;
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

export interface TagPoliciesApiGetTagPolicyScoreRequest {
  /**
   * The unique identifier of the tag policy.
   * @type string
   */
  policyId: string;
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

export interface TagPoliciesApiListTagPoliciesRequest {
  /**
   * Whether to include policies that are currently disabled. Defaults to `false`.
   * @type boolean
   */
  includeDisabled?: boolean;
  /**
   * Whether to include policies that have been soft-deleted. Defaults to `false`.
   * @type boolean
   */
  includeDeleted?: boolean;
  /**
   * Comma-separated list of related resources to include alongside each policy in the response. Currently the only supported value is `score`.
   * @type TagPolicyInclude
   */
  include?: TagPolicyInclude;
  /**
   * Restrict the result set to policies whose source matches the given value.
   * @type TagPolicySource
   */
  filterSource?: TagPolicySource;
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

export interface TagPoliciesApiUpdateTagPolicyRequest {
  /**
   * The unique identifier of the tag policy to update.
   * @type string
   */
  policyId: string;
  /**
   * @type TagPolicyUpdateRequest
   */
  body: TagPolicyUpdateRequest;
}

export class TagPoliciesApi {
  private requestFactory: TagPoliciesApiRequestFactory;
  private responseProcessor: TagPoliciesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TagPoliciesApiRequestFactory,
    responseProcessor?: TagPoliciesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TagPoliciesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TagPoliciesApiResponseProcessor();
  }

  /**
   * Create a new tag policy for the organization. The caller's organization is derived from
   * the authenticated user; cross-organization creation is not supported. Fields such as
   * `policy_id`, `version`, and the timestamp/audit fields are assigned by the server.
   * @param param The request object
   */
  public createTagPolicy(
    param: TagPoliciesApiCreateTagPolicyRequest,
    options?: Configuration
  ): Promise<TagPolicyResponse> {
    const requestContextPromise = this.requestFactory.createTagPolicy(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagPolicy(responseContext);
        });
    });
  }

  /**
   * Delete a tag policy. By default the policy is soft-deleted so it can be recovered later
   * and so that historical score data remains queryable. Pass `hard_delete=true` to remove
   * the policy permanently.
   * @param param The request object
   */
  public deleteTagPolicy(
    param: TagPoliciesApiDeleteTagPolicyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagPolicy(
      param.policyId,
      param.hardDelete,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagPolicy(responseContext);
        });
    });
  }

  /**
   * Retrieve a single tag policy by ID. Optionally include the policy's current compliance
   * score via the `include=score` query parameter. Policies belonging to other organizations
   * cannot be retrieved.
   * @param param The request object
   */
  public getTagPolicy(
    param: TagPoliciesApiGetTagPolicyRequest,
    options?: Configuration
  ): Promise<TagPolicyResponse> {
    const requestContextPromise = this.requestFactory.getTagPolicy(
      param.policyId,
      param.include,
      param.tsStart,
      param.tsEnd,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagPolicy(responseContext);
        });
    });
  }

  /**
   * Retrieve the compliance score for a single tag policy. The score is computed over the
   * requested time window (or a source-appropriate default) and represents the percentage of
   * telemetry within that window that conforms to the policy. A `null` score indicates that
   * no relevant telemetry was found.
   * @param param The request object
   */
  public getTagPolicyScore(
    param: TagPoliciesApiGetTagPolicyScoreRequest,
    options?: Configuration
  ): Promise<TagPolicyScoreResponse> {
    const requestContextPromise = this.requestFactory.getTagPolicyScore(
      param.policyId,
      param.tsStart,
      param.tsEnd,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagPolicyScore(responseContext);
        });
    });
  }

  /**
   * Retrieve all tag policies for the organization. Optionally include disabled or deleted
   * policies, filter by telemetry source, and include each policy's current compliance score
   * via the `include=score` query parameter.
   * @param param The request object
   */
  public listTagPolicies(
    param: TagPoliciesApiListTagPoliciesRequest = {},
    options?: Configuration
  ): Promise<TagPoliciesListResponse> {
    const requestContextPromise = this.requestFactory.listTagPolicies(
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
          return this.responseProcessor.listTagPolicies(responseContext);
        });
    });
  }

  /**
   * Update one or more attributes of an existing tag policy. Only the fields supplied in the
   * request body are modified; omitted fields retain their current values. The policy's
   * `source` cannot be changed after creation.
   * @param param The request object
   */
  public updateTagPolicy(
    param: TagPoliciesApiUpdateTagPolicyRequest,
    options?: Configuration
  ): Promise<TagPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateTagPolicy(
      param.policyId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagPolicy(responseContext);
        });
    });
  }
}
