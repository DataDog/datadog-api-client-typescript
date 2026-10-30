/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateVariantAttributes } from "./UpdateVariantAttributes";
import { VariantDataType } from "./VariantDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating a variant.
 */
export class UpdateVariantData {
  /**
   * Attributes for updating a variant.
   */
  "attributes": UpdateVariantAttributes;
  /**
   * The ID of the variant. If you include it, use the same value as the `variant_id` path parameter.
   */
  "id"?: string;
  /**
   * The resource type for variants.
   */
  "type": VariantDataType;

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
      type: "UpdateVariantAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "VariantDataType",
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
    return UpdateVariantData.attributeTypeMap;
  }

  public constructor() {}
}
