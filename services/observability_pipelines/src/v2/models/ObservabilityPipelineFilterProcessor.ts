import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineFilterProcessorType } from "./ObservabilityPipelineFilterProcessorType";

/**
 * The `filter` processor allows conditional processing of logs/metrics based on a Datadog search query. Logs/metrics that match the `include` query are passed through; others are discarded.
 *
 * **Supported pipeline types:** logs, metrics
 */
export class ObservabilityPipelineFilterProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Indicates whether the processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs/metrics should pass through the filter. Logs/metrics that match this query continue to downstream components; others are dropped.
   */
  "include": string;
  /**
   * The processor type. The value should always be `filter`.
   */
  "type": ObservabilityPipelineFilterProcessorType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineFilterProcessorType",
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
    return ObservabilityPipelineFilterProcessor.attributeTypeMap;
  }

  public constructor() {}
}
