import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImportRelationships } from "./IncidentImportRelationships";
import { IncidentImportRequestAttributes } from "./IncidentImportRequestAttributes";
import { IncidentType } from "./IncidentType";

/**
 * Incident data for an import request.
 */
export class IncidentImportRequestData {
  /**
   * The incident's attributes for an import request.
   */
  "attributes": IncidentImportRequestAttributes;
  /**
   * The relationships for an incident import request.
   */
  "relationships"?: IncidentImportRelationships;
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
      type: "IncidentImportRequestAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImportRelationships",
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
    return IncidentImportRequestData.attributeTypeMap;
  }

  public constructor() {}
}
