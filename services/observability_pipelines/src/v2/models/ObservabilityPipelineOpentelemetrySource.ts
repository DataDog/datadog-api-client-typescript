import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOpentelemetrySourceType } from "./ObservabilityPipelineOpentelemetrySourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `opentelemetry` source receives OpenTelemetry data through gRPC or HTTP.
 */
export class ObservabilityPipelineOpentelemetrySource {
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
