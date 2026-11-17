import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a step suggestions response.
 */
export class ProductAnalyticsFunnelStepSuggestionsResponseAttributes {
  /**
   * Event queries of the suggested next steps, most relevant first.
   */
  "steps"?: Array<string>;
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
    steps: {
      baseName: "steps",
      type: "Array<string>",
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
    return ProductAnalyticsFunnelStepSuggestionsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
