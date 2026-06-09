import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatuspageIncidentDataRequest } from "./IncidentStatuspageIncidentDataRequest";

/**
 * Request to create or update a Statuspage incident.
 */
export class IncidentStatuspageIncidentRequest {
  /**
   * Statuspage incident data for a request.
   */
  "data": IncidentStatuspageIncidentDataRequest;
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
      type: "IncidentStatuspageIncidentDataRequest",
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
    return IncidentStatuspageIncidentRequest.attributeTypeMap;
  }

  public constructor() {}
}
