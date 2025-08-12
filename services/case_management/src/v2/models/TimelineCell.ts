import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimelineCellAuthor } from "./TimelineCellAuthor";
import { TimelineCellContent } from "./TimelineCellContent";
import { TimelineCellType } from "./TimelineCellType";

/**
 * timeline cell
 */
export class TimelineCell {
  /**
   * author of the timeline cell
   */
  "author"?: TimelineCellAuthor;
  /**
   * timeline cell content
   */
  "cellContent"?: TimelineCellContent;
  /**
   * Timestamp of when the cell was created
   */
  "createdAt"?: Date;
  /**
   * Timestamp of when the cell was deleted
   */
  "deletedAt"?: Date;
  /**
   * Timestamp of when the cell was last modified
   */
  "modifiedAt"?: Date;
  /**
   * Timeline cell content type
   */
  "type"?: TimelineCellType;
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
    author: {
      baseName: "author",
      type: "TimelineCellAuthor",
    },
    cellContent: {
      baseName: "cell_content",
      type: "TimelineCellContent",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    type: {
      baseName: "type",
      type: "TimelineCellType",
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
    return TimelineCell.attributeTypeMap;
  }

  public constructor() {}
}
