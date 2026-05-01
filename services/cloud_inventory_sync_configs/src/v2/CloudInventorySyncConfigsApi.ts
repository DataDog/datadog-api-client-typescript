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
import { CloudInventorySyncConfigResponse } from "./models/CloudInventorySyncConfigResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { UpsertCloudInventorySyncConfigRequest } from "./models/UpsertCloudInventorySyncConfigRequest";
import { version } from "../version";

export class CloudInventorySyncConfigsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-inventory-sync-configs", version);
    }
  }
  public async upsertSyncConfig(
    body: UpsertCloudInventorySyncConfigRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudInventorySyncConfigsApi.v2.upsertSyncConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'upsertSyncConfig' is disabled. Enable it by setting `configuration.unstableOperations['CloudInventorySyncConfigsApi.v2.upsertSyncConfig'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertSyncConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cloudinventoryservice/syncconfigs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudInventorySyncConfigsApi.v2.upsertSyncConfig",
      CloudInventorySyncConfigsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "UpsertCloudInventorySyncConfigRequest", ""),
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

export class CloudInventorySyncConfigsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to upsertSyncConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertSyncConfig(
    response: ResponseContext,
  ): Promise<CloudInventorySyncConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CloudInventorySyncConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CloudInventorySyncConfigResponse",
      ) as CloudInventorySyncConfigResponse;
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
      const body: CloudInventorySyncConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CloudInventorySyncConfigResponse",
        "",
      ) as CloudInventorySyncConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CloudInventorySyncConfigsApiUpsertSyncConfigRequest {
  /**
   * @type UpsertCloudInventorySyncConfigRequest
   */
  body: UpsertCloudInventorySyncConfigRequest;
}

export class CloudInventorySyncConfigsApi {
  private requestFactory: CloudInventorySyncConfigsApiRequestFactory;
  private responseProcessor: CloudInventorySyncConfigsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CloudInventorySyncConfigsApiRequestFactory,
    responseProcessor?: CloudInventorySyncConfigsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CloudInventorySyncConfigsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CloudInventorySyncConfigsApiResponseProcessor();
  }

  /**
   * Create or update a cloud inventory sync configuration. Specify the cloud provider in `data.id`
   * and provider-specific settings under `data.attributes`. This endpoint uses an upsert model.
   * @param param The request object
   */
  public upsertSyncConfig(
    param: CloudInventorySyncConfigsApiUpsertSyncConfigRequest,
    options?: Configuration,
  ): Promise<CloudInventorySyncConfigResponse> {
    const requestContextPromise = this.requestFactory.upsertSyncConfig(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertSyncConfig(responseContext);
        });
    });
  }
}
