import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreateData } from "./IncidentCreateData";

/**
 * Create request for an incident.
 */
export class IncidentCreateRequest {
  /**
   * Incident data for a create request.
   */
  "data": IncidentCreateData;
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
      type: "IncidentCreateData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
