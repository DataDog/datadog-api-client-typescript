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
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { MonitorConfigPolicyCreateRequest } from "./models/MonitorConfigPolicyCreateRequest";
import { MonitorConfigPolicyEditRequest } from "./models/MonitorConfigPolicyEditRequest";
import { MonitorConfigPolicyListResponse } from "./models/MonitorConfigPolicyListResponse";
import { MonitorConfigPolicyResponse } from "./models/MonitorConfigPolicyResponse";

export class MonitorsApiRequestFactory extends BaseAPIRequestFactory {
  public async createMonitorConfigPolicy(
    body: MonitorConfigPolicyCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.MonitorsApi.createMonitorConfigPolicy")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "MonitorConfigPolicyCreateRequest", ""),
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

  public async deleteMonitorConfigPolicy(
    policyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "deleteMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.MonitorsApi.deleteMonitorConfigPolicy")
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

  public async getMonitorConfigPolicy(
    policyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "getMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.MonitorsApi.getMonitorConfigPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listMonitorConfigPolicies(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/monitor/policy";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.MonitorsApi.listMonitorConfigPolicies")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateMonitorConfigPolicy(
    policyId: string,
    body: MonitorConfigPolicyEditRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "updateMonitorConfigPolicy");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMonitorConfigPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/monitor/policy/{policy_id}".replace(
      "{policy_id}",
      encodeURIComponent(String(policyId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.MonitorsApi.updateMonitorConfigPolicy")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "MonitorConfigPolicyEditRequest", ""),
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

export class MonitorsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMonitorConfigPolicy(
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
      ) as MonitorConfigPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
        "",
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to deleteMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMonitorConfigPolicy(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
   * @params response Response returned by the server for a request to getMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonitorConfigPolicy(
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
      ) as MonitorConfigPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
        "",
      ) as MonitorConfigPolicyResponse;
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
   * @params response Response returned by the server for a request to listMonitorConfigPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMonitorConfigPolicies(
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyListResponse",
      ) as MonitorConfigPolicyListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MonitorConfigPolicyListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyListResponse",
        "",
      ) as MonitorConfigPolicyListResponse;
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
   * @params response Response returned by the server for a request to updateMonitorConfigPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMonitorConfigPolicy(
    response: ResponseContext,
  ): Promise<MonitorConfigPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
      ) as MonitorConfigPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MonitorConfigPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorConfigPolicyResponse",
        "",
      ) as MonitorConfigPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface MonitorsApiCreateMonitorConfigPolicyRequest {
  /**
   * Create a monitor configuration policy request body.
   * @type MonitorConfigPolicyCreateRequest
   */
  body: MonitorConfigPolicyCreateRequest;
}

export interface MonitorsApiDeleteMonitorConfigPolicyRequest {
  /**
   * ID of the monitor configuration policy.
   * @type string
   */
  policyId: string;
}

export interface MonitorsApiGetMonitorConfigPolicyRequest {
  /**
   * ID of the monitor configuration policy.
   * @type string
   */
  policyId: string;
}

export interface MonitorsApiUpdateMonitorConfigPolicyRequest {
  /**
   * ID of the monitor configuration policy.
   * @type string
   */
  policyId: string;
  /**
   * Description of the update.
   * @type MonitorConfigPolicyEditRequest
   */
  body: MonitorConfigPolicyEditRequest;
}

export class MonitorsApi {
  private requestFactory: MonitorsApiRequestFactory;
  private responseProcessor: MonitorsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: MonitorsApiRequestFactory,
    responseProcessor?: MonitorsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new MonitorsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new MonitorsApiResponseProcessor();
  }

  /**
   * Create a monitor configuration policy.
   * @param param The request object
   */
  public createMonitorConfigPolicy(
    param: MonitorsApiCreateMonitorConfigPolicyRequest,
    options?: Configuration,
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.createMonitorConfigPolicy(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitorConfigPolicy(responseContext);
        });
    });
  }

  /**
   * Delete a monitor configuration policy.
   * @param param The request object
   */
  public deleteMonitorConfigPolicy(
    param: MonitorsApiDeleteMonitorConfigPolicyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMonitorConfigPolicy(
      param.policyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitorConfigPolicy(responseContext);
        });
    });
  }

  /**
   * Get a monitor configuration policy by `policy_id`.
   * @param param The request object
   */
  public getMonitorConfigPolicy(
    param: MonitorsApiGetMonitorConfigPolicyRequest,
    options?: Configuration,
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.getMonitorConfigPolicy(
      param.policyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitorConfigPolicy(responseContext);
        });
    });
  }

  /**
   * Get all monitor configuration policies.
   * @param param The request object
   */
  public listMonitorConfigPolicies(options?: Configuration,
  ): Promise<MonitorConfigPolicyListResponse> {
    const requestContextPromise = this.requestFactory.listMonitorConfigPolicies(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitorConfigPolicies(responseContext);
        });
    });
  }

  /**
   * Edit a monitor configuration policy.
   * @param param The request object
   */
  public updateMonitorConfigPolicy(
    param: MonitorsApiUpdateMonitorConfigPolicyRequest,
    options?: Configuration,
  ): Promise<MonitorConfigPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateMonitorConfigPolicy(
      param.policyId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitorConfigPolicy(responseContext);
        });
    });
  }
}
