import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleMeetConfigurationDataAttributesResponse } from "./IncidentGoogleMeetConfigurationDataAttributesResponse";
import { IncidentGoogleMeetConfigurationRelationships } from "./IncidentGoogleMeetConfigurationRelationships";
import { IncidentGoogleMeetConfigurationType } from "./IncidentGoogleMeetConfigurationType";

/**
 * Google Meet configuration data in a response.
 */
export class IncidentGoogleMeetConfigurationDataResponse {
  /**
   * Attributes of a Google Meet configuration.
   */
  "attributes": IncidentGoogleMeetConfigurationDataAttributesResponse;
  /**
   * The configuration identifier.
   */
  "id": string;
  /**
   * Relationships for a Google Meet configuration.
   */
  "relationships"?: IncidentGoogleMeetConfigurationRelationships;
  /**
   * Google Meet configuration resource type.
   */
  "type": IncidentGoogleMeetConfigurationType;
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
      type: "IncidentGoogleMeetConfigurationDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentGoogleMeetConfigurationRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentGoogleMeetConfigurationType",
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
    return IncidentGoogleMeetConfigurationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
