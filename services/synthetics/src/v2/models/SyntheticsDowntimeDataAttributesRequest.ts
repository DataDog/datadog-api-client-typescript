import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDowntimeTimeSlotRequest } from "./SyntheticsDowntimeTimeSlotRequest";

/**
 * Attributes for creating or updating a Synthetics downtime.
 */
export class SyntheticsDowntimeDataAttributesRequest {
  /**
   * An optional description of the downtime.
   */
  "description"?: string;
  /**
   * Whether the downtime is enabled.
   */
  "isEnabled": boolean;
  /**
   * The name of the downtime.
   */
  "name": string;
  /**
   * List of tags associated with a Synthetics downtime.
   */
  "tags"?: Array<string>;
  /**
   * List of Synthetics test public IDs associated with a downtime.
   */
  "testIds": Array<string>;
  /**
   * List of time slots for a Synthetics downtime create or update request.
   */
  "timeSlots": Array<SyntheticsDowntimeTimeSlotRequest>;
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
    },
    isEnabled: {
      baseName: "isEnabled",
      type: "boolean",
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
    testIds: {
      baseName: "testIds",
      type: "Array<string>",
      required: true,
    },
    timeSlots: {
      baseName: "timeSlots",
      type: "Array<SyntheticsDowntimeTimeSlotRequest>",
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
    return SyntheticsDowntimeDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
