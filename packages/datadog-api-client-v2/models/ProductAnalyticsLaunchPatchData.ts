/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchPatchAttributes } from "./ProductAnalyticsLaunchPatchAttributes";
import { ProductAnalyticsLaunchType } from "./ProductAnalyticsLaunchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the launch update.
 */
export class ProductAnalyticsLaunchPatchData {
  /**
   * Attributes to update on a launch. Fields that are not set are left unchanged, and `null` clears a nullable
   * field.
   * Setting a non-empty `feature_flag_id` clears the stored `feature_flag_key` when `feature_flag_key` is not set.
   */
  "attributes": ProductAnalyticsLaunchPatchAttributes;
  /**
   * UUID of the launch. It must match the ID in the path.
   */
  "id": string;
  /**
   * Launch resource type.
   */
  "type": ProductAnalyticsLaunchType;

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
      type: "ProductAnalyticsLaunchPatchAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsLaunchType",
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
    return ProductAnalyticsLaunchPatchData.attributeTypeMap;
  }

  public constructor() {}
}
