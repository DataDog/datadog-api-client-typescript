import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsProtocolMetricInput } from "./ExperimentsProtocolMetricInput";

/**
 * A metric group supplied by the protocol. Empty decision groups are removed.
 */
export class ExperimentsProtocolMetricGroupInput {
  /**
   * Whether this group contains decision metrics.
   */
  "isDecision"?: boolean;
  /**
   * Metrics in the group.
   */
  "metrics"?: Array<ExperimentsProtocolMetricInput>;
  /**
   * Metric group name.
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
      type: "Array<ExperimentsProtocolMetricInput>",
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
    return ExperimentsProtocolMetricGroupInput.attributeTypeMap;
  }

  public constructor() {}
}
