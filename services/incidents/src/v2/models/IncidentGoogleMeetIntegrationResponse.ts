import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleMeetIntegrationDataResponse } from "./IncidentGoogleMeetIntegrationDataResponse";

/**
 * Response with Google Meet integration metadata.
 */
export class IncidentGoogleMeetIntegrationResponse {
  /**
   * Google Meet integration data in a response.
   */
  "data": IncidentGoogleMeetIntegrationDataResponse;
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
      type: "IncidentGoogleMeetIntegrationDataResponse",
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
    return IncidentGoogleMeetIntegrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
