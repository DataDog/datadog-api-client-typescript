import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleTemplateDataAttributes } from "./RoleTemplateDataAttributes";
import { RoleTemplateDataType } from "./RoleTemplateDataType";

/**
 * The definition of `RoleTemplateData` object.
 */
export class RoleTemplateData {
  /**
   * The definition of `RoleTemplateDataAttributes` object.
   */
  "attributes"?: RoleTemplateDataAttributes;
  /**
   * The `RoleTemplateData` `id`.
   */
  "id"?: string;
  /**
   * Roles resource type.
   */
  "type": RoleTemplateDataType;
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
      type: "RoleTemplateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RoleTemplateDataType",
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
    return RoleTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
