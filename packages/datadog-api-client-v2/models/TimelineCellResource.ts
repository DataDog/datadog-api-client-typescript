/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimelineCell } from "./TimelineCell";
import { TimelineCellResourceType } from "./TimelineCellResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A timeline cell resource representing a single entry in a case's activity timeline.
 */
export class TimelineCellResource {
  /**
   * Attributes of a timeline cell, representing a single event in a case's chronological activity log (for example, a comment, status change, or assignment update).
   */
  "attributes": TimelineCell;
  /**
   * Timeline cell's identifier
   */
  "id": string;
  /**
   * JSON:API resource type for timeline cells.
   */
  "type": TimelineCellResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "TimelineCell",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimelineCellResourceType",
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
    return TimelineCellResource.attributeTypeMap;
  }

  public constructor() {}
}
