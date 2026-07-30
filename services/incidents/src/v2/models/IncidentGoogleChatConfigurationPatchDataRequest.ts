import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleChatConfigurationPatchDataAttributesRequest } from "./IncidentGoogleChatConfigurationPatchDataAttributesRequest";
import { IncidentGoogleChatConfigurationType } from "./IncidentGoogleChatConfigurationType";

/**
 * Google Chat configuration data in a patch request.
 */
export class IncidentGoogleChatConfigurationPatchDataRequest {
  /**
   * Attributes for patching a Google Chat configuration. All fields are optional.
   */
  "attributes"?: IncidentGoogleChatConfigurationPatchDataAttributesRequest;
  /**
   * The configuration identifier.
   */
  "id": string;
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
      type: "IncidentGoogleChatConfigurationPatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentGoogleChatConfigurationPatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
