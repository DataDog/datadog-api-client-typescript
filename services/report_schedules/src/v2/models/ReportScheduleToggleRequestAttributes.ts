import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleStatus } from "./ReportScheduleStatus";

/**
 * The status to set on the report schedule.
 */
export class ReportScheduleToggleRequestAttributes {
  /**
   * Whether the schedule is currently delivering reports (`active`) or paused (`inactive`).
   */
  "status": ReportScheduleStatus;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    status: {
      baseName: "status",
      type: "ReportScheduleStatus",
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
    return ReportScheduleToggleRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
