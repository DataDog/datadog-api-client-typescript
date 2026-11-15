/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Where a message action appears.
 */
export class CostRecommendationNotificationRuleMessageAction {
  /**
   * Whether the action appears once for the whole digest.
   */
  "bulk"?: boolean;
  /**
   * Whether the action appears on each recommendation.
   */
  "perRec"?: boolean;

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
    bulk: {
      baseName: "bulk",
      type: "boolean",
    },
    perRec: {
      baseName: "per_rec",
      type: "boolean",
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
    return CostRecommendationNotificationRuleMessageAction.attributeTypeMap;
  }

  public constructor() {}
}
