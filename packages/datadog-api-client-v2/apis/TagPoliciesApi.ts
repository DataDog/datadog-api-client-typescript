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
import { TagPoliciesResponse } from "../models/TagPoliciesResponse";
import { TagPolicyCreateRequest } from "../models/TagPolicyCreateRequest";
import { TagPolicyResponse } from "../models/TagPolicyResponse";
import { TagPolicyScoreResponse } from "../models/TagPolicyScoreResponse";
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTagPolicy(
    policyId: string,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getTagPolicyScore(
    policyId: string,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagPolicies(
    filterSource?: string,
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
    if (filterSource !== undefined) {
      requestContext.setQueryParam(
        "filter[source]",
        ObjectSerializer.serialize(filterSource, "string", ""),
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
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
  ): Promise<TagPoliciesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TagPoliciesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPoliciesResponse"
      ) as TagPoliciesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: TagPoliciesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagPoliciesResponse",
        ""
      ) as TagPoliciesResponse;
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
   * The ID of the tag policy.
   * @type string
   */
  policyId: string;
}

export interface TagPoliciesApiGetTagPolicyRequest {
  /**
   * The ID of the tag policy.
   * @type string
   */
  policyId: string;
}

export interface TagPoliciesApiGetTagPolicyScoreRequest {
  /**
   * The ID of the tag policy.
   * @type string
   */
  policyId: string;
}

export interface TagPoliciesApiListTagPoliciesRequest {
  /**
   * Filter policies by data source (e.g., logs, metrics).
   * @type string
   */
  filterSource?: string;
}

export interface TagPoliciesApiUpdateTagPolicyRequest {
  /**
   * The ID of the tag policy.
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
   * Create a new tag policy for the organization.
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
   * Delete a specific tag policy by its ID.
   * @param param The request object
   */
  public deleteTagPolicy(
    param: TagPoliciesApiDeleteTagPolicyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagPolicy(
      param.policyId,
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
   * Retrieve a specific tag policy by its ID.
   * @param param The request object
   */
  public getTagPolicy(
    param: TagPoliciesApiGetTagPolicyRequest,
    options?: Configuration
  ): Promise<TagPolicyResponse> {
    const requestContextPromise = this.requestFactory.getTagPolicy(
      param.policyId,
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
   * Retrieve the compliance score for a specific tag policy.
   * @param param The request object
   */
  public getTagPolicyScore(
    param: TagPoliciesApiGetTagPolicyScoreRequest,
    options?: Configuration
  ): Promise<TagPolicyScoreResponse> {
    const requestContextPromise = this.requestFactory.getTagPolicyScore(
      param.policyId,
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
   * Retrieve a list of all tag policies for the organization.
   * @param param The request object
   */
  public listTagPolicies(
    param: TagPoliciesApiListTagPoliciesRequest = {},
    options?: Configuration
  ): Promise<TagPoliciesResponse> {
    const requestContextPromise = this.requestFactory.listTagPolicies(
      param.filterSource,
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
   * Update an existing tag policy by its ID.
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
