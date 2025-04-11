import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Absolute timeframe.
 */
export class NotebookAbsoluteTime {
  /**
   * The end time.
   */
  "end": Date;
  /**
   * Indicates whether the timeframe should be shifted to end at the current time.
   */
  "live"?: boolean;
  /**
   * The start time.
   */
  "start": Date;
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
    end: {
      baseName: "end",
      type: "Date",
      required: true,
      format: "date-time",
    },
    live: {
      baseName: "live",
      type: "boolean",
    },
    start: {
      baseName: "start",
      type: "Date",
      required: true,
      format: "date-time",
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
    return NotebookAbsoluteTime.attributeTypeMap;
  }

  public constructor() {}
}
