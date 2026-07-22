import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatOrganizationData } from "./GoogleChatOrganizationData";

/**
 * Response containing a list of Google Chat organization bindings.
 */
export class GoogleChatOrganizationsResponse {
  /**
   * An array of Google Chat organization bindings.
   */
  "data": Array<GoogleChatOrganizationData>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<GoogleChatOrganizationData>",
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
    return GoogleChatOrganizationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
