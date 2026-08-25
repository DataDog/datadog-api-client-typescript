/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagRuleData } from "./TagRuleData";
import { TagRuleScoreData } from "./TagRuleScoreData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A page of tag rules.
 */
export class TagRulesListResponse {
  /**
   * An array of tag rule data objects.
   */
  "data": Array<TagRuleData>;
  /**
   * Related resources fetched alongside the primary tag rules. Populated when an `include` query parameter is supplied.
   */
  "included"?: Array<TagRuleScoreData>;

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
    data: {
      baseName: "data",
      type: "Array<TagRuleData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<TagRuleScoreData>",
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
    return TagRulesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
