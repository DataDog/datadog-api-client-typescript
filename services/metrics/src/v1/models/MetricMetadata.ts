import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object with all metric related metadata.
 */
export class MetricMetadata {
  /**
   * Metric description.
   */
  "description"?: string;
  /**
   * Name of the integration that sent the metric if applicable.
   */
  "integration"?: string;
  /**
   * Per unit of the metric such as `second` in `bytes per second`.
   */
  "perUnit"?: string;
  /**
   * A more human-readable and abbreviated version of the metric name.
   */
  "shortName"?: string;
  /**
   * StatsD flush interval of the metric in seconds if applicable.
   */
  "statsdInterval"?: number;
  /**
   * Metric type such as `gauge` or `rate`.
   */
  "type"?: string;
  /**
   * Primary unit of the metric such as `byte` or `operation`.
   */
  "unit"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    integration: {
      baseName: "integration",
      type: "string",
    },
    perUnit: {
      baseName: "per_unit",
      type: "string",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
    },
    statsdInterval: {
      baseName: "statsd_interval",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    unit: {
      baseName: "unit",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricMetadata.attributeTypeMap;
  }

  public constructor() {}
}
