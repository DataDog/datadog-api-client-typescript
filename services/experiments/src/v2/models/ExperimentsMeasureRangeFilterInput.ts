import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMeasureRangeFilterInputOperation } from "./ExperimentsMeasureRangeFilterInputOperation";

/**
 * A measure comparison for metric source data.
 */
export class ExperimentsMeasureRangeFilterInput {
  /**
   * ID of the measure on the aggregation source.
   */
  "measureId": string;
  /**
   * Comparison applied by this filter.
   */
  "operation": ExperimentsMeasureRangeFilterInputOperation;
  /**
   * Omit this target or use null or a blank string.
   */
  "propertyId"?: string;
  /**
   * Values used by the comparison.
   */
  "values": [string, string];
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
    measureId: {
      baseName: "measure_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    operation: {
      baseName: "operation",
      type: "ExperimentsMeasureRangeFilterInputOperation",
      required: true,
    },
    propertyId: {
      baseName: "property_id",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "[string, string]",
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
    return ExperimentsMeasureRangeFilterInput.attributeTypeMap;
  }

  public constructor() {}
}
