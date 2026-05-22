import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineRenameMetricTagsProcessorTag } from "./ObservabilityPipelineRenameMetricTagsProcessorTag";
import { ObservabilityPipelineRenameMetricTagsProcessorType } from "./ObservabilityPipelineRenameMetricTagsProcessorType";

/**
 * The `rename_metric_tags` processor changes the keys of tags on metrics.
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelineRenameMetricTagsProcessor {
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
   * A list of rename rules specifying which tag keys to rename on each metric.
   */
  "tags": Array<ObservabilityPipelineRenameMetricTagsProcessorTag>;
  /**
   * The processor type. The value must be `rename_metric_tags`.
   */
  "type": ObservabilityPipelineRenameMetricTagsProcessorType;
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
      type: "Array<ObservabilityPipelineRenameMetricTagsProcessorTag>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineRenameMetricTagsProcessorType",
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
    return ObservabilityPipelineRenameMetricTagsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
