import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSegmentDataQuery } from "./RumSegmentDataQuery";
import { RumSegmentSegmentType } from "./RumSegmentSegmentType";
import { RumSegmentSource } from "./RumSegmentSource";
import { RumSegmentUser } from "./RumSegmentUser";

/**
 * Attributes of a segment in a response.
 */
export class RumSegmentResponseAttributes {
  /**
   * The creation timestamp in RFC 3339 format.
   */
  "createdAt": Date;
  /**
   * A user who performed an action on a segment.
   */
  "createdBy": RumSegmentUser;
  /**
   * Query definition for the segment. Contains one or more query blocks and an optional combination formula.
   */
  "dataQuery": RumSegmentDataQuery;
  /**
   * A description of the segment.
   */
  "description": string;
  /**
   * The last modification timestamp in RFC 3339 format.
   */
  "modifiedAt": Date;
  /**
   * A user who performed an action on a segment.
   */
  "modifiedBy": RumSegmentUser;
  /**
   * The name of the segment.
   */
  "name": string;
  /**
   * The organization identifier.
   */
  "orgId": number;
  /**
   * The number of users in the segment.
   */
  "rowCount": number;
  /**
   * The source of a segment.
   */
  "source": RumSegmentSource;
  /**
   * A list of tags for the segment.
   */
  "tags": Array<string>;
  /**
   * The type of a segment based on its data query configuration.
   */
  "type": RumSegmentSegmentType;
  /**
   * The unique identifier of the segment.
   */
  "uuid": string;
  /**
   * The version number of the segment.
   */
  "version": number;
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
      type: "RumSegmentUser",
      required: true,
    },
    dataQuery: {
      baseName: "data_query",
      type: "RumSegmentDataQuery",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "RumSegmentUser",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    rowCount: {
      baseName: "row_count",
      type: "number",
      required: true,
      format: "int64",
    },
    source: {
      baseName: "source",
      type: "RumSegmentSource",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumSegmentSegmentType",
      required: true,
    },
    uuid: {
      baseName: "uuid",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
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
    return RumSegmentResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
