/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardTemplateVariablePresetValue } from "./DashboardTemplateVariablePresetValue";

export class DashboardTemplateVariablePreset {
  /**
   * The name of the variable.
   */
  "name"?: string;
  /**
   * List of variables.
   */
  "templateVariables"?: Array<DashboardTemplateVariablePresetValue>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    name: {
      baseName: "name",
      type: "string",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<DashboardTemplateVariablePresetValue>",
    },
  };

  static getAttributeTypeMap() {
    return DashboardTemplateVariablePreset.attributeTypeMap;
  }

  public constructor() {}
}
