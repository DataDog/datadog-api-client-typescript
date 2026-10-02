import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Lower and upper bounds of the reported statistical interval.
 */
export class ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval {
  /**
   * Lower bound of the reported interval.
   */
  "lower"?: number;
  /**
   * Upper bound of the reported interval.
   */
  "upper"?: number;
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
    lower: {
      baseName: "lower",
      type: "number",
      format: "double",
    },
    upper: {
      baseName: "upper",
      type: "number",
      format: "double",
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
    return ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval.attributeTypeMap;
  }

  public constructor() {}
}
