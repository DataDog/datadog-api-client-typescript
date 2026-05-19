import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabProjectArtifactsAttributes } from "./ModelLabProjectArtifactsAttributes";
import { ModelLabProjectArtifactsType } from "./ModelLabProjectArtifactsType";

/**
 * A project artifacts JSON:API resource object.
 */
export class ModelLabProjectArtifactsData {
  /**
   * Artifact listing for a Model Lab project.
   */
  "attributes": ModelLabProjectArtifactsAttributes;
  /**
   * The unique identifier of the project artifacts resource.
   */
  "id": string;
  /**
   * The JSON:API type for a project artifacts resource.
   */
  "type": ModelLabProjectArtifactsType;
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
    attributes: {
      baseName: "attributes",
      type: "ModelLabProjectArtifactsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ModelLabProjectArtifactsType",
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
    return ModelLabProjectArtifactsData.attributeTypeMap;
  }

  public constructor() {}
}
