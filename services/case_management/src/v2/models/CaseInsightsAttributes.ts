import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseInsight } from "./CaseInsight";

/**
 * Attributes for adding or removing insights from a case.
 */
export class CaseInsightsAttributes {
  /**
   * Array of insights to add to or remove from a case.
   */
  "insights": Array<CaseInsight>;
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
    insights: {
      baseName: "insights",
      type: "Array<CaseInsight>",
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
    return CaseInsightsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
