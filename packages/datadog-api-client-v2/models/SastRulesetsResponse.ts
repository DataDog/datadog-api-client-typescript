/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SastRulesetData } from "./SastRulesetData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response payload containing a list of SAST rulesets and their rules.
 */
export class SastRulesetsResponse {
  /**
   * The list of SAST rulesets returned in the response.
   */
  "data": Array<SastRulesetData>;

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
      type: "Array<SastRulesetData>",
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
    return SastRulesetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
