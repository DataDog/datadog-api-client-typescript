import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricV2RequestDataAttributesDataSourceType } from "./ExperimentsCreateMetricV2RequestDataAttributesDataSourceType";
import { ExperimentsCreateMetricV2RequestDataAttributesDesiredChange } from "./ExperimentsCreateMetricV2RequestDataAttributesDesiredChange";
import { ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation } from "./ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation";
import { ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregation } from "./ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregation";

/**
 * Fields supplied to update the metric. Every attribute is optional; omit an attribute to leave it unchanged.
 */
export class ExperimentsUpdateMetricV2RequestDataAttributes {
  /**
   * Source of the data backing this metric.
   */
  "dataSourceType"?: ExperimentsCreateMetricV2RequestDataAttributesDataSourceType;
  /**
   * Measure and calculation settings for a numerator or denominator aggregation. Supply exactly one non-null measure.
   */
  "denominatorAggregation"?: ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation;
  /**
   * Send null to clear the description. Omit to leave it unchanged.
   */
  "description"?: string;
  /**
   * Direction of change that represents an improvement for this metric.
   */
  "desiredChange"?: ExperimentsCreateMetricV2RequestDataAttributesDesiredChange;
  /**
   * Whether results render as a percentage. Omit to leave it unchanged.
   */
  "formatAsPercent"?: boolean;
  /**
   * Send null to clear a stored threshold. Omit to leave it unchanged.
   */
  "guardrailCutoffThreshold"?: number;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Name of the metric. Omit to leave it unchanged.
   */
  "name"?: string;
  /**
   * Measure and calculation settings for a numerator or denominator aggregation. Supply exactly one non-null measure.
   */
  "numeratorAggregation"?: ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation;
  /**
   * Measure and percentile to calculate for the metric. Supply exactly one non-null measure.
   */
  "percentileAggregation"?: ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregation;
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
    dataSourceType: {
      baseName: "data_source_type",
      type: "ExperimentsCreateMetricV2RequestDataAttributesDataSourceType",
    },
    denominatorAggregation: {
      baseName: "denominator_aggregation",
      type: "ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    desiredChange: {
      baseName: "desired_change",
      type: "ExperimentsCreateMetricV2RequestDataAttributesDesiredChange",
    },
    formatAsPercent: {
      baseName: "format_as_percent",
      type: "boolean",
    },
    guardrailCutoffThreshold: {
      baseName: "guardrail_cutoff_threshold",
      type: "number",
      format: "double",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    numeratorAggregation: {
      baseName: "numerator_aggregation",
      type: "ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation",
    },
    percentileAggregation: {
      baseName: "percentile_aggregation",
      type: "ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregation",
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
    return ExperimentsUpdateMetricV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
