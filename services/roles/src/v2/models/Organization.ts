import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrganizationAttributes } from "./OrganizationAttributes";
import { OrganizationsType } from "./OrganizationsType";

/**
 * Organization object.
 */
export class Organization {
  /**
   * Attributes of the organization.
   */
  "attributes"?: OrganizationAttributes;
  /**
   * ID of the organization.
   */
  "id"?: string;
  /**
   * Organizations resource type.
   */
  "type": OrganizationsType;
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
      type: "OrganizationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OrganizationsType",
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
    return Organization.attributeTypeMap;
  }

  public constructor() {}
}
