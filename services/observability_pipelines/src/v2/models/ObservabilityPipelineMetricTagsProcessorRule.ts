import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineMetricTagsProcessorRuleAction } from "./ObservabilityPipelineMetricTagsProcessorRuleAction";
import { ObservabilityPipelineMetricTagsProcessorRuleMode } from "./ObservabilityPipelineMetricTagsProcessorRuleMode";

/**
 * Defines a rule for filtering metric tags based on key patterns.
 */
export class ObservabilityPipelineMetricTagsProcessorRule {
  /**
   * The action to take on tags with matching keys.
   */
  "action": ObservabilityPipelineMetricTagsProcessorRuleAction;
  /**
   * A list of tag keys to include or exclude.
   */
  "keys": Array<string>;
  /**
   * The processing mode for tag filtering.
   */
  "mode": ObservabilityPipelineMetricTagsProcessorRuleMode;
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
      type: "ObservabilityPipelineMetricTagsProcessorRuleAction",
      required: true,
    },
    keys: {
      baseName: "keys",
      type: "Array<string>",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineMetricTagsProcessorRuleMode",
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
    return ObservabilityPipelineMetricTagsProcessorRule.attributeTypeMap;
  }

  public constructor() {}
}
