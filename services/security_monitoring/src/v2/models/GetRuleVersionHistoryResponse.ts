import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetRuleVersionHistoryData } from "./GetRuleVersionHistoryData";

/**
 * Response for getting the rule version history.
 */
export class GetRuleVersionHistoryResponse {
  /**
   * Data for the rule version history.
   */
  "data"?: GetRuleVersionHistoryData;
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
      type: "GetRuleVersionHistoryData",
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
    return GetRuleVersionHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
