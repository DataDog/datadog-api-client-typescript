/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToOutcome } from "./RelationshipToOutcome";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API relationship to a scorecard rule.
 */
export class RuleOutcomeRelationships {
  /**
   * The JSON:API relationship to a scorecard outcome.
   */
  "rule"?: RelationshipToOutcome;

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
    rule: {
      baseName: "rule",
      type: "RelationshipToOutcome",
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
    return RuleOutcomeRelationships.attributeTypeMap;
  }

  public constructor() {}
}
