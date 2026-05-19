import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about a project-level artifact file.
 */
export class ModelLabArtifactInfo {
  /**
   * The full artifact path relative to the project's artifact root.
   */
  "artifactPath": string;
  /**
   * The date and time the artifact was created.
   */
  "createdAt": Date;
  /**
   * The size of the file in bytes.
   */
  "fileSize"?: number;
  /**
   * The filename of the artifact.
   */
  "filename": string;
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
    artifactPath: {
      baseName: "artifact_path",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    fileSize: {
      baseName: "file_size",
      type: "number",
      format: "int64",
    },
    filename: {
      baseName: "filename",
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
    return ModelLabArtifactInfo.attributeTypeMap;
  }

  public constructor() {}
}
