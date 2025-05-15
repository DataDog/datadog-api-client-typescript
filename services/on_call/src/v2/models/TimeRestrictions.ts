import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeRestriction } from "./TimeRestriction";

/**
 * Holds time zone information and a list of time restrictions for a routing rule.
 */
export class TimeRestrictions {
  /**
   * Defines the list of time-based restrictions.
   */
  "restrictions": Array<TimeRestriction>;
  /**
   * Specifies the time zone applicable to the restrictions.
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
      required: true,
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
    return TimeRestrictions.attributeTypeMap;
  }

  public constructor() {}
}
