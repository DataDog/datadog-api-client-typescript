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
   * Individually selected model catalog IDs. Replaces this selection only. Omit to preserve it; an empty array clears it. Null is invalid. Individual selections do not include future models. New selections require provider View; retaining or removing saved hidden selections requires only parent Edit.
   */
  "modelIds"?: Array<number>;
  /**
   * Human-readable resource name.
   */
  "name"?: string;
  /**
   * Explicit provider selections, including current and future models. Omit to preserve selections on update; an empty array clears them. Null is invalid. New selections require provider View; saved hidden IDs can be retained or removed.
   */
  "providerIds"?: Array<number>;
  /**
   * Organization-unique routing rule slugs. Replaces route selections only. Omit to preserve them; an empty array clears them. Null is invalid.
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
