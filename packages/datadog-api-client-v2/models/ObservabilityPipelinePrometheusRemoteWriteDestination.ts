/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineClientTls } from "./ObservabilityPipelineClientTls";
import { ObservabilityPipelinePrometheusRemoteWriteDestinationAuthStrategy } from "./ObservabilityPipelinePrometheusRemoteWriteDestinationAuthStrategy";
import { ObservabilityPipelinePrometheusRemoteWriteDestinationType } from "./ObservabilityPipelinePrometheusRemoteWriteDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `prometheus_remote_write` destination forwards metrics to an endpoint that supports the Prometheus Remote Write protocol.
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelinePrometheusRemoteWriteDestination {
  /**
   * The authentication strategy to use for outgoing Prometheus Remote Write requests.
   */
  "authStrategy"?: ObservabilityPipelinePrometheusRemoteWriteDestinationAuthStrategy;
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * The default namespace to add as a prefix to metric names that do not already have one.
   */
  "defaultNamespace"?: string;
  /**
   * Name of the environment variable or secret that holds the Prometheus Remote Write endpoint URL.
   * Defaults to `DESTINATION_PROMETHEUS_REMOTE_WRITE_ENDPOINT_URL` (prefixed with `DD_OP_` at runtime).
   */
  "endpointUrlKey"?: string;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * Name of the environment variable or secret that holds the password (used when `auth_strategy` is `basic`).
   */
  "passwordKey"?: string;
  /**
   * The tenant ID to include with outgoing requests. Used by multi-tenant Prometheus Remote Write receivers.
   */
  "tenantId"?: string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineClientTls;
  /**
   * Name of the environment variable or secret that holds the bearer token (used when `auth_strategy` is `bearer`).
   */
  "tokenKey"?: string;
  /**
   * The destination type. The value should always be `prometheus_remote_write`.
   */
  "type": ObservabilityPipelinePrometheusRemoteWriteDestinationType;
  /**
   * Name of the environment variable or secret that holds the username (used when `auth_strategy` is `basic`).
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
    authStrategy: {
      baseName: "auth_strategy",
      type: "ObservabilityPipelinePrometheusRemoteWriteDestinationAuthStrategy",
    },
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    defaultNamespace: {
      baseName: "default_namespace",
      type: "string",
    },
    endpointUrlKey: {
      baseName: "endpoint_url_key",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    passwordKey: {
      baseName: "password_key",
      type: "string",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineClientTls",
    },
    tokenKey: {
      baseName: "token_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelinePrometheusRemoteWriteDestinationType",
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
    return ObservabilityPipelinePrometheusRemoteWriteDestination.attributeTypeMap;
  }

  public constructor() {}
}
