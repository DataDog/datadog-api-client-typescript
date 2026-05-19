import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabProjectArtifactsData } from "./ModelLabProjectArtifactsData";

/**
 * Response containing the artifact listing for a Model Lab project.
 */
export class ModelLabProjectArtifactsResponse {
  /**
   * A project artifacts JSON:API resource object.
   */
  "data": ModelLabProjectArtifactsData;
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
    data: {
      baseName: "data",
      type: "ModelLabProjectArtifactsData",
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
    return ModelLabProjectArtifactsResponse.attributeTypeMap;
  }

  public constructor() {}
}
