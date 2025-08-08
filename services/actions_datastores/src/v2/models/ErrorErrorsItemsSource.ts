import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ErrorErrorsItemsSource` object.
 */
export class ErrorErrorsItemsSource {
  /**
   * The `source` `header`.
   */
  "header"?: string;
  /**
   * The `source` `parameter`.
   */
  "parameter"?: string;
  /**
   * The `source` `pointer`.
   */
  "pointer"?: string;
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
    header: {
      baseName: "header",
      type: "string",
    },
    parameter: {
      baseName: "parameter",
      type: "string",
    },
    pointer: {
      baseName: "pointer",
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
    return ErrorErrorsItemsSource.attributeTypeMap;
  }

  public constructor() {}
}
