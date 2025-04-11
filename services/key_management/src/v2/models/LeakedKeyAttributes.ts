import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of LeakedKeyAttributes object.
 */
export class LeakedKeyAttributes {
  /**
   * The LeakedKeyAttributes date.
   */
  "date": Date;
  /**
   * The LeakedKeyAttributes leak_source.
   */
  "leakSource"?: string;
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
    date: {
      baseName: "date",
      type: "Date",
      required: true,
      format: "date-time",
    },
    leakSource: {
      baseName: "leak_source",
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
    return LeakedKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
