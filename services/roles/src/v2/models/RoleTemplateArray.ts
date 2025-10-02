import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleTemplateData } from "./RoleTemplateData";

/**
 * The definition of `RoleTemplateArray` object.
 */
export class RoleTemplateArray {
  /**
   * The `RoleTemplateArray` `data`.
   */
  "data": Array<RoleTemplateData>;
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
      type: "Array<RoleTemplateData>",
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
    return RoleTemplateArray.attributeTypeMap;
  }

  public constructor() {}
}
