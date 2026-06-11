import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgAuthorizedClientUpdateData } from "./OrgAuthorizedClientUpdateData";

/**
 * Request body for updating an org authorized client.
 */
export class OrgAuthorizedClientUpdateRequest {
  /**
   * Data object for updating an org authorized client.
   */
  "data": OrgAuthorizedClientUpdateData;
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
      type: "OrgAuthorizedClientUpdateData",
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
    return OrgAuthorizedClientUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
