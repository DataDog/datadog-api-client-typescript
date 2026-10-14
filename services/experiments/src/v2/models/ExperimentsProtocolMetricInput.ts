import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A metric included in a protocol. Select the primary metric with `primary_metric_id`, not `is_primary`.
 */
export class ExperimentsProtocolMetricInput {
  /**
   * Metric UUID.
   */
  "metricId": string;
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
    metricId: {
      baseName: "metric_id",
      type: "string",
      required: true,
      format: "uuid",
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
    return ExperimentsProtocolMetricInput.attributeTypeMap;
  }

  public constructor() {}
}
