import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for an on-call schedule override.
 */
export class OverrideAttributes {
  /**
   * The end time of the override.
   */
  "end"?: Date;
  /**
   * Whether the override is inactive (for example, because its time range has ended).
   */
  "inactive"?: boolean;
  /**
   * The start time of the override.
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
    inactive: {
      baseName: "inactive",
      type: "boolean",
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
    return OverrideAttributes.attributeTypeMap;
  }

  public constructor() {}
}
