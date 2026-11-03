/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsMetricCollectionV2DTODataAttributesMetricsItems } from "./ExperimentsMetricCollectionV2DTODataAttributesMetricsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the metric collection.
 */
export class ExperimentsMetricCollectionV2DTODataAttributes {
  /**
   * Time when this resource was created.
   */
  "createdAt"?: Date;
  /**
   * Text that explains the metric collection.
   */
  "description"?: string;
  /**
   * Whether the collection is used for guardrail metrics.
   */
  "isGuardrail"?: boolean;
  /**
   * Number of metrics in this collection.
   */
  "metricCount"?: number;
  /**
   * Metrics included in this collection.
   */
  "metrics"?: Array<ExperimentsMetricCollectionV2DTODataAttributesMetricsItems>;
  /**
   * Display name of the metric collection.
   */
  "name"?: string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    isGuardrail: {
      baseName: "is_guardrail",
      type: "boolean",
    },
    metricCount: {
      baseName: "metric_count",
      type: "number",
      format: "int64",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<ExperimentsMetricCollectionV2DTODataAttributesMetricsItems>",
    },
    name: {
      baseName: "name",
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
    return ExperimentsMetricCollectionV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
