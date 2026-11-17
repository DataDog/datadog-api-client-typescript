/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchRequestAttributes } from "./ProductAnalyticsLaunchRequestAttributes";
import { ProductAnalyticsLaunchType } from "./ProductAnalyticsLaunchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the launch to create.
 */
export class ProductAnalyticsLaunchCreateData {
  /**
   * Attributes of a launch to create or replace.
   */
  "attributes": ProductAnalyticsLaunchRequestAttributes;
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
      type: "ProductAnalyticsLaunchRequestAttributes",
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
    return ProductAnalyticsLaunchCreateData.attributeTypeMap;
  }

  public constructor() {}
}
