/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentUser } from "./SegmentUser";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes of a segment in a list. The segment definition is not included.
 */
export class SegmentSummaryAttributes {
  /**
   * Time the segment was created.
   */
  "createdAt": Date;
  /**
   * A Datadog user who created, modified, or disabled a segment.
   */
  "createdBy"?: SegmentUser;
  /**
   * Description of the segment.
   */
  "description"?: string;
  /**
   * Kind of entity that the segment contains, `user` or `account`.
   */
  "entity"?: string;
  /**
   * Time the segment was last modified.
   */
  "modifiedAt": Date;
  /**
   * A Datadog user who created, modified, or disabled a segment.
   */
  "modifiedBy"?: SegmentUser;
  /**
   * Name of the segment.
   */
  "name": string;
  /**
   * ID of the organization that owns the segment.
   */
  "orgId"?: Int64;
  /**
   * Number of entities in the segment when its membership was last computed. `-1` means the count is not
   * available yet.
   */
  "rowCount"?: Int64;
  /**
   * Who created the segment. `0` for a user and `1` for Datadog.
   */
  "source"?: Int64;
  /**
   * Tags of the segment.
   */
  "tags"?: Array<string>;
  /**
   * Kind of segment, derived from its blocks.
   */
  "type"?: string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "SegmentUser",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    entity: {
      baseName: "entity",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "SegmentUser",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    rowCount: {
      baseName: "row_count",
      type: "number",
      format: "int64",
    },
    source: {
      baseName: "source",
      type: "number",
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SegmentSummaryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
