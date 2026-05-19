/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagKeySourceAttributes } from "./CostTagKeySourceAttributes";
import { CostTagKeySourceType } from "./CostTagKeySourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Cloud Cost Management tag key paired with the sources that produced it.
 */
export class CostTagKeySource {
  /**
   * Attributes of a Cloud Cost Management tag source.
   */
  "attributes": CostTagKeySourceAttributes;
  /**
   * The tag key identifier. Equal to the empty-tag sentinel `__empty_tag_key__` when the tag key is empty.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management tag source resource.
   */
  "type": CostTagKeySourceType;

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
      type: "CostTagKeySourceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostTagKeySourceType",
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
    return CostTagKeySource.attributeTypeMap;
  }

  public constructor() {}
}
