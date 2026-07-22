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
import { GetDataObservabilityMonitorRunStatusResponse } from "./models/GetDataObservabilityMonitorRunStatusResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { RunDataObservabilityMonitorResponse } from "./models/RunDataObservabilityMonitorResponse";
import { version } from "../version";

export class DataObservabilityApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("data-observability", version);
    }
  }
  public async getDataObservabilityMonitorRunStatus(
    runId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["DataObservabilityApi.v2.getDataObservabilityMonitorRunStatus"]) {
      throw new Error("Unstable operation 'getDataObservabilityMonitorRunStatus' is disabled. Enable it by setting `configuration.unstableOperations['DataObservabilityApi.v2.getDataObservabilityMonitorRunStatus'] = true`");
    }

    // verify required parameter 'runId' is not null or undefined
    if (runId === null || runId === undefined) {
      throw new RequiredError("runId", "getDataObservabilityMonitorRunStatus");
    }

    // Path Params
    const localVarPath = "/api/v2/data-observability/monitors/runs/{run_id}/status".replace(
      "{run_id}",
      encodeURIComponent(String(runId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("DataObservabilityApi.v2.getDataObservabilityMonitorRunStatus", DataObservabilityApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async runDataObservabilityMonitor(
    monitorId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["DataObservabilityApi.v2.runDataObservabilityMonitor"]) {
      throw new Error("Unstable operation 'runDataObservabilityMonitor' is disabled. Enable it by setting `configuration.unstableOperations['DataObservabilityApi.v2.runDataObservabilityMonitor'] = true`");
    }

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "runDataObservabilityMonitor");
    }

    // Path Params
    const localVarPath = "/api/v2/data-observability/monitors/{monitor_id}/run".replace(
      "{monitor_id}",
      encodeURIComponent(String(monitorId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("DataObservabilityApi.v2.runDataObservabilityMonitor", DataObservabilityApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.POST, overrides);
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
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class DataObservabilityApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDataObservabilityMonitorRunStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDataObservabilityMonitorRunStatus(
    response: ResponseContext,
  ): Promise<GetDataObservabilityMonitorRunStatusResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: GetDataObservabilityMonitorRunStatusResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetDataObservabilityMonitorRunStatusResponse",
      ) as GetDataObservabilityMonitorRunStatusResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
    if (response.httpStatusCode === 429) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetDataObservabilityMonitorRunStatusResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetDataObservabilityMonitorRunStatusResponse",
        "",
      ) as GetDataObservabilityMonitorRunStatusResponse;
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
   * @params response Response returned by the server for a request to runDataObservabilityMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async runDataObservabilityMonitor(
    response: ResponseContext,
  ): Promise<RunDataObservabilityMonitorResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: RunDataObservabilityMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RunDataObservabilityMonitorResponse",
      ) as RunDataObservabilityMonitorResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
    if (response.httpStatusCode === 429) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RunDataObservabilityMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RunDataObservabilityMonitorResponse",
        "",
      ) as RunDataObservabilityMonitorResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DataObservabilityApiGetDataObservabilityMonitorRunStatusRequest {
  /**
   * The ID of the monitor run to retrieve status for.
   * @type string
   */
  runId: string;
}

export interface DataObservabilityApiRunDataObservabilityMonitorRequest {
  /**
   * The ID of the data observability monitor to run.
   * @type number
   */
  monitorId: number;
}

export class DataObservabilityApi {
  private requestFactory: DataObservabilityApiRequestFactory;
  private responseProcessor: DataObservabilityApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: DataObservabilityApiRequestFactory,
    responseProcessor?: DataObservabilityApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new DataObservabilityApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DataObservabilityApiResponseProcessor();
  }

  /**
   * Retrieves the current status of a data observability monitor run. Poll this endpoint after triggering a run to determine when evaluation is complete.
   * @param param The request object
   */
  public getDataObservabilityMonitorRunStatus(
    param: DataObservabilityApiGetDataObservabilityMonitorRunStatusRequest,
    options?: Configuration,
  ): Promise<GetDataObservabilityMonitorRunStatusResponse> {
    const requestContextPromise = this.requestFactory.getDataObservabilityMonitorRunStatus(
      param.runId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDataObservabilityMonitorRunStatus(responseContext);
        });
    });
  }

  /**
   * Manually triggers a run for a data observability monitor. Only monitors that are not scheduled (manually-runnable) can be triggered this way.
   * @param param The request object
   */
  public runDataObservabilityMonitor(
    param: DataObservabilityApiRunDataObservabilityMonitorRequest,
    options?: Configuration,
  ): Promise<RunDataObservabilityMonitorResponse> {
    const requestContextPromise = this.requestFactory.runDataObservabilityMonitor(
      param.monitorId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.runDataObservabilityMonitor(responseContext);
        });
    });
  }
}
