import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleTriggerOverlapBehavior } from "./ScheduleTriggerOverlapBehavior";

/**
 * Trigger a workflow from a Schedule. The workflow must be published.
 */
export class ScheduleTrigger {
  /**
   * Controls whether a scheduled workflow run may start while another instance is still running.
   */
  "overlapBehavior"?: ScheduleTriggerOverlapBehavior;
  /**
   * Recurrence rule expression for scheduling.
   */
  "rruleExpression": string;
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
    overlapBehavior: {
      baseName: "overlapBehavior",
      type: "ScheduleTriggerOverlapBehavior",
    },
    rruleExpression: {
      baseName: "rruleExpression",
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
    return ScheduleTrigger.attributeTypeMap;
  }

  public constructor() {}
}
