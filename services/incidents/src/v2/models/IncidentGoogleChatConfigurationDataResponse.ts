import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleChatConfigurationDataAttributesResponse } from "./IncidentGoogleChatConfigurationDataAttributesResponse";
import { IncidentGoogleChatConfigurationRelationships } from "./IncidentGoogleChatConfigurationRelationships";
import { IncidentGoogleChatConfigurationType } from "./IncidentGoogleChatConfigurationType";

/**
 * Google Chat configuration data in a response.
 */
export class IncidentGoogleChatConfigurationDataResponse {
  /**
   * Attributes of a Google Chat configuration.
   */
  "attributes": IncidentGoogleChatConfigurationDataAttributesResponse;
  /**
   * The configuration identifier.
   */
  "id": string;
  /**
   * Relationships for a Google Chat configuration.
   */
  "relationships"?: IncidentGoogleChatConfigurationRelationships;
  /**
   * Google Chat configuration resource type.
   */
  "type": IncidentGoogleChatConfigurationType;
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
      type: "IncidentGoogleChatConfigurationDataAttributesResponse",
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
      type: "IncidentGoogleChatConfigurationRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentGoogleChatConfigurationType",
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
    return IncidentGoogleChatConfigurationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
