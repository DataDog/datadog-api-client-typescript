/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppBuilderEvent } from "./AppBuilderEvent";
import { ComponentProperties } from "./ComponentProperties";
import { ComponentType } from "./ComponentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * [Definition of a UI component in the app](https://docs.datadoghq.com/service_management/app_builder/components/)
 */
export class Component {
  /**
   * Events to listen for on the UI component.
   */
  "events"?: Array<AppBuilderEvent>;
  /**
   * The ID of the UI component. This property is deprecated; use `name` to identify individual components instead.
   */
  "id"?: string;
  /**
   * A unique identifier for this UI component. This name is also visible in the app editor.
   */
  "name": string;
  /**
   * Properties of a UI component. Different component types can have their own additional unique properties. See the [components documentation](https://docs.datadoghq.com/service_management/app_builder/components/) for more detail on each component type and its properties.
   */
  "properties": ComponentProperties;
  /**
   * The UI component type.
   */
  "type": ComponentType;

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
    events: {
      baseName: "events",
      type: "Array<AppBuilderEvent>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "ComponentProperties",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ComponentType",
      required: true,
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
    return Component.attributeTypeMap;
  }

  public constructor() {}
}
