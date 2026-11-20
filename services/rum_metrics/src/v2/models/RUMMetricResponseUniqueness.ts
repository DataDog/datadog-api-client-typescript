import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricUniquenessWhen } from "./RUMMetricUniquenessWhen";

/**
 * The rule to count updatable events. Only present if `event_type` is `session` or `view`, and absent on older metrics created before this setting existed.
 */
export class RUMMetricResponseUniqueness {
  /**
   * When to count updatable events. `match` when the event is first seen, or `end` when the event is complete. Sessions and views are updated over time, and each one is counted once.
   */
  "when"?: RUMMetricUniquenessWhen;
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
    when: {
      baseName: "when",
      type: "RUMMetricUniquenessWhen",
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
    return RUMMetricResponseUniqueness.attributeTypeMap;
  }

  public constructor() {}
}
