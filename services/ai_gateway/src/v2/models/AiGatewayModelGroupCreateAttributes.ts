import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayMaxReasoningLevel } from "./AiGatewayMaxReasoningLevel";
import { AiGatewayModelGroupBinding } from "./AiGatewayModelGroupBinding";

/**
 * Attributes used to create an AI Gateway model group.
 */
export class AiGatewayModelGroupCreateAttributes {
  /**
   * Whether fast mode is allowed for models and routing rules in the group.
   */
  "allowFastMode"?: boolean;
  /**
   * Optional initial model-group access bindings.
   */
  "bindings"?: Array<AiGatewayModelGroupBinding>;
  /**
   * Maximum reasoning level permitted by a model group.
   */
  "maxReasoningLevel"?: AiGatewayMaxReasoningLevel;
  /**
   * Model catalog IDs to select. New selections require provider View.
   */
  "modelIds"?: Array<number>;
  /**
   * Human-readable resource name.
   */
  "name": string;
  /**
   * Explicit provider selections, including current and future models. Omit to preserve selections on update; an empty array clears them. Null is invalid. New selections require provider View; saved hidden IDs can be retained or removed.
   */
  "providerIds"?: Array<number>;
  /**
   * Organization-unique routing rule slugs, such as coding-route.
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
    bindings: {
      baseName: "bindings",
      type: "Array<AiGatewayModelGroupBinding>",
    },
    maxReasoningLevel: {
      baseName: "max_reasoning_level",
      type: "AiGatewayMaxReasoningLevel",
    },
    modelIds: {
      baseName: "model_ids",
      type: "Array<number>",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return AiGatewayModelGroupCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
