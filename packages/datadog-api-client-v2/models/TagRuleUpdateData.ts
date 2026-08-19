/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagRuleResourceType } from "./TagRuleResourceType";
import { TagRuleUpdateAttributes } from "./TagRuleUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a tag rule.
 */
export class TagRuleUpdateData {
  /**
   * Mutable attributes of a tag rule. Each field is optional; omitting a field leaves its
   * current value unchanged. The `source` of a rule cannot be changed.
   */
  "attributes"?: TagRuleUpdateAttributes;
  /**
   * The unique identifier of the tag rule being updated.
   */
  "id": string;
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
      type: "TagRuleUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return TagRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
