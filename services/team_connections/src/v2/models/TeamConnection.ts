import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamConnectionAttributes } from "./TeamConnectionAttributes";
import { TeamConnectionRelationships } from "./TeamConnectionRelationships";
import { TeamConnectionType } from "./TeamConnectionType";

/**
 * A relationship between a Datadog team and a team from another external system.
 */
export class TeamConnection {
  /**
   * Attributes of the team connection.
   */
  "attributes"?: TeamConnectionAttributes;
  /**
   * The unique identifier of the team connection.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return TeamConnection.attributeTypeMap;
  }

  public constructor() {}
}
