import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionAttributes } from "./FormVersionAttributes";

/**
 * The attributes for a list of form versions.
 */
export class ListFormVersionsDataAttributes {
  /**
   * The list of versions for the form.
   */
  "versions": Array<FormVersionAttributes>;
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
    versions: {
      baseName: "versions",
      type: "Array<FormVersionAttributes>",
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
    return ListFormVersionsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
