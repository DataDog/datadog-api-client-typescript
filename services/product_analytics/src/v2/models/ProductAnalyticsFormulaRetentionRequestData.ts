import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFormulaRetentionRequestAttributes } from "./ProductAnalyticsFormulaRetentionRequestAttributes";
import { ProductAnalyticsFormulaRetentionRequestType } from "./ProductAnalyticsFormulaRetentionRequestType";

/**
 * The single JSON:API resource carrying a retention scalar or timeseries query. Its attributes
 * hold the time window to query and the retention query definition to evaluate.
 */
export class ProductAnalyticsFormulaRetentionRequestData {
  /**
   * Attributes of a retention scalar or retention timeseries request.
   */
  "attributes": ProductAnalyticsFormulaRetentionRequestAttributes;
  /**
   * The resource type identifier for a retention scalar or retention timeseries request.
   */
  "type": ProductAnalyticsFormulaRetentionRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsFormulaRetentionRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFormulaRetentionRequestType",
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
    return ProductAnalyticsFormulaRetentionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
