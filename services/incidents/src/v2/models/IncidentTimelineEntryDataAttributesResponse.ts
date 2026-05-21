import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimelineCellSource } from "./IncidentTimelineCellSource";
import { IncidentTimelineCellType } from "./IncidentTimelineCellType";
import { IncidentTimelineEntryContent } from "./IncidentTimelineEntryContent";

/**
 * Attributes of a timeline entry.
 */
export class IncidentTimelineEntryDataAttributesResponse {
  /**
   * The type of a timeline cell.
   */
  "cellType": IncidentTimelineCellType;
  /**
   * The content of a timeline entry.
   */
  "content": IncidentTimelineEntryContent;
  /**
   * Timestamp when the entry was created.
   */
  "created": Date;
  /**
   * The display time for this timeline entry.
   */
  "displayTime": Date;
  /**
   * Whether this timeline entry is marked as important.
   */
  "important": boolean;
  /**
   * The incident identifier.
   */
  "incidentId": string;
  /**
   * Timestamp when the entry was last modified.
   */
  "modified": Date;
  /**
   * UUID of the parent timeline entry.
   */
  "parentUuid"?: string;
  /**
   * The source of a timeline cell.
   */
  "source": IncidentTimelineCellSource;
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
      type: "IncidentTimelineCellType",
      required: true,
    },
    content: {
      baseName: "content",
      type: "IncidentTimelineEntryContent",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    displayTime: {
      baseName: "display_time",
      type: "Date",
      required: true,
      format: "date-time",
    },
    important: {
      baseName: "important",
      type: "boolean",
      required: true,
    },
    incidentId: {
      baseName: "incident_id",
      type: "string",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    parentUuid: {
      baseName: "parent_uuid",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "IncidentTimelineCellSource",
      required: true,
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
    return IncidentTimelineEntryDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
