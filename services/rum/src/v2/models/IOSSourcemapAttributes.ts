import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an iOS dSYM source map.
 */
export class IOSSourcemapAttributes {
  /**
   * The timestamp when the source map was created.
   */
  "createdAt": Date;
  /**
   * The type of source map.
   */
  "mapkind": string;
  /**
   * The size of the dSYM file in bytes.
   */
  "size": number;
  /**
   * The UUID(s) associated with the dSYM file.
   */
  "uuids"?: string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    mapkind: {
      baseName: "mapkind",
      type: "string",
      required: true,
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
    },
    uuids: {
      baseName: "uuids",
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
    return IOSSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
