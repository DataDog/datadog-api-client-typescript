/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateMetricV2RequestDataAttributesDataSourceType } from "./ExperimentsCreateMetricV2RequestDataAttributesDataSourceType";
import { ExperimentsCreateMetricV2RequestDataAttributesDesiredChange } from "./ExperimentsCreateMetricV2RequestDataAttributesDesiredChange";
import { ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation } from "./ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for a metric calculated from a numerator and an optional denominator. Omit percentile_aggregation. Omit denominator_aggregation when unused.
 */
export class ExperimentsCreateMetricNumeratorAttributes {
  /**
   * Source of the data backing this metric.
   */
  "dataSourceType": ExperimentsCreateMetricV2RequestDataAttributesDataSourceType;
  /**
   * Measure and calculation settings for a numerator or denominator aggregation. Supply exactly one non-null measure.
   */
  "denominatorAggregation"?: ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation;
  /**
   * Description of the metric. Send null to leave it unset.
   */
  "description"?: string;
  /**
   * Direction of change that represents an improvement for this metric.
   */
  "desiredChange": ExperimentsCreateMetricV2RequestDataAttributesDesiredChange;
  /**
   * Whether results render as a percentage. Defaults to false when omitted.
   */
  "formatAsPercent"?: boolean;
  /**
   * Guardrail cutoff threshold. Send null to leave it unset.
   */
  "guardrailCutoffThreshold"?: number;
  /**
   * Metadata associated with migration of this resource.
   */
  "migrationMetadata"?: any;
  /**
   * Name of the metric.
   */
  "name": string;
  /**
   * Measure and calculation settings for a numerator or denominator aggregation. Supply exactly one non-null measure.
   */
  "numeratorAggregation": ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation;

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
      required: true,
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
      required: true,
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
      required: true,
    },
    numeratorAggregation: {
      baseName: "numerator_aggregation",
      type: "ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ExperimentsCreateMetricNumeratorAttributes.attributeTypeMap;
  }

  public constructor() {}
}
