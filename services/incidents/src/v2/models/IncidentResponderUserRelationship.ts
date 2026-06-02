import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderUserRelationshipData } from "./IncidentResponderUserRelationshipData";

/**
 * Relationship to a user for a responder create request.
 */
export class IncidentResponderUserRelationship {
  /**
   * A user relationship data object for creating a responder.
   */
  "data": IncidentResponderUserRelationshipData;
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
    data: {
      baseName: "data",
      type: "IncidentResponderUserRelationshipData",
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
    return IncidentResponderUserRelationship.attributeTypeMap;
  }

  public constructor() {}
}
