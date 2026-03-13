import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleAttributes } from "./RuleAttributes";
import { RuleType } from "./RuleType";

/**
 * Scorecard create rule request data.
 */
export class CreateRuleRequestData {
  /**
   * Details of a rule.
   */
  "attributes"?: RuleAttributes;
  /**
   * The JSON:API type for scorecard rules.
   */
  "type"?: RuleType;
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
    attributes: {
      baseName: "attributes",
      type: "RuleAttributes",
    },
    type: {
      baseName: "type",
      type: "RuleType",
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
    return CreateRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
