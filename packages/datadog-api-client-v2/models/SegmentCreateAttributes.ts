/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentDataQuery } from "./SegmentDataQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the segment to create.
 */
export class SegmentCreateAttributes {
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
   * Name of the segment. It must be unique in the organization.
   */
  "name": string;
  /**
   * Tags of the segment. Tags cannot contain commas.
   */
  "tags"?: Array<string>;

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
    dataQuery: {
      baseName: "data_query",
      type: "SegmentDataQuery",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return SegmentCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
