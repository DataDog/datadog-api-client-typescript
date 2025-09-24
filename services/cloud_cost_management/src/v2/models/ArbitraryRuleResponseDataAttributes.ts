import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleResponseDataAttributesCostsToAllocateItems } from "./ArbitraryRuleResponseDataAttributesCostsToAllocateItems";
import { ArbitraryRuleResponseDataAttributesStrategy } from "./ArbitraryRuleResponseDataAttributesStrategy";

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
   * The `attributes` `last_modified_user_uuid`.
   */
  "lastModifiedUserUuid": string;
  /**
   * The `attributes` `order_id`.
   */
  "orderId": number;
  /**
   * The `attributes` `provider`.
   */
  "provider": Array<string>;
  /**
   * The `attributes` `rejected`.
   */
  "rejected"?: boolean;
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
    provider: {
      baseName: "provider",
      type: "Array<string>",
      required: true,
    },
    rejected: {
      baseName: "rejected",
      type: "boolean",
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
