import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumStaticSegmentJourneyQueryObject } from "./RumStaticSegmentJourneyQueryObject";

/**
 * Attributes for creating a new static segment.
 */
export class RumStaticSegmentCreateAttributes {
  /**
   * A description of the static segment.
   */
  "description": string;
  /**
   * The journey query object used to compute the static segment user list.
   */
  "journeyQueryObject": RumStaticSegmentJourneyQueryObject;
  /**
   * The name of the static segment.
   */
  "name": string;
  /**
   * A list of tags for the static segment.
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    journeyQueryObject: {
      baseName: "journey_query_object",
      type: "RumStaticSegmentJourneyQueryObject",
      required: true,
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
    return RumStaticSegmentCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
