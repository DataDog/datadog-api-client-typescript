import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLink } from "./TeamHierarchyLink";
import { TeamHierarchyLinkTeam } from "./TeamHierarchyLinkTeam";
import { TeamsHierarchyLinksResponseLinks } from "./TeamsHierarchyLinksResponseLinks";
import { TeamsHierarchyLinksResponseMeta } from "./TeamsHierarchyLinksResponseMeta";

/**
 * Team hierarchy links response
 */
export class TeamHierarchyLinksResponse {
  /**
   * Team hierarchy links response data
   */
  "data"?: Array<TeamHierarchyLink>;
  /**
   * Included teams
   */
  "included"?: Array<TeamHierarchyLinkTeam>;
  /**
   * Teams hierarchy links response links.
   */
  "links"?: TeamsHierarchyLinksResponseLinks;
  /**
   * Team hierarchy links response metadata.
   */
  "meta"?: TeamsHierarchyLinksResponseMeta;
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
      type: "Array<TeamHierarchyLink>",
    },
    included: {
      baseName: "included",
      type: "Array<TeamHierarchyLinkTeam>",
    },
    links: {
      baseName: "links",
      type: "TeamsHierarchyLinksResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "TeamsHierarchyLinksResponseMeta",
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
    return TeamHierarchyLinksResponse.attributeTypeMap;
  }

  public constructor() {}
}
