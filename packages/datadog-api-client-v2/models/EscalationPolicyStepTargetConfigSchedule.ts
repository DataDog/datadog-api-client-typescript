/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleTargetPosition } from "./ScheduleTargetPosition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schedule-specific configuration for an escalation target.
 */
export class EscalationPolicyStepTargetConfigSchedule {
  /**
   * Specifies the position of a schedule target (example `previous`, `current`, or `next`).
   */
  "position"?: ScheduleTargetPosition;

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
    position: {
      baseName: "position",
      type: "ScheduleTargetPosition",
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
    return EscalationPolicyStepTargetConfigSchedule.attributeTypeMap;
  }

  public constructor() {}
}
