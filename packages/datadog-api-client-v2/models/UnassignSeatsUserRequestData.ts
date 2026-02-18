/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeatAssignmentsDataType } from "./SeatAssignmentsDataType";
import { UnassignSeatsUserRequestDataAttributes } from "./UnassignSeatsUserRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class UnassignSeatsUserRequestData {
  "attributes": UnassignSeatsUserRequestDataAttributes;
  /**
   * The ID of the unassign seats user request.
   */
  "id"?: string;
  /**
   * Seat assignments resource type.
   */
  "type": SeatAssignmentsDataType;

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
      type: "UnassignSeatsUserRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SeatAssignmentsDataType",
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
    return UnassignSeatsUserRequestData.attributeTypeMap;
  }

  public constructor() {}
}
