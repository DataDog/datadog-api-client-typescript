import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleResponseData } from "./AiCustomRuleResponseData";

/**
 * Response containing a single AI custom rule.
 */
export class AiCustomRuleResponse {
  /**
   * Response data for an AI custom rule.
   */
  "data": AiCustomRuleResponseData;
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
      type: "AiCustomRuleResponseData",
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
    return AiCustomRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
