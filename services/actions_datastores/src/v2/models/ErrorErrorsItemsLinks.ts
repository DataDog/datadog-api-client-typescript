import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ErrorErrorsItemsLinks` object.
 */
export class ErrorErrorsItemsLinks {
  /**
   * The `links` `about`.
   */
  "about"?: any;
  /**
   * The `links` `type`.
   */
  "type"?: any;
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
    about: {
      baseName: "about",
      type: "any",
    },
    type: {
      baseName: "type",
      type: "any",
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
    return ErrorErrorsItemsLinks.attributeTypeMap;
  }

  public constructor() {}
}
