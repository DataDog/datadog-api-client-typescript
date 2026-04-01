import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedFieldAttributesResponse } from "./IncidentUserDefinedFieldAttributesResponse";
import { IncidentUserDefinedFieldRelationships } from "./IncidentUserDefinedFieldRelationships";
import { IncidentUserDefinedFieldType } from "./IncidentUserDefinedFieldType";

/**
 * Data object for an incident user-defined field response.
 */
export class IncidentUserDefinedFieldResponseData {
  /**
   * Attributes of an incident user-defined field.
   */
  "attributes": IncidentUserDefinedFieldAttributesResponse;
  /**
   * The unique identifier of the user-defined field.
   */
  "id": string;
  /**
   * Relationships of an incident user-defined field.
   */
  "relationships": IncidentUserDefinedFieldRelationships;
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
      type: "IncidentUserDefinedFieldAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentUserDefinedFieldRelationships",
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
    return IncidentUserDefinedFieldResponseData.attributeTypeMap;
  }

  public constructor() {}
}
