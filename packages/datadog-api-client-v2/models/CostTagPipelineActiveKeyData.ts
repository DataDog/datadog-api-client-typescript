/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagPipelineActiveKeyAttributes } from "./CostTagPipelineActiveKeyAttributes";
import { CostTagPipelineActiveKeyType } from "./CostTagPipelineActiveKeyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Active tag key data object.
 */
export class CostTagPipelineActiveKeyData {
  /**
   * Attributes for an active tag pipeline key.
   */
  "attributes": CostTagPipelineActiveKeyAttributes;
  /**
   * The tag key name.
   */
  "id": string;
  /**
   * Active tag key resource type.
   */
  "type": CostTagPipelineActiveKeyType;

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
      type: "CostTagPipelineActiveKeyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostTagPipelineActiveKeyType",
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
    return CostTagPipelineActiveKeyData.attributeTypeMap;
  }

  public constructor() {}
}
