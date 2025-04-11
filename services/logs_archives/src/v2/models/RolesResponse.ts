import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { Role } from "./Role";

/**
 * Response containing information about multiple roles.
 */
export class RolesResponse {
  /**
   * Array of returned roles.
   */
  "data"?: Array<Role>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;
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
      type: "Array<Role>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
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
    return RolesResponse.attributeTypeMap;
  }

  public constructor() {}
}
