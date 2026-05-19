/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ModelLabProjectAttributes } from "./ModelLabProjectAttributes";
import { ModelLabProjectType } from "./ModelLabProjectType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Model Lab project JSON:API resource object.
 */
export class ModelLabProjectData {
  /**
   * Attributes of a Model Lab project.
   */
  "attributes": ModelLabProjectAttributes;
  /**
   * The unique identifier of the project.
   */
  "id": string;
  /**
   * The JSON:API type for a Model Lab project resource.
   */
  "type": ModelLabProjectType;

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
      type: "ModelLabProjectAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ModelLabProjectType",
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
    return ModelLabProjectData.attributeTypeMap;
  }

  public constructor() {}
}
