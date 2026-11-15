import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleFilter } from "./CostRecommendationCustomRuleFilter";

/**
 * Attributes of a custom recommendation rule.
 */
export class CostRecommendationCustomRuleAttributes {
  /**
   * The cloud provider of the recommender, such as `aws`, `azure`, or `gcp`.
   */
  "cloudProvider": string;
  /**
   * When the rule was created.
   */
  "createdAt": Date;
  /**
   * The UUID of the user who created the rule.
   */
  "createdBy": string;
  /**
   * Whether the rule is applied when recommendations are generated.
   */
  "enabled": boolean;
  /**
   * Tag filters that select the resources the rule applies to. An empty list selects every resource.
   */
  "filters": Array<CostRecommendationCustomRuleFilter>;
  /**
   * When the rule was last modified.
   */
  "modifiedAt": Date;
  /**
   * The UUID of the user who last modified the rule.
   */
  "modifiedBy": string;
  /**
   * The name of the rule.
   */
  "name": string;
  /**
   * Free-form notes, such as the reason for the customization.
   */
  "notes": string;
  /**
   * The order in which the rules of a recommender are evaluated, lowest first. It is assigned when the rule is created.
   */
  "priority": number;
  /**
   * The recommender the rule customizes.
   */
  "recommenderId": string;
  /**
   * Setting overrides, keyed by setting name. Settings left out keep the recommender default. The accepted
   * settings and their ranges depend on the recommender.
   */
  "settings": { [key: string]: number };
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
    cloudProvider: {
      baseName: "cloud_provider",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "Array<CostRecommendationCustomRuleFilter>",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    notes: {
      baseName: "notes",
      type: "string",
      required: true,
    },
    priority: {
      baseName: "priority",
      type: "number",
      required: true,
      format: "int64",
    },
    recommenderId: {
      baseName: "recommender_id",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: number; }",
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
    return CostRecommendationCustomRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
