import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImportRequestData } from "./IncidentImportRequestData";

/**
 * Import request for an incident. Used to import historical incidents from external systems.
 */
export class IncidentImportRequest {
  /**
   * Incident data for an import request.
   */
  "data": IncidentImportRequestData;
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
      type: "IncidentImportRequestData",
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
    return IncidentImportRequest.attributeTypeMap;
  }

  public constructor() {}
}
