import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatCreateOrganizationHandleRequestData } from "./GoogleChatCreateOrganizationHandleRequestData";
import { GoogleChatOrganizationHandleType } from "./GoogleChatOrganizationHandleType";

/**
 * Create organization handle request.
 */
export class GoogleChatCreateOrganizationHandleRequest {
  /**
   * Organization handle data for a create request.
   */
  "data": GoogleChatCreateOrganizationHandleRequestData;
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
      type: "GoogleChatCreateOrganizationHandleRequestData",
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
    return GoogleChatCreateOrganizationHandleRequest.attributeTypeMap;
  }

  public constructor() {}
}
