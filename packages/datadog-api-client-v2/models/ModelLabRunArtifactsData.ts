/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ModelLabRunArtifactsAttributes } from "./ModelLabRunArtifactsAttributes";
import { ModelLabRunArtifactsType } from "./ModelLabRunArtifactsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
