/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsTemplateItem } from "./LLMObsPatternsTemplateItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a list of Agent Observability patterns templates.
 */
export class LLMObsPatternsTemplatesResponseAttributes {
  /**
   * List of patterns templates.
   */
  "templates": Array<LLMObsPatternsTemplateItem>;

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
    templates: {
      baseName: "templates",
      type: "Array<LLMObsPatternsTemplateItem>",
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
    return LLMObsPatternsTemplatesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
