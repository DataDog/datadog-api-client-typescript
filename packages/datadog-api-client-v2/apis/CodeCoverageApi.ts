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
import { BranchCoverageSummaryRequest } from "../models/BranchCoverageSummaryRequest";
import { CommitCoverageSummaryRequest } from "../models/CommitCoverageSummaryRequest";
import { CoverageSummaryResponse } from "../models/CoverageSummaryResponse";

export class CodeCoverageApiRequestFactory extends BaseAPIRequestFactory {
  public async getCodeCoverageBranchSummary(
    body: BranchCoverageSummaryRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCodeCoverageBranchSummary'");
    if (!_config.unstableOperations["v2.getCodeCoverageBranchSummary"]) {
      throw new Error(
        "Unstable operation 'getCodeCoverageBranchSummary' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getCodeCoverageBranchSummary");
    }

    // Path Params
    const localVarPath = "/api/v2/code-coverage/branch/summary";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CodeCoverageApi.getCodeCoverageBranchSummary")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "BranchCoverageSummaryRequest", ""),
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

  public async getCodeCoverageCommitSummary(
    body: CommitCoverageSummaryRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCodeCoverageCommitSummary'");
    if (!_config.unstableOperations["v2.getCodeCoverageCommitSummary"]) {
      throw new Error(
        "Unstable operation 'getCodeCoverageCommitSummary' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getCodeCoverageCommitSummary");
    }

    // Path Params
    const localVarPath = "/api/v2/code-coverage/commit/summary";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CodeCoverageApi.getCodeCoverageCommitSummary")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CommitCoverageSummaryRequest", ""),
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

export class CodeCoverageApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCodeCoverageBranchSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCodeCoverageBranchSummary(
    response: ResponseContext
  ): Promise<CoverageSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CoverageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CoverageSummaryResponse"
      ) as CoverageSummaryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: CoverageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CoverageSummaryResponse",
        ""
      ) as CoverageSummaryResponse;
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
   * @params response Response returned by the server for a request to getCodeCoverageCommitSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCodeCoverageCommitSummary(
    response: ResponseContext
  ): Promise<CoverageSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CoverageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CoverageSummaryResponse"
      ) as CoverageSummaryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: CoverageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CoverageSummaryResponse",
        ""
      ) as CoverageSummaryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CodeCoverageApiGetCodeCoverageBranchSummaryRequest {
  /**
   * @type BranchCoverageSummaryRequest
   */
  body: BranchCoverageSummaryRequest;
}

export interface CodeCoverageApiGetCodeCoverageCommitSummaryRequest {
  /**
   * @type CommitCoverageSummaryRequest
   */
  body: CommitCoverageSummaryRequest;
}

export class CodeCoverageApi {
  private requestFactory: CodeCoverageApiRequestFactory;
  private responseProcessor: CodeCoverageApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CodeCoverageApiRequestFactory,
    responseProcessor?: CodeCoverageApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CodeCoverageApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CodeCoverageApiResponseProcessor();
  }

  /**
   * Retrieve aggregated code coverage statistics for a specific branch in a repository.
   * This endpoint provides overall coverage metrics as well as breakdowns by service
   * and code owner.
   *
   * **Note**: This endpoint requires the `code_coverage_read` permission.
   * @param param The request object
   */
  public getCodeCoverageBranchSummary(
    param: CodeCoverageApiGetCodeCoverageBranchSummaryRequest,
    options?: Configuration
  ): Promise<CoverageSummaryResponse> {
    const requestContextPromise =
      this.requestFactory.getCodeCoverageBranchSummary(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCodeCoverageBranchSummary(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve aggregated code coverage statistics for a specific commit in a repository.
   * This endpoint provides overall coverage metrics as well as breakdowns by service
   * and code owner.
   *
   * The commit SHA must be a 40-character hexadecimal string (SHA-1 hash).
   *
   * **Note**: This endpoint requires the `code_coverage_read` permission.
   * @param param The request object
   */
  public getCodeCoverageCommitSummary(
    param: CodeCoverageApiGetCodeCoverageCommitSummaryRequest,
    options?: Configuration
  ): Promise<CoverageSummaryResponse> {
    const requestContextPromise =
      this.requestFactory.getCodeCoverageCommitSummary(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCodeCoverageCommitSummary(
            responseContext
          );
        });
    });
  }
}
