import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineReduceProcessorMergeStrategy } from "./ObservabilityPipelineReduceProcessorMergeStrategy";
import { ObservabilityPipelineReduceProcessorType } from "./ObservabilityPipelineReduceProcessorType";

/**
 * The `reduce` processor aggregates and merges logs based on matching keys and merge strategies.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineReduceProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * A list of fields used to group log events for merging.
   */
  "groupBy": Array<string>;
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * List of merge strategies defining how values from grouped events should be combined.
   */
  "mergeStrategies": Array<ObservabilityPipelineReduceProcessorMergeStrategy>;
  /**
   * The processor type. The value should always be `reduce`.
   */
  "type": ObservabilityPipelineReduceProcessorType;
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
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
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
    mergeStrategies: {
      baseName: "merge_strategies",
      type: "Array<ObservabilityPipelineReduceProcessorMergeStrategy>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineReduceProcessorType",
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
    return ObservabilityPipelineReduceProcessor.attributeTypeMap;
  }

  public constructor() {}
}
