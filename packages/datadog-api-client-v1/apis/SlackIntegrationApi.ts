// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { SlackIntegrationChannel } from "../models/SlackIntegrationChannel";

/**
 * no description
 */
export class SlackIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Add a channel to your Datadog-Slack integration.
   * Create a Slack integration channel
   * @param accountName Your Slack account name.
   * @param body Payload describing Slack channel to be created
   */
  public async createSlackIntegrationChannel(
    accountName: string,
    body: SlackIntegrationChannel,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError(
        "Required parameter accountName was null or undefined when calling createSlackIntegrationChannel."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createSlackIntegrationChannel."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels".replace(
      "{" + "account_name" + "}",
      encodeURIComponent(String(accountName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SlackIntegrationApi.createSlackIntegrationChannel"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SlackIntegrationChannel", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get a channel configured for your Datadog-Slack integration.
   * Get a Slack integration channel
   * @param accountName Your Slack account name.
   * @param channelName The name of the Slack channel being operated on.
   */
  public async getSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError(
        "Required parameter accountName was null or undefined when calling getSlackIntegrationChannel."
      );
    }

    // verify required parameter 'channelName' is not null or undefined
    if (channelName === null || channelName === undefined) {
      throw new RequiredError(
        "Required parameter channelName was null or undefined when calling getSlackIntegrationChannel."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
      .replace(
        "{" + "account_name" + "}",
        encodeURIComponent(String(accountName))
      )
      .replace(
        "{" + "channel_name" + "}",
        encodeURIComponent(String(channelName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SlackIntegrationApi.getSlackIntegrationChannel"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get a list of all channels configured for your Datadog-Slack integration.
   * Get all channels in a Slack integration
   * @param accountName Your Slack account name.
   */
  public async getSlackIntegrationChannels(
    accountName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError(
        "Required parameter accountName was null or undefined when calling getSlackIntegrationChannels."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels".replace(
      "{" + "account_name" + "}",
      encodeURIComponent(String(accountName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SlackIntegrationApi.getSlackIntegrationChannels"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Remove a channel from your Datadog-Slack integration.
   * Remove a Slack integration channel
   * @param accountName Your Slack account name.
   * @param channelName The name of the Slack channel being operated on.
   */
  public async removeSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError(
        "Required parameter accountName was null or undefined when calling removeSlackIntegrationChannel."
      );
    }

    // verify required parameter 'channelName' is not null or undefined
    if (channelName === null || channelName === undefined) {
      throw new RequiredError(
        "Required parameter channelName was null or undefined when calling removeSlackIntegrationChannel."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
      .replace(
        "{" + "account_name" + "}",
        encodeURIComponent(String(accountName))
      )
      .replace(
        "{" + "channel_name" + "}",
        encodeURIComponent(String(channelName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SlackIntegrationApi.removeSlackIntegrationChannel"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Update a channel used in your Datadog-Slack integration.
   * Update a Slack integration channel
   * @param accountName Your Slack account name.
   * @param channelName The name of the Slack channel being operated on.
   * @param body Payload describing fields and values to be updated.
   */
  public async updateSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    body: SlackIntegrationChannel,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError(
        "Required parameter accountName was null or undefined when calling updateSlackIntegrationChannel."
      );
    }

    // verify required parameter 'channelName' is not null or undefined
    if (channelName === null || channelName === undefined) {
      throw new RequiredError(
        "Required parameter channelName was null or undefined when calling updateSlackIntegrationChannel."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateSlackIntegrationChannel."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
      .replace(
        "{" + "account_name" + "}",
        encodeURIComponent(String(accountName))
      )
      .replace(
        "{" + "channel_name" + "}",
        encodeURIComponent(String(channelName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SlackIntegrationApi.updateSlackIntegrationChannel"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SlackIntegrationChannel", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class SlackIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSlackIntegrationChannel(
    response: ResponseContext
  ): Promise<SlackIntegrationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        ""
      ) as SlackIntegrationChannel;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        ""
      ) as SlackIntegrationChannel;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSlackIntegrationChannel(
    response: ResponseContext
  ): Promise<SlackIntegrationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        ""
      ) as SlackIntegrationChannel;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        ""
      ) as SlackIntegrationChannel;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSlackIntegrationChannels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSlackIntegrationChannels(
    response: ResponseContext
  ): Promise<Array<SlackIntegrationChannel>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<SlackIntegrationChannel> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<SlackIntegrationChannel>",
        ""
      ) as Array<SlackIntegrationChannel>;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<SlackIntegrationChannel> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<SlackIntegrationChannel>",
        ""
      ) as Array<SlackIntegrationChannel>;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to removeSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeSlackIntegrationChannel(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSlackIntegrationChannel(
    response: ResponseContext
  ): Promise<SlackIntegrationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        ""
      ) as SlackIntegrationChannel;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        ""
      ) as SlackIntegrationChannel;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
