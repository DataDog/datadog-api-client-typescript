import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedFieldType } from "./IncidentUserDefinedFieldType";

/**
 * Relationship to impact object.
 */
export class RelationshipToIncidentUserDefinedFieldData {
  /**
   * A unique identifier that represents the user defined field.
   */
  "id": string;
  /**
   * The incident user defined fields type.
   */
  "type": IncidentUserDefinedFieldType;
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
      type: "IncidentUserDefinedFieldType",
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
    return RelationshipToIncidentUserDefinedFieldData.attributeTypeMap;
  }

  public constructor() {}
}
