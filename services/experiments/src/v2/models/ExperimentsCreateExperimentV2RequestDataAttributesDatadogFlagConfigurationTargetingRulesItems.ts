import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsTargetingRuleCondition } from "./ExperimentsTargetingRuleCondition";

/**
 * Use an empty array when no targeting rules apply.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems {
  /**
   * Conditions that must all match for this rule. Each condition must use exactly one shape: saved_filter_id alone or operator plus attribute plus value.
   */
  "conditions": Array<ExperimentsTargetingRuleCondition>;
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
    conditions: {
      baseName: "conditions",
      type: "Array<ExperimentsTargetingRuleCondition>",
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
    return ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
