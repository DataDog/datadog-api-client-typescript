import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDecoding } from "./ObservabilityPipelineDecoding";
import { ObservabilityPipelineHttpServerSourceAuthStrategy } from "./ObservabilityPipelineHttpServerSourceAuthStrategy";
import { ObservabilityPipelineHttpServerSourceType } from "./ObservabilityPipelineHttpServerSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `http_server` source collects logs over HTTP POST from external services.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineHttpServerSource {
  /**
   * Name of the environment variable or secret that holds the listen address for the HTTP server.
   */
  "addressKey"?: string;
  /**
   * HTTP authentication method.
   */
  "authStrategy": ObservabilityPipelineHttpServerSourceAuthStrategy;
  /**
   * Name of the environment variable or secret that holds a custom header value (used with custom auth strategies).
   */
  "customKey"?: string;
  /**
   * The decoding format used to interpret incoming logs.
   */
  "decoding": ObservabilityPipelineDecoding;
  /**
   * Unique ID for the HTTP server source.
   */
  "id": string;
  /**
   * Name of the environment variable or secret that holds the password (used when `auth_strategy` is `plain`).
   */
  "passwordKey"?: string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `http_server`.
   */
  "type": ObservabilityPipelineHttpServerSourceType;
  /**
   * Name of the environment variable or secret that holds the username (used when `auth_strategy` is `plain`).
   */
  "usernameKey"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    addressKey: {
      baseName: "address_key",
      type: "string",
    },
    authStrategy: {
      baseName: "auth_strategy",
      type: "ObservabilityPipelineHttpServerSourceAuthStrategy",
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
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineHttpServerSourceType",
      required: true,
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
    return ObservabilityPipelineHttpServerSource.attributeTypeMap;
  }

  public constructor() {}
}
