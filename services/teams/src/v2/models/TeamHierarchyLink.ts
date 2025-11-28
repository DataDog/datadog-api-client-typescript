import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkAttributes } from "./TeamHierarchyLinkAttributes";
import { TeamHierarchyLinkRelationships } from "./TeamHierarchyLinkRelationships";
import { TeamHierarchyLinkType } from "./TeamHierarchyLinkType";

/**
 * Team hierarchy link
 */
export class TeamHierarchyLink {
  /**
   * Team hierarchy link attributes
   */
  "attributes": TeamHierarchyLinkAttributes;
  /**
   * The team hierarchy link's identifier
   */
  "id": string;
  /**
   * Team hierarchy link relationships
   */
  "relationships"?: TeamHierarchyLinkRelationships;
  /**
   * Team hierarchy link type
   */
  "type": TeamHierarchyLinkType;
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
      type: "TeamHierarchyLinkAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TeamHierarchyLinkRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamHierarchyLinkType",
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
    return TeamHierarchyLink.attributeTypeMap;
  }

  public constructor() {}
}
