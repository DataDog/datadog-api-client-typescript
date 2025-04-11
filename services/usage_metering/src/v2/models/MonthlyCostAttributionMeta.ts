import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostAttributionAggregatesBody } from "./CostAttributionAggregatesBody";
import { MonthlyCostAttributionPagination } from "./MonthlyCostAttributionPagination";

/**
 * The object containing document metadata.
 */
export class MonthlyCostAttributionMeta {
  /**
   * An array of available aggregates.
   */
  "aggregates"?: Array<CostAttributionAggregatesBody>;
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: MonthlyCostAttributionPagination;
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
    aggregates: {
      baseName: "aggregates",
      type: "Array<CostAttributionAggregatesBody>",
    },
    pagination: {
      baseName: "pagination",
      type: "MonthlyCostAttributionPagination",
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
    return MonthlyCostAttributionMeta.attributeTypeMap;
  }

  public constructor() {}
}
