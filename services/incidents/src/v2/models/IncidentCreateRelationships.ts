import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NullableRelationshipToUser } from "./NullableRelationshipToUser";

/**
 * The relationships the incident will have with other resources once created.
 */
export class IncidentCreateRelationships {
  /**
   * Relationship to user.
   */
  "commanderUser": NullableRelationshipToUser | null;
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
    commanderUser: {
      baseName: "commander_user",
      type: "NullableRelationshipToUser",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
