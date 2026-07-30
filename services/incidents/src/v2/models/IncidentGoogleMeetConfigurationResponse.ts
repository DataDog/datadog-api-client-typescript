import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleMeetConfigurationDataResponse } from "./IncidentGoogleMeetConfigurationDataResponse";
import { IncidentUserData } from "./IncidentUserData";

/**
 * Response with a Google Meet configuration.
 */
export class IncidentGoogleMeetConfigurationResponse {
  /**
   * Google Meet configuration data in a response.
   */
  "data": IncidentGoogleMeetConfigurationDataResponse;
  /**
   * Included related resources.
   */
  "included"?: Array<IncidentUserData>;
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
      type: "IncidentGoogleMeetConfigurationDataResponse",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentUserData>",
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
    return IncidentGoogleMeetConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
