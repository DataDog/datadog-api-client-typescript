import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatOrganizationHandleResponseData } from "./GoogleChatOrganizationHandleResponseData";

/**
 * List of organization handles for monitor notifications to Google Chat spaces within a Google organization.
 */
export class GoogleChatOrganizationHandlesResponse {
  /**
   * An array of organization handles.
   */
  "data": Array<GoogleChatOrganizationHandleResponseData>;
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
      type: "Array<GoogleChatOrganizationHandleResponseData>",
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
    return GoogleChatOrganizationHandlesResponse.attributeTypeMap;
  }

  public constructor() {}
}
