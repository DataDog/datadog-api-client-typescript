import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimelineCellMarkdownContentType } from "./IncidentTimelineCellMarkdownContentType";
import { IncidentTimelineCellMarkdownCreateAttributesContent } from "./IncidentTimelineCellMarkdownCreateAttributesContent";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
