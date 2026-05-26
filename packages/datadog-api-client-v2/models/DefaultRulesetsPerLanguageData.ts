/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DefaultRulesetsPerLanguageDataAttributes } from "./DefaultRulesetsPerLanguageDataAttributes";
import { DefaultRulesetsPerLanguageDataType } from "./DefaultRulesetsPerLanguageDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The primary data object in the default rulesets per language response.
 */
export class DefaultRulesetsPerLanguageData {
  /**
   * The attributes of the default rulesets per language response, containing the list of default ruleset names.
   */
  "attributes": DefaultRulesetsPerLanguageDataAttributes;
  /**
   * The language identifier used as the resource identifier.
   */
  "id": string;
  /**
   * Default rulesets per language resource type.
   */
  "type": DefaultRulesetsPerLanguageDataType;

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
    attributes: {
      baseName: "attributes",
      type: "DefaultRulesetsPerLanguageDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DefaultRulesetsPerLanguageDataType",
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
    return DefaultRulesetsPerLanguageData.attributeTypeMap;
  }

  public constructor() {}
}
