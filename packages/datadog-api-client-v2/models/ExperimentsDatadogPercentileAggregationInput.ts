/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsDatadogPercentileMeasureInput } from "./ExperimentsDatadogPercentileMeasureInput";
import { ExperimentsNullableWarehouseMetricMeasureInput } from "./ExperimentsNullableWarehouseMetricMeasureInput";
import { ExperimentsPropertyFilterInput } from "./ExperimentsPropertyFilterInput";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings for a percentile aggregation that uses a Datadog measure. The other measure must be omitted or null.
 */
export class ExperimentsDatadogPercentileAggregationInput {
  /**
   * Datadog measure used to calculate a percentile.
   */
  "datadogMetricMeasure": ExperimentsDatadogPercentileMeasureInput;
  /**
   * Percentile to calculate from the measure values.
   */
  "percentile": number;
  /**
   * Property filters that select data for the percentile calculation.
   */
  "propertyFilters"?: Array<Array<ExperimentsPropertyFilterInput>>;
  /**
   * Optional warehouse measure. Use null when the other measure is selected.
   */
  "warehouseMetricMeasure"?: ExperimentsNullableWarehouseMetricMeasureInput;

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
    datadogMetricMeasure: {
      baseName: "datadog_metric_measure",
      type: "ExperimentsDatadogPercentileMeasureInput",
      required: true,
    },
    percentile: {
      baseName: "percentile",
      type: "number",
      required: true,
      format: "double",
    },
    propertyFilters: {
      baseName: "property_filters",
      type: "Array<Array<ExperimentsPropertyFilterInput>>",
    },
    warehouseMetricMeasure: {
      baseName: "warehouse_metric_measure",
      type: "ExperimentsNullableWarehouseMetricMeasureInput",
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
    return ExperimentsDatadogPercentileAggregationInput.attributeTypeMap;
  }

  public constructor() {}
}
