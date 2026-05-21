import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentZoomConfigurationDataRequest } from "./IncidentZoomConfigurationDataRequest";

/**
 * Request to create or update a Zoom configuration.
 */
export class IncidentZoomConfigurationRequest {
  /**
   * Zoom configuration data for a request.
   */
  "data": IncidentZoomConfigurationDataRequest;
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
      type: "IncidentZoomConfigurationDataRequest",
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
    return IncidentZoomConfigurationRequest.attributeTypeMap;
  }

  public constructor() {}
}
