import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkTeamAttributes } from "./TeamHierarchyLinkTeamAttributes";
import { TeamType } from "./TeamType";

/**
 * Team information in hierarchy link context
 */
export class TeamHierarchyLinkTeam {
  /**
   * Team attributes in hierarchy link context
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
