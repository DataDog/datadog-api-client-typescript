import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionGridCohort } from "./ProductAnalyticsRetentionGridCohort";
import { ProductAnalyticsRetentionPeriod } from "./ProductAnalyticsRetentionPeriod";
import { ProductAnalyticsUnit } from "./ProductAnalyticsUnit";

/**
 * Attributes of a retention grid response, containing the cohort rows and the period columns.
 */
export class ProductAnalyticsRetentionGridResponseAttributes {
  /**
   * The cohorts forming the rows of the grid.
   */
  "cohorts"?: Array<ProductAnalyticsRetentionGridCohort>;
  /**
   * The entity whose retention was measured.
   */
  "retentionEntity"?: string;
  /**
   * The return periods forming the columns of the grid.
   */
  "retentionPeriods"?: Array<ProductAnalyticsRetentionPeriod>;
  /**
   * Unit definitions for the grid values.
   */
  "unit"?: Array<ProductAnalyticsUnit>;
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
    cohorts: {
      baseName: "cohorts",
      type: "Array<ProductAnalyticsRetentionGridCohort>",
    },
    retentionEntity: {
      baseName: "retention_entity",
      type: "string",
    },
    retentionPeriods: {
      baseName: "retention_periods",
      type: "Array<ProductAnalyticsRetentionPeriod>",
    },
    unit: {
      baseName: "unit",
      type: "Array<ProductAnalyticsUnit>",
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
    return ProductAnalyticsRetentionGridResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
