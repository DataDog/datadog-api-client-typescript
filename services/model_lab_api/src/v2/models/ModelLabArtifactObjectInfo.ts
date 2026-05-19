import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about an artifact file or directory within a run.
 */
export class ModelLabArtifactObjectInfo {
  /**
   * The size of the file in bytes.
   */
  "fileSize"?: number;
  /**
   * Whether this artifact entry is a directory.
   */
  "isDir": boolean;
  /**
   * The path of the artifact relative to the run's artifact root.
   */
  "path": string;
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
    fileSize: {
      baseName: "file_size",
      type: "number",
      format: "int64",
    },
    isDir: {
      baseName: "is_dir",
      type: "boolean",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
      required: true,
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
    return ModelLabArtifactObjectInfo.attributeTypeMap;
  }

  public constructor() {}
}
