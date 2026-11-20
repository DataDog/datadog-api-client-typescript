import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Anomaly detection settings for the pipeline.
 * Only applies to `logs` pipelines. Requires Observability Pipelines Worker 2.25 or later.
 */
export class ObservabilityPipelineAnomalyDetection {
  /**
   * Whether anomaly detection is enabled for the pipeline.
   */
  "enabled": boolean;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
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
    return ObservabilityPipelineAnomalyDetection.attributeTypeMap;
  }

  public constructor() {}
}
