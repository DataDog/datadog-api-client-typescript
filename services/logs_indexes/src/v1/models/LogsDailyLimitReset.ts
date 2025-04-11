import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing options to override the default daily limit reset time.
 */
export class LogsDailyLimitReset {
  /**
   * String in `HH:00` format representing the time of day the daily limit should be reset. The hours must be between 00 and 23 (inclusive).
   */
  "resetTime"?: string;
  /**
   * String in `(-|+)HH:00` format representing the UTC offset to apply to the given reset time. The hours must be between -12 and +14 (inclusive).
   */
  "resetUtcOffset"?: string;
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
    resetTime: {
      baseName: "reset_time",
      type: "string",
    },
    resetUtcOffset: {
      baseName: "reset_utc_offset",
      type: "string",
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
    return LogsDailyLimitReset.attributeTypeMap;
  }

  public constructor() {}
}
