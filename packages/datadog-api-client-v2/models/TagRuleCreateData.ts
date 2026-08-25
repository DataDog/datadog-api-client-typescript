/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagRuleCreateAttributes } from "./TagRuleCreateAttributes";
import { TagRuleResourceType } from "./TagRuleResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating a tag rule.
 */
export class TagRuleCreateData {
  /**
   * Attributes that can be supplied when creating a tag rule.
   */
  "attributes": TagRuleCreateAttributes;
  /**
   * JSON:API resource type for a tag rule.
   */
  "type": TagRuleResourceType;

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
      type: "TagRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagRuleResourceType",
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
    return TagRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
