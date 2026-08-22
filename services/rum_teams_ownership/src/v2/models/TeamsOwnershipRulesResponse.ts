import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipRuleResponseData } from "./TeamsOwnershipRuleResponseData";

/**
 * The response body for a list of teams ownership rules.
 */
export class TeamsOwnershipRulesResponse {
  /**
   * A list of teams ownership rules.
   */
  "data": Array<TeamsOwnershipRuleResponseData>;
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
      type: "Array<TeamsOwnershipRuleResponseData>",
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
    return TeamsOwnershipRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
