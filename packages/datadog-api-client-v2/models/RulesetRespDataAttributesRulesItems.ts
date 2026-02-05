/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataAttributesRulesItemsMapping } from "./DataAttributesRulesItemsMapping";
import { RulesetRespDataAttributesRulesItemsQuery } from "./RulesetRespDataAttributesRulesItemsQuery";
import { RulesetRespDataAttributesRulesItemsReferenceTable } from "./RulesetRespDataAttributesRulesItemsReferenceTable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `RulesetRespDataAttributesRulesItems` object.
 */
export class RulesetRespDataAttributesRulesItems {
  /**
   * The `items` `enabled`.
   */
  "enabled": boolean;
  /**
   * The definition of `DataAttributesRulesItemsMapping` object.
   */
  "mapping"?: DataAttributesRulesItemsMapping;
  /**
   * The `items` `metadata`.
   */
  "metadata"?: { [key: string]: string };
  /**
   * The `items` `name`.
   */
  "name": string;
  /**
   * The definition of `RulesetRespDataAttributesRulesItemsQuery` object.
   */
  "query"?: RulesetRespDataAttributesRulesItemsQuery;
  /**
   * The definition of `RulesetRespDataAttributesRulesItemsReferenceTable` object.
   */
  "referenceTable"?: RulesetRespDataAttributesRulesItemsReferenceTable;

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
      type: "DataAttributesRulesItemsMapping",
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
      type: "RulesetRespDataAttributesRulesItemsQuery",
    },
    referenceTable: {
      baseName: "reference_table",
      type: "RulesetRespDataAttributesRulesItemsReferenceTable",
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
    return RulesetRespDataAttributesRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
