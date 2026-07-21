import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleChatConfigurationDataRequest } from "./IncidentGoogleChatConfigurationDataRequest";

/**
 * Request payload for creating a Google Chat configuration.
 */
export class IncidentGoogleChatConfigurationRequest {
  /**
   * Google Chat configuration data in a create request.
   */
  "data": IncidentGoogleChatConfigurationDataRequest;
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
      type: "IncidentGoogleChatConfigurationDataRequest",
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
    return IncidentGoogleChatConfigurationRequest.attributeTypeMap;
  }

  public constructor() {}
}
