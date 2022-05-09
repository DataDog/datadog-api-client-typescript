/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Template variable.
 */
export class DashboardTemplateVariable {
  /**
   * The list of values that the template variable drop-down is limited to.
   */
  "availableValues"?: Array<string>;
  /**
   * The default value for the template variable on dashboard load.
   */
  "_default"?: string;
  /**
   * The name of the variable.
   */
  "name": string;
  /**
   * The tag prefix associated with the variable. Only tags with this prefix appear in the variable drop-down.
   */
  "prefix"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    availableValues: {
      baseName: "available_values",
      type: "Array<string>",
    },
    _default: {
      baseName: "default",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    prefix: {
      baseName: "prefix",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardTemplateVariable.attributeTypeMap;
  }

  public constructor() {}
}
