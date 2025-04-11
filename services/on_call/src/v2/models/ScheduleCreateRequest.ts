import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleCreateRequestData } from "./ScheduleCreateRequestData";

/**
 * The top-level request body for schedule creation, wrapping a `data` object.
 */
export class ScheduleCreateRequest {
  /**
   * The core data wrapper for creating a schedule, encompassing attributes, relationships, and the resource type.
   */
  "data": ScheduleCreateRequestData;
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
      type: "ScheduleCreateRequestData",
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
    return ScheduleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
