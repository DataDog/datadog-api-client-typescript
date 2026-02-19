import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DefaultRuleResponseData } from "./DefaultRuleResponseData";

/**
 * Response containing a list of default rules.
 */
export class ListDefaultRulesResponse {
  /**
   * Array of default rules.
   */
  "data": Array<DefaultRuleResponseData>;
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
      type: "Array<DefaultRuleResponseData>",
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
    return ListDefaultRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
