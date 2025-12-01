import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkTeamAttributes } from "./TeamHierarchyLinkTeamAttributes";
import { TeamType } from "./TeamType";

/**
 * Team hierarchy links connect different teams. This represents team objects that are connected by the team hierarchy link.
 */
export class TeamHierarchyLinkTeam {
  /**
   * Team hierarchy links connect different teams. This represents attributes from teams that are connected by the team hierarchy link.
   */
  "attributes"?: TeamHierarchyLinkTeamAttributes;
  /**
   * The team's identifier
   */
  "id": string;
  /**
   * Team type
   */
  "type": TeamType;
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
      type: "TeamHierarchyLinkTeamAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamType",
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
    return TeamHierarchyLinkTeam.attributeTypeMap;
  }

  public constructor() {}
}
