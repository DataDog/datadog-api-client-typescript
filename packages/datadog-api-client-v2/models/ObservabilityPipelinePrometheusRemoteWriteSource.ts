/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineMtlsServerTls } from "./ObservabilityPipelineMtlsServerTls";
import { ObservabilityPipelinePrometheusRemoteWriteSourceAuthStrategy } from "./ObservabilityPipelinePrometheusRemoteWriteSourceAuthStrategy";
import { ObservabilityPipelinePrometheusRemoteWriteSourceType } from "./ObservabilityPipelinePrometheusRemoteWriteSourceType";
import { ObservabilityPipelinePrometheusRemoteWriteSourceValidToken } from "./ObservabilityPipelinePrometheusRemoteWriteSourceValidToken";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `prometheus_remote_write` source ingests metrics pushed over the Prometheus Remote Write protocol.
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelinePrometheusRemoteWriteSource {
  /**
   * Name of the environment variable or secret that holds the listen address for the Prometheus Remote Write endpoint.
   */
  "addressKey"?: string;
  /**
   * HTTP authentication method.
   */
  "authStrategy": ObservabilityPipelinePrometheusRemoteWriteSourceAuthStrategy;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * Name of the environment variable or secret that holds the password (used when `auth_strategy` is `plain`).
   */
  "passwordKey"?: string;
  /**
   * The HTTP path on which the source listens for incoming Prometheus Remote Write requests.
   */
  "path"?: string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external connecting clients.
   */
  "tls"?: ObservabilityPipelineMtlsServerTls;
  /**
   * The source type. The value should always be `prometheus_remote_write`.
   */
  "type": ObservabilityPipelinePrometheusRemoteWriteSourceType;
  /**
   * Name of the environment variable or secret that holds the username (used when `auth_strategy` is `plain`).
   */
  "usernameKey"?: string;
  /**
   * A list of tokens that are accepted for authenticating incoming requests. When set,
   * the source rejects any request whose token does not match an enabled entry in this list.
   */
  "validTokens"?: Array<ObservabilityPipelinePrometheusRemoteWriteSourceValidToken>;

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
      type: "ObservabilityPipelinePrometheusRemoteWriteSourceAuthStrategy",
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
    path: {
      baseName: "path",
      type: "string",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineMtlsServerTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelinePrometheusRemoteWriteSourceType",
      required: true,
    },
    usernameKey: {
      baseName: "username_key",
      type: "string",
    },
    validTokens: {
      baseName: "valid_tokens",
      type: "Array<ObservabilityPipelinePrometheusRemoteWriteSourceValidToken>",
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
    return ObservabilityPipelinePrometheusRemoteWriteSource.attributeTypeMap;
  }

  public constructor() {}
}
