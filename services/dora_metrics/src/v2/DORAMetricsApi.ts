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
import { DORADeploymentRequest } from "./models/DORADeploymentRequest";
import { DORADeploymentResponse } from "./models/DORADeploymentResponse";
import { DORAFailureRequest } from "./models/DORAFailureRequest";
import { DORAFailureResponse } from "./models/DORAFailureResponse";
import { DORAFetchResponse } from "./models/DORAFetchResponse";
import { DORAListDeploymentsRequest } from "./models/DORAListDeploymentsRequest";
import { DORAListFailuresRequest } from "./models/DORAListFailuresRequest";
import { DORAListResponse } from "./models/DORAListResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class DORAMetricsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("dora-metrics", version);
    }
  }
  public async createDORADeployment(
    body: DORADeploymentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDORADeployment");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/deployment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DORAMetricsApi.v2.createDORADeployment",
      DORAMetricsApi.operationServers,
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
      serialize(body, TypingInfo, "DORADeploymentRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async createDORAFailure(
    body: DORAFailureRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDORAFailure");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/failure";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DORAMetricsApi.v2.createDORAFailure",
      DORAMetricsApi.operationServers,
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
      serialize(body, TypingInfo, "DORAFailureRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async createDORAIncident(
    body: DORAFailureRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDORAIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/incident";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DORAMetricsApi.v2.createDORAIncident",
      DORAMetricsApi.operationServers,
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
      serialize(body, TypingInfo, "DORAFailureRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async getDORADeployment(
    deploymentId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "getDORADeployment");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/deployments/{deployment_id}".replace(
      "{deployment_id}",
      encodeURIComponent(String(deploymentId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DORAMetricsApi.v2.getDORADeployment",
      DORAMetricsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "appKeyAuth",
      "apiKeyAuth",
    ]);

    return requestContext;
  }

  public async getDORAFailure(
    failureId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'failureId' is not null or undefined
    if (failureId === null || failureId === undefined) {
      throw new RequiredError("failureId", "getDORAFailure");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/failures/{failure_id}".replace(
      "{failure_id}",
      encodeURIComponent(String(failureId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DORAMetricsApi.v2.getDORAFailure",
      DORAMetricsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "appKeyAuth",
      "apiKeyAuth",
    ]);

    return requestContext;
  }

  public async listDORADeployments(
    body: DORAListDeploymentsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "listDORADeployments");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/deployments";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DORAMetricsApi.v2.listDORADeployments",
      DORAMetricsApi.operationServers,
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
      serialize(body, TypingInfo, "DORAListDeploymentsRequest", ""),
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

  public async listDORAFailures(
    body: DORAListFailuresRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "listDORAFailures");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/failures";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DORAMetricsApi.v2.listDORAFailures",
      DORAMetricsApi.operationServers,
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
      serialize(body, TypingInfo, "DORAListFailuresRequest", ""),
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

export class DORAMetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDORADeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDORADeployment(
    response: ResponseContext,
  ): Promise<DORADeploymentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
      const body: DORADeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORADeploymentResponse",
      ) as DORADeploymentResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: DORADeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORADeploymentResponse",
        "",
      ) as DORADeploymentResponse;
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
   * @params response Response returned by the server for a request to createDORAFailure
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDORAFailure(
    response: ResponseContext,
  ): Promise<DORAFailureResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
      const body: DORAFailureResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFailureResponse",
      ) as DORAFailureResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: DORAFailureResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFailureResponse",
        "",
      ) as DORAFailureResponse;
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
   * @params response Response returned by the server for a request to createDORAIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDORAIncident(
    response: ResponseContext,
  ): Promise<DORAFailureResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
      const body: DORAFailureResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFailureResponse",
      ) as DORAFailureResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: DORAFailureResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFailureResponse",
        "",
      ) as DORAFailureResponse;
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
   * @params response Response returned by the server for a request to getDORADeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDORADeployment(
    response: ResponseContext,
  ): Promise<DORAFetchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DORAFetchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFetchResponse",
      ) as DORAFetchResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: DORAFetchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFetchResponse",
        "",
      ) as DORAFetchResponse;
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
   * @params response Response returned by the server for a request to getDORAFailure
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDORAFailure(
    response: ResponseContext,
  ): Promise<DORAFetchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DORAFetchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFetchResponse",
      ) as DORAFetchResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: DORAFetchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAFetchResponse",
        "",
      ) as DORAFetchResponse;
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
   * @params response Response returned by the server for a request to listDORADeployments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDORADeployments(
    response: ResponseContext,
  ): Promise<DORAListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DORAListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAListResponse",
      ) as DORAListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: DORAListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAListResponse",
        "",
      ) as DORAListResponse;
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
   * @params response Response returned by the server for a request to listDORAFailures
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDORAFailures(
    response: ResponseContext,
  ): Promise<DORAListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DORAListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAListResponse",
      ) as DORAListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: DORAListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAListResponse",
        "",
      ) as DORAListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DORAMetricsApiCreateDORADeploymentRequest {
  /**
   * @type DORADeploymentRequest
   */
  body: DORADeploymentRequest;
}

export interface DORAMetricsApiCreateDORAFailureRequest {
  /**
   * @type DORAFailureRequest
   */
  body: DORAFailureRequest;
}

export interface DORAMetricsApiCreateDORAIncidentRequest {
  /**
   * @type DORAFailureRequest
   */
  body: DORAFailureRequest;
}

export interface DORAMetricsApiGetDORADeploymentRequest {
  /**
   * The ID of the deployment event.
   * @type string
   */
  deploymentId: string;
}

export interface DORAMetricsApiGetDORAFailureRequest {
  /**
   * The ID of the failure event.
   * @type string
   */
  failureId: string;
}

export interface DORAMetricsApiListDORADeploymentsRequest {
  /**
   * @type DORAListDeploymentsRequest
   */
  body: DORAListDeploymentsRequest;
}

export interface DORAMetricsApiListDORAFailuresRequest {
  /**
   * @type DORAListFailuresRequest
   */
  body: DORAListFailuresRequest;
}

export class DORAMetricsApi {
  private requestFactory: DORAMetricsApiRequestFactory;
  private responseProcessor: DORAMetricsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DORAMetricsApiRequestFactory,
    responseProcessor?: DORAMetricsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new DORAMetricsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DORAMetricsApiResponseProcessor();
  }

  /**
   * Use this API endpoint to provide data about deployments for DORA metrics.
   *
   * This is necessary for:
   * - Deployment Frequency
   * - Change Lead Time
   * - Change Failure Rate
   * @param param The request object
   */
  public createDORADeployment(
    param: DORAMetricsApiCreateDORADeploymentRequest,
    options?: Configuration,
  ): Promise<DORADeploymentResponse> {
    const requestContextPromise = this.requestFactory.createDORADeployment(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDORADeployment(responseContext);
        });
    });
  }

  /**
   * Use this API endpoint to provide failure data for DORA metrics.
   *
   * This is necessary for:
   * - Change Failure Rate
   * - Time to Restore
   * @param param The request object
   */
  public createDORAFailure(
    param: DORAMetricsApiCreateDORAFailureRequest,
    options?: Configuration,
  ): Promise<DORAFailureResponse> {
    const requestContextPromise = this.requestFactory.createDORAFailure(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDORAFailure(responseContext);
        });
    });
  }

  /**
   * **Note**: This endpoint is deprecated. Please use `/api/v2/dora/failure` instead.
   *
   * Use this API endpoint to provide failure data for DORA metrics.
   *
   * This is necessary for:
   * - Change Failure Rate
   * - Time to Restore
   * @param param The request object
   */
  public createDORAIncident(
    param: DORAMetricsApiCreateDORAIncidentRequest,
    options?: Configuration,
  ): Promise<DORAFailureResponse> {
    const requestContextPromise = this.requestFactory.createDORAIncident(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDORAIncident(responseContext);
        });
    });
  }

  /**
   * Use this API endpoint to get a deployment event.
   * @param param The request object
   */
  public getDORADeployment(
    param: DORAMetricsApiGetDORADeploymentRequest,
    options?: Configuration,
  ): Promise<DORAFetchResponse> {
    const requestContextPromise = this.requestFactory.getDORADeployment(
      param.deploymentId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDORADeployment(responseContext);
        });
    });
  }

  /**
   * Use this API endpoint to get a failure event.
   * @param param The request object
   */
  public getDORAFailure(
    param: DORAMetricsApiGetDORAFailureRequest,
    options?: Configuration,
  ): Promise<DORAFetchResponse> {
    const requestContextPromise = this.requestFactory.getDORAFailure(
      param.failureId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDORAFailure(responseContext);
        });
    });
  }

  /**
   * Use this API endpoint to get a list of deployment events.
   * @param param The request object
   */
  public listDORADeployments(
    param: DORAMetricsApiListDORADeploymentsRequest,
    options?: Configuration,
  ): Promise<DORAListResponse> {
    const requestContextPromise = this.requestFactory.listDORADeployments(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDORADeployments(responseContext);
        });
    });
  }

  /**
   * Use this API endpoint to get a list of failure events.
   * @param param The request object
   */
  public listDORAFailures(
    param: DORAMetricsApiListDORAFailuresRequest,
    options?: Configuration,
  ): Promise<DORAListResponse> {
    const requestContextPromise = this.requestFactory.listDORAFailures(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDORAFailures(responseContext);
        });
    });
  }
}
