import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleMeetConfigurationDataRequest } from "./IncidentGoogleMeetConfigurationDataRequest";

/**
 * Request payload for creating a Google Meet configuration.
 */
export class IncidentGoogleMeetConfigurationRequest {
  /**
   * Google Meet configuration data in a create request.
   */
  "data": IncidentGoogleMeetConfigurationDataRequest;
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
      type: "IncidentGoogleMeetConfigurationDataRequest",
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
    return IncidentGoogleMeetConfigurationRequest.attributeTypeMap;
  }

  public constructor() {}
}
