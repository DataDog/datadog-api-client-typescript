/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimelineCellMarkdownContentType } from "./IncidentTimelineCellMarkdownContentType";
import { IncidentTimelineCellMarkdownCreateAttributesContent } from "./IncidentTimelineCellMarkdownCreateAttributesContent";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Timeline cell data for Markdown timeline cells for a create request.
*/
export class IncidentTimelineCellMarkdownCreateAttributes {
  /**
   * Type of the Markdown timeline cell.
  */
  "cellType": IncidentTimelineCellMarkdownContentType;
  /**
   * The Markdown timeline cell contents.
  */
  "content": IncidentTimelineCellMarkdownCreateAttributesContent;
  /**
   * A flag indicating whether the timeline cell is important and should be highlighted.
  */
  "important"?: boolean;

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
    "cellType": {
      "baseName": "cell_type",
      "type": "IncidentTimelineCellMarkdownContentType",
      "required": true,
    },
    "content": {
      "baseName": "content",
      "type": "IncidentTimelineCellMarkdownCreateAttributesContent",
      "required": true,
    },
    "important": {
      "baseName": "important",
      "type": "boolean",
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




    return IncidentTimelineCellMarkdownCreateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









