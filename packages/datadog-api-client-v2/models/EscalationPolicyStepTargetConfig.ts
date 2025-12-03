/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyStepTargetConfigSchedule } from "./EscalationPolicyStepTargetConfigSchedule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for an escalation target, such as schedule position.
 */
export class EscalationPolicyStepTargetConfig {
  /**
   * Schedule-specific configuration for an escalation target.
   */
  "schedule"?: EscalationPolicyStepTargetConfigSchedule;

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
    schedule: {
      baseName: "schedule",
      type: "EscalationPolicyStepTargetConfigSchedule",
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
    return EscalationPolicyStepTargetConfig.attributeTypeMap;
  }

  public constructor() {}
}
