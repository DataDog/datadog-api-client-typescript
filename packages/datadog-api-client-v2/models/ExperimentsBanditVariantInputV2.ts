/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A flag variant the bandit uses, named by its ID. The variant's `key` and `name` come from the flag and can't be set.
 */
export class ExperimentsBanditVariantInputV2 {
  /**
   * The variant's ID on the flag.
   */
  "featureFlagVariantId": string;
  /**
   * Whether the variant is one of the arms the bandit chooses between. Defaults to `true`.
   */
  "isActive"?: boolean;
  /**
   * Whether the variant is served when the bandit reaches its scheduled end. At most one variant is the fallback, and it doesn't have to be an arm. Defaults to `false`.
   */
  "isFallback"?: boolean;

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
    featureFlagVariantId: {
      baseName: "feature_flag_variant_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    isActive: {
      baseName: "is_active",
      type: "boolean",
    },
    isFallback: {
      baseName: "is_fallback",
      type: "boolean",
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
    return ExperimentsBanditVariantInputV2.attributeTypeMap;
  }

  public constructor() {}
}
