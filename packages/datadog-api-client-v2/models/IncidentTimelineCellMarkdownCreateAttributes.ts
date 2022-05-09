/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimelineCellMarkdownContentType } from "./IncidentTimelineCellMarkdownContentType";
import { IncidentTimelineCellMarkdownCreateAttributesContent } from "./IncidentTimelineCellMarkdownCreateAttributesContent";

import { AttributeTypeMap } from "../util";

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
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cellType: {
      baseName: "cell_type",
      type: "IncidentTimelineCellMarkdownContentType",
      required: true,
    },
    content: {
      baseName: "content",
      type: "IncidentTimelineCellMarkdownCreateAttributesContent",
      required: true,
    },
    important: {
      baseName: "important",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTimelineCellMarkdownCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
