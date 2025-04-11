import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUpdateData } from "./IncidentUpdateData";

/**
 * Update request for an incident.
 */
export class IncidentUpdateRequest {
  /**
   * Incident data for an update request.
   */
  "data": IncidentUpdateData;
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
      type: "IncidentUpdateData",
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
    return IncidentUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
