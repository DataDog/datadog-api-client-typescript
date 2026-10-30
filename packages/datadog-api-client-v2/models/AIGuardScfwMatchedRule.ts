/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardScfwOutcome } from "./AIGuardScfwOutcome";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One rule the Supply Chain Firewall matched on a package, with the outcome the rule reached.
 */
export class AIGuardScfwMatchedRule {
  /**
   * The Supply Chain Firewall outcome for a package, a matched rule, or the whole request.
   */
  "outcome": AIGuardScfwOutcome;
  /**
   * The rule text the firewall reported, or the policy type when no text was reported.
   */
  "rule": string;

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
    outcome: {
      baseName: "outcome",
      type: "AIGuardScfwOutcome",
      required: true,
    },
    rule: {
      baseName: "rule",
      type: "string",
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
    return AIGuardScfwMatchedRule.attributeTypeMap;
  }

  public constructor() {}
}
