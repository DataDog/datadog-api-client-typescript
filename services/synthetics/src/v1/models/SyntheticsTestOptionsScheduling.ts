import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestOptionsSchedulingTimeframe } from "./SyntheticsTestOptionsSchedulingTimeframe";

/**
 * Object containing timeframes and timezone used for advanced scheduling.
 */
export class SyntheticsTestOptionsScheduling {
  /**
   * Array containing objects describing the scheduling pattern to apply to each day.
   */
  "timeframes": Array<SyntheticsTestOptionsSchedulingTimeframe>;
  /**
   * Timezone in which the timeframe is based.
   */
  "timezone": string;
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
    timeframes: {
      baseName: "timeframes",
      type: "Array<SyntheticsTestOptionsSchedulingTimeframe>",
      required: true,
    },
    timezone: {
      baseName: "timezone",
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
    return SyntheticsTestOptionsScheduling.attributeTypeMap;
  }

  public constructor() {}
}
