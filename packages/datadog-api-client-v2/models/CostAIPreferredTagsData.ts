/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAIPreferredTagsAttributes } from "./CostAIPreferredTagsAttributes";
import { CostAIPreferredTagsType } from "./CostAIPreferredTagsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Preferred tags data object.
 */
export class CostAIPreferredTagsData {
  /**
   * Attributes for the preferred tags response.
   */
  "attributes": CostAIPreferredTagsAttributes;
  /**
   * The unique identifier.
   */
  "id": string;
  /**
   * Preferred tags resource type.
   */
  "type": CostAIPreferredTagsType;

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
      type: "CostAIPreferredTagsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostAIPreferredTagsType",
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
    return CostAIPreferredTagsData.attributeTypeMap;
  }

  public constructor() {}
}
