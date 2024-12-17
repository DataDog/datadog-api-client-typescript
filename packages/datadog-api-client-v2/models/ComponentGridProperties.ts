/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Component } from "./Component";
import { ComponentGridPropertiesIsVisible } from "./ComponentGridPropertiesIsVisible";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ComponentGridProperties` object.
 */
export class ComponentGridProperties {
  /**
   * The `ComponentGridProperties` `backgroundColor`.
   */
  "backgroundColor"?: string;
  /**
   * The `ComponentGridProperties` `children`.
   */
  "children"?: Array<Component>;
  /**
   * The definition of `ComponentGridPropertiesIsVisible` object.
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
    backgroundColor: {
      baseName: "backgroundColor",
      type: "string",
    },
    children: {
      baseName: "children",
      type: "Array<Component>",
    },
    isVisible: {
      baseName: "isVisible",
      type: "ComponentGridPropertiesIsVisible",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComponentGridProperties.attributeTypeMap;
  }

  public constructor() {}
}
