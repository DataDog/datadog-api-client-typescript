import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Half-open time interval in milliseconds since the Unix epoch.
 */
export class TimeseriesAnomalyInvestigationInterval {
  /**
   * Exclusive end of the interval.
   */
  "end": number;
  /**
   * Inclusive start of the interval.
   */
  "start": number;
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
      type: "number",
      required: true,
      format: "int64",
    },
    start: {
      baseName: "start",
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
    return TimeseriesAnomalyInvestigationInterval.attributeTypeMap;
  }

  public constructor() {}
}
