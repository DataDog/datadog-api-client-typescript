/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelGroupModel } from "./AiGatewayModelGroupModel";
import { AiGatewayModelGroupProvider } from "./AiGatewayModelGroupProvider";
import { AiGatewayModelGroupRoutingRule } from "./AiGatewayModelGroupRoutingRule";
import { AiGatewayNullableMaxReasoningLevel } from "./AiGatewayNullableMaxReasoningLevel";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

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
   * Saved model catalog IDs whose providers the caller can view. Hidden identities are omitted. The
   * `models_restricted` field indicates hidden membership.
   */
  "modelIds": Array<Int64>;
  /**
   * Metadata for saved model selections whose providers the caller can view. Hidden model identities and metadata are omitted.
   */
  "models": Array<AiGatewayModelGroupModel>;
  /**
   * Whether some saved models are hidden from the caller. Hidden identities, names, and counts are omitted. Editing visible selections preserves hidden memberships.
   */
  "modelsRestricted"?: boolean;
  /**
   * Human-readable resource name.
   */
  "name": string;
  /**
   * Explicitly selected provider IDs the caller can view. Hidden identities are omitted. The
   * `providers_restricted` field indicates hidden membership.
   */
  "providerIds": Array<Int64>;
  /**
   * Viewable explicitly selected providers, separate from individually selected models. Hidden provider identities and metadata are omitted.
   */
  "providers": Array<AiGatewayModelGroupProvider>;
  /**
   * Whether some saved providers are hidden from the caller. Hidden identities, names, and counts are omitted. Editing visible selections preserves hidden memberships.
   */
  "providersRestricted"?: boolean;
  /**
   * Revision of the organization-wide policy. Present for the default model group and absent for named policies.
   */
  "revision"?: Int64;
  "routingRules": Array<AiGatewayModelGroupRoutingRule>;
  /**
   * Whether some saved routes are hidden from the caller. Omit routing_rule_slugs to preserve all memberships; replacing the visible selection also preserves saved hidden memberships.
   */
  "routingRulesRestricted"?: boolean;
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
    modelsRestricted: {
      baseName: "models_restricted",
      type: "boolean",
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
    providersRestricted: {
      baseName: "providers_restricted",
      type: "boolean",
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
    routingRulesRestricted: {
      baseName: "routing_rules_restricted",
      type: "boolean",
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
