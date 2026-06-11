import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes for cloning a form.
 */
export class CloneFormDataAttributes {
  /**
   * The name for the cloned form. Defaults to "Copy of (source form name)" if not provided.
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
    return CloneFormDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
