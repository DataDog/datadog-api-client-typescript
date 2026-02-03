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
import { Playlist } from "../models/Playlist";
import { PlaylistArray } from "../models/PlaylistArray";
import { PlaylistsSession } from "../models/PlaylistsSession";
import { PlaylistsSessionArray } from "../models/PlaylistsSessionArray";
import { SessionIdArray } from "../models/SessionIdArray";

export class RumReplayPlaylistsApiRequestFactory extends BaseAPIRequestFactory {
  public async addRumReplaySessionToPlaylist(
    ts: number,
    playlistId: number,
    sessionId: string,
    dataSource?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ts' is not null or undefined
    if (ts === null || ts === undefined) {
      throw new RequiredError("ts", "addRumReplaySessionToPlaylist");
    }

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "addRumReplaySessionToPlaylist");
    }

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError("sessionId", "addRumReplaySessionToPlaylist");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}"
        .replace("{playlist_id}", encodeURIComponent(String(playlistId)))
        .replace("{session_id}", encodeURIComponent(String(sessionId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.addRumReplaySessionToPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (dataSource !== undefined) {
      requestContext.setQueryParam(
        "data_source",
        ObjectSerializer.serialize(dataSource, "string", ""),
        ""
      );
    }
    if (ts !== undefined) {
      requestContext.setQueryParam(
        "ts",
        ObjectSerializer.serialize(ts, "number", "int64"),
        ""
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

  public async bulkRemoveRumReplayPlaylistSessions(
    playlistId: number,
    body: SessionIdArray,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError(
        "playlistId",
        "bulkRemoveRumReplayPlaylistSessions"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkRemoveRumReplayPlaylistSessions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions".replace(
        "{playlist_id}",
        encodeURIComponent(String(playlistId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.bulkRemoveRumReplayPlaylistSessions")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SessionIdArray", ""),
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

  public async createRumReplayPlaylist(
    body: Playlist,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.createRumReplayPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Playlist", ""),
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

  public async deleteRumReplayPlaylist(
    playlistId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "deleteRumReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.deleteRumReplayPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getRumReplayPlaylist(
    playlistId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "getRumReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.getRumReplayPlaylist")
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

  public async listRumReplayPlaylists(
    filterCreatedByUuid?: string,
    filterQuery?: string,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.listRumReplayPlaylists")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterCreatedByUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[created_by_uuid]",
        ObjectSerializer.serialize(filterCreatedByUuid, "string", ""),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
        ""
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

  public async listRumReplayPlaylistSessions(
    playlistId: number,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "listRumReplayPlaylistSessions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions".replace(
        "{playlist_id}",
        encodeURIComponent(String(playlistId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.listRumReplayPlaylistSessions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
        ""
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

  public async removeRumReplaySessionFromPlaylist(
    playlistId: number,
    sessionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError(
        "playlistId",
        "removeRumReplaySessionFromPlaylist"
      );
    }

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError(
        "sessionId",
        "removeRumReplaySessionFromPlaylist"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}"
        .replace("{playlist_id}", encodeURIComponent(String(playlistId)))
        .replace("{session_id}", encodeURIComponent(String(sessionId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.removeRumReplaySessionFromPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateRumReplayPlaylist(
    playlistId: number,
    body: Playlist,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "updateRumReplayPlaylist");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRumReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayPlaylistsApi.updateRumReplayPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Playlist", ""),
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

export class RumReplayPlaylistsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addRumReplaySessionToPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addRumReplaySessionToPlaylist(
    response: ResponseContext
  ): Promise<PlaylistsSession> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: PlaylistsSession = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlaylistsSession"
      ) as PlaylistsSession;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: PlaylistsSession = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlaylistsSession",
        ""
      ) as PlaylistsSession;
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
   * @params response Response returned by the server for a request to bulkRemoveRumReplayPlaylistSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkRemoveRumReplayPlaylistSessions(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
      return;
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
   * @params response Response returned by the server for a request to createRumReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRumReplayPlaylist(
    response: ResponseContext
  ): Promise<Playlist> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Playlist"
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Playlist",
        ""
      ) as Playlist;
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
   * @params response Response returned by the server for a request to deleteRumReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRumReplayPlaylist(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
      return;
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
   * @params response Response returned by the server for a request to getRumReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumReplayPlaylist(
    response: ResponseContext
  ): Promise<Playlist> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Playlist"
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Playlist",
        ""
      ) as Playlist;
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
   * @params response Response returned by the server for a request to listRumReplayPlaylists
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumReplayPlaylists(
    response: ResponseContext
  ): Promise<PlaylistArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PlaylistArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlaylistArray"
      ) as PlaylistArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: PlaylistArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlaylistArray",
        ""
      ) as PlaylistArray;
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
   * @params response Response returned by the server for a request to listRumReplayPlaylistSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumReplayPlaylistSessions(
    response: ResponseContext
  ): Promise<PlaylistsSessionArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PlaylistsSessionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlaylistsSessionArray"
      ) as PlaylistsSessionArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: PlaylistsSessionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlaylistsSessionArray",
        ""
      ) as PlaylistsSessionArray;
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
   * @params response Response returned by the server for a request to removeRumReplaySessionFromPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeRumReplaySessionFromPlaylist(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
      return;
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
   * @params response Response returned by the server for a request to updateRumReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRumReplayPlaylist(
    response: ResponseContext
  ): Promise<Playlist> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Playlist"
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Playlist",
        ""
      ) as Playlist;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RumReplayPlaylistsApiAddRumReplaySessionToPlaylistRequest {
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

export interface RumReplayPlaylistsApiBulkRemoveRumReplayPlaylistSessionsRequest {
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

export interface RumReplayPlaylistsApiCreateRumReplayPlaylistRequest {
  /**
   * @type Playlist
   */
  body: Playlist;
}

export interface RumReplayPlaylistsApiDeleteRumReplayPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
}

export interface RumReplayPlaylistsApiGetRumReplayPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type number
   */
  playlistId: number;
}

export interface RumReplayPlaylistsApiListRumReplayPlaylistsRequest {
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

export interface RumReplayPlaylistsApiListRumReplayPlaylistSessionsRequest {
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

export interface RumReplayPlaylistsApiRemoveRumReplaySessionFromPlaylistRequest {
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

export interface RumReplayPlaylistsApiUpdateRumReplayPlaylistRequest {
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

export class RumReplayPlaylistsApi {
  private requestFactory: RumReplayPlaylistsApiRequestFactory;
  private responseProcessor: RumReplayPlaylistsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RumReplayPlaylistsApiRequestFactory,
    responseProcessor?: RumReplayPlaylistsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RumReplayPlaylistsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RumReplayPlaylistsApiResponseProcessor();
  }

  /**
   * Add a session to a playlist.
   * @param param The request object
   */
  public addRumReplaySessionToPlaylist(
    param: RumReplayPlaylistsApiAddRumReplaySessionToPlaylistRequest,
    options?: Configuration
  ): Promise<PlaylistsSession> {
    const requestContextPromise =
      this.requestFactory.addRumReplaySessionToPlaylist(
        param.ts,
        param.playlistId,
        param.sessionId,
        param.dataSource,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addRumReplaySessionToPlaylist(
            responseContext
          );
        });
    });
  }

  /**
   * Remove sessions from a playlist.
   * @param param The request object
   */
  public bulkRemoveRumReplayPlaylistSessions(
    param: RumReplayPlaylistsApiBulkRemoveRumReplayPlaylistSessionsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.bulkRemoveRumReplayPlaylistSessions(
        param.playlistId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkRemoveRumReplayPlaylistSessions(
            responseContext
          );
        });
    });
  }

  /**
   * Create a playlist.
   * @param param The request object
   */
  public createRumReplayPlaylist(
    param: RumReplayPlaylistsApiCreateRumReplayPlaylistRequest,
    options?: Configuration
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.createRumReplayPlaylist(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRumReplayPlaylist(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a playlist.
   * @param param The request object
   */
  public deleteRumReplayPlaylist(
    param: RumReplayPlaylistsApiDeleteRumReplayPlaylistRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRumReplayPlaylist(
      param.playlistId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRumReplayPlaylist(
            responseContext
          );
        });
    });
  }

  /**
   * Get a playlist.
   * @param param The request object
   */
  public getRumReplayPlaylist(
    param: RumReplayPlaylistsApiGetRumReplayPlaylistRequest,
    options?: Configuration
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.getRumReplayPlaylist(
      param.playlistId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumReplayPlaylist(responseContext);
        });
    });
  }

  /**
   * List playlists.
   * @param param The request object
   */
  public listRumReplayPlaylists(
    param: RumReplayPlaylistsApiListRumReplayPlaylistsRequest = {},
    options?: Configuration
  ): Promise<PlaylistArray> {
    const requestContextPromise = this.requestFactory.listRumReplayPlaylists(
      param.filterCreatedByUuid,
      param.filterQuery,
      param.pageNumber,
      param.pageSize,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumReplayPlaylists(responseContext);
        });
    });
  }

  /**
   * List sessions in a playlist.
   * @param param The request object
   */
  public listRumReplayPlaylistSessions(
    param: RumReplayPlaylistsApiListRumReplayPlaylistSessionsRequest,
    options?: Configuration
  ): Promise<PlaylistsSessionArray> {
    const requestContextPromise =
      this.requestFactory.listRumReplayPlaylistSessions(
        param.playlistId,
        param.pageNumber,
        param.pageSize,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumReplayPlaylistSessions(
            responseContext
          );
        });
    });
  }

  /**
   * Remove a session from a playlist.
   * @param param The request object
   */
  public removeRumReplaySessionFromPlaylist(
    param: RumReplayPlaylistsApiRemoveRumReplaySessionFromPlaylistRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeRumReplaySessionFromPlaylist(
        param.playlistId,
        param.sessionId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeRumReplaySessionFromPlaylist(
            responseContext
          );
        });
    });
  }

  /**
   * Update a playlist.
   * @param param The request object
   */
  public updateRumReplayPlaylist(
    param: RumReplayPlaylistsApiUpdateRumReplayPlaylistRequest,
    options?: Configuration
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.updateRumReplayPlaylist(
      param.playlistId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRumReplayPlaylist(
            responseContext
          );
        });
    });
  }
}
