import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateVariant } from "./CreateVariant";
import { NotificationRuleTarget } from "./NotificationRuleTarget";
import { ValueType } from "./ValueType";

/**
 * Attributes for creating a new feature flag.
 */
export class CreateFeatureFlagAttributes {
  /**
   * The key of the default variant.
   */
  "defaultVariantKey"?: string;
  /**
   * The description of the feature flag.
   */
  "description": string;
  /**
   * JSON schema for validation when value_type is JSON.
   */
  "jsonSchema"?: string;
  /**
   * The unique key of the feature flag.
   */
  "key": string;
  /**
   * The name of the feature flag.
   */
  "name": string;
  /**
   * Query used to determine which change events on this feature flag trigger notifications to `rule_targets`. Uses Datadog's standard log search syntax (`AND`, `OR`, `NOT`, parentheses) to match against the `notification_type` facet.
   *
   * Supported `notification_type` values for a feature flag are: `flag_enabled_disabled`, `flag_archived`, `flag_approval_required`, `rollout_started`, `rollout_scheduled`, `rollout_step_started`, `rollout_paused_guardrail`, `rollout_paused_user`, `rollout_aborted_guardrail`, `rollout_aborted_user`, `targeting_rule_created`, `targeting_rule_updated`, `targeting_rule_updated_via_filter`, and `targeting_rule_deleted`.
   */
  "notificationRuleQuery"?: string;
  /**
   * Targets to notify about changes to this feature flag that match `notification_rule_query`.
   */
  "ruleTargets"?: Array<NotificationRuleTarget>;
  /**
   * The type of values for the feature flag variants.
   */
  "valueType": ValueType;
  /**
   * The variants of the feature flag.
   */
  "variants": Array<CreateVariant>;
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
    defaultVariantKey: {
      baseName: "default_variant_key",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    jsonSchema: {
      baseName: "json_schema",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    notificationRuleQuery: {
      baseName: "notification_rule_query",
      type: "string",
    },
    ruleTargets: {
      baseName: "rule_targets",
      type: "Array<NotificationRuleTarget>",
    },
    valueType: {
      baseName: "value_type",
      type: "ValueType",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<CreateVariant>",
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
    return CreateFeatureFlagAttributes.attributeTypeMap;
  }

  public constructor() {}
}
