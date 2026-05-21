import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentZoomIntegrationDataResponse } from "./IncidentZoomIntegrationDataResponse";

/**
 * Response with Zoom integration metadata.
 */
export class IncidentZoomIntegrationResponse {
  /**
   * Zoom integration data in a response.
   */
  "data": IncidentZoomIntegrationDataResponse;
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
      type: "IncidentZoomIntegrationDataResponse",
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
    return IncidentZoomIntegrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
