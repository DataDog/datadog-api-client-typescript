/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateVariant } from "./CreateVariant";
import { VariantDataType } from "./VariantDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for adding a variant to a feature flag.
 */
export class CreateVariantData {
  /**
   * Attributes for creating a variant.
   */
  "attributes": CreateVariant;
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
      type: "CreateVariant",
      required: true,
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
    return CreateVariantData.attributeTypeMap;
  }

  public constructor() {}
}
