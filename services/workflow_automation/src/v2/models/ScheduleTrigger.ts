import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Trigger a workflow from a Schedule. The workflow must be published.
 */
export class ScheduleTrigger {
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
