/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineOpentelemetrySourceType } from "./ObservabilityPipelineOpentelemetrySourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `opentelemetry` source receives telemetry data using the OpenTelemetry Protocol (OTLP) over gRPC and HTTP.
 */
export class ObservabilityPipelineOpentelemetrySource {
  /**
   * Environment variable name containing the gRPC server address for receiving OTLP data. Must be a valid environment variable name (alphanumeric characters and underscores only).
   */
  "grpcAddressKey"?: string;
  /**
   * Environment variable name containing the HTTP server address for receiving OTLP data. Must be a valid environment variable name (alphanumeric characters and underscores only).
   */
  "httpAddressKey"?: string;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `opentelemetry`.
   */
  "type": ObservabilityPipelineOpentelemetrySourceType;

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
    grpcAddressKey: {
      baseName: "grpc_address_key",
      type: "string",
    },
    httpAddressKey: {
      baseName: "http_address_key",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineOpentelemetrySourceType",
      required: true,
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
    return ObservabilityPipelineOpentelemetrySource.attributeTypeMap;
  }

  public constructor() {}
}
