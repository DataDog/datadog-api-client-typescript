import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Component } from "./Component";
import { ComponentPropertiesIsVisible } from "./ComponentPropertiesIsVisible";

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
  "additionalProperties"?: { [key: string]: { [key: string]: any } };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    children: {
      baseName: "children",
      type: "Array<Component>",
    },
    isVisible: {
      baseName: "isVisible",
      type: "ComponentPropertiesIsVisible",
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
    return ComponentProperties.attributeTypeMap;
  }

  public constructor() {}
}
