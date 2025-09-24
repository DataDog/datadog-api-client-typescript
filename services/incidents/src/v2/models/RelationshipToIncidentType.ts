import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentTypeData } from "./RelationshipToIncidentTypeData";

/**
 * Relationship to an incident type.
 */
export class RelationshipToIncidentType {
  /**
   * Relationship to incident type object.
   */
  "data": RelationshipToIncidentTypeData;
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
      type: "RelationshipToIncidentTypeData",
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
    return RelationshipToIncidentType.attributeTypeMap;
  }

  public constructor() {}
}
