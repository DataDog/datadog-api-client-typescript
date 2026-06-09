import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentMicrosoftTeamsConfigurationDataAttributesResponse } from "./IncidentMicrosoftTeamsConfigurationDataAttributesResponse";
import { IncidentMicrosoftTeamsConfigurationType } from "./IncidentMicrosoftTeamsConfigurationType";

/**
 * Microsoft Teams configuration data in a response.
 */
export class IncidentMicrosoftTeamsConfigurationDataResponse {
  /**
   * Attributes of a Microsoft Teams configuration.
   */
  "attributes": IncidentMicrosoftTeamsConfigurationDataAttributesResponse;
  /**
   * The configuration identifier.
   */
  "id": string;
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
      type: "IncidentMicrosoftTeamsConfigurationDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentMicrosoftTeamsConfigurationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
