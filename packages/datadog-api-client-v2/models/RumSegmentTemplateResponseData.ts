/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSegmentTemplateResourceType } from "./RumSegmentTemplateResourceType";
import { RumSegmentTemplateResponseAttributes } from "./RumSegmentTemplateResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a segment template in a response.
 */
export class RumSegmentTemplateResponseData {
  /**
   * Attributes of a segment template in a response.
   */
  "attributes": RumSegmentTemplateResponseAttributes;
  /**
   * The unique identifier of the template.
   */
  "id": string;
  /**
   * Type of the segment template resource.
   */
  "type": RumSegmentTemplateResourceType;

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
      type: "RumSegmentTemplateResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumSegmentTemplateResourceType",
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
    return RumSegmentTemplateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
