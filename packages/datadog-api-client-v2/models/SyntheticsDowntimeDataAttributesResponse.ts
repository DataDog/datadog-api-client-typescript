/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDowntimeTimeSlotResponse } from "./SyntheticsDowntimeTimeSlotResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Synthetics downtime response object.
 */
export class SyntheticsDowntimeDataAttributesResponse {
  /**
   * The timestamp when the downtime was created.
   */
  "createdAt": Date;
  /**
   * The UUID of the user who created the downtime.
   */
  "createdBy": string;
  /**
   * The display name of the user who created the downtime.
   */
  "createdByName": string;
  /**
   * The description of the downtime.
   */
  "description": string;
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
  "tags": Array<string>;
  /**
   * List of Synthetics test public IDs associated with a downtime.
   */
  "testIds": Array<string>;
  /**
   * List of time slots in a Synthetics downtime response.
   */
  "timeSlots": Array<SyntheticsDowntimeTimeSlotResponse>;
  /**
   * The timestamp when the downtime was last updated.
   */
  "updatedAt": Date;
  /**
   * The UUID of the user who last updated the downtime.
   */
  "updatedBy": string;
  /**
   * The display name of the user who last updated the downtime.
   */
  "updatedByName": string;

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
      baseName: "createdAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "createdBy",
      type: "string",
      required: true,
    },
    createdByName: {
      baseName: "createdByName",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
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
      required: true,
    },
    testIds: {
      baseName: "testIds",
      type: "Array<string>",
      required: true,
    },
    timeSlots: {
      baseName: "timeSlots",
      type: "Array<SyntheticsDowntimeTimeSlotResponse>",
      required: true,
    },
    updatedAt: {
      baseName: "updatedAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    updatedBy: {
      baseName: "updatedBy",
      type: "string",
      required: true,
    },
    updatedByName: {
      baseName: "updatedByName",
      type: "string",
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
    return SyntheticsDowntimeDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
