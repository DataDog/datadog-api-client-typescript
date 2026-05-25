import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleRequestData } from "./AiCustomRuleRequestData";

/**
 * Request body for creating an AI custom rule.
 */
export class AiCustomRuleRequest {
  /**
   * Request data for creating an AI custom rule.
   */
  "data"?: AiCustomRuleRequestData;
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
      type: "AiCustomRuleRequestData",
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
    return AiCustomRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
