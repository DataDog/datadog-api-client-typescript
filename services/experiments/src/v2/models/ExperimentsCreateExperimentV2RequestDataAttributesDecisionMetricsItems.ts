import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metric used to make an experiment decision, with its primary metric designation.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems {
  /**
   * Whether this is the experiment primary metric.
   */
  "isPrimary": boolean;
  /**
   * Decision metric UUID.
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
    isPrimary: {
      baseName: "is_primary",
      type: "boolean",
      required: true,
    },
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
    return ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems.attributeTypeMap;
  }

  public constructor() {}
}
