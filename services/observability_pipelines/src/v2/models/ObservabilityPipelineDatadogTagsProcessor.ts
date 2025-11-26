import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDatadogTagsProcessorAction } from "./ObservabilityPipelineDatadogTagsProcessorAction";
import { ObservabilityPipelineDatadogTagsProcessorMode } from "./ObservabilityPipelineDatadogTagsProcessorMode";
import { ObservabilityPipelineDatadogTagsProcessorType } from "./ObservabilityPipelineDatadogTagsProcessorType";

/**
 * The `datadog_tags` processor includes or excludes specific Datadog tags in your logs.
 */
export class ObservabilityPipelineDatadogTagsProcessor {
  /**
   * The action to take on tags with matching keys.
   */
  "action": ObservabilityPipelineDatadogTagsProcessorAction;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of tag keys.
   */
  "keys": Array<string>;
  /**
   * The processing mode.
   */
  "mode": ObservabilityPipelineDatadogTagsProcessorMode;
  /**
   * The processor type. The value should always be `datadog_tags`.
   */
  "type": ObservabilityPipelineDatadogTagsProcessorType;
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
    action: {
      baseName: "action",
      type: "ObservabilityPipelineDatadogTagsProcessorAction",
      required: true,
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
    keys: {
      baseName: "keys",
      type: "Array<string>",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineDatadogTagsProcessorMode",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineDatadogTagsProcessorType",
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
    return ObservabilityPipelineDatadogTagsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
