import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { SlackIntegrationChannel } from "./models/SlackIntegrationChannel";

export class SlackIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createSlackIntegrationChannel(
    accountName: string,
    body: SlackIntegrationChannel,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError("accountName", "createSlackIntegrationChannel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSlackIntegrationChannel");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/slack/configuration/accounts/{account_name}/channels".replace(
        "{account_name}",
        encodeURIComponent(String(accountName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.SlackIntegrationApi.createSlackIntegrationChannel")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SlackIntegrationChannel", ""),
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

  public async getSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError("accountName", "getSlackIntegrationChannel");
    }

    // verify required parameter 'channelName' is not null or undefined
    if (channelName === null || channelName === undefined) {
      throw new RequiredError("channelName", "getSlackIntegrationChannel");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
        .replace("{account_name}", encodeURIComponent(String(accountName)))
        .replace("{channel_name}", encodeURIComponent(String(channelName)));

    // Make Request Context
    const requestContext = _config
      .getServer("v1.SlackIntegrationApi.getSlackIntegrationChannel")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSlackIntegrationChannels(
    accountName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError("accountName", "getSlackIntegrationChannels");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/slack/configuration/accounts/{account_name}/channels".replace(
        "{account_name}",
        encodeURIComponent(String(accountName)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.SlackIntegrationApi.getSlackIntegrationChannels")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async removeSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError("accountName", "removeSlackIntegrationChannel");
    }

    // verify required parameter 'channelName' is not null or undefined
    if (channelName === null || channelName === undefined) {
      throw new RequiredError("channelName", "removeSlackIntegrationChannel");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
        .replace("{account_name}", encodeURIComponent(String(accountName)))
        .replace("{channel_name}", encodeURIComponent(String(channelName)));

    // Make Request Context
    const requestContext = _config
      .getServer("v1.SlackIntegrationApi.removeSlackIntegrationChannel")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    body: SlackIntegrationChannel,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountName' is not null or undefined
    if (accountName === null || accountName === undefined) {
      throw new RequiredError("accountName", "updateSlackIntegrationChannel");
    }

    // verify required parameter 'channelName' is not null or undefined
    if (channelName === null || channelName === undefined) {
      throw new RequiredError("channelName", "updateSlackIntegrationChannel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSlackIntegrationChannel");
    }

    // Path Params
    const localVarPath =
      "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
        .replace("{account_name}", encodeURIComponent(String(accountName)))
        .replace("{channel_name}", encodeURIComponent(String(channelName)));

    // Make Request Context
    const requestContext = _config
      .getServer("v1.SlackIntegrationApi.updateSlackIntegrationChannel")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SlackIntegrationChannel", ""),
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

export class SlackIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSlackIntegrationChannel(
    response: ResponseContext,
  ): Promise<SlackIntegrationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
      ) as SlackIntegrationChannel;
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        "",
      ) as SlackIntegrationChannel;
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
   * @params response Response returned by the server for a request to getSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSlackIntegrationChannel(
    response: ResponseContext,
  ): Promise<SlackIntegrationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
      ) as SlackIntegrationChannel;
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        "",
      ) as SlackIntegrationChannel;
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
   * @params response Response returned by the server for a request to getSlackIntegrationChannels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSlackIntegrationChannels(
    response: ResponseContext,
  ): Promise<Array<SlackIntegrationChannel>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: Array<SlackIntegrationChannel> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<SlackIntegrationChannel>",
      ) as Array<SlackIntegrationChannel>;
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: Array<SlackIntegrationChannel> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<SlackIntegrationChannel>",
        "",
      ) as Array<SlackIntegrationChannel>;
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
   * @params response Response returned by the server for a request to removeSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeSlackIntegrationChannel(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      return;
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
   * @params response Response returned by the server for a request to updateSlackIntegrationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSlackIntegrationChannel(
    response: ResponseContext,
  ): Promise<SlackIntegrationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
      ) as SlackIntegrationChannel;
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
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
      const body: SlackIntegrationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackIntegrationChannel",
        "",
      ) as SlackIntegrationChannel;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SlackIntegrationApiCreateSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * Payload describing Slack channel to be created
   * @type SlackIntegrationChannel
   */
  body: SlackIntegrationChannel;
}

export interface SlackIntegrationApiGetSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * The name of the Slack channel being operated on.
   * @type string
   */
  channelName: string;
}

export interface SlackIntegrationApiGetSlackIntegrationChannelsRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
}

export interface SlackIntegrationApiRemoveSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * The name of the Slack channel being operated on.
   * @type string
   */
  channelName: string;
}

export interface SlackIntegrationApiUpdateSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * The name of the Slack channel being operated on.
   * @type string
   */
  channelName: string;
  /**
   * Payload describing fields and values to be updated.
   * @type SlackIntegrationChannel
   */
  body: SlackIntegrationChannel;
}

export class SlackIntegrationApi {
  private requestFactory: SlackIntegrationApiRequestFactory;
  private responseProcessor: SlackIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: SlackIntegrationApiRequestFactory,
    responseProcessor?: SlackIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new SlackIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SlackIntegrationApiResponseProcessor();
  }

  /**
   * Add a channel to your Datadog-Slack integration.
   * @param param The request object
   */
  public createSlackIntegrationChannel(
    param: SlackIntegrationApiCreateSlackIntegrationChannelRequest,
    options?: Configuration,
  ): Promise<SlackIntegrationChannel> {
    const requestContextPromise =
      this.requestFactory.createSlackIntegrationChannel(
        param.accountName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSlackIntegrationChannel(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a channel configured for your Datadog-Slack integration.
   * @param param The request object
   */
  public getSlackIntegrationChannel(
    param: SlackIntegrationApiGetSlackIntegrationChannelRequest,
    options?: Configuration,
  ): Promise<SlackIntegrationChannel> {
    const requestContextPromise =
      this.requestFactory.getSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSlackIntegrationChannel(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of all channels configured for your Datadog-Slack integration.
   * @param param The request object
   */
  public getSlackIntegrationChannels(
    param: SlackIntegrationApiGetSlackIntegrationChannelsRequest,
    options?: Configuration,
  ): Promise<Array<SlackIntegrationChannel>> {
    const requestContextPromise =
      this.requestFactory.getSlackIntegrationChannels(
        param.accountName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSlackIntegrationChannels(
            responseContext,
          );
        });
    });
  }

  /**
   * Remove a channel from your Datadog-Slack integration.
   * @param param The request object
   */
  public removeSlackIntegrationChannel(
    param: SlackIntegrationApiRemoveSlackIntegrationChannelRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeSlackIntegrationChannel(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a channel used in your Datadog-Slack integration.
   * @param param The request object
   */
  public updateSlackIntegrationChannel(
    param: SlackIntegrationApiUpdateSlackIntegrationChannelRequest,
    options?: Configuration,
  ): Promise<SlackIntegrationChannel> {
    const requestContextPromise =
      this.requestFactory.updateSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSlackIntegrationChannel(
            responseContext,
          );
        });
    });
  }
}
