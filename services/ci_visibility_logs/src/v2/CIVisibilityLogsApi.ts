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
import { CILogContentEncoding } from "./models/CILogContentEncoding";
import { CILogErrors } from "./models/CILogErrors";
import { CILogIntakeErrors } from "./models/CILogIntakeErrors";
import { CILogItem } from "./models/CILogItem";
import { version } from "../version";

export class CIVisibilityLogsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("ci-visibility-logs", version);
    }
  }
  public async submitCILog(
    body: Array<CILogItem>,
    contentEncoding?: CILogContentEncoding,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitCILog");
    }

    // Path Params
    const localVarPath = "/api/v2/cilogs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CIVisibilityLogsApi.v2.submitCILog",
      CIVisibilityLogsApi.operationServers,
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
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        serialize(contentEncoding, TypingInfo, "CILogContentEncoding", ""),
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "Array<CILogItem>", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class CIVisibilityLogsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to submitCILog
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitCILog(response: ResponseContext): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: CILogIntakeErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "CILogIntakeErrors",
        ) as CILogIntakeErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<CILogIntakeErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<CILogIntakeErrors>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: CILogErrors;
      try {
        body = deserialize(bodyText, TypingInfo, "CILogErrors") as CILogErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<CILogErrors>(response.httpStatusCode, bodyText);
      }
      throw new ApiException<CILogErrors>(response.httpStatusCode, body);
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
}

export interface CIVisibilityLogsApiSubmitCILogRequest {
  /**
   * CI job log line or batch in JSON format.
   * @type Array<CILogItem>
   */
  body: Array<CILogItem>;
  /**
   * HTTP header used to compress the JSON request body.
   * @type CILogContentEncoding
   */
  contentEncoding?: CILogContentEncoding;
}

export class CIVisibilityLogsApi {
  private requestFactory: CIVisibilityLogsApiRequestFactory;
  private responseProcessor: CIVisibilityLogsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
    "CIVisibilityLogsApi.v2.submitCILog": [
      new ServerConfiguration<{
        site:
          | "datadoghq.com"
          | "us3.datadoghq.com"
          | "us5.datadoghq.com"
          | "ap1.datadoghq.com"
          | "ap2.datadoghq.com"
          | "uk1.datadoghq.com"
          | "datadoghq.eu";
        subdomain: string;
      }>("https://{subdomain}.{site}", {
        site: "datadoghq.com",
        subdomain: "http-intake.logs",
      }),
      new ServerConfiguration<{
        name: string;
        protocol: string;
      }>("{protocol}://{name}", {
        name: "http-intake.logs.datadoghq.com",
        protocol: "https",
      }),
      new ServerConfiguration<{
        site: string;
        subdomain: string;
      }>("https://{subdomain}.{site}", {
        site: "datadoghq.com",
        subdomain: "http-intake.logs",
      }),
    ],
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: CIVisibilityLogsApiRequestFactory,
    responseProcessor?: CIVisibilityLogsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CIVisibilityLogsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CIVisibilityLogsApiResponseProcessor();
  }

  /**
   * Send log lines for a CI job over HTTP. See the [CI Visibility Pipelines
   * API](https://docs.datadoghq.com/api/latest/ci-visibility-pipelines/send-pipeline-event/) for submitting the
   * associated pipeline and job events.
   *
   * A request can contain one log object or an array of up to 1,000 log objects. The maximum uncompressed request
   * body size is 5.1 MiB.
   *
   * You can stream log lines while a CI job runs or send them after it finishes. After you submit the completed job
   * event, 20 seconds without a new log line marks the job's logs as complete. Lines sent after that may not appear.
   *
   * A job can have up to 128 additional attributes and 256 tags. Additional attributes are top-level fields with
   * string, number, boolean, or null values. Nested objects and arrays are rejected. Additional attributes and
   * `ddtags` apply to all log lines in the job. If an additional attribute has different values on different lines,
   * the first value received is used. Tags supplied on different lines are combined. A job can contain up to
   * 2,000,000 log records or 1 GiB of message bytes in total.
   *
   * To reduce request size, send gzip-compressed JSON with the `Content-Encoding: gzip` header. Retry requests after
   * a 408, 429, 500, or 503 response.
   * @param param The request object
   */
  public submitCILog(
    param: CIVisibilityLogsApiSubmitCILogRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.submitCILog(
      param.body,
      param.contentEncoding,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitCILog(responseContext);
        });
    });
  }
}
