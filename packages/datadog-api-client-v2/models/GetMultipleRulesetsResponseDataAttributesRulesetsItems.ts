/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A ruleset returned in the response, containing its metadata and associated rules.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItems {
  /**
   * The resource identifier and type for a ruleset.
   */
  "data": GetMultipleRulesetsResponseDataAttributesRulesetsItemsData;
  /**
   * A detailed description of the ruleset's purpose and the types of issues it targets.
   */
  "description"?: string;
  /**
   * The unique name of the ruleset.
   */
  "name"?: string;
  /**
   * The list of static analysis rules included in this ruleset.
   */
  "rules"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems>;
  /**
   * A brief summary of the ruleset, suitable for display in listings.
   */
  "shortDescription"?: string;

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
    data: {
      baseName: "data",
      type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsData",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    rules: {
      baseName: "rules",
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems>",
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItems.attributeTypeMap;
  }

  public constructor() {}
}
