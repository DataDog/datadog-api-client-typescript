import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a Flutter symbol file.
 */
export class FlutterSourcemapAttributes {
  /**
   * The target CPU architecture.
   */
  "arch"?: string;
  /**
   * The timestamp when the symbol file was created.
   */
  "createdAt": Date;
  /**
   * The type of source map.
   */
  "mapkind": string;
  /**
   * The service name associated with the symbol file.
   */
  "service"?: string;
  /**
   * The size of the symbol file in bytes.
   */
  "size": number;
  /**
   * The build variant.
   */
  "variant"?: string;
  /**
   * The version of the service associated with the symbol file.
   */
  "version"?: string;
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
    arch: {
      baseName: "arch",
      type: "string",
    },
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
    service: {
      baseName: "service",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
    },
    variant: {
      baseName: "variant",
      type: "string",
    },
    version: {
      baseName: "version",
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
    return FlutterSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
