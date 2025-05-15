import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesRequestRule } from "./TeamRoutingRulesRequestRule";

/**
 * Represents the attributes of a request to update or create team routing rules.
 */
export class TeamRoutingRulesRequestDataAttributes {
  /**
   * A list of routing rule items that define how incoming pages should be handled.
   */
  "rules"?: Array<TeamRoutingRulesRequestRule>;
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
    rules: {
      baseName: "rules",
      type: "Array<TeamRoutingRulesRequestRule>",
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
    return TeamRoutingRulesRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
