import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabRunArtifactsData } from "./ModelLabRunArtifactsData";

/**
 * Response containing the artifact listing for a Model Lab run.
 */
export class ModelLabRunArtifactsResponse {
  /**
   * A run artifacts JSON:API resource object.
   */
  "data": ModelLabRunArtifactsData;
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
      type: "ModelLabRunArtifactsData",
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
    return ModelLabRunArtifactsResponse.attributeTypeMap;
  }

  public constructor() {}
}
