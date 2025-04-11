import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToTeamLinkData } from "./RelationshipToTeamLinkData";
import { TeamRelationshipsLinks } from "./TeamRelationshipsLinks";

/**
 * Relationship between a team and a team link
 */
export class RelationshipToTeamLinks {
  /**
   * Related team links
   */
  "data"?: Array<RelationshipToTeamLinkData>;
  /**
   * Links attributes.
   */
  "links"?: TeamRelationshipsLinks;
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
      type: "Array<RelationshipToTeamLinkData>",
    },
    links: {
      baseName: "links",
      type: "TeamRelationshipsLinks",
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
    return RelationshipToTeamLinks.attributeTypeMap;
  }

  public constructor() {}
}
