/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceMapWidgetDefinitionType } from "./ServiceMapWidgetDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * This widget displays a map of a service to all of the services that call it, and all of the services that it calls.
*/
export class ServiceMapWidgetDefinition {
  /**
   * List of custom links.
  */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Your environment and primary tag (or * if enabled for your account).
  */
  "filters": Array<string>;
  /**
   * The ID of the service you want to map.
  */
  "service": string;
  /**
   * The title of your widget.
  */
  "title"?: string;
  /**
   * How to align the text on the widget.
  */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
  */
  "titleSize"?: string;
  /**
   * Type of the service map widget.
  */
  "type": ServiceMapWidgetDefinitionType;

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
    "customLinks": {
      "baseName": "custom_links",
      "type": "Array<WidgetCustomLink>",
    },
    "filters": {
      "baseName": "filters",
      "type": "Array<string>",
      "required": true,
    },
    "service": {
      "baseName": "service",
      "type": "string",
      "required": true,
    },
    "title": {
      "baseName": "title",
      "type": "string",
    },
    "titleAlign": {
      "baseName": "title_align",
      "type": "WidgetTextAlign",
    },
    "titleSize": {
      "baseName": "title_size",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "ServiceMapWidgetDefinitionType",
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




    return ServiceMapWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









