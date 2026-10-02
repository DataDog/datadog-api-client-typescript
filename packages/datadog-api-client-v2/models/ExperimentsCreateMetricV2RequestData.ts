/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateMetricV2RequestDataAttributes } from "./ExperimentsCreateMetricV2RequestDataAttributes";
import { MetricType } from "./MetricType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metric resource to create.
 */
export class ExperimentsCreateMetricV2RequestData {
  /**
   * Configuration for the new metric. Supply either numerator_aggregation or percentile_aggregation. A denominator_aggregation requires numerator_aggregation. Omit unused aggregation fields; do not send them as null.
   */
  "attributes": ExperimentsCreateMetricV2RequestDataAttributes;
  /**
   * The metric resource type.
   */
  "type": MetricType;

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
    attributes: {
      baseName: "attributes",
      type: "ExperimentsCreateMetricV2RequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricType",
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
    return ExperimentsCreateMetricV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
