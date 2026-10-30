/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardScfwMatchedRule } from "./AIGuardScfwMatchedRule";
import { AIGuardScfwOutcome } from "./AIGuardScfwOutcome";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One package the Supply Chain Firewall evaluated, with the outcome and every matched rule.
 */
export class AIGuardScfwPackageFinding {
  /**
   * The package ecosystem the firewall evaluated, such as `PyPI`, `npm`, or `crates.io`.
   */
  "ecosystem": string;
  /**
   * Every rule the firewall matched on the package.
   */
  "matchedRules"?: Array<AIGuardScfwMatchedRule>;
  /**
   * The name of the package.
   */
  "name": string;
  /**
   * The Supply Chain Firewall outcome for a package, a matched rule, or the whole request.
   */
  "outcome": AIGuardScfwOutcome;
  /**
   * The version of the package.
   */
  "version": string;

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
    ecosystem: {
      baseName: "ecosystem",
      type: "string",
      required: true,
    },
    matchedRules: {
      baseName: "matched_rules",
      type: "Array<AIGuardScfwMatchedRule>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    outcome: {
      baseName: "outcome",
      type: "AIGuardScfwOutcome",
      required: true,
    },
    version: {
      baseName: "version",
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
    return AIGuardScfwPackageFinding.attributeTypeMap;
  }

  public constructor() {}
}
