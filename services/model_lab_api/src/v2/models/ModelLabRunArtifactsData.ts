import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabRunArtifactsAttributes } from "./ModelLabRunArtifactsAttributes";
import { ModelLabRunArtifactsType } from "./ModelLabRunArtifactsType";

/**
 * A run artifacts JSON:API resource object.
 */
export class ModelLabRunArtifactsData {
  /**
   * Artifact listing for a Model Lab run.
   */
  "attributes": ModelLabRunArtifactsAttributes;
  /**
   * The unique identifier of the artifacts resource.
   */
  "id": string;
  /**
   * The JSON:API type for a run artifacts resource.
   */
  "type": ModelLabRunArtifactsType;
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
      type: "ModelLabRunArtifactsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ModelLabRunArtifactsType",
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
    return ModelLabRunArtifactsData.attributeTypeMap;
  }

  public constructor() {}
}
