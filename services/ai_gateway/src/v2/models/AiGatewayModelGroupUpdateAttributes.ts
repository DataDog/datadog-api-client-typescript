import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayNullableMaxReasoningLevel } from "./AiGatewayNullableMaxReasoningLevel";

/**
 * Attributes used to update an AI Gateway model group.
 */
export class AiGatewayModelGroupUpdateAttributes {
  /**
   * Whether fast mode is allowed for models and routing rules in the group.
   */
  "allowFastMode"?: boolean;
  /**
   * Required when updating the default model group. Must match its current revision; a stale revision returns HTTP 409. Omit for named policies.
   */
  "expectedRevision"?: number;
  /**
   * Maximum reasoning level permitted by a model group.
   */
  "maxReasoningLevel"?: AiGatewayNullableMaxReasoningLevel;
  /**
   * Individually selected model catalog IDs. Replaces visible selections and preserves saved hidden selections. Omit to preserve the complete selection; an empty array clears only visible selections. Null is invalid. Individual selections do not include future models. New selections require provider View.
   */
  "modelIds"?: Array<number>;
  /**
   * Human-readable resource name.
   */
  "name"?: string;
  /**
   * Explicit provider selections, including current and future models. Replaces visible selections and preserves saved hidden selections. Omit to preserve the complete selection; an empty array clears only visible selections. Null is invalid. New selections require provider View.
   */
  "providerIds"?: Array<number>;
  /**
   * Organization-unique routing rule slugs. Replaces visible route selections and preserves saved hidden selections. Omit to preserve all route selections; an empty array clears only visible selections. Null is invalid. New selections require route View.
   */
  "routingRuleSlugs"?: Array<string>;
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
    allowFastMode: {
      baseName: "allow_fast_mode",
      type: "boolean",
    },
    expectedRevision: {
      baseName: "expected_revision",
      type: "number",
      format: "int64",
    },
    maxReasoningLevel: {
      baseName: "max_reasoning_level",
      type: "AiGatewayNullableMaxReasoningLevel",
    },
    modelIds: {
      baseName: "model_ids",
      type: "Array<number>",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    providerIds: {
      baseName: "provider_ids",
      type: "Array<number>",
      format: "int64",
    },
    routingRuleSlugs: {
      baseName: "routing_rule_slugs",
      type: "Array<string>",
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
    return AiGatewayModelGroupUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
