/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationTargetingRulesItemsConditionsItemsOperator } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationTargetingRulesItemsConditionsItemsOperator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An inline condition. The saved_filter_id field must be omitted or null.
 */
export class ExperimentsInlineCondition {
  /**
   * Attribute to evaluate.
   */
  "attribute": string;
  /**
   * Required with attribute and value for an inline condition; omit when saved_filter_id is set.
   */
  "operator": ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationTargetingRulesItemsConditionsItemsOperator;
  /**
   * Values used by the operator. Every operator requires at least one value.
   */
  "value": Array<string>;

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
    attribute: {
      baseName: "attribute",
      type: "string",
      required: true,
    },
    operator: {
      baseName: "operator",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationTargetingRulesItemsConditionsItemsOperator",
      required: true,
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return ExperimentsInlineCondition.attributeTypeMap;
  }

  public constructor() {}
}
