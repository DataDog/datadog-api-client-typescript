import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumStaticSegmentJourneyNode } from "./RumStaticSegmentJourneyNode";

/**
 * The journey query object used to compute the static segment user list.
 */
export class RumStaticSegmentJourneyQueryObject {
  /**
   * The list of journey nodes defining the query.
   */
  "nodes": Array<RumStaticSegmentJourneyNode>;
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
    nodes: {
      baseName: "nodes",
      type: "Array<RumStaticSegmentJourneyNode>",
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
    return RumStaticSegmentJourneyQueryObject.attributeTypeMap;
  }

  public constructor() {}
}
