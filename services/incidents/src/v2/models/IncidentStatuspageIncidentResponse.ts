import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatuspageIncidentDataResponse } from "./IncidentStatuspageIncidentDataResponse";

/**
 * Response with Statuspage incident integration metadata.
 */
export class IncidentStatuspageIncidentResponse {
  /**
   * Statuspage incident data in a response.
   */
  "data": IncidentStatuspageIncidentDataResponse;
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
      type: "IncidentStatuspageIncidentDataResponse",
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
    return IncidentStatuspageIncidentResponse.attributeTypeMap;
  }

  public constructor() {}
}
