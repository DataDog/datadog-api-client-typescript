/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapWidgetDefinitionStyle } from "./GeomapWidgetDefinitionStyle";
import { GeomapWidgetDefinitionType } from "./GeomapWidgetDefinitionType";
import { GeomapWidgetDefinitionView } from "./GeomapWidgetDefinitionView";
import { GeomapWidgetRequest } from "./GeomapWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * This visualization displays a series of values by country on a world map.
*/
export class GeomapWidgetDefinition {
  /**
   * A list of custom links.
  */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Array of one request object to display in the widget. The request must contain a `group-by` tag whose value is a country ISO code.
   * 
   * See the [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)
   * for information about building the `REQUEST_SCHEMA`.
  */
  "requests": [GeomapWidgetRequest];
  /**
   * The style to apply to the widget.
  */
  "style": GeomapWidgetDefinitionStyle;
  /**
   * Time setting for the widget.
  */
  "time"?: WidgetTime;
  /**
   * The title of your widget.
  */
  "title"?: string;
  /**
   * How to align the text on the widget.
  */
  "titleAlign"?: WidgetTextAlign;
  /**
   * The size of the title.
  */
  "titleSize"?: string;
  /**
   * Type of the geomap widget.
  */
  "type": GeomapWidgetDefinitionType;
  /**
   * The view of the world that the map should render.
  */
  "view": GeomapWidgetDefinitionView;

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
    "requests": {
      "baseName": "requests",
      "type": "[GeomapWidgetRequest]",
      "required": true,
    },
    "style": {
      "baseName": "style",
      "type": "GeomapWidgetDefinitionStyle",
      "required": true,
    },
    "time": {
      "baseName": "time",
      "type": "WidgetTime",
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
      "type": "GeomapWidgetDefinitionType",
      "required": true,
    },
    "view": {
      "baseName": "view",
      "type": "GeomapWidgetDefinitionView",
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




    return GeomapWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









