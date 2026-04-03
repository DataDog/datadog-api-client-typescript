import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GuardrailTriggerAction } from "./GuardrailTriggerAction";

/**
 * Guardrail metric request payload.
 */
export class GuardrailMetricRequest {
  /**
   * The metric ID to monitor.
   */
  "metricId": string;
  /**
   * Action to perform when a guardrail threshold is triggered.
   */
  "triggerAction": GuardrailTriggerAction;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GuardrailMetricRequest.attributeTypeMap;
  }

  public constructor() {}
}
