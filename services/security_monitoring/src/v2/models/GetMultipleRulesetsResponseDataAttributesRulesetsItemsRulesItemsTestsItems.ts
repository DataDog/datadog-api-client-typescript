import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems` object.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems {
  /**
   * The `items` `annotation_count`.
   */
  "annotationCount"?: number;
  /**
   * The `items` `code`.
   */
  "code"?: string;
  /**
   * The `items` `filename`.
   */
  "filename"?: string;
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
    annotationCount: {
      baseName: "annotation_count",
      type: "number",
      format: "int64",
    },
    code: {
      baseName: "code",
      type: "string",
    },
    filename: {
      baseName: "filename",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems.attributeTypeMap;
  }

  public constructor() {}
}
