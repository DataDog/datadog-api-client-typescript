import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUser } from "./RelationshipToUser";

/**
 * Powerpack relationship object.
 */
export class PowerpackRelationships {
  /**
   * Relationship to user.
   */
  "author"?: RelationshipToUser;
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
    author: {
      baseName: "author",
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
    return PowerpackRelationships.attributeTypeMap;
  }

  public constructor() {}
}
