import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatCreateOrganizationHandleRequestAttributes } from "./GoogleChatCreateOrganizationHandleRequestAttributes";

/**
 * Organization handle data for a create request.
 */
export class GoogleChatCreateOrganizationHandleRequestData {
  /**
   * Organization handle attributes for a create request.
   */
  "attributes": GoogleChatCreateOrganizationHandleRequestAttributes;
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
      type: "GoogleChatCreateOrganizationHandleRequestAttributes",
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
    return GoogleChatCreateOrganizationHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
