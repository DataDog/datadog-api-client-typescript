/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagIndexingRuleOrderAttributes } from "./TagIndexingRuleOrderAttributes";
import { TagIndexingRuleType } from "./TagIndexingRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for the reorder operation.
 */
export class TagIndexingRuleOrderData {
  /**
   * Attributes for the reorder operation.
   */
  "attributes": TagIndexingRuleOrderAttributes;
  /**
   * The tag indexing rule resource type.
   */
  "type": TagIndexingRuleType;

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
      type: "TagIndexingRuleOrderAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagIndexingRuleType",
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
    return TagIndexingRuleOrderData.attributeTypeMap;
  }

  public constructor() {}
}
