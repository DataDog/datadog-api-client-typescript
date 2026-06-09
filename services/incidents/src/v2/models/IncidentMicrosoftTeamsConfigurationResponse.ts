import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentMicrosoftTeamsConfigurationDataResponse } from "./IncidentMicrosoftTeamsConfigurationDataResponse";

/**
 * Response with a Microsoft Teams configuration.
 */
export class IncidentMicrosoftTeamsConfigurationResponse {
  /**
   * Microsoft Teams configuration data in a response.
   */
  "data": IncidentMicrosoftTeamsConfigurationDataResponse;
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
      type: "IncidentMicrosoftTeamsConfigurationDataResponse",
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
    return IncidentMicrosoftTeamsConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
