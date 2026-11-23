import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Unit metadata for a numeric metric. Unset fields are omitted, and the unit is `null` when it is unknown.
 */
export class CommitmentsUnit {
  /**
   * The unit family (for example, percentage or money).
   */
  "family"?: string;
  /**
   * The unit identifier.
   */
  "id"?: number;
  /**
   * The unit name (for example, percent or dollar).
   */
  "name"?: string;
  /**
   * The plural form of the unit name.
   */
  "plural"?: string;
  /**
   * The scale factor for the unit.
   */
  "scaleFactor"?: number;
  /**
   * The abbreviated unit name (for example, % or $).
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
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CommitmentsUnit.attributeTypeMap;
  }

  public constructor() {}
}
