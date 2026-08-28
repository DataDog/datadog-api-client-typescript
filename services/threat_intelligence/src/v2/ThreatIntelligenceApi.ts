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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { STIXBundleRequest } from "./models/STIXBundleRequest";
import { STIXContentEncoding } from "./models/STIXContentEncoding";
import { STIXIngestResponse } from "./models/STIXIngestResponse";
import { version } from "../version";

export class ThreatIntelligenceApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("threat-intelligence", version);
    }
  }
  public async addSTIXThreatIntel(
    tiVendor: string,
    body: STIXBundleRequest,
    contentEncoding?: STIXContentEncoding,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ThreatIntelligenceApi.v2.addSTIXThreatIntel"]
    ) {
      throw new Error(
        "Unstable operation 'addSTIXThreatIntel' is disabled. Enable it by setting `configuration.unstableOperations['ThreatIntelligenceApi.v2.addSTIXThreatIntel'] = true`",
      );
    }

    // verify required parameter 'tiVendor' is not null or undefined
    if (tiVendor === null || tiVendor === undefined) {
      throw new RequiredError("tiVendor", "addSTIXThreatIntel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "addSTIXThreatIntel");
    }

    // Path Params
    const localVarPath = "/api/v2/security/threat-intel/stix";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ThreatIntelligenceApi.v2.addSTIXThreatIntel",
      ThreatIntelligenceApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Header Params
    if (tiVendor !== undefined) {
      requestContext.setHeaderParam(
        "ti_vendor",
        serialize(tiVendor, TypingInfo, "string", ""),
      );
    }
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        serialize(contentEncoding, TypingInfo, "STIXContentEncoding", ""),
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "STIXBundleRequest", ""),
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

export class ThreatIntelligenceApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addSTIXThreatIntel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addSTIXThreatIntel(
    response: ResponseContext,
  ): Promise<STIXIngestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: STIXIngestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "STIXIngestResponse",
      ) as STIXIngestResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 502 ||
      response.httpStatusCode === 503
    ) {
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
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
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
      const body: STIXIngestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "STIXIngestResponse",
        "",
      ) as STIXIngestResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ThreatIntelligenceApiAddSTIXThreatIntelRequest {
  /**
   * Vendor identifier for the feed. The value must not exceed 10 characters. Datadog normalizes the accepted value to lowercase, converts non-alphanumeric characters to underscores, and trims leading and trailing underscores.
   * @type string
   */
  tiVendor: string;
  /**
   * A STIX 2.1 bundle containing indicator objects. The request body must not exceed 50 MB as received or 100 MB after decompression.
   * @type STIXBundleRequest
   */
  body: STIXBundleRequest;
  /**
   * Content encoding for the request body. Use gzip for a compressed STIX bundle.
   * @type STIXContentEncoding
   */
  contentEncoding?: STIXContentEncoding;
}

export class ThreatIntelligenceApi {
  private requestFactory: ThreatIntelligenceApiRequestFactory;
  private responseProcessor: ThreatIntelligenceApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ThreatIntelligenceApiRequestFactory,
    responseProcessor?: ThreatIntelligenceApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ThreatIntelligenceApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ThreatIntelligenceApiResponseProcessor();
  }

  /**
   * Ingest a STIX 2.1 bundle containing threat intelligence indicators. Only indicator objects are processed. Supported indicator patterns contain IPv4 addresses, IPv6 addresses, domain names, or SHA-256 file hashes.
   *
   * Non-indicator objects are ignored and are not included in the response counters. Indicator objects with unsupported STIX versions or patterns that produce no supported observable values increment the `unsupported` counter. Patterns that cannot be parsed increment the `invalid` counter. Processing is best effort, so valid supported indicators in the same bundle are still added.
   *
   * A successful response means ingestion has completed. Reference-table materialization and enrichment happen asynchronously. Requests are limited to 50 MB as received, 100 MB after decompression, and 10 requests per second per API key. Gzip-compressed request bodies are supported.
   * @param param The request object
   */
  public addSTIXThreatIntel(
    param: ThreatIntelligenceApiAddSTIXThreatIntelRequest,
    options?: Configuration,
  ): Promise<STIXIngestResponse> {
    const requestContextPromise = this.requestFactory.addSTIXThreatIntel(
      param.tiVendor,
      param.body,
      param.contentEncoding,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addSTIXThreatIntel(responseContext);
        });
    });
  }
}
