import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems } from "./ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems";

/**
 * A group of metrics supplied by the protocol.
 */
export class ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems {
  /**
   * Whether the group contains decision metrics.
   */
  "isDecision"?: boolean;
  /**
   * Metrics included in this group.
   */
  "metrics"?: Array<ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems>;
  /**
   * Display name of the metric group.
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
    isDecision: {
      baseName: "is_decision",
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
    return ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems.attributeTypeMap;
  }

  public constructor() {}
}
