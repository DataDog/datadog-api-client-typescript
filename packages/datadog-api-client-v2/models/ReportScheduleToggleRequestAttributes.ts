/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleStatus } from "./ReportScheduleStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "additionalProperties"?: { [key: string]: any };

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
