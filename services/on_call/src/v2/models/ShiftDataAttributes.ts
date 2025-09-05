import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for an on-call shift.
 */
export class ShiftDataAttributes {
  /**
   * The end time of the shift.
   */
  "end"?: Date;
  /**
   * The start time of the shift.
   */
  "start"?: Date;
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
      format: "date-time",
    },
    start: {
      baseName: "start",
      type: "Date",
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
    return ShiftDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
