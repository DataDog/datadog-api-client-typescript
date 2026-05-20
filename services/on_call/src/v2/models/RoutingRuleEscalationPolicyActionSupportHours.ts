import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeRestriction } from "./TimeRestriction";

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
