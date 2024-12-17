/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Component } from "./Component";
import { ComponentPropertiesIsVisible } from "./ComponentPropertiesIsVisible";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ComponentProperties` object.
 */
export class ComponentProperties {
  /**
   * The `ComponentProperties` `children`.
   */
  "children"?: Array<Component>;
  /**
   * The definition of `ComponentPropertiesIsVisible` object.
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
      type: "any",
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
