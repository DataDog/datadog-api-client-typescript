import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorOptionsCustomSchedule } from "./MonitorOptionsCustomSchedule";
import { MonitorOptionsSchedulingOptionsEvaluationWindow } from "./MonitorOptionsSchedulingOptionsEvaluationWindow";

/**
 * Configuration options for scheduling.
 */
export class MonitorOptionsSchedulingOptions {
  /**
   * Configuration options for the custom schedule. **This feature is in private beta.**
   */
  "customSchedule"?: MonitorOptionsCustomSchedule;
  /**
   * Configuration options for the evaluation window. If `hour_starts` is set, no other fields may be set. Otherwise, `day_starts` and `month_starts` must be set together.
   */
  "evaluationWindow"?: MonitorOptionsSchedulingOptionsEvaluationWindow;
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
    customSchedule: {
      baseName: "custom_schedule",
      type: "MonitorOptionsCustomSchedule",
    },
    evaluationWindow: {
      baseName: "evaluation_window",
      type: "MonitorOptionsSchedulingOptionsEvaluationWindow",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorOptionsSchedulingOptions.attributeTypeMap;
  }

  public constructor() {}
}
