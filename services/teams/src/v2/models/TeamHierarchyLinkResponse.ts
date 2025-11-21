import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLink } from "./TeamHierarchyLink";
import { TeamHierarchyLinkTeam } from "./TeamHierarchyLinkTeam";

/**
 * Team hierarchy link response
 */
export class TeamHierarchyLinkResponse {
  /**
   * Team hierarchy link
   */
  "data"?: TeamHierarchyLink;
  /**
   * Included teams
   */
  "included"?: Array<TeamHierarchyLinkTeam>;
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
      type: "TeamHierarchyLink",
    },
    included: {
      baseName: "included",
      type: "Array<TeamHierarchyLinkTeam>",
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
    return TeamHierarchyLinkResponse.attributeTypeMap;
  }

  public constructor() {}
}
