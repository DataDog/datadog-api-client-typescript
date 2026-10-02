import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems } from "./ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems";

/**
 * Fields supplied to update the metric collection.
 */
export class ExperimentsPatchMetricCollectionV2RequestDataAttributes {
  /**
   * Text that explains the metric collection.
   */
  "description"?: string;
  /**
   * Whether the collection is used for guardrail metrics.
   */
  "isGuardrail"?: boolean;
  /**
   * Metrics included in this collection.
   */
  "metrics"?: Array<ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems>;
  /**
   * Display name of the metric collection.
   */
  "name"?: string;
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
    isGuardrail: {
      baseName: "is_guardrail",
      type: "boolean",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems>",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ExperimentsPatchMetricCollectionV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
