import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing a timeframe.
 */
export class SyntheticsTestOptionsSchedulingTimeframe {
  /**
   * Number representing the day of the week.
   */
  "day": number;
  /**
   * The hour of the day on which scheduling starts.
   */
  "from": string;
  /**
   * The hour of the day on which scheduling ends.
   */
  "to": string;
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
      format: "int32",
    },
    from: {
      baseName: "from",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestOptionsSchedulingTimeframe.attributeTypeMap;
  }

  public constructor() {}
}
