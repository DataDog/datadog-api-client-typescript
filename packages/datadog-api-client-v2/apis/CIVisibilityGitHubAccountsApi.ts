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
import { CIAppGitHubAccountResponse } from "../models/CIAppGitHubAccountResponse";
import { CIAppGitHubAccountsResponse } from "../models/CIAppGitHubAccountsResponse";
import { CIAppGitHubAccountUpdateRequest } from "../models/CIAppGitHubAccountUpdateRequest";

export class CIVisibilityGitHubAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public async listCIAppGitHubAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ci/github/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CIVisibilityGitHubAccountsApi.listCIAppGitHubAccounts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateCIAppGitHubAccount(
    body: CIAppGitHubAccountUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCIAppGitHubAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/ci/github/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CIVisibilityGitHubAccountsApi.updateCIAppGitHubAccount")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CIAppGitHubAccountUpdateRequest", ""),
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

export class CIVisibilityGitHubAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCIAppGitHubAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCIAppGitHubAccounts(
    response: ResponseContext
  ): Promise<CIAppGitHubAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CIAppGitHubAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppGitHubAccountsResponse"
      ) as CIAppGitHubAccountsResponse;
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CIAppGitHubAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppGitHubAccountsResponse",
        ""
      ) as CIAppGitHubAccountsResponse;
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
   * @params response Response returned by the server for a request to updateCIAppGitHubAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCIAppGitHubAccount(
    response: ResponseContext
  ): Promise<CIAppGitHubAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CIAppGitHubAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppGitHubAccountResponse"
      ) as CIAppGitHubAccountResponse;
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
      const body: CIAppGitHubAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CIAppGitHubAccountResponse",
        ""
      ) as CIAppGitHubAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CIVisibilityGitHubAccountsApiUpdateCIAppGitHubAccountRequest {
  /**
   * @type CIAppGitHubAccountUpdateRequest
   */
  body: CIAppGitHubAccountUpdateRequest;
}

export class CIVisibilityGitHubAccountsApi {
  private requestFactory: CIVisibilityGitHubAccountsApiRequestFactory;
  private responseProcessor: CIVisibilityGitHubAccountsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CIVisibilityGitHubAccountsApiRequestFactory,
    responseProcessor?: CIVisibilityGitHubAccountsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new CIVisibilityGitHubAccountsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CIVisibilityGitHubAccountsApiResponseProcessor();
  }

  /**
   * Retrieve the list of GitHub accounts (organizations or users) available to this Datadog organization
   * through its GitHub App installation, along with each account's and repository's CI Visibility opt-in status.
   * @param param The request object
   */
  public listCIAppGitHubAccounts(
    options?: Configuration
  ): Promise<CIAppGitHubAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listCIAppGitHubAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCIAppGitHubAccounts(
            responseContext
          );
        });
    });
  }

  /**
   * Enable or disable CI Visibility for a GitHub account, one of its repositories, or both in the same request.
   * The account (and, optionally, repository) are identified by name. Account-level and repository-level
   * changes are independent and may both be supplied in the same request. At least one of `enabled` or
   * `repository.enabled` must be provided. If the account name matches installations on more than one host,
   * `host` must be supplied to disambiguate, otherwise a 409 is returned. Returns a 404 if the CI Visibility
   * GitHub integration is not enabled for this organization, or if the given account or repository cannot be
   * found by name.
   * @param param The request object
   */
  public updateCIAppGitHubAccount(
    param: CIVisibilityGitHubAccountsApiUpdateCIAppGitHubAccountRequest,
    options?: Configuration
  ): Promise<CIAppGitHubAccountResponse> {
    const requestContextPromise = this.requestFactory.updateCIAppGitHubAccount(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCIAppGitHubAccount(
            responseContext
          );
        });
    });
  }
}
