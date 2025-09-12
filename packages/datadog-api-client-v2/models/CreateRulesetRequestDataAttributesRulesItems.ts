/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateRulesetRequestDataAttributesRulesItemsMapping } from "./CreateRulesetRequestDataAttributesRulesItemsMapping";
import { CreateRulesetRequestDataAttributesRulesItemsQuery } from "./CreateRulesetRequestDataAttributesRulesItemsQuery";
import { CreateRulesetRequestDataAttributesRulesItemsReferenceTable } from "./CreateRulesetRequestDataAttributesRulesItemsReferenceTable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItems` object.
 */
export class CreateRulesetRequestDataAttributesRulesItems {
  /**
   * The `items` `enabled`.
   */
  "enabled": boolean;
  /**
   * The definition of `CreateRulesetRequestDataAttributesRulesItemsMapping` object.
   */
  "mapping"?: CreateRulesetRequestDataAttributesRulesItemsMapping;
  /**
   * The `items` `metadata`.
   */
  "metadata"?: { [key: string]: string };
  /**
   * The `items` `name`.
   */
  "name": string;
  /**
   * The definition of `CreateRulesetRequestDataAttributesRulesItemsQuery` object.
   */
  "query"?: CreateRulesetRequestDataAttributesRulesItemsQuery;
  /**
   * The definition of `CreateRulesetRequestDataAttributesRulesItemsReferenceTable` object.
   */
  "referenceTable"?: CreateRulesetRequestDataAttributesRulesItemsReferenceTable;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    mapping: {
      baseName: "mapping",
      type: "CreateRulesetRequestDataAttributesRulesItemsMapping",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: string; }",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "CreateRulesetRequestDataAttributesRulesItemsQuery",
    },
    referenceTable: {
      baseName: "reference_table",
      type: "CreateRulesetRequestDataAttributesRulesItemsReferenceTable",
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
    return CreateRulesetRequestDataAttributesRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
