import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedFieldAttributesUpdateRequest } from "./IncidentUserDefinedFieldAttributesUpdateRequest";
import { IncidentUserDefinedFieldType } from "./IncidentUserDefinedFieldType";

/**
 * Data for updating an incident user-defined field.
 */
export class IncidentUserDefinedFieldUpdateData {
  /**
   * Attributes for updating an incident user-defined field. All fields are optional.
   */
  "attributes": IncidentUserDefinedFieldAttributesUpdateRequest;
  /**
   * The unique identifier of the user-defined field to update.
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
    attributes: {
      baseName: "attributes",
      type: "IncidentUserDefinedFieldAttributesUpdateRequest",
      required: true,
    },
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
    return IncidentUserDefinedFieldUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
