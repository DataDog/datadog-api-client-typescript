import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleUpdateResponseData } from "./RoleUpdateResponseData";

/**
 * Response containing information about an updated role.
 */
export class RoleUpdateResponse {
  /**
   * Role object returned by the API.
   */
  "data"?: RoleUpdateResponseData;
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
      type: "RoleUpdateResponseData",
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
    return RoleUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
