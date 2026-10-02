import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metric in an experiment metric group, with its name and primary metric designation.
 */
export class ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems {
  /**
   * Whether this is the experiment primary metric.
   */
  "isPrimary": boolean;
  /**
   * Identifier of the metric in the group.
   */
  "metricId": string;
  /**
   * Display name of the metric in the group.
   */
  "metricName": string;
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
    isPrimary: {
      baseName: "is_primary",
      type: "boolean",
      required: true,
    },
    metricId: {
      baseName: "metric_id",
      type: "string",
      required: true,
    },
    metricName: {
      baseName: "metric_name",
      type: "string",
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
    return ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems.attributeTypeMap;
  }

  public constructor() {}
}
