/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a template variable.
 */
export class IncidentTemplateVariableDataAttributes {
  /**
   * A description of the template variable.
   */
  "description": string;
  /**
   * The display name of the template variable.
   */
  "displayName": string;
  /**
   * The domain of the template variable.
   */
  "domain": string;
  /**
   * The variable name used in templates.
   */
  "variable": string;

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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
    },
    variable: {
      baseName: "variable",
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
    return IncidentTemplateVariableDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
