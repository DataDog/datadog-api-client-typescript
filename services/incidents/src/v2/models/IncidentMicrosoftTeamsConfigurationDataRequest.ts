import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentMicrosoftTeamsConfigurationDataAttributesRequest } from "./IncidentMicrosoftTeamsConfigurationDataAttributesRequest";
import { IncidentMicrosoftTeamsConfigurationType } from "./IncidentMicrosoftTeamsConfigurationType";

/**
 * Microsoft Teams configuration data for a request.
 */
export class IncidentMicrosoftTeamsConfigurationDataRequest {
  /**
   * Attributes for creating or updating a Microsoft Teams configuration.
   */
  "attributes": IncidentMicrosoftTeamsConfigurationDataAttributesRequest;
  /**
   * Microsoft Teams configuration resource type.
   */
  "type": IncidentMicrosoftTeamsConfigurationType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentMicrosoftTeamsConfigurationDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentMicrosoftTeamsConfigurationType",
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
    return IncidentMicrosoftTeamsConfigurationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
