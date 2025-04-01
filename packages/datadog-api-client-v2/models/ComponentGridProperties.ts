/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Component } from "./Component";
import { ComponentGridPropertiesIsVisible } from "./ComponentGridPropertiesIsVisible";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Properties of a grid component.
*/
export class ComponentGridProperties {
  /**
   * The background color of the grid.
  */
  "backgroundColor"?: string;
  /**
   * The child components of the grid.
  */
  "children"?: Array<Component>;
  /**
   * Whether the grid component and its children are visible. If a string, it must be a valid JavaScript expression that evaluates to a boolean.
  */
  "isVisible"?: ComponentGridPropertiesIsVisible;

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
    "backgroundColor": {
      "baseName": "backgroundColor",
      "type": "string",
    },
    "children": {
      "baseName": "children",
      "type": "Array<Component>",
    },
    "isVisible": {
      "baseName": "isVisible",
      "type": "ComponentGridPropertiesIsVisible",
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




    return ComponentGridProperties.attributeTypeMap;

  }

  public constructor() {











  }
}









