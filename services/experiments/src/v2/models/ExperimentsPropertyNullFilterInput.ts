import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPropertyNullFilterInputOperation } from "./ExperimentsPropertyNullFilterInputOperation";

/**
 * A property comparison for metric source data.
 */
export class ExperimentsPropertyNullFilterInput {
  /**
   * Omit this target or use null or a blank string.
   */
  "measureId"?: string;
  /**
   * Comparison applied by this filter.
   */
  "operation": ExperimentsPropertyNullFilterInputOperation;
  /**
   * ID of the property on the aggregation source.
   */
  "propertyId": string;
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
    },
    operation: {
      baseName: "operation",
      type: "ExperimentsPropertyNullFilterInputOperation",
      required: true,
    },
    propertyId: {
      baseName: "property_id",
      type: "string",
      required: true,
      format: "uuid",
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
    return ExperimentsPropertyNullFilterInput.attributeTypeMap;
  }

  public constructor() {}
}
