/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagAttributes } from "./CostTagAttributes";
import { CostTagType } from "./CostTagType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Cloud Cost Management tag.
 */
export class CostTag {
  /**
   * Attributes of a Cloud Cost Management tag.
   */
  "attributes": CostTagAttributes;
  /**
   * The tag identifier, equal to its `key:value` representation.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management tag resource.
   */
  "type": CostTagType;

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
      type: "CostTagAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostTagType",
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
    return CostTag.attributeTypeMap;
  }

  public constructor() {}
}
