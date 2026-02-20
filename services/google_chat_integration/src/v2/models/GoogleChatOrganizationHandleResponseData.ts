import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatOrganizationHandleResponseAttributes } from "./GoogleChatOrganizationHandleResponseAttributes";
import { GoogleChatOrganizationHandleType } from "./GoogleChatOrganizationHandleType";

/**
 * Organization handle data from a response.
 */
export class GoogleChatOrganizationHandleResponseData {
  /**
   * Organization handle attributes.
   */
  "attributes"?: GoogleChatOrganizationHandleResponseAttributes;
  /**
   * The ID of the organization handle.
   */
  "id"?: string;
  /**
   * Organization handle resource type.
   */
  "type"?: GoogleChatOrganizationHandleType;
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
      type: "GoogleChatOrganizationHandleResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GoogleChatOrganizationHandleType",
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
    return GoogleChatOrganizationHandleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
