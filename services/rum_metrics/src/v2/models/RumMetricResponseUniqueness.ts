import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricUniquenessWhen } from "./RumMetricUniquenessWhen";

/**
 * The rule to count updatable events. Is only set if `event_type` is `session` or `view`.
 */
export class RumMetricResponseUniqueness {
  /**
   * When to count updatable events. `match` when the event is first seen, or `end` when the event is complete.
   */
  "when"?: RumMetricUniquenessWhen;
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
      type: "RumMetricUniquenessWhen",
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
    return RumMetricResponseUniqueness.attributeTypeMap;
  }

  public constructor() {}
}
