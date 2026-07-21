import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleChatConfigurationDataAttributesRequest } from "./IncidentGoogleChatConfigurationDataAttributesRequest";
import { IncidentGoogleChatConfigurationRelationshipsRequest } from "./IncidentGoogleChatConfigurationRelationshipsRequest";
import { IncidentGoogleChatConfigurationType } from "./IncidentGoogleChatConfigurationType";

/**
 * Google Chat configuration data in a create request.
 */
export class IncidentGoogleChatConfigurationDataRequest {
  /**
   * Attributes for creating a Google Chat configuration.
   */
  "attributes": IncidentGoogleChatConfigurationDataAttributesRequest;
  /**
   * Relationships for a Google Chat configuration create request.
   */
  "relationships": IncidentGoogleChatConfigurationRelationshipsRequest;
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
      type: "IncidentGoogleChatConfigurationDataAttributesRequest",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentGoogleChatConfigurationRelationshipsRequest",
      required: true,
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
    return IncidentGoogleChatConfigurationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
