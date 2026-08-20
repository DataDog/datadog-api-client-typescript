import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFormulaJourneyRequestAttributes } from "./ProductAnalyticsFormulaJourneyRequestAttributes";
import { ProductAnalyticsFormulaJourneyRequestType } from "./ProductAnalyticsFormulaJourneyRequestType";

/**
 * The single JSON:API resource carrying a journey timeseries query. Its attributes hold the time
 * window, the bucket interval that splits it, and the journey metric to compute per bucket.
 */
export class ProductAnalyticsFormulaJourneyRequestData {
  /**
   * Attributes of a journey timeseries request.
   */
  "attributes": ProductAnalyticsFormulaJourneyRequestAttributes;
  /**
   * The resource type identifier for a journey timeseries or scalar request.
   */
  "type": ProductAnalyticsFormulaJourneyRequestType;
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
      type: "ProductAnalyticsFormulaJourneyRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFormulaJourneyRequestType",
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
    return ProductAnalyticsFormulaJourneyRequestData.attributeTypeMap;
  }

  public constructor() {}
}
