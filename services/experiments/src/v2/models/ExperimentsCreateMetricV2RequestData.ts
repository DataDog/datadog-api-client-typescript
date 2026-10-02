import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricV2RequestDataAttributes } from "./ExperimentsCreateMetricV2RequestDataAttributes";
import { MetricType } from "./MetricType";

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
