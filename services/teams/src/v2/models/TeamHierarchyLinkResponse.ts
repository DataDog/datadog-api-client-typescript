import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLink } from "./TeamHierarchyLink";
import { TeamHierarchyLinkTeam } from "./TeamHierarchyLinkTeam";
import { TeamsHierarchyLinksResponseLinks } from "./TeamsHierarchyLinksResponseLinks";

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
   * Teams hierarchy links response links.
   */
  "links"?: TeamsHierarchyLinksResponseLinks;
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
    links: {
      baseName: "links",
      type: "TeamsHierarchyLinksResponseLinks",
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
