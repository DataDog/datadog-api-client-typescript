import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPropertyNullFilterInputOperation } from "./ExperimentsPropertyNullFilterInputOperation";

/**
 * A measure comparison for metric source data.
 */
export class ExperimentsMeasureNullFilterInput {
  /**
   * ID of the measure on the aggregation source.
   */
  "measureId": string;
  /**
   * Comparison applied by this filter.
   */
  "operation": ExperimentsPropertyNullFilterInputOperation;
  /**
   * Omit this target or use null or a blank string.
   */
  "propertyId"?: string;
  /**
   * Values used by the comparison.
   */
  "values"?: Array<string>;
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
      type: "ExperimentsPropertyNullFilterInputOperation",
      required: true,
    },
    propertyId: {
      baseName: "property_id",
      type: "string",
    },
    values: {
      baseName: "values",
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
    return ExperimentsMeasureNullFilterInput.attributeTypeMap;
  }

  public constructor() {}
}
