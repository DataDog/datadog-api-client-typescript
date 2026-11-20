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
import { Playlist } from "./models/Playlist";
import { PlaylistArray } from "./models/PlaylistArray";
import { PlaylistsSession } from "./models/PlaylistsSession";
import { PlaylistsSessionArray } from "./models/PlaylistsSessionArray";
import { SessionIdArray } from "./models/SessionIdArray";
import { version } from "../version";

export class RUMReplayPlaylistsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-replay-playlists", version);
    }
  }
  public async addRUMReplaySessionToPlaylist(
    ts: number,
    playlistId: number,
    sessionId: string,
    dataSource?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ts' is not null or undefined
    if (ts === null || ts === undefined) {
      throw new RequiredError("ts", "addRUMReplaySessionToPlaylist");
    }

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "addRUMReplaySessionToPlaylist");
    }

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "addRUMReplaySessionToPlaylist");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}"
        .replace("{playlist_id}", encodeURIComponent(String(playlistId)))
        .replace("{session_id}", encodeURIComponent(String(sessionId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.addRUMReplaySessionToPlaylist",
      RUMReplayPlaylistsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (dataSource !== undefined) {
      requestContext.setQueryParam(
        "data_source",
        serialize(dataSource, TypingInfo, "string", ""),
        "",
      );
    }
    if (ts !== undefined) {
      requestContext.setQueryParam(
        "ts",
        serialize(ts, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async bulkRemoveRUMReplayPlaylistSessions(
    playlistId: number,
    body: SessionIdArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError(
        "playlistId",
        "bulkRemoveRUMReplayPlaylistSessions",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkRemoveRUMReplayPlaylistSessions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions".replace(
        "{playlist_id}",
        encodeURIComponent(String(playlistId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.bulkRemoveRUMReplayPlaylistSessions",
      RUMReplayPlaylistsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SessionIdArray", ""),
      contentType,
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

  public async createRUMReplayPlaylist(
    body: Playlist,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.createRUMReplayPlaylist",
      RUMReplayPlaylistsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "Playlist", ""),
      contentType,
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

  public async deleteRUMReplayPlaylist(
    playlistId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "deleteRUMReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.deleteRUMReplayPlaylist",
      RUMReplayPlaylistsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getRUMReplayPlaylist(
    playlistId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "getRUMReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.getRUMReplayPlaylist",
      RUMReplayPlaylistsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listRUMReplayPlaylists(
    filterCreatedByUuid?: string,
    filterQuery?: string,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.listRUMReplayPlaylists",
      RUMReplayPlaylistsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
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

    // Query Params
    if (filterCreatedByUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[created_by_uuid]",
        serialize(filterCreatedByUuid, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listRUMReplayPlaylistSessions(
    playlistId: number,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "listRUMReplayPlaylistSessions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions".replace(
        "{playlist_id}",
        encodeURIComponent(String(playlistId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.listRUMReplayPlaylistSessions",
      RUMReplayPlaylistsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
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

    // Query Params
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async removeRUMReplaySessionFromPlaylist(
    playlistId: number,
    sessionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError(
        "playlistId",
        "removeRUMReplaySessionFromPlaylist",
      );
    }

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError(
        "sessionId",
        "removeRUMReplaySessionFromPlaylist",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}"
        .replace("{playlist_id}", encodeURIComponent(String(playlistId)))
        .replace("{session_id}", encodeURIComponent(String(sessionId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.removeRUMReplaySessionFromPlaylist",
      RUMReplayPlaylistsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateRUMReplayPlaylist(
    playlistId: number,
    body: Playlist,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "updateRUMReplayPlaylist");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMReplayPlaylistsApi.v2.updateRUMReplayPlaylist",
      RUMReplayPlaylistsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "Playlist", ""),
      contentType,
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

export class RUMReplayPlaylistsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addRUMReplaySessionToPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addRUMReplaySessionToPlaylist(
    response: ResponseContext,
  ): Promise<PlaylistsSession> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: PlaylistsSession = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PlaylistsSession",
      ) as PlaylistsSession;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: PlaylistsSession = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PlaylistsSession",
        "",
      ) as PlaylistsSession;
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
   * @params response Response returned by the server for a request to bulkRemoveRUMReplayPlaylistSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkRemoveRUMReplayPlaylistSessions(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to createRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMReplayPlaylist(
    response: ResponseContext,
  ): Promise<Playlist> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: Playlist = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Playlist",
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Playlist = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Playlist",
        "",
      ) as Playlist;
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
   * @params response Response returned by the server for a request to deleteRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMReplayPlaylist(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to getRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMReplayPlaylist(
    response: ResponseContext,
  ): Promise<Playlist> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Playlist = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Playlist",
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Playlist = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Playlist",
        "",
      ) as Playlist;
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
   * @params response Response returned by the server for a request to listRUMReplayPlaylists
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplayPlaylists(
    response: ResponseContext,
  ): Promise<PlaylistArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PlaylistArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PlaylistArray",
      ) as PlaylistArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: PlaylistArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PlaylistArray",
        "",
      ) as PlaylistArray;
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
   * @params response Response returned by the server for a request to listRUMReplayPlaylistSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplayPlaylistSessions(
    response: ResponseContext,
  ): Promise<PlaylistsSessionArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PlaylistsSessionArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PlaylistsSessionArray",
      ) as PlaylistsSessionArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: PlaylistsSessionArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PlaylistsSessionArray",
        "",
      ) as PlaylistsSessionArray;
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
   * @params response Response returned by the server for a request to removeRUMReplaySessionFromPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeRUMReplaySessionFromPlaylist(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to updateRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMReplayPlaylist(
    response: ResponseContext,
  ): Promise<Playlist> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Playlist = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Playlist",
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Playlist = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Playlist",
        "",
      ) as Playlist;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMReplayPlaylistsApiAddRUMReplaySessionToPlaylistRequest {
  /**
   * Server-side timestamp in milliseconds.
   * @type number
   */
  ts: number;
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
  /**
   * Data source type. Valid values: 'rum' or 'product_analytics'. Defaults to 'rum'.
   * @type string
   */
  dataSource?: string;
}

export interface RUMReplayPlaylistsApiBulkRemoveRUMReplayPlaylistSessionsRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
  /**
   * @type SessionIdArray
   */
  body: SessionIdArray;
}

export interface RUMReplayPlaylistsApiCreateRUMReplayPlaylistRequest {
  /**
   * @type Playlist
   */
  body: Playlist;
}

export interface RUMReplayPlaylistsApiDeleteRUMReplayPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
}

export interface RUMReplayPlaylistsApiGetRUMReplayPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
}

export interface RUMReplayPlaylistsApiListRUMReplayPlaylistsRequest {
  /**
   * Filter playlists by the UUID of the user who created them.
   * @type string
   */
  filterCreatedByUuid?: string;
  /**
   * Search query to filter playlists by name.
   * @type string
   */
  filterQuery?: string;
  /**
   * Page number for pagination (0-indexed).
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of items per page.
   * @type number
   */
  pageSize?: number;
}

export interface RUMReplayPlaylistsApiListRUMReplayPlaylistSessionsRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
  /**
   * Page number for pagination (0-indexed).
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of items per page.
   * @type number
   */
  pageSize?: number;
}

export interface RUMReplayPlaylistsApiRemoveRUMReplaySessionFromPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
}

export interface RUMReplayPlaylistsApiUpdateRUMReplayPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
  /**
   * @type Playlist
   */
  body: Playlist;
}

export class RUMReplayPlaylistsApi {
  private requestFactory: RUMReplayPlaylistsApiRequestFactory;
  private responseProcessor: RUMReplayPlaylistsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMReplayPlaylistsApiRequestFactory,
    responseProcessor?: RUMReplayPlaylistsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMReplayPlaylistsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMReplayPlaylistsApiResponseProcessor();
  }

  /**
   * Add a session to a playlist.
   * @param param The request object
   */
  public addRUMReplaySessionToPlaylist(
    param: RUMReplayPlaylistsApiAddRUMReplaySessionToPlaylistRequest,
    options?: Configuration,
  ): Promise<PlaylistsSession> {
    const requestContextPromise =
      this.requestFactory.addRUMReplaySessionToPlaylist(
        param.ts,
        param.playlistId,
        param.sessionId,
        param.dataSource,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addRUMReplaySessionToPlaylist(
            responseContext,
          );
        });
    });
  }

  /**
   * Remove sessions from a playlist.
   * @param param The request object
   */
  public bulkRemoveRUMReplayPlaylistSessions(
    param: RUMReplayPlaylistsApiBulkRemoveRUMReplayPlaylistSessionsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.bulkRemoveRUMReplayPlaylistSessions(
        param.playlistId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkRemoveRUMReplayPlaylistSessions(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a playlist.
   * @param param The request object
   */
  public createRUMReplayPlaylist(
    param: RUMReplayPlaylistsApiCreateRUMReplayPlaylistRequest,
    options?: Configuration,
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.createRUMReplayPlaylist(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMReplayPlaylist(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a playlist.
   * @param param The request object
   */
  public deleteRUMReplayPlaylist(
    param: RUMReplayPlaylistsApiDeleteRUMReplayPlaylistRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMReplayPlaylist(
      param.playlistId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMReplayPlaylist(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a playlist.
   * @param param The request object
   */
  public getRUMReplayPlaylist(
    param: RUMReplayPlaylistsApiGetRUMReplayPlaylistRequest,
    options?: Configuration,
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.getRUMReplayPlaylist(
      param.playlistId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMReplayPlaylist(responseContext);
        });
    });
  }

  /**
   * List playlists.
   * @param param The request object
   */
  public listRUMReplayPlaylists(
    param: RUMReplayPlaylistsApiListRUMReplayPlaylistsRequest = {},
    options?: Configuration,
  ): Promise<PlaylistArray> {
    const requestContextPromise = this.requestFactory.listRUMReplayPlaylists(
      param.filterCreatedByUuid,
      param.filterQuery,
      param.pageNumber,
      param.pageSize,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMReplayPlaylists(responseContext);
        });
    });
  }

  /**
   * List sessions in a playlist.
   * @param param The request object
   */
  public listRUMReplayPlaylistSessions(
    param: RUMReplayPlaylistsApiListRUMReplayPlaylistSessionsRequest,
    options?: Configuration,
  ): Promise<PlaylistsSessionArray> {
    const requestContextPromise =
      this.requestFactory.listRUMReplayPlaylistSessions(
        param.playlistId,
        param.pageNumber,
        param.pageSize,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMReplayPlaylistSessions(
            responseContext,
          );
        });
    });
  }

  /**
   * Remove a session from a playlist.
   * @param param The request object
   */
  public removeRUMReplaySessionFromPlaylist(
    param: RUMReplayPlaylistsApiRemoveRUMReplaySessionFromPlaylistRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeRUMReplaySessionFromPlaylist(
        param.playlistId,
        param.sessionId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeRUMReplaySessionFromPlaylist(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a playlist.
   * @param param The request object
   */
  public updateRUMReplayPlaylist(
    param: RUMReplayPlaylistsApiUpdateRUMReplayPlaylistRequest,
    options?: Configuration,
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.updateRUMReplayPlaylist(
      param.playlistId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMReplayPlaylist(
            responseContext,
          );
        });
    });
  }
}
