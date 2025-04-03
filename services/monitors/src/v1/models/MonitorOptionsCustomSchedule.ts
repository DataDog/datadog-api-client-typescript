import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorOptionsCustomScheduleRecurrence } from "./MonitorOptionsCustomScheduleRecurrence";

/**
 * Configuration options for the custom schedule. **This feature is in private beta.**
 */
export class MonitorOptionsCustomSchedule {
  /**
   * Array of custom schedule recurrences.
   */
  "recurrences"?: Array<MonitorOptionsCustomScheduleRecurrence>;
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
    recurrences: {
      baseName: "recurrences",
      type: "Array<MonitorOptionsCustomScheduleRecurrence>",
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
    return MonitorOptionsCustomSchedule.attributeTypeMap;
  }

  public constructor() {}
}
