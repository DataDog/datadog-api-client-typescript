import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimelineCellResource } from "./TimelineCellResource";

/**
 * Response containing the chronological list of timeline cells for a case.
 */
export class TimelineResponse {
  /**
   * The `TimelineResponse` `data`.
   */
  "data"?: Array<TimelineCellResource>;
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
    data: {
      baseName: "data",
      type: "Array<TimelineCellResource>",
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
    return TimelineResponse.attributeTypeMap;
  }

  public constructor() {}
}
