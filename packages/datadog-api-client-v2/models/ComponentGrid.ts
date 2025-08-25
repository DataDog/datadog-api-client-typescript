/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppBuilderEvent } from "./AppBuilderEvent";
import { ComponentGridProperties } from "./ComponentGridProperties";
import { ComponentGridType } from "./ComponentGridType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A grid component. The grid component is the root canvas for an app and contains all other components.
*/
export class ComponentGrid {
  /**
   * Events to listen for on the grid component.
  */
  "events"?: Array<AppBuilderEvent>;
  /**
   * The ID of the grid component. This property is deprecated; use `name` to identify individual components instead.
  */
  "id"?: string;
  /**
   * A unique identifier for this grid component. This name is also visible in the app editor.
  */
  "name": string;
  /**
   * Properties of a grid component.
  */
  "properties": ComponentGridProperties;
  /**
   * The grid component type.
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
    "events": {
      "baseName": "events",
      "type": "Array<AppBuilderEvent>",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "properties": {
      "baseName": "properties",
      "type": "ComponentGridProperties",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ComponentGridType",
      "required": true,
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




    return ComponentGrid.attributeTypeMap;

  }

  public constructor() {











  }
}









