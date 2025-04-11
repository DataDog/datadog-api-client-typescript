import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUser } from "./RelationshipToUser";

/**
 * Resources related to the application key.
 */
export class ApplicationKeyRelationships {
  /**
   * Relationship to user.
   */
  "ownedBy"?: RelationshipToUser;
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
    ownedBy: {
      baseName: "owned_by",
      type: "RelationshipToUser",
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
    return ApplicationKeyRelationships.attributeTypeMap;
  }

  public constructor() {}
}
