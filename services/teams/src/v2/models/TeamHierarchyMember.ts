import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyMemberAttributes } from "./TeamHierarchyMemberAttributes";
import { TeamHierarchyMemberRelationships } from "./TeamHierarchyMemberRelationships";
import { TeamHierarchyMemberType } from "./TeamHierarchyMemberType";

/**
 * A user relationship to the requested team.
 */
export class TeamHierarchyMember {
  /**
   * Membership attributes relative to the requested team.
   */
  "attributes": TeamHierarchyMemberAttributes;
  /**
   * Relationship identifier containing the team UUID and user UUID.
   */
  "id": string;
  /**
   * User and requested team linkage.
   */
  "relationships": TeamHierarchyMemberRelationships;
  /**
   * Team hierarchy membership resource type.
   */
  "type": TeamHierarchyMemberType;
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
      type: "TeamHierarchyMemberAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TeamHierarchyMemberRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamHierarchyMemberType",
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
    return TeamHierarchyMember.attributeTypeMap;
  }

  public constructor() {}
}
