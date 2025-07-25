/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Template variables saved views.
 */
export class DashboardTemplateVariablePresetValue {
  /**
   * The name of the variable.
   */
  "name"?: string;
  /**
   * (deprecated) The value of the template variable within the saved view. Cannot be used in conjunction with `values`.
   */
  "value"?: string;
  /**
   * One or many template variable values within the saved view, which will be unioned together using `OR` if more than one is specified. Cannot be used in conjunction with `value`.
   */
  "values"?: Array<string>;

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
    name: {
      baseName: "name",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return DashboardTemplateVariablePresetValue.attributeTypeMap;
  }

  public constructor() {}
}
