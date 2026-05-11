import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleStatusResponseData } from "./ArbitraryRuleStatusResponseData";

/**
 * Processing statuses for all custom allocation rules in the specified organization.
 */
export class ArbitraryRuleStatusResponseArray {
  /**
   * Processing status for a custom allocation rule.
   */
  "data": Array<ArbitraryRuleStatusResponseData>;
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
      type: "Array<ArbitraryRuleStatusResponseData>",
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
    return ArbitraryRuleStatusResponseArray.attributeTypeMap;
  }

  public constructor() {}
}
