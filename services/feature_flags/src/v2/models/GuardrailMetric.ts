import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GuardrailTriggerAction } from "./GuardrailTriggerAction";

/**
 * Guardrail metric details.
 */
export class GuardrailMetric {
  /**
   * The metric ID to monitor.
   */
  "metricId": string;
  /**
   * Action to perform when a guardrail threshold is triggered.
   */
  "triggerAction": GuardrailTriggerAction;
  /**
   * The signal or system that triggered the action.
   */
  "triggeredBy"?: string;
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
    },
    triggerAction: {
      baseName: "trigger_action",
      type: "GuardrailTriggerAction",
      required: true,
    },
    triggeredBy: {
      baseName: "triggered_by",
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
    return GuardrailMetric.attributeTypeMap;
  }

  public constructor() {}
}
