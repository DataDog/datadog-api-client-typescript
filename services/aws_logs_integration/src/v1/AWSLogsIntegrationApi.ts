import {
  ApiException,
  BaseAPIRequestFactory,
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
import { AWSAccountAndLambdaRequest } from "./models/AWSAccountAndLambdaRequest";
import { AWSLogsAsyncResponse } from "./models/AWSLogsAsyncResponse";
import { AWSLogsListResponse } from "./models/AWSLogsListResponse";
import { AWSLogsListServicesResponse } from "./models/AWSLogsListServicesResponse";
import { AWSLogsServicesRequest } from "./models/AWSLogsServicesRequest";
import { version } from "../version";

export class AWSLogsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("aws-logs-integration", version);
    }
  }
  public async checkAWSLogsLambdaAsync(
    body: AWSAccountAndLambdaRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "checkAWSLogsLambdaAsync");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/logs/check_async";

    // Make Request Context
    const requestContext = _config
      .getServer("AWSLogsIntegrationApi.v1.checkAWSLogsLambdaAsync")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "AWSAccountAndLambdaRequest", ""),
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

  public async checkAWSLogsServicesAsync(
    body: AWSLogsServicesRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "checkAWSLogsServicesAsync");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/logs/services_async";

    // Make Request Context
    const requestContext = _config
      .getServer("AWSLogsIntegrationApi.v1.checkAWSLogsServicesAsync")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "AWSLogsServicesRequest", ""),
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

  public async createAWSLambdaARN(
    body: AWSAccountAndLambdaRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSLambdaARN");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/logs";

    // Make Request Context
    const requestContext = _config
      .getServer("AWSLogsIntegrationApi.v1.createAWSLambdaARN")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "AWSAccountAndLambdaRequest", ""),
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

  public async deleteAWSLambdaARN(
    body: AWSAccountAndLambdaRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteAWSLambdaARN");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/logs";

    // Make Request Context
    const requestContext = _config
      .getServer("AWSLogsIntegrationApi.v1.deleteAWSLambdaARN")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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
      serialize(body, TypingInfo, "AWSAccountAndLambdaRequest", ""),
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

  public async enableAWSLogServices(
    body: AWSLogsServicesRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "enableAWSLogServices");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/logs/services";

    // Make Request Context
    const requestContext = _config
      .getServer("AWSLogsIntegrationApi.v1.enableAWSLogServices")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "AWSLogsServicesRequest", ""),
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

  public async listAWSLogsIntegrations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/integration/aws/logs";

    // Make Request Context
    const requestContext = _config
      .getServer("AWSLogsIntegrationApi.v1.listAWSLogsIntegrations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAWSLogsServices(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/integration/aws/logs/services";

    // Make Request Context
    const requestContext = _config
      .getServer("AWSLogsIntegrationApi.v1.listAWSLogsServices")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class AWSLogsIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to checkAWSLogsLambdaAsync
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async checkAWSLogsLambdaAsync(
    response: ResponseContext,
  ): Promise<AWSLogsAsyncResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AWSLogsAsyncResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSLogsAsyncResponse",
      ) as AWSLogsAsyncResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: AWSLogsAsyncResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSLogsAsyncResponse",
        "",
      ) as AWSLogsAsyncResponse;
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
   * @params response Response returned by the server for a request to checkAWSLogsServicesAsync
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async checkAWSLogsServicesAsync(
    response: ResponseContext,
  ): Promise<AWSLogsAsyncResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AWSLogsAsyncResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSLogsAsyncResponse",
      ) as AWSLogsAsyncResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: AWSLogsAsyncResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSLogsAsyncResponse",
        "",
      ) as AWSLogsAsyncResponse;
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
   * @params response Response returned by the server for a request to createAWSLambdaARN
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSLambdaARN(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to deleteAWSLambdaARN
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSLambdaARN(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to enableAWSLogServices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async enableAWSLogServices(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to listAWSLogsIntegrations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSLogsIntegrations(
    response: ResponseContext,
  ): Promise<Array<AWSLogsListResponse>> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Array<AWSLogsListResponse> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<AWSLogsListResponse>",
      ) as Array<AWSLogsListResponse>;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: Array<AWSLogsListResponse> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<AWSLogsListResponse>",
        "",
      ) as Array<AWSLogsListResponse>;
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
   * @params response Response returned by the server for a request to listAWSLogsServices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSLogsServices(
    response: ResponseContext,
  ): Promise<Array<AWSLogsListServicesResponse>> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Array<AWSLogsListServicesResponse> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<AWSLogsListServicesResponse>",
      ) as Array<AWSLogsListServicesResponse>;
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
      const body: Array<AWSLogsListServicesResponse> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<AWSLogsListServicesResponse>",
        "",
      ) as Array<AWSLogsListServicesResponse>;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest {
  /**
   * Check AWS Log Lambda Async request body.
   * @type AWSAccountAndLambdaRequest
   */
  body: AWSAccountAndLambdaRequest;
}

export interface AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest {
  /**
   * Check AWS Logs Async Services request body.
   * @type AWSLogsServicesRequest
   */
  body: AWSLogsServicesRequest;
}

export interface AWSLogsIntegrationApiCreateAWSLambdaARNRequest {
  /**
   * AWS Log Lambda Async request body.
   * @type AWSAccountAndLambdaRequest
   */
  body: AWSAccountAndLambdaRequest;
}

export interface AWSLogsIntegrationApiDeleteAWSLambdaARNRequest {
  /**
   * Delete AWS Lambda ARN request body.
   * @type AWSAccountAndLambdaRequest
   */
  body: AWSAccountAndLambdaRequest;
}

export interface AWSLogsIntegrationApiEnableAWSLogServicesRequest {
  /**
   * Enable AWS Log Services request body.
   * @type AWSLogsServicesRequest
   */
  body: AWSLogsServicesRequest;
}

export class AWSLogsIntegrationApi {
  private requestFactory: AWSLogsIntegrationApiRequestFactory;
  private responseProcessor: AWSLogsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: AWSLogsIntegrationApiRequestFactory,
    responseProcessor?: AWSLogsIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new AWSLogsIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AWSLogsIntegrationApiResponseProcessor();
  }

  /**
   * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input
   * is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this
   * endpoint can be polled intermittently instead of blocking.
   *
   * - Returns a status of 'created' when it's checking if the Lambda exists in the account.
   * - Returns a status of 'waiting' while checking.
   * - Returns a status of 'checked and ok' if the Lambda exists.
   * - Returns a status of 'error' if the Lambda does not exist.
   * @param param The request object
   */
  public checkAWSLogsLambdaAsync(
    param: AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest,
    options?: Configuration,
  ): Promise<AWSLogsAsyncResponse> {
    const requestContextPromise = this.requestFactory.checkAWSLogsLambdaAsync(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkAWSLogsLambdaAsync(
            responseContext,
          );
        });
    });
  }

  /**
   * Test if permissions are present to add log-forwarding triggers for the
   * given services and AWS account. Input is the same as for `EnableAWSLogServices`.
   * Done async, so can be repeatedly polled in a non-blocking fashion until
   * the async request completes.
   *
   * - Returns a status of `created` when it's checking if the permissions exists
   *   in the AWS account.
   * - Returns a status of `waiting` while checking.
   * - Returns a status of `checked and ok` if the Lambda exists.
   * - Returns a status of `error` if the Lambda does not exist.
   * @param param The request object
   */
  public checkAWSLogsServicesAsync(
    param: AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest,
    options?: Configuration,
  ): Promise<AWSLogsAsyncResponse> {
    const requestContextPromise = this.requestFactory.checkAWSLogsServicesAsync(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkAWSLogsServicesAsync(
            responseContext,
          );
        });
    });
  }

  /**
   * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
   * @param param The request object
   */
  public createAWSLambdaARN(
    param: AWSLogsIntegrationApiCreateAWSLambdaARNRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createAWSLambdaARN(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSLambdaARN(responseContext);
        });
    });
  }

  /**
   * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
   * @param param The request object
   */
  public deleteAWSLambdaARN(
    param: AWSLogsIntegrationApiDeleteAWSLambdaARNRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAWSLambdaARN(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSLambdaARN(responseContext);
        });
    });
  }

  /**
   * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
   * @param param The request object
   */
  public enableAWSLogServices(
    param: AWSLogsIntegrationApiEnableAWSLogServicesRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.enableAWSLogServices(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.enableAWSLogServices(responseContext);
        });
    });
  }

  /**
   * List all Datadog-AWS Logs integrations configured in your Datadog account.
   * @param param The request object
   */
  public listAWSLogsIntegrations(
    options?: Configuration,
  ): Promise<Array<AWSLogsListResponse>> {
    const requestContextPromise =
      this.requestFactory.listAWSLogsIntegrations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSLogsIntegrations(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
   * @param param The request object
   */
  public listAWSLogsServices(
    options?: Configuration,
  ): Promise<Array<AWSLogsListServicesResponse>> {
    const requestContextPromise =
      this.requestFactory.listAWSLogsServices(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSLogsServices(responseContext);
        });
    });
  }
}
