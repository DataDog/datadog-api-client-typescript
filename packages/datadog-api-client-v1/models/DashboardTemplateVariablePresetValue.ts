/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Template variables saved views.
 */
export class DashboardTemplateVariablePresetValue {
  /**
   * The name of the variable.
   */
  "name"?: string;
  /**
   * The value of the template variable within the saved view.
   */
  "value"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardTemplateVariablePresetValue.attributeTypeMap;
  }

  public constructor() {}
}
