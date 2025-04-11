import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamAttributes } from "./TeamAttributes";
import { TeamRelationships } from "./TeamRelationships";
import { TeamType } from "./TeamType";

/**
 * A team
 */
export class Team {
  /**
   * Team attributes
   */
  "attributes": TeamAttributes;
  /**
   * The team's identifier
   */
  "id": string;
  /**
   * Resources related to a team
   */
  "relationships"?: TeamRelationships;
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
      type: "TeamAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TeamRelationships",
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
    return Team.attributeTypeMap;
  }

  public constructor() {}
}
