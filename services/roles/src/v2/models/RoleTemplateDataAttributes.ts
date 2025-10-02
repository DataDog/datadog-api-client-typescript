import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `RoleTemplateDataAttributes` object.
 */
export class RoleTemplateDataAttributes {
  /**
   * The `attributes` `description`.
   */
  "description"?: string;
  /**
   * The `attributes` `name`.
   */
  "name"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return RoleTemplateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
