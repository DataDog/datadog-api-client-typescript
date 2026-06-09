import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentMicrosoftTeamsConfigurationDataRequest } from "./IncidentMicrosoftTeamsConfigurationDataRequest";

/**
 * Request to create or update a Microsoft Teams configuration.
 */
export class IncidentMicrosoftTeamsConfigurationRequest {
  /**
   * Microsoft Teams configuration data for a request.
   */
  "data": IncidentMicrosoftTeamsConfigurationDataRequest;
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
      type: "IncidentMicrosoftTeamsConfigurationDataRequest",
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
    return IncidentMicrosoftTeamsConfigurationRequest.attributeTypeMap;
  }

  public constructor() {}
}
