import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NullableRelationshipToIncidentResponderData } from "./NullableRelationshipToIncidentResponderData";

/**
 * A relationship reference for a single incident responder.
 */
export class RelationshipToIncidentResponder {
  /**
   * Relationship to impact object.
   */
  "data": NullableRelationshipToIncidentResponderData | null;
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
      type: "NullableRelationshipToIncidentResponderData",
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
    return RelationshipToIncidentResponder.attributeTypeMap;
  }

  public constructor() {}
}
