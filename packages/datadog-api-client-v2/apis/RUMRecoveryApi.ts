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
import { Int64Input } from "../../datadog-api-client-common/util";

import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { RumArchiveSessionsResponse } from "../models/RumArchiveSessionsResponse";
import { RumArchiveSessionsSearchRequest } from "../models/RumArchiveSessionsSearchRequest";
import { RumManagedArchiveErrorResponse } from "../models/RumManagedArchiveErrorResponse";
import { RumRecoveryBatchListResponse } from "../models/RumRecoveryBatchListResponse";
import { RumRecoveryBatchRequestType } from "../models/RumRecoveryBatchRequestType";
import { RumRecoveryCancelRequest } from "../models/RumRecoveryCancelRequest";
import { RumRecoveryCancelResponse } from "../models/RumRecoveryCancelResponse";
import { RumRecoveryCountRequest } from "../models/RumRecoveryCountRequest";
import { RumRecoveryCountResponse } from "../models/RumRecoveryCountResponse";
import { RumRecoveryCreateRequest } from "../models/RumRecoveryCreateRequest";
import { RumRecoveryCreateResponse } from "../models/RumRecoveryCreateResponse";
import { RumRecoveryRequestResponse } from "../models/RumRecoveryRequestResponse";

export class RUMRecoveryApiRequestFactory extends BaseAPIRequestFactory {
  public async createRUMRecoveryRequest(
    body: RumRecoveryCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMRecoveryRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/recover/requests";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRecoveryApi.createRUMRecoveryRequest")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumRecoveryCreateRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRUMRecoveryRequest(
    requestId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'requestId' is not null or undefined
    if (requestId === null || requestId === undefined) {
      throw new RequiredError("requestId", "getRUMRecoveryRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/recover/requests/{request_id}".replace(
      "{request_id}",
      encodeURIComponent(String(requestId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRecoveryApi.getRUMRecoveryRequest")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRUMRecoverySessionCount(
    body: RumRecoveryCountRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getRUMRecoverySessionCount");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/recover/count";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRecoveryApi.getRUMRecoverySessionCount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumRecoveryCountRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listRUMRecoveryBatchRequests(
    type: RumRecoveryBatchRequestType,
    limit?: number,
    cursor?: string,
    from?: Int64Input,
    to?: Int64Input,
    query?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'type' is not null or undefined
    if (type === null || type === undefined) {
      throw new RequiredError("type", "listRUMRecoveryBatchRequests");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/recover/requests";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRecoveryApi.listRUMRecoveryBatchRequests")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (type !== undefined) {
      requestContext.setQueryParam(
        "type",
        ObjectSerializer.serialize(type, "RumRecoveryBatchRequestType", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int32"),
        ""
      );
    }
    if (cursor !== undefined) {
      requestContext.setQueryParam(
        "cursor",
        ObjectSerializer.serialize(cursor, "string", ""),
        ""
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "number", "int64"),
        ""
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "number", "int64"),
        ""
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
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

  public async searchRUMArchiveSessions(
    body: RumArchiveSessionsSearchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchRUMArchiveSessions");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/recover/sessions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRecoveryApi.searchRUMArchiveSessions")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumArchiveSessionsSearchRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateRUMRecoveryBatchRequest(
    requestId: string,
    body: RumRecoveryCancelRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'requestId' is not null or undefined
    if (requestId === null || requestId === undefined) {
      throw new RequiredError("requestId", "updateRUMRecoveryBatchRequest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMRecoveryBatchRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/recover/requests/{request_id}".replace(
      "{request_id}",
      encodeURIComponent(String(requestId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRecoveryApi.updateRUMRecoveryBatchRequest")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RumRecoveryCancelRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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

export class RUMRecoveryApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRUMRecoveryRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMRecoveryRequest(
    response: ResponseContext
  ): Promise<RumRecoveryCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: RumRecoveryCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryCreateResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: RumManagedArchiveErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "RumManagedArchiveErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRecoveryCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryCreateResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryCreateResponse;
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
   * @params response Response returned by the server for a request to getRUMRecoveryRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMRecoveryRequest(
    response: ResponseContext
  ): Promise<RumRecoveryRequestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RumRecoveryRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryRequestResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryRequestResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: RumManagedArchiveErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "RumManagedArchiveErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRecoveryRequestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryRequestResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryRequestResponse;
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
   * @params response Response returned by the server for a request to getRUMRecoverySessionCount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMRecoverySessionCount(
    response: ResponseContext
  ): Promise<RumRecoveryCountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RumRecoveryCountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryCountResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryCountResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: RumManagedArchiveErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "RumManagedArchiveErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRecoveryCountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryCountResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryCountResponse;
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
   * @params response Response returned by the server for a request to listRUMRecoveryBatchRequests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMRecoveryBatchRequests(
    response: ResponseContext
  ): Promise<RumRecoveryBatchListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RumRecoveryBatchListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryBatchListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryBatchListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: RumManagedArchiveErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "RumManagedArchiveErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRecoveryBatchListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryBatchListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryBatchListResponse;
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
   * @params response Response returned by the server for a request to searchRUMArchiveSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchRUMArchiveSessions(
    response: ResponseContext
  ): Promise<RumArchiveSessionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RumArchiveSessionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumArchiveSessionsResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumArchiveSessionsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: RumManagedArchiveErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "RumManagedArchiveErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumArchiveSessionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumArchiveSessionsResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumArchiveSessionsResponse;
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
   * @params response Response returned by the server for a request to updateRUMRecoveryBatchRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMRecoveryBatchRequest(
    response: ResponseContext
  ): Promise<RumRecoveryCancelResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RumRecoveryCancelResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryCancelResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryCancelResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: RumManagedArchiveErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "RumManagedArchiveErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRecoveryCancelResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "RumRecoveryCancelResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as RumRecoveryCancelResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RUMRecoveryApiCreateRUMRecoveryRequestRequest {
  /**
   * JSON:API request body.
   * @type RumRecoveryCreateRequest
   */
  body: RumRecoveryCreateRequest;
}

export interface RUMRecoveryApiGetRUMRecoveryRequestRequest {
  /**
   * Recovery request UUID.
   * @type string
   */
  requestId: string;
}

export interface RUMRecoveryApiGetRUMRecoverySessionCountRequest {
  /**
   * JSON:API request body.
   * @type RumRecoveryCountRequest
   */
  body: RumRecoveryCountRequest;
}

export interface RUMRecoveryApiListRUMRecoveryBatchRequestsRequest {
  /**
   * Must equal batch.
   * @type RumRecoveryBatchRequestType
   */
  type: RumRecoveryBatchRequestType;
  /**
   * Number of results returned per page, at most 100 (default 50). Omitted, zero, or negative values use 50. Invalid integers return 400.
   * @type number
   */
  limit?: number;
  /**
   * Opaque next-page cursor. Keep type, from, to, and query unchanged between pages.
   * @type string
   */
  cursor?: string;
  /**
   * Start of the request creation-time range in Unix milliseconds, inclusive. This filters created_at, not the time range of the sessions being recovered. Must be earlier than to when both are provided.
   * @type Int64Input
   */
  from?: Int64Input;
  /**
   * End of the request creation-time range in Unix milliseconds, exclusive. This filters created_at, not the time range of the sessions being recovered. Must be later than from when both are provided.
   * @type Int64Input
   */
  to?: Int64Input;
  /**
   * Filter recovery requests whose stored query selects matching facet values. Supports facet:value and facet:(A OR B) terms combined with AND, including * and ? wildcards in filter values. Attribute facets keep their leading @. At most 4096 bytes. Exclusions, repeated facets, free text, ranges, and OR between terms return 400. Stored queries that cannot be matched unambiguously are excluded. Blank values apply no query filter.
   * @type string
   */
  query?: string;
}

export interface RUMRecoveryApiSearchRUMArchiveSessionsRequest {
  /**
   * JSON:API request body.
   * @type RumArchiveSessionsSearchRequest
   */
  body: RumArchiveSessionsSearchRequest;
}

export interface RUMRecoveryApiUpdateRUMRecoveryBatchRequestRequest {
  /**
   * Recovery request UUID.
   * @type string
   */
  requestId: string;
  /**
   * JSON:API request body.
   * @type RumRecoveryCancelRequest
   */
  body: RumRecoveryCancelRequest;
}

export class RUMRecoveryApi {
  private requestFactory: RUMRecoveryApiRequestFactory;
  private responseProcessor: RUMRecoveryApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RUMRecoveryApiRequestFactory,
    responseProcessor?: RUMRecoveryApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RUMRecoveryApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RUMRecoveryApiResponseProcessor(configuration);
  }

  /**
   * Start targeted or query-based batch recovery. Use the returned `data.id` to poll the recovery request for progress. Batch creation checks a fresh recoverable-session estimate against the configured maximum (100,000 by default), accepting estimates equal to the maximum. Use the count operation to check the current maximum; creation can still reject a changed estimate. Narrow the query or time range if the maximum is exceeded.
   *
   * Creation is not idempotent. After an uncertain response, check session search or batch listing before retrying.
   * @param param The request object
   */
  public createRUMRecoveryRequest(
    param: RUMRecoveryApiCreateRUMRecoveryRequestRequest,
    options?: Configuration
  ): Promise<RumRecoveryCreateResponse> {
    const requestContextPromise = this.requestFactory.createRUMRecoveryRequest(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMRecoveryRequest(
            responseContext
          );
        });
    });
  }

  /**
   * Get progress for a targeted or batch recovery request. A `COMPLETED` request can include failed sessions; check individual session statuses for targeted recovery.
   * @param param The request object
   */
  public getRUMRecoveryRequest(
    param: RUMRecoveryApiGetRUMRecoveryRequestRequest,
    options?: Configuration
  ): Promise<RumRecoveryRequestResponse> {
    const requestContextPromise = this.requestFactory.getRUMRecoveryRequest(
      param.requestId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMRecoveryRequest(responseContext);
        });
    });
  }

  /**
   * Return the full estimated number of recoverable sessions and the configured maximum per batch. The estimate is not capped at that maximum. This endpoint does not create a recovery request. Narrow the query or time range if the estimate exceeds max_recoverable_sessions. Creation checks a fresh estimate and returns 400 if it exceeds the configured maximum.
   * @param param The request object
   */
  public getRUMRecoverySessionCount(
    param: RUMRecoveryApiGetRUMRecoverySessionCountRequest,
    options?: Configuration
  ): Promise<RumRecoveryCountResponse> {
    const requestContextPromise =
      this.requestFactory.getRUMRecoverySessionCount(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMRecoverySessionCount(
            responseContext
          );
        });
    });
  }

  /**
   * List batch recovery requests for your organization. Set `type=batch`. Optional `from` and `to` bounds filter request creation time; `query` filters the queries stored on recovery requests.
   * A filtered page can be empty or contain fewer than `limit` results and still include `meta.next_cursor`. Continue until the cursor is absent, keeping the filters unchanged between pages.
   * @param param The request object
   */
  public listRUMRecoveryBatchRequests(
    param: RUMRecoveryApiListRUMRecoveryBatchRequestsRequest,
    options?: Configuration
  ): Promise<RumRecoveryBatchListResponse> {
    const requestContextPromise =
      this.requestFactory.listRUMRecoveryBatchRequests(
        param.type,
        param.limit,
        param.cursor,
        param.from,
        param.to,
        param.query,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMRecoveryBatchRequests(
            responseContext
          );
        });
    });
  }

  /**
   * Search archived RUM sessions. Use `meta.page.next_cursor` to retrieve the next page.
   * @param param The request object
   */
  public searchRUMArchiveSessions(
    param: RUMRecoveryApiSearchRUMArchiveSessionsRequest,
    options?: Configuration
  ): Promise<RumArchiveSessionsResponse> {
    const requestContextPromise = this.requestFactory.searchRUMArchiveSessions(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchRUMArchiveSessions(
            responseContext
          );
        });
    });
  }

  /**
   * Cancel pending work for a batch recovery request. Work already in progress can finish, and recovered data is not removed. Requests in a terminal state return `409`.
   * @param param The request object
   */
  public updateRUMRecoveryBatchRequest(
    param: RUMRecoveryApiUpdateRUMRecoveryBatchRequestRequest,
    options?: Configuration
  ): Promise<RumRecoveryCancelResponse> {
    const requestContextPromise =
      this.requestFactory.updateRUMRecoveryBatchRequest(
        param.requestId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMRecoveryBatchRequest(
            responseContext
          );
        });
    });
  }
}
