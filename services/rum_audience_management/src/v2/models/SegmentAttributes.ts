import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentDataQuery } from "./SegmentDataQuery";
import { SegmentUser } from "./SegmentUser";

/**
 * Attributes of a segment.
 */
export class SegmentAttributes {
  /**
   * Time the segment was created.
   */
  "createdAt": Date;
  /**
   * A Datadog user who created, modified, or disabled a segment.
   */
  "createdBy"?: SegmentUser;
  /**
   * Defines who belongs to the segment. It contains one or more blocks, up to 20 in total.
   * Use `combination` to combine named blocks with a boolean formula such as `A AND NOT B`.
   */
  "dataQuery": SegmentDataQuery;
  /**
   * Description of the segment.
   */
  "description"?: string;
  /**
   * Time the segment was disabled, if it was.
   */
  "disabledAt"?: Date;
  /**
   * A Datadog user who created, modified, or disabled a segment.
   */
  "disabledBy"?: SegmentUser;
  /**
   * Kind of entity that the segment contains, `user` or `account`.
   */
  "entity"?: string;
  /**
   * Time the segment membership was last computed.
   */
  "materializedAt"?: Date;
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
  "orgId"?: number;
  /**
   * Number of entities in the segment when its membership was last computed. `-1` means the count is not
   * available yet.
   */
  "rowCount"?: number;
  /**
   * Who created the segment. `0` for a user and `1` for Datadog.
   */
  "source"?: number;
  /**
   * Tags of the segment.
   */
  "tags"?: Array<string>;
  /**
   * Kind of segment, derived from its blocks, such as `event_platform`, `user_store`, or `combination`.
   */
  "type"?: string;
  /**
   * Version of the segment, increased on each update.
   */
  "version"?: number;
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
    dataQuery: {
      baseName: "data_query",
      type: "SegmentDataQuery",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    disabledAt: {
      baseName: "disabled_at",
      type: "Date",
      format: "date-time",
    },
    disabledBy: {
      baseName: "disabled_by",
      type: "SegmentUser",
    },
    entity: {
      baseName: "entity",
      type: "string",
    },
    materializedAt: {
      baseName: "materialized_at",
      type: "Date",
      format: "date-time",
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
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return SegmentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
