import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgAuthorizedClientData } from "./OrgAuthorizedClientData";

/**
 * Response containing a single org authorized client.
 */
export class OrgAuthorizedClientResponse {
  /**
   * Data object representing an org authorized client.
   */
  "data": OrgAuthorizedClientData;
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
      type: "OrgAuthorizedClientData",
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
    return OrgAuthorizedClientResponse.attributeTypeMap;
  }

  public constructor() {}
}
