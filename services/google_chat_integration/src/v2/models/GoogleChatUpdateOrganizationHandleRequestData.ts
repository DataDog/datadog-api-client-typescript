import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatUpdateOrganizationHandleRequestAttributes } from "./GoogleChatUpdateOrganizationHandleRequestAttributes";

/**
 * Organization handle data for an update request.
 */
export class GoogleChatUpdateOrganizationHandleRequestData {
  /**
   * Organization handle attributes for an update request.
   */
  "attributes": GoogleChatUpdateOrganizationHandleRequestAttributes;
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
      type: "GoogleChatUpdateOrganizationHandleRequestAttributes",
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
    return GoogleChatUpdateOrganizationHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
