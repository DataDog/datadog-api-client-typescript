/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * One published price. Prices can differ by operation, mode, service tier, and input length.
 */
export class AiGatewayModelAutomaticPricingRate {
  /**
   * Exact decimal amount per unit, zero or greater, represented as a string to preserve precision. Supports fixed decimal and exponent notation.
   */
  "amount": string;
  /**
   * Token category priced, such as `input`, `output`, `cache_read`, or `cache_write`.
   */
  "component": string;
  /**
   * Largest input length covered by this price. Omitted when there is no upper bound.
   */
  "contextMaxTokens"?: Int64;
  /**
   * Input length above which this price applies. Omitted for the base tier.
   */
  "contextMinTokens"?: Int64;
  /**
   * Currency of the price. The only supported value is USD.
   */
  "currency": string;
  /**
   * Source mode name. `standard` is the base mode. Other values, such as `fast`, are source-defined and
   * selected by `mode_triggers`.
   */
  "mode": string;
  /**
   * Operation the price applies to. Omitted when it applies to every operation.
   */
  "operation"?: string;
  /**
   * Provider service tier explicitly associated with this mode by the source. Omitted when unknown.
   */
  "serviceTier"?: string;
  /**
   * Unit of the quoted amount. The only supported value is million_tokens.
   */
  "unit": string;

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
    amount: {
      baseName: "amount",
      type: "string",
      required: true,
    },
    component: {
      baseName: "component",
      type: "string",
      required: true,
    },
    contextMaxTokens: {
      baseName: "context_max_tokens",
      type: "number",
      format: "int64",
    },
    contextMinTokens: {
      baseName: "context_min_tokens",
      type: "number",
      format: "int64",
    },
    currency: {
      baseName: "currency",
      type: "string",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "string",
      required: true,
    },
    operation: {
      baseName: "operation",
      type: "string",
    },
    serviceTier: {
      baseName: "service_tier",
      type: "string",
    },
    unit: {
      baseName: "unit",
      type: "string",
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
    return AiGatewayModelAutomaticPricingRate.attributeTypeMap;
  }

  public constructor() {}
}
