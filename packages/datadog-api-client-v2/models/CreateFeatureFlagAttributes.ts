/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateVariant } from "./CreateVariant";
import { ValueType } from "./ValueType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a new feature flag.
 */
export class CreateFeatureFlagAttributes {
  /**
   * The key of the default variant.
   */
  "defaultVariantKey"?: string;
  /**
   * The description of the feature flag.
   */
  "description": string;
  /**
   * JSON schema for validation when value_type is JSON.
   */
  "jsonSchema"?: string;
  /**
   * The unique key of the feature flag.
   */
  "key": string;
  /**
   * The name of the feature flag.
   */
  "name": string;
  /**
   * The type of values for the feature flag variants.
   */
  "valueType": ValueType;
  /**
   * The variants of the feature flag.
   */
  "variants": Array<CreateVariant>;

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
    defaultVariantKey: {
      baseName: "default_variant_key",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    jsonSchema: {
      baseName: "json_schema",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    valueType: {
      baseName: "value_type",
      type: "ValueType",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<CreateVariant>",
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
    return CreateFeatureFlagAttributes.attributeTypeMap;
  }

  public constructor() {}
}
