/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RuleType } from "./RuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API relationship to an outcome, which returns the related rule id.
 */
export class RelationshipToOutcomeData {
  /**
   * The unique ID for a scorecard rule.
   */
  "id"?: string;
  /**
   * The JSON:API type for scorecard rules.
   */
  "type"?: RuleType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RuleType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToOutcomeData.attributeTypeMap;
  }

  public constructor() {}
}
