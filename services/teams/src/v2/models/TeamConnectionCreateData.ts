import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamConnectionAttributes } from "./TeamConnectionAttributes";
import { TeamConnectionRelationships } from "./TeamConnectionRelationships";
import { TeamConnectionType } from "./TeamConnectionType";

/**
 * Data for creating a team connection.
 */
export class TeamConnectionCreateData {
  /**
   * Attributes of the team connection.
   */
  "attributes"?: TeamConnectionAttributes;
  /**
   * Relationships of the team connection.
   */
  "relationships"?: TeamConnectionRelationships;
  /**
   * Team connection resource type.
   */
  "type": TeamConnectionType;
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
      type: "TeamConnectionAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "TeamConnectionRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamConnectionType",
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
    return TeamConnectionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
