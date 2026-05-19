import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabMetricStatRange } from "./ModelLabMetricStatRange";
import { ModelLabNumericRange } from "./ModelLabNumericRange";

/**
 * Available values for a specific facet key.
 */
export class ModelLabFacetValuesAttributes {
  /**
   * The name of the facet.
   */
  "facetName": string;
  /**
   * The type of the facet.
   */
  "facetType": string;
  /**
   * The ranges for each metric statistic.
   */
  "metricStatRanges"?: Array<ModelLabMetricStatRange>;
  /**
   * The numeric range of values for a facet.
   */
  "numericRange"?: ModelLabNumericRange;
  /**
   * The list of available string values for this facet.
   */
  "values": Array<string>;
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
    facetName: {
      baseName: "facet_name",
      type: "string",
      required: true,
    },
    facetType: {
      baseName: "facet_type",
      type: "string",
      required: true,
    },
    metricStatRanges: {
      baseName: "metric_stat_ranges",
      type: "Array<ModelLabMetricStatRange>",
    },
    numericRange: {
      baseName: "numeric_range",
      type: "ModelLabNumericRange",
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return ModelLabFacetValuesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
