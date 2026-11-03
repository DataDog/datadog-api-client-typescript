/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionIndexTargetType } from "./ProductAnalyticsRetentionIndexTargetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Selects a cohort or return period by its zero-based position in the grid.
 */
export class ProductAnalyticsRetentionIndexTarget {
  /**
   * The discriminator identifying a target selected by index.
   */
  "type": ProductAnalyticsRetentionIndexTargetType;
  /**
   * Zero-based index of the targeted cohort or return period.
   */
  "value": number;

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
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionIndexTargetType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsRetentionIndexTarget.attributeTypeMap;
  }

  public constructor() {}
}
