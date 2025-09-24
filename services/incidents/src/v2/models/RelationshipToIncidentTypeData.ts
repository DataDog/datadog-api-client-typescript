import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypeType } from "./IncidentTypeType";

/**
 * Relationship to incident type object.
 */
export class RelationshipToIncidentTypeData {
  /**
   * The incident type's ID.
   */
  "id": string;
  /**
   * Incident type resource type.
   */
  "type": IncidentTypeType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentTypeType",
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
    return RelationshipToIncidentTypeData.attributeTypeMap;
  }

  public constructor() {}
}
