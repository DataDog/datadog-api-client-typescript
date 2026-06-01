import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleChatConfigurationPatchDataRequest } from "./IncidentGoogleChatConfigurationPatchDataRequest";

/**
 * Request payload for patching a Google Chat configuration.
 */
export class IncidentGoogleChatConfigurationPatchRequest {
  /**
   * Google Chat configuration data in a patch request.
   */
  "data": IncidentGoogleChatConfigurationPatchDataRequest;
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
      type: "IncidentGoogleChatConfigurationPatchDataRequest",
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
    return IncidentGoogleChatConfigurationPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
