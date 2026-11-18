/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationCustomRuleFilter } from "./CostRecommendationCustomRuleFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes to change. Attributes left out keep their value. `filters` and `settings` replace the stored list
 * and map when sent.
 */
export class CostRecommendationCustomRuleUpdateAttributes {
  /**
   * Whether the rule is applied when recommendations are generated.
   */
  "enabled"?: boolean;
  /**
   * Tag filters that select the resources the rule applies to. An empty list selects every resource.
   */
  "filters"?: Array<CostRecommendationCustomRuleFilter>;
  /**
   * The name of the rule.
   */
  "name"?: string;
  /**
   * Free-form notes, such as the reason for the customization.
   */
  "notes"?: string;
  /**
   * Setting overrides, keyed by setting name. Settings left out keep the recommender default. The accepted
   * settings and their ranges depend on the recommender.
   */
  "settings"?: { [key: string]: number };

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    filters: {
      baseName: "filters",
      type: "Array<CostRecommendationCustomRuleFilter>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: number; }",
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
    return CostRecommendationCustomRuleUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
