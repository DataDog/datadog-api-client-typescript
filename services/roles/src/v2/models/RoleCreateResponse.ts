import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleCreateResponseData } from "./RoleCreateResponseData";

/**
 * Response containing information about a created role.
 */
export class RoleCreateResponse {
  /**
   * Role object returned by the API.
   */
  "data"?: RoleCreateResponseData;
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
      type: "RoleCreateResponseData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
