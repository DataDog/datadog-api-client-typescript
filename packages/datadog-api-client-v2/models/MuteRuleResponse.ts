/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteRule } from "./MuteRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object which includes a mute rule.
 */
export class MuteRuleResponse {
  /**
   * Mute rules are used to proactively filter out known false positives or accepted risks.
   * A mute rule is composed of a rule UUID, a rule type, and the rule attributes. All fields are required.
   */
  "data"?: MuteRule;

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
      type: "MuteRule",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MuteRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
