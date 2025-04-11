import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetRuleVersionHistoryDataType } from "./GetRuleVersionHistoryDataType";
import { RuleVersionHistory } from "./RuleVersionHistory";

/**
 * Data for the rule version history.
 */
export class GetRuleVersionHistoryData {
  /**
   * Response object containing the version history of a rule.
   */
  "attributes"?: RuleVersionHistory;
  /**
   * ID of the rule.
   */
  "id"?: string;
  /**
   * Type of data.
   */
  "type"?: GetRuleVersionHistoryDataType;
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
      type: "RuleVersionHistory",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetRuleVersionHistoryDataType",
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
    return GetRuleVersionHistoryData.attributeTypeMap;
  }

  public constructor() {}
}
