import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalOrgAttributes } from "./GlobalOrgAttributes";
import { GlobalOrgType } from "./GlobalOrgType";

/**
 * An organization associated with the authenticated user.
 */
export class GlobalOrgData {
  /**
   * Attributes of an organization associated with the authenticated user.
   */
  "attributes": GlobalOrgAttributes;
  /**
   * The resource type for global user organizations.
   */
  "type": GlobalOrgType;
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
      type: "GlobalOrgAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GlobalOrgType",
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
    return GlobalOrgData.attributeTypeMap;
  }

  public constructor() {}
}
