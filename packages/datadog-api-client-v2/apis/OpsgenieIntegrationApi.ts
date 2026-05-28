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
import { OpsgenieAccountCreateRequest } from "../models/OpsgenieAccountCreateRequest";
import { OpsgenieAccountResponse } from "../models/OpsgenieAccountResponse";
import { OpsgenieAccountsResponse } from "../models/OpsgenieAccountsResponse";
import { OpsgenieAccountUpdateRequest } from "../models/OpsgenieAccountUpdateRequest";
import { OpsgenieServiceCreateRequest } from "../models/OpsgenieServiceCreateRequest";
import { OpsgenieServiceResponse } from "../models/OpsgenieServiceResponse";
import { OpsgenieServicesResponse } from "../models/OpsgenieServicesResponse";
import { OpsgenieServiceUpdateRequest } from "../models/OpsgenieServiceUpdateRequest";

export class OpsgenieIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createOpsgenieAccount(
    body: OpsgenieAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOpsgenieAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/opsgenie/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.createOpsgenieAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OpsgenieAccountCreateRequest", ""),
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

  public async createOpsgenieService(
    body: OpsgenieServiceCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOpsgenieService");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/opsgenie/services";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.createOpsgenieService")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OpsgenieServiceCreateRequest", ""),
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

  public async deleteOpsgenieAccount(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteOpsgenieAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/opsgenie/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.deleteOpsgenieAccount")
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

  public async deleteOpsgenieService(
    integrationServiceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationServiceId' is not null or undefined
    if (integrationServiceId === null || integrationServiceId === undefined) {
      throw new RequiredError("integrationServiceId", "deleteOpsgenieService");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/opsgenie/services/{integration_service_id}".replace(
        "{integration_service_id}",
        encodeURIComponent(String(integrationServiceId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.deleteOpsgenieService")
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

  public async getOpsgenieService(
    integrationServiceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationServiceId' is not null or undefined
    if (integrationServiceId === null || integrationServiceId === undefined) {
      throw new RequiredError("integrationServiceId", "getOpsgenieService");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/opsgenie/services/{integration_service_id}".replace(
        "{integration_service_id}",
        encodeURIComponent(String(integrationServiceId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.getOpsgenieService")
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

  public async listOpsgenieAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/opsgenie/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.listOpsgenieAccounts")
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

  public async listOpsgenieServices(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/opsgenie/services";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.listOpsgenieServices")
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

  public async updateOpsgenieAccount(
    accountId: string,
    body: OpsgenieAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateOpsgenieAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOpsgenieAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/opsgenie/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.updateOpsgenieAccount")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OpsgenieAccountUpdateRequest", ""),
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

  public async updateOpsgenieService(
    integrationServiceId: string,
    body: OpsgenieServiceUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationServiceId' is not null or undefined
    if (integrationServiceId === null || integrationServiceId === undefined) {
      throw new RequiredError("integrationServiceId", "updateOpsgenieService");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOpsgenieService");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/opsgenie/services/{integration_service_id}".replace(
        "{integration_service_id}",
        encodeURIComponent(String(integrationServiceId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OpsgenieIntegrationApi.updateOpsgenieService")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OpsgenieServiceUpdateRequest", ""),
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

export class OpsgenieIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOpsgenieAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOpsgenieAccount(
    response: ResponseContext
  ): Promise<OpsgenieAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OpsgenieAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieAccountResponse"
      ) as OpsgenieAccountResponse;
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
      const body: OpsgenieAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieAccountResponse",
        ""
      ) as OpsgenieAccountResponse;
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
   * @params response Response returned by the server for a request to createOpsgenieService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOpsgenieService(
    response: ResponseContext
  ): Promise<OpsgenieServiceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OpsgenieServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServiceResponse"
      ) as OpsgenieServiceResponse;
      return body;
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
      const body: OpsgenieServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServiceResponse",
        ""
      ) as OpsgenieServiceResponse;
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
   * @params response Response returned by the server for a request to deleteOpsgenieAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOpsgenieAccount(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteOpsgenieService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOpsgenieService(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getOpsgenieService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOpsgenieService(
    response: ResponseContext
  ): Promise<OpsgenieServiceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpsgenieServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServiceResponse"
      ) as OpsgenieServiceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: OpsgenieServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServiceResponse",
        ""
      ) as OpsgenieServiceResponse;
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
   * @params response Response returned by the server for a request to listOpsgenieAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOpsgenieAccounts(
    response: ResponseContext
  ): Promise<OpsgenieAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpsgenieAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieAccountsResponse"
      ) as OpsgenieAccountsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: OpsgenieAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieAccountsResponse",
        ""
      ) as OpsgenieAccountsResponse;
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
   * @params response Response returned by the server for a request to listOpsgenieServices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOpsgenieServices(
    response: ResponseContext
  ): Promise<OpsgenieServicesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpsgenieServicesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServicesResponse"
      ) as OpsgenieServicesResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: OpsgenieServicesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServicesResponse",
        ""
      ) as OpsgenieServicesResponse;
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
   * @params response Response returned by the server for a request to updateOpsgenieAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOpsgenieAccount(
    response: ResponseContext
  ): Promise<OpsgenieAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpsgenieAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieAccountResponse"
      ) as OpsgenieAccountResponse;
      return body;
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
    if (response.httpStatusCode === 422) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: OpsgenieAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieAccountResponse",
        ""
      ) as OpsgenieAccountResponse;
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
   * @params response Response returned by the server for a request to updateOpsgenieService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOpsgenieService(
    response: ResponseContext
  ): Promise<OpsgenieServiceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OpsgenieServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServiceResponse"
      ) as OpsgenieServiceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: OpsgenieServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OpsgenieServiceResponse",
        ""
      ) as OpsgenieServiceResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OpsgenieIntegrationApiCreateOpsgenieAccountRequest {
  /**
   * Opsgenie account payload.
   * @type OpsgenieAccountCreateRequest
   */
  body: OpsgenieAccountCreateRequest;
}

export interface OpsgenieIntegrationApiCreateOpsgenieServiceRequest {
  /**
   * Opsgenie service payload
   * @type OpsgenieServiceCreateRequest
   */
  body: OpsgenieServiceCreateRequest;
}

export interface OpsgenieIntegrationApiDeleteOpsgenieAccountRequest {
  /**
   * The UUID of the Opsgenie account.
   * @type string
   */
  accountId: string;
}

export interface OpsgenieIntegrationApiDeleteOpsgenieServiceRequest {
  /**
   * The UUID of the service.
   * @type string
   */
  integrationServiceId: string;
}

export interface OpsgenieIntegrationApiGetOpsgenieServiceRequest {
  /**
   * The UUID of the service.
   * @type string
   */
  integrationServiceId: string;
}

export interface OpsgenieIntegrationApiUpdateOpsgenieAccountRequest {
  /**
   * The UUID of the Opsgenie account.
   * @type string
   */
  accountId: string;
  /**
   * Opsgenie account payload.
   * @type OpsgenieAccountUpdateRequest
   */
  body: OpsgenieAccountUpdateRequest;
}

export interface OpsgenieIntegrationApiUpdateOpsgenieServiceRequest {
  /**
   * The UUID of the service.
   * @type string
   */
  integrationServiceId: string;
  /**
   * Opsgenie service payload.
   * @type OpsgenieServiceUpdateRequest
   */
  body: OpsgenieServiceUpdateRequest;
}

export class OpsgenieIntegrationApi {
  private requestFactory: OpsgenieIntegrationApiRequestFactory;
  private responseProcessor: OpsgenieIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OpsgenieIntegrationApiRequestFactory,
    responseProcessor?: OpsgenieIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OpsgenieIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OpsgenieIntegrationApiResponseProcessor();
  }

  /**
   * Create a new Opsgenie account in the Datadog Opsgenie integration.
   * @param param The request object
   */
  public createOpsgenieAccount(
    param: OpsgenieIntegrationApiCreateOpsgenieAccountRequest,
    options?: Configuration
  ): Promise<OpsgenieAccountResponse> {
    const requestContextPromise = this.requestFactory.createOpsgenieAccount(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOpsgenieAccount(responseContext);
        });
    });
  }

  /**
   * Create a new service object in the Opsgenie integration.
   * @param param The request object
   */
  public createOpsgenieService(
    param: OpsgenieIntegrationApiCreateOpsgenieServiceRequest,
    options?: Configuration
  ): Promise<OpsgenieServiceResponse> {
    const requestContextPromise = this.requestFactory.createOpsgenieService(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOpsgenieService(responseContext);
        });
    });
  }

  /**
   * Delete a single Opsgenie account from the Datadog Opsgenie integration.
   * @param param The request object
   */
  public deleteOpsgenieAccount(
    param: OpsgenieIntegrationApiDeleteOpsgenieAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOpsgenieAccount(
      param.accountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOpsgenieAccount(responseContext);
        });
    });
  }

  /**
   * Delete a single service object in the Datadog Opsgenie integration.
   * @param param The request object
   */
  public deleteOpsgenieService(
    param: OpsgenieIntegrationApiDeleteOpsgenieServiceRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOpsgenieService(
      param.integrationServiceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOpsgenieService(responseContext);
        });
    });
  }

  /**
   * Get a single service from the Datadog Opsgenie integration.
   * @param param The request object
   */
  public getOpsgenieService(
    param: OpsgenieIntegrationApiGetOpsgenieServiceRequest,
    options?: Configuration
  ): Promise<OpsgenieServiceResponse> {
    const requestContextPromise = this.requestFactory.getOpsgenieService(
      param.integrationServiceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOpsgenieService(responseContext);
        });
    });
  }

  /**
   * Get a list of all Opsgenie accounts from the Datadog Opsgenie integration.
   * @param param The request object
   */
  public listOpsgenieAccounts(
    options?: Configuration
  ): Promise<OpsgenieAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listOpsgenieAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOpsgenieAccounts(responseContext);
        });
    });
  }

  /**
   * Get a list of all services from the Datadog Opsgenie integration.
   * @param param The request object
   */
  public listOpsgenieServices(
    options?: Configuration
  ): Promise<OpsgenieServicesResponse> {
    const requestContextPromise =
      this.requestFactory.listOpsgenieServices(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOpsgenieServices(responseContext);
        });
    });
  }

  /**
   * Update a single Opsgenie account in the Datadog Opsgenie integration.
   * @param param The request object
   */
  public updateOpsgenieAccount(
    param: OpsgenieIntegrationApiUpdateOpsgenieAccountRequest,
    options?: Configuration
  ): Promise<OpsgenieAccountResponse> {
    const requestContextPromise = this.requestFactory.updateOpsgenieAccount(
      param.accountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOpsgenieAccount(responseContext);
        });
    });
  }

  /**
   * Update a single service object in the Datadog Opsgenie integration.
   * @param param The request object
   */
  public updateOpsgenieService(
    param: OpsgenieIntegrationApiUpdateOpsgenieServiceRequest,
    options?: Configuration
  ): Promise<OpsgenieServiceResponse> {
    const requestContextPromise = this.requestFactory.updateOpsgenieService(
      param.integrationServiceId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOpsgenieService(responseContext);
        });
    });
  }
}
