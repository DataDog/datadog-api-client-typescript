/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeRestriction } from "./TimeRestriction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Support hours during which the escalation policy will be executed. Outside of these hours, the escalation policy will be on hold and triggered once the next support hours window starts. This is mutually exclusive with the top-level `time_restriction` field on the routing rule.
 */
export class RoutingRuleEscalationPolicyActionSupportHours {
  /**
   * The list of support hours time windows.
   */
  "restrictions"?: Array<TimeRestriction>;
  /**
   * The time zone in which the support hours are expressed.
   */
  "timeZone": string;

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
    restrictions: {
      baseName: "restrictions",
      type: "Array<TimeRestriction>",
    },
    timeZone: {
      baseName: "time_zone",
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
    return RoutingRuleEscalationPolicyActionSupportHours.attributeTypeMap;
  }

  public constructor() {}
}
