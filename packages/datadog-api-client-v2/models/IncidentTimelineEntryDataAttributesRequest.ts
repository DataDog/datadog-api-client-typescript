/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimelineCellType } from "./IncidentTimelineCellType";
import { IncidentTimelineEntryContent } from "./IncidentTimelineEntryContent";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a timeline entry.
 */
export class IncidentTimelineEntryDataAttributesRequest {
  /**
   * The type of a timeline cell.
   */
  "cellType": IncidentTimelineCellType;
  /**
   * The content of a timeline entry.
   */
  "content": IncidentTimelineEntryContent;
  /**
   * The display time for this timeline entry.
   */
  "displayTime"?: Date;
  /**
   * Whether this timeline entry is marked as important.
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
      type: "IncidentTimelineCellType",
      required: true,
    },
    content: {
      baseName: "content",
      type: "IncidentTimelineEntryContent",
      required: true,
    },
    displayTime: {
      baseName: "display_time",
      type: "Date",
      format: "date-time",
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
    return IncidentTimelineEntryDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
