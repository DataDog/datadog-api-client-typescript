import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A specific date and time used to define the start or end of a Synthetics downtime time slot.
 */
export class SyntheticsDowntimeTimeSlotDate {
  /**
   * The day component of the date (1-31).
   */
  "day": number;
  /**
   * The hour component of the time (0-23).
   */
  "hour": number;
  /**
   * The minute component of the time (0-59).
   */
  "minute": number;
  /**
   * The month component of the date (1-12).
   */
  "month": number;
  /**
   * The year component of the date.
   */
  "year": number;
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
    day: {
      baseName: "day",
      type: "number",
      required: true,
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "number",
      required: true,
      format: "int64",
    },
    minute: {
      baseName: "minute",
      type: "number",
      required: true,
      format: "int64",
    },
    month: {
      baseName: "month",
      type: "number",
      required: true,
      format: "int64",
    },
    year: {
      baseName: "year",
      type: "number",
      required: true,
      format: "int64",
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
    return SyntheticsDowntimeTimeSlotDate.attributeTypeMap;
  }

  public constructor() {}
}
