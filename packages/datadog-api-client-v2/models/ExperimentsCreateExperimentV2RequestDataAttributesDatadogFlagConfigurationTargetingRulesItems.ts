/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsTargetingRuleCondition } from "./ExperimentsTargetingRuleCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
