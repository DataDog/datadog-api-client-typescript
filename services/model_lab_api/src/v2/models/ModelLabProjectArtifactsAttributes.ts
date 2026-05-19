import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabArtifactInfo } from "./ModelLabArtifactInfo";

/**
 * Artifact listing for a Model Lab project.
 */
export class ModelLabProjectArtifactsAttributes {
  /**
   * The list of artifact files associated with the project.
   */
  "files": Array<ModelLabArtifactInfo>;
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
      type: "Array<ModelLabArtifactInfo>",
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
    return ModelLabProjectArtifactsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
