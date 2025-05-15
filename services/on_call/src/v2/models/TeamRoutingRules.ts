import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesData } from "./TeamRoutingRulesData";
import { TeamRoutingRulesIncluded } from "./TeamRoutingRulesIncluded";

/**
 * Represents a complete set of team routing rules, including data and optionally included related resources.
 */
export class TeamRoutingRules {
  /**
   * Represents the top-level data object for team routing rules, containing the ID, relationships, and resource type.
   */
  "data"?: TeamRoutingRulesData;
  /**
   * Provides related routing rules or other included resources.
   */
  "included"?: Array<TeamRoutingRulesIncluded>;
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
      type: "TeamRoutingRulesData",
    },
    included: {
      baseName: "included",
      type: "Array<TeamRoutingRulesIncluded>",
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
    return TeamRoutingRules.attributeTypeMap;
  }

  public constructor() {}
}
