/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems` object.
 */
export class ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems {
  /**
   * The `items` `allocated_tags`.
   */
  "allocatedTags": Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>;
  /**
   * The `items` `percentage`. The numeric value format should be a 32bit float value.
   */
  "percentage": number;

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
    allocatedTags: {
      baseName: "allocated_tags",
      type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>",
      required: true,
    },
    percentage: {
      baseName: "percentage",
      type: "number",
      required: true,
      format: "double",
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
    return ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems.attributeTypeMap;
  }

  public constructor() {}
}
