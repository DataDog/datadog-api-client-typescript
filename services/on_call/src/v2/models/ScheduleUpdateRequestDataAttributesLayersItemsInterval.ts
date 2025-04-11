import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Specifies how the rotation repeats: number of days, plus optional seconds, up to the given maximums.
 */
export class ScheduleUpdateRequestDataAttributesLayersItemsInterval {
  /**
   * How many days each rotation cycle should span.
   */
  "days"?: number;
  /**
   * Additional seconds to add to the rotation cycle (for example, partial days).
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
    return ScheduleUpdateRequestDataAttributesLayersItemsInterval.attributeTypeMap;
  }

  public constructor() {}
}
