/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppBuilderEvent } from "./AppBuilderEvent";
import { ComponentGridProperties } from "./ComponentGridProperties";
import { ComponentGridType } from "./ComponentGridType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ComponentGrid` object.
 */
export class ComponentGrid {
  /**
   * The `ComponentGrid` `events`.
   */
  "events"?: Array<AppBuilderEvent>;
  /**
   * The `ComponentGrid` `id`.
   */
  "id"?: string;
  /**
   * The `ComponentGrid` `name`.
   */
  "name": string;
  /**
   * The definition of `ComponentGridProperties` object.
   */
  "properties": ComponentGridProperties;
  /**
   * The definition of `ComponentGridType` object.
   */
  "type": ComponentGridType;

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
      type: "ComponentGridProperties",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ComponentGridType",
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
    return ComponentGrid.attributeTypeMap;
  }

  public constructor() {}
}
