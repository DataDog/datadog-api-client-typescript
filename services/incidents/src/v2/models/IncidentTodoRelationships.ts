import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUser } from "./RelationshipToUser";

/**
 * The incident's relationships from a response.
 */
export class IncidentTodoRelationships {
  /**
   * Relationship to user.
   */
  "createdByUser"?: RelationshipToUser;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;
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
    createdByUser: {
      baseName: "created_by_user",
      type: "RelationshipToUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
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
    return IncidentTodoRelationships.attributeTypeMap;
  }

  public constructor() {}
}
