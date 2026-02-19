/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSegmentDataQuery } from "./RumSegmentDataQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a new segment.
 */
export class RumSegmentCreateAttributes {
  /**
   * Query definition for the segment. Contains one or more query blocks and an optional combination formula.
   */
  "dataQuery": RumSegmentDataQuery;
  /**
   * A description of the segment.
   */
  "description"?: string;
  /**
   * The name of the segment.
   */
  "name": string;
  /**
   * A list of tags for the segment.
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
      type: "RumSegmentDataQuery",
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
    return RumSegmentCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
