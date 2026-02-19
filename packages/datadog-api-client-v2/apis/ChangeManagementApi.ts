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
import { ChangeRequestBranchCreateRequest } from "../models/ChangeRequestBranchCreateRequest";
import { ChangeRequestCreateRequest } from "../models/ChangeRequestCreateRequest";
import { ChangeRequestDecisionUpdateRequest } from "../models/ChangeRequestDecisionUpdateRequest";
import { ChangeRequestResponse } from "../models/ChangeRequestResponse";
import { ChangeRequestUpdateRequest } from "../models/ChangeRequestUpdateRequest";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class ChangeManagementApiRequestFactory extends BaseAPIRequestFactory {
  public async createChangeRequest(
    body: ChangeRequestCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createChangeRequest'");
    if (!_config.unstableOperations["v2.createChangeRequest"]) {
      throw new Error("Unstable operation 'createChangeRequest' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createChangeRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/change-management/change-request";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ChangeManagementApi.createChangeRequest")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ChangeRequestCreateRequest", ""),
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

  public async createChangeRequestBranch(
    changeRequestId: string,
    body: ChangeRequestBranchCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createChangeRequestBranch'");
    if (!_config.unstableOperations["v2.createChangeRequestBranch"]) {
      throw new Error(
        "Unstable operation 'createChangeRequestBranch' is disabled"
      );
    }

    // verify required parameter 'changeRequestId' is not null or undefined
    if (changeRequestId === null || changeRequestId === undefined) {
      throw new RequiredError("changeRequestId", "createChangeRequestBranch");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createChangeRequestBranch");
    }

    // Path Params
    const localVarPath =
      "/api/v2/change-management/change-request/{change_request_id}/branch".replace(
        "{change_request_id}",
        encodeURIComponent(String(changeRequestId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ChangeManagementApi.createChangeRequestBranch")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ChangeRequestBranchCreateRequest", ""),
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

  public async deleteChangeRequestDecision(
    changeRequestId: string,
    decisionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteChangeRequestDecision'");
    if (!_config.unstableOperations["v2.deleteChangeRequestDecision"]) {
      throw new Error(
        "Unstable operation 'deleteChangeRequestDecision' is disabled"
      );
    }

    // verify required parameter 'changeRequestId' is not null or undefined
    if (changeRequestId === null || changeRequestId === undefined) {
      throw new RequiredError("changeRequestId", "deleteChangeRequestDecision");
    }

    // verify required parameter 'decisionId' is not null or undefined
    if (decisionId === null || decisionId === undefined) {
      throw new RequiredError("decisionId", "deleteChangeRequestDecision");
    }

    // Path Params
    const localVarPath =
      "/api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}"
        .replace(
          "{change_request_id}",
          encodeURIComponent(String(changeRequestId))
        )
        .replace("{decision_id}", encodeURIComponent(String(decisionId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ChangeManagementApi.deleteChangeRequestDecision")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getChangeRequest(
    changeRequestId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getChangeRequest'");
    if (!_config.unstableOperations["v2.getChangeRequest"]) {
      throw new Error("Unstable operation 'getChangeRequest' is disabled");
    }

    // verify required parameter 'changeRequestId' is not null or undefined
    if (changeRequestId === null || changeRequestId === undefined) {
      throw new RequiredError("changeRequestId", "getChangeRequest");
    }

    // Path Params
    const localVarPath =
      "/api/v2/change-management/change-request/{change_request_id}".replace(
        "{change_request_id}",
        encodeURIComponent(String(changeRequestId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ChangeManagementApi.getChangeRequest")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateChangeRequest(
    changeRequestId: string,
    body: ChangeRequestUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateChangeRequest'");
    if (!_config.unstableOperations["v2.updateChangeRequest"]) {
      throw new Error("Unstable operation 'updateChangeRequest' is disabled");
    }

    // verify required parameter 'changeRequestId' is not null or undefined
    if (changeRequestId === null || changeRequestId === undefined) {
      throw new RequiredError("changeRequestId", "updateChangeRequest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateChangeRequest");
    }

    // Path Params
    const localVarPath =
      "/api/v2/change-management/change-request/{change_request_id}".replace(
        "{change_request_id}",
        encodeURIComponent(String(changeRequestId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ChangeManagementApi.updateChangeRequest")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ChangeRequestUpdateRequest", ""),
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

  public async updateChangeRequestDecision(
    changeRequestId: string,
    decisionId: string,
    body: ChangeRequestDecisionUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateChangeRequestDecision'");
    if (!_config.unstableOperations["v2.updateChangeRequestDecision"]) {
      throw new Error(
        "Unstable operation 'updateChangeRequestDecision' is disabled"
      );
    }

    // verify required parameter 'changeRequestId' is not null or undefined
    if (changeRequestId === null || changeRequestId === undefined) {
      throw new RequiredError("changeRequestId", "updateChangeRequestDecision");
    }

    // verify required parameter 'decisionId' is not null or undefined
    if (decisionId === null || decisionId === undefined) {
      throw new RequiredError("decisionId", "updateChangeRequestDecision");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateChangeRequestDecision");
    }

    // Path Params
    const localVarPath =
      "/api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}"
        .replace(
          "{change_request_id}",
          encodeURIComponent(String(changeRequestId))
        )
        .replace("{decision_id}", encodeURIComponent(String(decisionId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ChangeManagementApi.updateChangeRequestDecision")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ChangeRequestDecisionUpdateRequest",
        ""
      ),
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

export class ChangeManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createChangeRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createChangeRequest(
    response: ResponseContext
  ): Promise<ChangeRequestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse"
      ) as ChangeRequestResponse;
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
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse",
        ""
      ) as ChangeRequestResponse;
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
   * @params response Response returned by the server for a request to createChangeRequestBranch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createChangeRequestBranch(
    response: ResponseContext
  ): Promise<ChangeRequestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse"
      ) as ChangeRequestResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse",
        ""
      ) as ChangeRequestResponse;
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
   * @params response Response returned by the server for a request to deleteChangeRequestDecision
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteChangeRequestDecision(
    response: ResponseContext
  ): Promise<ChangeRequestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse"
      ) as ChangeRequestResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse",
        ""
      ) as ChangeRequestResponse;
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
   * @params response Response returned by the server for a request to getChangeRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getChangeRequest(
    response: ResponseContext
  ): Promise<ChangeRequestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse"
      ) as ChangeRequestResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse",
        ""
      ) as ChangeRequestResponse;
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
   * @params response Response returned by the server for a request to updateChangeRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateChangeRequest(
    response: ResponseContext
  ): Promise<ChangeRequestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse"
      ) as ChangeRequestResponse;
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
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse",
        ""
      ) as ChangeRequestResponse;
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
   * @params response Response returned by the server for a request to updateChangeRequestDecision
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateChangeRequestDecision(
    response: ResponseContext
  ): Promise<ChangeRequestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse"
      ) as ChangeRequestResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: ChangeRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ChangeRequestResponse",
        ""
      ) as ChangeRequestResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ChangeManagementApiCreateChangeRequestRequest {
  /**
   * Change request payload.
   * @type ChangeRequestCreateRequest
   */
  body: ChangeRequestCreateRequest;
}

export interface ChangeManagementApiCreateChangeRequestBranchRequest {
  /**
   * The identifier of the change request.
   * @type string
   */
  changeRequestId: string;
  /**
   * Branch creation payload.
   * @type ChangeRequestBranchCreateRequest
   */
  body: ChangeRequestBranchCreateRequest;
}

export interface ChangeManagementApiDeleteChangeRequestDecisionRequest {
  /**
   * The identifier of the change request.
   * @type string
   */
  changeRequestId: string;
  /**
   * The identifier of the change request decision.
   * @type string
   */
  decisionId: string;
}

export interface ChangeManagementApiGetChangeRequestRequest {
  /**
   * The identifier of the change request.
   * @type string
   */
  changeRequestId: string;
}

export interface ChangeManagementApiUpdateChangeRequestRequest {
  /**
   * The identifier of the change request.
   * @type string
   */
  changeRequestId: string;
  /**
   * Change request update payload.
   * @type ChangeRequestUpdateRequest
   */
  body: ChangeRequestUpdateRequest;
}

export interface ChangeManagementApiUpdateChangeRequestDecisionRequest {
  /**
   * The identifier of the change request.
   * @type string
   */
  changeRequestId: string;
  /**
   * The identifier of the change request decision.
   * @type string
   */
  decisionId: string;
  /**
   * Decision update payload.
   * @type ChangeRequestDecisionUpdateRequest
   */
  body: ChangeRequestDecisionUpdateRequest;
}

export class ChangeManagementApi {
  private requestFactory: ChangeManagementApiRequestFactory;
  private responseProcessor: ChangeManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ChangeManagementApiRequestFactory,
    responseProcessor?: ChangeManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ChangeManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ChangeManagementApiResponseProcessor();
  }

  /**
   * Create a new change request.
   * @param param The request object
   */
  public createChangeRequest(
    param: ChangeManagementApiCreateChangeRequestRequest,
    options?: Configuration
  ): Promise<ChangeRequestResponse> {
    const requestContextPromise = this.requestFactory.createChangeRequest(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createChangeRequest(responseContext);
        });
    });
  }

  /**
   * Create a new branch in a repository for a change request.
   * @param param The request object
   */
  public createChangeRequestBranch(
    param: ChangeManagementApiCreateChangeRequestBranchRequest,
    options?: Configuration
  ): Promise<ChangeRequestResponse> {
    const requestContextPromise = this.requestFactory.createChangeRequestBranch(
      param.changeRequestId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createChangeRequestBranch(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a decision from a change request.
   * @param param The request object
   */
  public deleteChangeRequestDecision(
    param: ChangeManagementApiDeleteChangeRequestDecisionRequest,
    options?: Configuration
  ): Promise<ChangeRequestResponse> {
    const requestContextPromise =
      this.requestFactory.deleteChangeRequestDecision(
        param.changeRequestId,
        param.decisionId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteChangeRequestDecision(
            responseContext
          );
        });
    });
  }

  /**
   * Get the details of a change request by its ID.
   * @param param The request object
   */
  public getChangeRequest(
    param: ChangeManagementApiGetChangeRequestRequest,
    options?: Configuration
  ): Promise<ChangeRequestResponse> {
    const requestContextPromise = this.requestFactory.getChangeRequest(
      param.changeRequestId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getChangeRequest(responseContext);
        });
    });
  }

  /**
   * Update the properties of a change request.
   * @param param The request object
   */
  public updateChangeRequest(
    param: ChangeManagementApiUpdateChangeRequestRequest,
    options?: Configuration
  ): Promise<ChangeRequestResponse> {
    const requestContextPromise = this.requestFactory.updateChangeRequest(
      param.changeRequestId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateChangeRequest(responseContext);
        });
    });
  }

  /**
   * Update a decision on a change request, such as approving or declining it.
   * @param param The request object
   */
  public updateChangeRequestDecision(
    param: ChangeManagementApiUpdateChangeRequestDecisionRequest,
    options?: Configuration
  ): Promise<ChangeRequestResponse> {
    const requestContextPromise =
      this.requestFactory.updateChangeRequestDecision(
        param.changeRequestId,
        param.decisionId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateChangeRequestDecision(
            responseContext
          );
        });
    });
  }
}
