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
import { Int64Input } from "../../datadog-api-client-common/util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { Playlist } from "../models/Playlist";
import { PlaylistArray } from "../models/PlaylistArray";
import { PlaylistsSession } from "../models/PlaylistsSession";
import { PlaylistsSessionArray } from "../models/PlaylistsSessionArray";
import { SessionIdArray } from "../models/SessionIdArray";

export class RUMReplayPlaylistsApiRequestFactory extends BaseAPIRequestFactory {
  public async addRUMReplaySessionToPlaylist(
    ts: Int64Input,
    playlistId: Int64Input,
    sessionId: string,
    dataSource?: string,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.addRUMReplaySessionToPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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

  public async bulkRemoveRUMReplayPlaylistSessions(
    playlistId: Int64Input,
    body: SessionIdArray,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError(
        "playlistId",
        "bulkRemoveRUMReplayPlaylistSessions"
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
        encodeURIComponent(String(playlistId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.bulkRemoveRUMReplayPlaylistSessions")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SessionIdArray", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.createRUMReplayPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Playlist", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    playlistId: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "deleteRUMReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.deleteRUMReplayPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    playlistId: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError("playlistId", "getRUMReplayPlaylist");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace(
      "{playlist_id}",
      encodeURIComponent(String(playlistId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.getRUMReplayPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    pageNumber?: Int64Input,
    pageSize?: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/replay/playlists";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.listRUMReplayPlaylists")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

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
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
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

  public async listRUMReplayPlaylistSessions(
    playlistId: Int64Input,
    pageNumber?: Int64Input,
    pageSize?: Int64Input,
    _options?: Configuration
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
        encodeURIComponent(String(playlistId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.listRUMReplayPlaylistSessions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
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

  public async removeRUMReplaySessionFromPlaylist(
    playlistId: Int64Input,
    sessionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'playlistId' is not null or undefined
    if (playlistId === null || playlistId === undefined) {
      throw new RequiredError(
        "playlistId",
        "removeRUMReplaySessionFromPlaylist"
      );
    }

    // verify required parameter 'sessionId' is not null or undefined
    if (sessionId === null || sessionId === undefined) {
      throw new RequiredError(
        "sessionId",
        "removeRUMReplaySessionFromPlaylist"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}"
        .replace("{playlist_id}", encodeURIComponent(String(playlistId)))
        .replace("{session_id}", encodeURIComponent(String(sessionId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.removeRUMReplaySessionFromPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    playlistId: Int64Input,
    body: Playlist,
    _options?: Configuration
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
      encodeURIComponent(String(playlistId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMReplayPlaylistsApi.updateRUMReplayPlaylist")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Playlist", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addRUMReplaySessionToPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addRUMReplaySessionToPlaylist(
    response: ResponseContext
  ): Promise<PlaylistsSession> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: PlaylistsSession = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "PlaylistsSession",
        "",
        this.configuration?.preserveLargeIntegers
      ) as PlaylistsSession;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "PlaylistsSession",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to bulkRemoveRUMReplayPlaylistSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkRemoveRUMReplayPlaylistSessions(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to createRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMReplayPlaylist(
    response: ResponseContext
  ): Promise<Playlist> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Playlist",
        "",
        this.configuration?.preserveLargeIntegers
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Playlist",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMReplayPlaylist(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMReplayPlaylist(
    response: ResponseContext
  ): Promise<Playlist> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Playlist",
        "",
        this.configuration?.preserveLargeIntegers
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Playlist",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to listRUMReplayPlaylists
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplayPlaylists(
    response: ResponseContext
  ): Promise<PlaylistArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PlaylistArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "PlaylistArray",
        "",
        this.configuration?.preserveLargeIntegers
      ) as PlaylistArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "PlaylistArray",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to listRUMReplayPlaylistSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMReplayPlaylistSessions(
    response: ResponseContext
  ): Promise<PlaylistsSessionArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PlaylistsSessionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "PlaylistsSessionArray",
        "",
        this.configuration?.preserveLargeIntegers
      ) as PlaylistsSessionArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "PlaylistsSessionArray",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to removeRUMReplaySessionFromPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeRUMReplaySessionFromPlaylist(
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to updateRUMReplayPlaylist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMReplayPlaylist(
    response: ResponseContext
  ): Promise<Playlist> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Playlist = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Playlist",
        "",
        this.configuration?.preserveLargeIntegers
      ) as Playlist;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "Playlist",
        "",
        this.configuration?.preserveLargeIntegers
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

export interface RUMReplayPlaylistsApiAddRUMReplaySessionToPlaylistRequest {
  /**
   * Server-side timestamp in milliseconds.
   * @type Int64Input
   */
  ts: Int64Input;
  /**
   * Unique identifier of the playlist.
   * @type Int64Input
   */
  playlistId: Int64Input;
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
   * @type Int64Input
   */
  playlistId: Int64Input;
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
   * @type Int64Input
   */
  playlistId: Int64Input;
}

export interface RUMReplayPlaylistsApiGetRUMReplayPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type Int64Input
   */
  playlistId: Int64Input;
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
   * @type Int64Input
   */
  pageNumber?: Int64Input;
  /**
   * Number of items per page.
   * @type Int64Input
   */
  pageSize?: Int64Input;
}

export interface RUMReplayPlaylistsApiListRUMReplayPlaylistSessionsRequest {
  /**
   * Unique identifier of the playlist.
   * @type Int64Input
   */
  playlistId: Int64Input;
  /**
   * Page number for pagination (0-indexed).
   * @type Int64Input
   */
  pageNumber?: Int64Input;
  /**
   * Number of items per page.
   * @type Int64Input
   */
  pageSize?: Int64Input;
}

export interface RUMReplayPlaylistsApiRemoveRUMReplaySessionFromPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type Int64Input
   */
  playlistId: Int64Input;
  /**
   * Unique identifier of the session.
   * @type string
   */
  sessionId: string;
}

export interface RUMReplayPlaylistsApiUpdateRUMReplayPlaylistRequest {
  /**
   * Unique identifier of the playlist.
   * @type Int64Input
   */
  playlistId: Int64Input;
  /**
   * @type Playlist
   */
  body: Playlist;
}

export class RUMReplayPlaylistsApi {
  private requestFactory: RUMReplayPlaylistsApiRequestFactory;
  private responseProcessor: RUMReplayPlaylistsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RUMReplayPlaylistsApiRequestFactory,
    responseProcessor?: RUMReplayPlaylistsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RUMReplayPlaylistsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new RUMReplayPlaylistsApiResponseProcessor(configuration);
  }

  /**
   * Add a session to a playlist.
   * @param param The request object
   */
  public addRUMReplaySessionToPlaylist(
    param: RUMReplayPlaylistsApiAddRUMReplaySessionToPlaylistRequest,
    options?: Configuration
  ): Promise<PlaylistsSession> {
    const requestContextPromise =
      this.requestFactory.addRUMReplaySessionToPlaylist(
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
          return this.responseProcessor.addRUMReplaySessionToPlaylist(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.bulkRemoveRUMReplayPlaylistSessions(
        param.playlistId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkRemoveRUMReplayPlaylistSessions(
            responseContext
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
    options?: Configuration
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.createRUMReplayPlaylist(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMReplayPlaylist(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMReplayPlaylist(
      param.playlistId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMReplayPlaylist(
            responseContext
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
    options?: Configuration
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.getRUMReplayPlaylist(
      param.playlistId,
      options
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
    options?: Configuration
  ): Promise<PlaylistArray> {
    const requestContextPromise = this.requestFactory.listRUMReplayPlaylists(
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
    options?: Configuration
  ): Promise<PlaylistsSessionArray> {
    const requestContextPromise =
      this.requestFactory.listRUMReplayPlaylistSessions(
        param.playlistId,
        param.pageNumber,
        param.pageSize,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMReplayPlaylistSessions(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeRUMReplaySessionFromPlaylist(
        param.playlistId,
        param.sessionId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeRUMReplaySessionFromPlaylist(
            responseContext
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
    options?: Configuration
  ): Promise<Playlist> {
    const requestContextPromise = this.requestFactory.updateRUMReplayPlaylist(
      param.playlistId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMReplayPlaylist(
            responseContext
          );
        });
    });
  }
}
