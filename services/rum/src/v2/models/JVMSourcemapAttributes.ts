import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a JVM mapping file.
 */
export class JVMSourcemapAttributes {
  /**
   * The build identifier (UUID format).
   */
  "buildId"?: string;
  /**
   * The timestamp when the mapping file was created.
   */
  "createdAt": Date;
  /**
   * The type of source map.
   */
  "mapkind": string;
  /**
   * The service name associated with the mapping file.
   */
  "service"?: string;
  /**
   * The size of the mapping file in bytes.
   */
  "size": number;
  /**
   * The build variant (e.g., `release`, `debug`).
   */
  "variant"?: string;
  /**
   * The version of the service associated with the mapping file.
   */
  "version"?: string;
  /**
   * The version code.
   */
  "versionCode"?: string;
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
    buildId: {
      baseName: "build_id",
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
    versionCode: {
      baseName: "version_code",
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
    return JVMSourcemapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
