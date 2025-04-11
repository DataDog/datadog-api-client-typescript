import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines how frequently the rotation repeats, using days and/or seconds (up to certain limits).
 */
export class ScheduleCreateRequestDataAttributesLayersItemsInterval {
  /**
   * The number of full days in each rotation period.
   */
  "days"?: number;
  /**
   * Extra seconds that may be added to extend the rotation beyond whole days.
   */
  "seconds"?: number;
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
    days: {
      baseName: "days",
      type: "number",
      format: "int32",
    },
    seconds: {
      baseName: "seconds",
      type: "number",
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
    return ScheduleCreateRequestDataAttributesLayersItemsInterval.attributeTypeMap;
  }

  public constructor() {}
}
