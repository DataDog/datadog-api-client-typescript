/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterCondition } from "./SavedFilterCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A targeting rule in a saved filter. A rule matches when all its conditions match.
 */
export class SavedFilterTargetingRule {
  /**
   * Conditions combined with AND within this targeting rule.
   */
  "conditions": Array<SavedFilterCondition>;
  /**
   * The ID of the targeting rule.
   */
  "id": string;

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
    conditions: {
      baseName: "conditions",
      type: "Array<SavedFilterCondition>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return SavedFilterTargetingRule.attributeTypeMap;
  }

  public constructor() {}
}
