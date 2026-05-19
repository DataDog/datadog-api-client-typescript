import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabArtifactObjectInfo } from "./ModelLabArtifactObjectInfo";

/**
 * Artifact listing for a Model Lab run.
 */
export class ModelLabRunArtifactsAttributes {
  /**
   * The list of artifact files and directories.
   */
  "files": Array<ModelLabArtifactObjectInfo>;
  /**
   * The path of the run's artifacts relative to the project's artifact root.
   */
  "pathInProject": string;
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
    files: {
      baseName: "files",
      type: "Array<ModelLabArtifactObjectInfo>",
      required: true,
    },
    pathInProject: {
      baseName: "path_in_project",
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
    return ModelLabRunArtifactsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
