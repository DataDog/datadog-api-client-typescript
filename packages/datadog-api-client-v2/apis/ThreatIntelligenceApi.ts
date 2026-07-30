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
import { STIXBundleRequest } from "../models/STIXBundleRequest";
import { STIXContentEncoding } from "../models/STIXContentEncoding";
import { STIXIngestResponse } from "../models/STIXIngestResponse";

export class ThreatIntelligenceApiRequestFactory extends BaseAPIRequestFactory {
  public async ingestStixThreatIntel(
    tiVendor: string,
    body: STIXBundleRequest,
    contentEncoding?: STIXContentEncoding,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'ingestStixThreatIntel'");
    if (!_config.unstableOperations["v2.ingestStixThreatIntel"]) {
      throw new Error("Unstable operation 'ingestStixThreatIntel' is disabled");
    }

    // verify required parameter 'tiVendor' is not null or undefined
    if (tiVendor === null || tiVendor === undefined) {
      throw new RequiredError("tiVendor", "ingestStixThreatIntel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "ingestStixThreatIntel");
    }

    // Path Params
    const localVarPath = "/api/v2/security/threat-intel/stix";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ThreatIntelligenceApi.ingestStixThreatIntel")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Header Params
    if (tiVendor !== undefined) {
      requestContext.setHeaderParam(
        "ti_vendor",
        ObjectSerializer.serialize(tiVendor, "string", "")
      );
    }
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        ObjectSerializer.serialize(contentEncoding, "STIXContentEncoding", "")
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "STIXBundleRequest", ""),
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

export class ThreatIntelligenceApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to ingestStixThreatIntel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async ingestStixThreatIntel(
    response: ResponseContext
  ): Promise<STIXIngestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: STIXIngestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "STIXIngestResponse"
      ) as STIXIngestResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 502 ||
      response.httpStatusCode === 503
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
      const body: STIXIngestResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "STIXIngestResponse",
        ""
      ) as STIXIngestResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ThreatIntelligenceApiIngestStixThreatIntelRequest {
  /**
   * Vendor identifier for the feed. The value must not exceed 10 characters. Datadog normalizes the accepted value to lowercase, converts non-alphanumeric characters to underscores, and trims leading and trailing underscores.
   * @type string
   */
  tiVendor: string;
  /**
   * A STIX 2.1 bundle containing indicator objects. The maximum request size is 50 MB. When `Content-Encoding: gzip` is used, the limit applies to the compressed bytes received.
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

  public constructor(
    configuration: Configuration,
    requestFactory?: ThreatIntelligenceApiRequestFactory,
    responseProcessor?: ThreatIntelligenceApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ThreatIntelligenceApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ThreatIntelligenceApiResponseProcessor();
  }

  /**
   * Ingest a STIX 2.1 bundle containing threat intelligence indicators. Only indicator objects are supported. Supported indicator patterns contain IPv4 addresses, IPv6 addresses, domain names, or SHA-256 file hashes.
   *
   * Unsupported objects and patterns increment the `unsupported` counter. Patterns that cannot be parsed increment the `invalid` counter. Processing is best effort, so valid supported indicators in the same bundle are still added.
   *
   * A successful response means ingestion has completed. Reference-table materialization and enrichment happen asynchronously. Requests are limited to 50 MB and 10 requests per second per API key. Gzip-compressed request bodies are supported.
   * @param param The request object
   */
  public ingestStixThreatIntel(
    param: ThreatIntelligenceApiIngestStixThreatIntelRequest,
    options?: Configuration
  ): Promise<STIXIngestResponse> {
    const requestContextPromise = this.requestFactory.ingestStixThreatIntel(
      param.tiVendor,
      param.body,
      param.contentEncoding,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.ingestStixThreatIntel(responseContext);
        });
    });
  }
}
