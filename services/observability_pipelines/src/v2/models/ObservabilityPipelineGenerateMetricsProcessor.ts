import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGeneratedMetric } from "./ObservabilityPipelineGeneratedMetric";
import { ObservabilityPipelineGenerateMetricsProcessorType } from "./ObservabilityPipelineGenerateMetricsProcessorType";

/**
 * The `generate_datadog_metrics` processor creates custom metrics from logs and sends them to Datadog.
 * Metrics can be counters, gauges, or distributions and optionally grouped by log fields.
 */
export class ObservabilityPipelineGenerateMetricsProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include"?: string;
  /**
   * Configuration for generating individual metrics.
   */
  "metrics"?: Array<ObservabilityPipelineGeneratedMetric>;
  /**
   * The processor type. Always `generate_datadog_metrics`.
   */
  "type": ObservabilityPipelineGenerateMetricsProcessorType;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<ObservabilityPipelineGeneratedMetric>",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineGenerateMetricsProcessorType",
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
    return ObservabilityPipelineGenerateMetricsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
