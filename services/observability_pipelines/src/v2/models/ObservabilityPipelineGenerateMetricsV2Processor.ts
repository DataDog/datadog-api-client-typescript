import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGeneratedMetric } from "./ObservabilityPipelineGeneratedMetric";
import { ObservabilityPipelineGenerateMetricsV2ProcessorType } from "./ObservabilityPipelineGenerateMetricsV2ProcessorType";

/**
 * The `generate_metrics` processor creates custom metrics from logs.
 * Metrics can be counters, gauges, or distributions and optionally grouped by log fields.
 * The generated metrics must be routed to a metrics destination using the input `<processor-id>.metrics`.
 * 
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineGenerateMetricsV2Processor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Indicates whether the processor is enabled.
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
   * The processor type. Always `generate_metrics`.
   */
  "type": ObservabilityPipelineGenerateMetricsV2ProcessorType;
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
      type: "ObservabilityPipelineGenerateMetricsV2ProcessorType",
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
    return ObservabilityPipelineGenerateMetricsV2Processor.attributeTypeMap;
  }

  public constructor() {}
}
