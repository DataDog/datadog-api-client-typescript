/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A template variable that viewers can modify on the shared dashboard.
*/
export class SharedDashboardSelectableTemplateVariable {
  /**
   * Whether viewers can see all tag values for the template variable and specify any value.
  */
  "allowAnyValue": boolean;
  /**
   * Default selected values for the variable.
  */
  "defaultValues": Array<string>;
  /**
   * Name of the template variable.
  */
  "name": string;
  /**
   * Tag prefix for the variable.
  */
  "prefix": string;
  /**
   * Type of the template variable.
  */
  "type": string;
  /**
   * Restricts which tag values are visible to the viewer.
  */
  "visibleTags": Array<string>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "allowAnyValue": {
      "baseName": "allow_any_value",
      "type": "boolean",
      "required": true,
    },
    "defaultValues": {
      "baseName": "default_values",
      "type": "Array<string>",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "prefix": {
      "baseName": "prefix",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "string",
      "required": true,
    },
    "visibleTags": {
      "baseName": "visible_tags",
      "type": "Array<string>",
      "required": true,
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




    return SharedDashboardSelectableTemplateVariable.attributeTypeMap;

  }

  public constructor() {











  }
}









