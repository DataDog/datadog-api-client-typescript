import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelGroupModel } from "./AiGatewayModelGroupModel";
import { AiGatewayModelGroupProvider } from "./AiGatewayModelGroupProvider";
import { AiGatewayModelGroupRoutingRule } from "./AiGatewayModelGroupRoutingRule";
import { AiGatewayNullableMaxReasoningLevel } from "./AiGatewayNullableMaxReasoningLevel";

/**
 * Complete AI Gateway model group configuration.
 */
export class AiGatewayModelGroupAttributes {
  /**
   * Whether fast mode is allowed for models and routing rules in the group.
   */
  "allowFastMode": boolean;
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Maximum reasoning level permitted by a model group.
   */
  "maxReasoningLevel": AiGatewayNullableMaxReasoningLevel | null;
  /**
   * All saved model catalog IDs, including selections whose provider metadata is hidden. Preserve these IDs independently of the visible catalog.
   */
  "modelIds": Array<number>;
  /**
   * Metadata for saved model selections whose providers the caller can view. Missing metadata does not remove a saved ID.
   */
  "models": Array<AiGatewayModelGroupModel>;
  /**
   * Human-readable resource name.
   */
  "name": string;
  /**
   * All explicitly selected provider IDs, including hidden providers. Embedded provider metadata includes only viewable providers.
   */
  "providerIds": Array<number>;
  /**
   * Viewable explicitly selected providers, separate from individually selected models. Use provider_ids to retain all selections.
   */
  "providers": Array<AiGatewayModelGroupProvider>;
  /**
   * Revision of the organization-wide policy. Present for the default model group and absent for named policies.
   */
  "revision"?: number;
  "routingRules": Array<AiGatewayModelGroupRoutingRule>;
  /**
   * Time when the resource was last updated.
   */
  "updatedAt": Date;
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
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    maxReasoningLevel: {
      baseName: "max_reasoning_level",
      type: "AiGatewayNullableMaxReasoningLevel",
      required: true,
    },
    modelIds: {
      baseName: "model_ids",
      type: "Array<number>",
      required: true,
      format: "int64",
    },
    models: {
      baseName: "models",
      type: "Array<AiGatewayModelGroupModel>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    providerIds: {
      baseName: "provider_ids",
      type: "Array<number>",
      required: true,
      format: "int64",
    },
    providers: {
      baseName: "providers",
      type: "Array<AiGatewayModelGroupProvider>",
      required: true,
    },
    revision: {
      baseName: "revision",
      type: "number",
      format: "int64",
    },
    routingRules: {
      baseName: "routing_rules",
      type: "Array<AiGatewayModelGroupRoutingRule>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AiGatewayModelGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
