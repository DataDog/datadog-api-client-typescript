import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatOrganizationHandleType } from "./GoogleChatOrganizationHandleType";
import { GoogleChatUpdateOrganizationHandleRequestData } from "./GoogleChatUpdateOrganizationHandleRequestData";

/**
 * Update organization handle request.
 */
export class GoogleChatUpdateOrganizationHandleRequest {
  /**
   * Organization handle data for an update request.
   */
  "data": GoogleChatUpdateOrganizationHandleRequestData;
  /**
   * Organization handle resource type.
   */
  "type": GoogleChatOrganizationHandleType;
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
      type: "GoogleChatUpdateOrganizationHandleRequestData",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GoogleChatOrganizationHandleType",
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
    return GoogleChatUpdateOrganizationHandleRequest.attributeTypeMap;
  }

  public constructor() {}
}
