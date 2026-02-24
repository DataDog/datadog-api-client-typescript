import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImportResponseAttributes } from "./IncidentImportResponseAttributes";
import { IncidentImportResponseRelationships } from "./IncidentImportResponseRelationships";
import { IncidentType } from "./IncidentType";

/**
 * Incident data from an import response.
 */
export class IncidentImportResponseData {
  /**
   * The incident's attributes from an import response.
   */
  "attributes"?: IncidentImportResponseAttributes;
  /**
   * The incident's ID.
   */
  "id": string;
  /**
   * The incident's relationships from an import response.
   */
  "relationships"?: IncidentImportResponseRelationships;
  /**
   * Incident resource type.
   */
  "type": IncidentType;
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
      type: "IncidentImportResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImportResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentType",
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
    return IncidentImportResponseData.attributeTypeMap;
  }

  public constructor() {}
}
