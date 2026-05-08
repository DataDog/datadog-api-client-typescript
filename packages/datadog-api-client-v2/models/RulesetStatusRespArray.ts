/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RulesetStatusRespData } from "./RulesetStatusRespData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Processing statuses for all tag pipeline rulesets in the specified organization.
 */
export class RulesetStatusRespArray {
  /**
   * Processing status for a tag pipeline ruleset.
   */
  "data": Array<RulesetStatusRespData>;

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
      type: "Array<RulesetStatusRespData>",
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
    return RulesetStatusRespArray.attributeTypeMap;
  }

  public constructor() {}
}
