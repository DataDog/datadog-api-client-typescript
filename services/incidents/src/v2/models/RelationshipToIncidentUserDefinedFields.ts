import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentUserDefinedFieldData } from "./RelationshipToIncidentUserDefinedFieldData";

/**
 * Relationship to incident user defined fields.
 */
export class RelationshipToIncidentUserDefinedFields {
  /**
   * An array of user defined fields.
   */
  "data": Array<RelationshipToIncidentUserDefinedFieldData>;
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
      type: "Array<RelationshipToIncidentUserDefinedFieldData>",
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
    return RelationshipToIncidentUserDefinedFields.attributeTypeMap;
  }

  public constructor() {}
}
