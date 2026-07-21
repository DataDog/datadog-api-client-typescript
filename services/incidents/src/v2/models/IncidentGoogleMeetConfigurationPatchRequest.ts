import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleMeetConfigurationPatchDataRequest } from "./IncidentGoogleMeetConfigurationPatchDataRequest";

/**
 * Request payload for patching a Google Meet configuration.
 */
export class IncidentGoogleMeetConfigurationPatchRequest {
  /**
   * Google Meet configuration data in a patch request.
   */
  "data": IncidentGoogleMeetConfigurationPatchDataRequest;
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
      type: "IncidentGoogleMeetConfigurationPatchDataRequest",
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
    return IncidentGoogleMeetConfigurationPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
