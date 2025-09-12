/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateRulesetRequestDataAttributesRulesItemsQueryAddition } from "./CreateRulesetRequestDataAttributesRulesItemsQueryAddition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItemsQuery` object.
 */
export class CreateRulesetRequestDataAttributesRulesItemsQuery {
  /**
   * The definition of `CreateRulesetRequestDataAttributesRulesItemsQueryAddition` object.
   */
  "addition": CreateRulesetRequestDataAttributesRulesItemsQueryAddition | null;
  /**
   * The `query` `case_insensitivity`.
   */
  "caseInsensitivity"?: boolean;
  /**
   * The `query` `if_not_exists`.
   */
  "ifNotExists": boolean;
  /**
   * The `query` `query`.
   */
  "query": string;

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
    addition: {
      baseName: "addition",
      type: "CreateRulesetRequestDataAttributesRulesItemsQueryAddition",
      required: true,
    },
    caseInsensitivity: {
      baseName: "case_insensitivity",
      type: "boolean",
    },
    ifNotExists: {
      baseName: "if_not_exists",
      type: "boolean",
      required: true,
    },
    query: {
      baseName: "query",
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
    return CreateRulesetRequestDataAttributesRulesItemsQuery.attributeTypeMap;
  }

  public constructor() {}
}
