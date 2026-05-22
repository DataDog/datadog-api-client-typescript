import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAddMetricTagsProcessorType } from "./ObservabilityPipelineAddMetricTagsProcessorType";
import { ObservabilityPipelineFieldValue } from "./ObservabilityPipelineFieldValue";

/**
 * The `add_metric_tags` processor adds static tags to metrics.
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelineAddMetricTagsProcessor {
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
   * A Datadog search query used to determine which metrics this processor targets.
   */
  "include": string;
  /**
   * A list of static tags (key-value pairs) added to each metric processed by this component.
   */
  "tags": Array<ObservabilityPipelineFieldValue>;
  /**
   * The processor type. The value must be `add_metric_tags`.
   */
  "type": ObservabilityPipelineAddMetricTagsProcessorType;
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
    tags: {
      baseName: "tags",
      type: "Array<ObservabilityPipelineFieldValue>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAddMetricTagsProcessorType",
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
    return ObservabilityPipelineAddMetricTagsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
