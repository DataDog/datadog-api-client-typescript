/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentDataAttributesDataQuery } from "./SegmentDataAttributesDataQuery";
import { SegmentDataSource } from "./SegmentDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class SegmentDataAttributes {
  "createdAt"?: Date;
  "createdBy"?: SegmentDataSource;
  "dataQuery": SegmentDataAttributesDataQuery;
  "description"?: string;
  "disabledAt"?: Date;
  "disabledBy"?: SegmentDataSource;
  "materializationRowCount"?: number;
  "materializedAt"?: string;
  "modifiedAt"?: Date;
  "modifiedBy"?: SegmentDataSource;
  "name": string;
  "orgId"?: number;
  "source"?: number;
  "tags"?: Array<string>;
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
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "SegmentDataSource",
    },
    dataQuery: {
      baseName: "data_query",
      type: "SegmentDataAttributesDataQuery",
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
      type: "SegmentDataSource",
    },
    materializationRowCount: {
      baseName: "materialization_row_count",
      type: "number",
      format: "int64",
    },
    materializedAt: {
      baseName: "materialized_at",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "SegmentDataSource",
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
    source: {
      baseName: "source",
      type: "number",
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return SegmentDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
