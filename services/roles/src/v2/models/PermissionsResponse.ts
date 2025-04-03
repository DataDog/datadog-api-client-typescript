import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Permission } from "./Permission";

/**
 * Payload with API-returned permissions.
 */
export class PermissionsResponse {
  /**
   * Array of permissions.
   */
  "data"?: Array<Permission>;
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
      type: "Array<Permission>",
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
    return PermissionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
