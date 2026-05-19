import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimelineCell } from "./TimelineCell";
import { TimelineCellResourceType } from "./TimelineCellResourceType";

/**
 * Timeline cell JSON:API resource
 */
export class TimelineCellResource {
  /**
   * timeline cell
   */
  "attributes": TimelineCell;
  /**
   * Timeline cell's identifier
   */
  "id": string;
  /**
   * Timeline cell JSON:API resource type
   */
  "type": TimelineCellResourceType;
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
      type: "TimelineCell",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimelineCellResourceType",
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
    return TimelineCellResource.attributeTypeMap;
  }

  public constructor() {}
}
