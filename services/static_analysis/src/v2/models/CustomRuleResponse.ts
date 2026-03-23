import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleResponseData } from "./CustomRuleResponseData";

/**
 * Response containing a single custom rule.
 */
export class CustomRuleResponse {
  /**
   * Data object returned in a custom rule response, including its ID, type, and attributes.
   */
  "data": CustomRuleResponseData;
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
    data: {
      baseName: "data",
      type: "CustomRuleResponseData",
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
    return CustomRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
