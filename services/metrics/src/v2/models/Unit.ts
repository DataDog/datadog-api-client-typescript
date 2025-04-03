import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing the metric unit family, scale factor, name, and short name.
 */
export class Unit {
  /**
   * Unit family, allows for conversion between units of the same family, for scaling.
   */
  "family"?: string;
  /**
   * Unit name
   */
  "name"?: string;
  /**
   * Plural form of the unit name.
   */
  "plural"?: string;
  /**
   * Factor for scaling between units of the same family.
   */
  "scaleFactor"?: number;
  /**
   * Abbreviation of the unit.
   */
  "shortName"?: string;
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
    family: {
      baseName: "family",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    plural: {
      baseName: "plural",
      type: "string",
    },
    scaleFactor: {
      baseName: "scale_factor",
      type: "number",
      format: "double",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
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
    return Unit.attributeTypeMap;
  }

  public constructor() {}
}
