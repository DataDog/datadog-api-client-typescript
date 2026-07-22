import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDecoding } from "./ObservabilityPipelineDecoding";
import { ObservabilityPipelineWebsocketSourceAuthStrategy } from "./ObservabilityPipelineWebsocketSourceAuthStrategy";
import { ObservabilityPipelineWebsocketSourceTls } from "./ObservabilityPipelineWebsocketSourceTls";
import { ObservabilityPipelineWebsocketSourceType } from "./ObservabilityPipelineWebsocketSourceType";

/**
 * The `websocket` source ingests logs from a WebSocket server using the `ws://` or `wss://` protocol.
 * 
 * **Supported pipeline types:** logs.
 */
export class ObservabilityPipelineWebsocketSource {
  /**
   * Authentication strategy for the WebSocket source connection.
   */
  "authStrategy": ObservabilityPipelineWebsocketSourceAuthStrategy;
  /**
   * Name of the environment variable or secret that holds the custom authorization header value. Used when `auth_strategy` is `custom`.
   */
  "customKey"?: string;
  /**
   * The decoding format used to interpret incoming logs.
   */
  "decoding": ObservabilityPipelineDecoding;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * Name of the environment variable or secret that holds the password. Used when `auth_strategy` is `basic`.
   */
  "passwordKey"?: string;
  /**
   * TLS configuration for the WebSocket source. Use `enabled` for standard `wss://` connections, or `with_client_cert` to present a client certificate for mutual TLS.
   */
  "tls"?: ObservabilityPipelineWebsocketSourceTls;
  /**
   * Name of the environment variable or secret that holds the bearer token. Used when `auth_strategy` is `bearer`.
   */
  "tokenKey"?: string;
  /**
   * The source type. The value should always be `websocket`.
   */
  "type": ObservabilityPipelineWebsocketSourceType;
  /**
   * Name of the environment variable or secret that holds the WebSocket server URI (`ws://` or `wss://`).
   */
  "uriKey"?: string;
  /**
   * Name of the environment variable or secret that holds the username. Used when `auth_strategy` is `basic`.
   */
  "usernameKey"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    authStrategy: {
      baseName: "auth_strategy",
      type: "ObservabilityPipelineWebsocketSourceAuthStrategy",
      required: true,
    },
    customKey: {
      baseName: "custom_key",
      type: "string",
    },
    decoding: {
      baseName: "decoding",
      type: "ObservabilityPipelineDecoding",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    passwordKey: {
      baseName: "password_key",
      type: "string",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineWebsocketSourceTls",
    },
    tokenKey: {
      baseName: "token_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineWebsocketSourceType",
      required: true,
    },
    uriKey: {
      baseName: "uri_key",
      type: "string",
    },
    usernameKey: {
      baseName: "username_key",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineWebsocketSource.attributeTypeMap;
  }

  public constructor() {}
}
