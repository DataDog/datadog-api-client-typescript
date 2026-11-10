/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryRuleResponseDataAttributesCostsToAllocateItems } from "./ArbitraryRuleResponseDataAttributesCostsToAllocateItems";
import { ArbitraryRuleResponseDataAttributesRuleCategory } from "./ArbitraryRuleResponseDataAttributesRuleCategory";
import { ArbitraryRuleResponseDataAttributesStrategy } from "./ArbitraryRuleResponseDataAttributesStrategy";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The definition of `ArbitraryRuleResponseDataAttributes` object.
 */
export class ArbitraryRuleResponseDataAttributes {
  /**
   * The `attributes` `costs_to_allocate`.
   */
  "costsToAllocate": Array<ArbitraryRuleResponseDataAttributesCostsToAllocateItems>;
  /**
   * The `attributes` `created`.
   */
  "created": Date;
  /**
   * The `attributes` `enabled`.
   */
  "enabled": boolean;
  /**
   * Whether the rule is an out-of-the-box rule provided by Datadog. Omitted when `false`.
   */
  "isOotb"?: boolean;
  /**
   * The `attributes` `last_modified_user_uuid`.
   */
  "lastModifiedUserUuid": string;
  /**
   * The `attributes` `order_id`.
   */
  "orderId": Int64;
  /**
   * The `attributes` `processing_status`.
   */
  "processingStatus"?: string;
  /**
   * The `attributes` `provider`.
   */
  "provider": Array<string>;
  /**
   * The `attributes` `rejected`.
   */
  "rejected"?: boolean;
  /**
   * Rule category. Omitted for custom rules.
   */
  "ruleCategory"?: ArbitraryRuleResponseDataAttributesRuleCategory;
  /**
   * The `attributes` `rule_name`.
   */
  "ruleName": string;
  /**
   * The definition of `ArbitraryRuleResponseDataAttributesStrategy` object.
   */
  "strategy": ArbitraryRuleResponseDataAttributesStrategy;
  /**
   * The `attributes` `type`.
   */
  "type": string;
  /**
   * The `attributes` `updated`.
   */
  "updated": Date;
  /**
   * The first date the rule applies to. Omitted when the rule has no start date.
   */
  "validFromDate"?: Date;
  /**
   * The last date the rule applies to. Omitted when the rule has no end date.
   */
  "validThroughDate"?: Date;
  /**
   * The `attributes` `version`.
   */
  "version": number;

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
    costsToAllocate: {
      baseName: "costs_to_allocate",
      type: "Array<ArbitraryRuleResponseDataAttributesCostsToAllocateItems>",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    isOotb: {
      baseName: "is_ootb",
      type: "boolean",
    },
    lastModifiedUserUuid: {
      baseName: "last_modified_user_uuid",
      type: "string",
      required: true,
    },
    orderId: {
      baseName: "order_id",
      type: "number",
      required: true,
      format: "int64",
    },
    processingStatus: {
      baseName: "processing_status",
      type: "string",
    },
    provider: {
      baseName: "provider",
      type: "Array<string>",
      required: true,
    },
    rejected: {
      baseName: "rejected",
      type: "boolean",
    },
    ruleCategory: {
      baseName: "rule_category",
      type: "ArbitraryRuleResponseDataAttributesRuleCategory",
    },
    ruleName: {
      baseName: "rule_name",
      type: "string",
      required: true,
    },
    strategy: {
      baseName: "strategy",
      type: "ArbitraryRuleResponseDataAttributesStrategy",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    updated: {
      baseName: "updated",
      type: "Date",
      required: true,
      format: "date-time",
    },
    validFromDate: {
      baseName: "valid_from_date",
      type: "Date",
      format: "date",
    },
    validThroughDate: {
      baseName: "valid_through_date",
      type: "Date",
      format: "date",
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int32",
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
    return ArbitraryRuleResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
