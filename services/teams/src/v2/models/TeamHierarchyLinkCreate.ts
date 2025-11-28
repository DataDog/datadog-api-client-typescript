import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkCreateRelationships } from "./TeamHierarchyLinkCreateRelationships";
import { TeamHierarchyLinkType } from "./TeamHierarchyLinkType";

/**
 * Team hierarchy link creation
 */
export class TeamHierarchyLinkCreate {
  /**
   * Team hierarchy link creation relationships
   */
  "relationships": TeamHierarchyLinkCreateRelationships;
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
    relationships: {
      baseName: "relationships",
      type: "TeamHierarchyLinkCreateRelationships",
      required: true,
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
    return TeamHierarchyLinkCreate.attributeTypeMap;
  }

  public constructor() {}
}
