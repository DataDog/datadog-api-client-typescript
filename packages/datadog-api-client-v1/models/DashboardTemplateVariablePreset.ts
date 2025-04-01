/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardTemplateVariablePresetValue } from "./DashboardTemplateVariablePresetValue";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Template variables saved views.
*/
export class DashboardTemplateVariablePreset {
  /**
   * The name of the variable.
  */
  "name"?: string;
  /**
   * List of variables.
  */
  "templateVariables"?: Array<DashboardTemplateVariablePresetValue>;

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
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "templateVariables": {
      "baseName": "template_variables",
      "type": "Array<DashboardTemplateVariablePresetValue>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return DashboardTemplateVariablePreset.attributeTypeMap;

  }

  public constructor() {











  }
}









