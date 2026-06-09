import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentMSTeamsIntegrationDataResponse } from "./IncidentMSTeamsIntegrationDataResponse";

/**
 * Response with Microsoft Teams integration metadata.
 */
export class IncidentMSTeamsIntegrationResponse {
  /**
   * Microsoft Teams integration data in a response.
   */
  "data": IncidentMSTeamsIntegrationDataResponse;
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
      type: "IncidentMSTeamsIntegrationDataResponse",
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
    return IncidentMSTeamsIntegrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
