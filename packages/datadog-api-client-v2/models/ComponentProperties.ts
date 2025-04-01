/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Component } from "./Component";
import { ComponentPropertiesIsVisible } from "./ComponentPropertiesIsVisible";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Properties of a UI component. Different component types can have their own additional unique properties. See the [components documentation](https://docs.datadoghq.com/service_management/app_builder/components/) for more detail on each component type and its properties.
*/
export class ComponentProperties {
  /**
   * The child components of the UI component.
  */
  "children"?: Array<Component>;
  /**
   * Whether the UI component is visible. If this is a string, it must be a valid JavaScript expression that evaluates to a boolean.
  */
  "isVisible"?: ComponentPropertiesIsVisible;

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
    "children": {
      "baseName": "children",
      "type": "Array<Component>",
    },
    "isVisible": {
      "baseName": "isVisible",
      "type": "ComponentPropertiesIsVisible",
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




    return ComponentProperties.attributeTypeMap;

  }

  public constructor() {











  }
}









