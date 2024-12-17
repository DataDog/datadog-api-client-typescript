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
 * The definition of `Component` object.
 */
export class Component {
  /**
   * The `Component` `events`.
   */
  "events"?: Array<AppBuilderEvent>;
  /**
   * The `Component` `id`.
   */
  "id"?: string;
  /**
   * The `Component` `name`.
   */
  "name": string;
  /**
   * The definition of `ComponentProperties` object.
   */
  "properties": ComponentProperties;
  /**
   * The definition of `ComponentType` object.
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
