/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsMetricV2DTODataAttributesDataSourceType } from "./ExperimentsMetricV2DTODataAttributesDataSourceType";
import { ExperimentsMetricV2DTODataAttributesDesiredChange } from "./ExperimentsMetricV2DTODataAttributesDesiredChange";
import { ExperimentsMetricV2DTODataAttributesMetricType } from "./ExperimentsMetricV2DTODataAttributesMetricType";
import { ExperimentsMetricV2DTODataAttributesNumeratorAggregation } from "./ExperimentsMetricV2DTODataAttributesNumeratorAggregation";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregation } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the metric.
 */
export class ExperimentsMetricV2DTODataAttributes {
  /**
   * Time when this resource was certified.
   */
  "certifiedAt"?: Date;
  /**
   * Time when this resource was created.
   */
  "createdAt"?: Date;
  /**
   * Source of the data used to calculate the metric.
   */
  "dataSourceType"?: ExperimentsMetricV2DTODataAttributesDataSourceType;
  /**
   * Source measure and aggregation settings for a metric value.
   */
  "denominatorAggregation"?: ExperimentsMetricV2DTODataAttributesNumeratorAggregation;
  /**
   * Text that explains the metric.
   */
  "description"?: string;
  /**
   * Direction of metric change considered desirable.
   */
  "desiredChange"?: ExperimentsMetricV2DTODataAttributesDesiredChange;
  /**
   * Number of experiments that reference this resource.
   */
  "experimentCount"?: number;
  /**
   * Whether to display the metric value as a percentage.
   */
  "formatAsPercent"?: boolean;
  /**
   * Threshold used when evaluating this metric as a guardrail.
   */
  "guardrailCutoffThreshold"?: number;
  /**
   * Type of metric calculation.
   */
  "metricType"?: ExperimentsMetricV2DTODataAttributesMetricType;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the metric.
   */
  "name"?: string;
  /**
   * Source measure and aggregation settings for a metric value.
   */
  "numeratorAggregation"?: ExperimentsMetricV2DTODataAttributesNumeratorAggregation;
  /**
   * Source measure and settings for a percentile metric.
   */
  "percentileAggregation"?: ExperimentsMetricV2DTODataAttributesPercentileAggregation;
  /**
   * URL with supporting information about the metric.
   */
  "referenceUrl"?: string;
  /**
   * Time when this resource was last updated.
   */
  "updatedAt"?: Date;

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
    certifiedAt: {
      baseName: "certified_at",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    dataSourceType: {
      baseName: "data_source_type",
      type: "ExperimentsMetricV2DTODataAttributesDataSourceType",
    },
    denominatorAggregation: {
      baseName: "denominator_aggregation",
      type: "ExperimentsMetricV2DTODataAttributesNumeratorAggregation",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    desiredChange: {
      baseName: "desired_change",
      type: "ExperimentsMetricV2DTODataAttributesDesiredChange",
    },
    experimentCount: {
      baseName: "experiment_count",
      type: "number",
      format: "int64",
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
    metricType: {
      baseName: "metric_type",
      type: "ExperimentsMetricV2DTODataAttributesMetricType",
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
      type: "ExperimentsMetricV2DTODataAttributesNumeratorAggregation",
    },
    percentileAggregation: {
      baseName: "percentile_aggregation",
      type: "ExperimentsMetricV2DTODataAttributesPercentileAggregation",
    },
    referenceUrl: {
      baseName: "reference_url",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
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
    return ExperimentsMetricV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
