/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestDecisionStatusType } from "./ChangeRequestDecisionStatusType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a change request decision in a response.
 */
export class ChangeRequestDecisionResponseAttributes {
  /**
   * The status of a change request decision.
   */
  "changeRequestStatus": ChangeRequestDecisionStatusType;
  /**
   * Timestamp of when the decision was made.
   */
  "decidedAt": Date;
  /**
   * The reason for the decision.
   */
  "decisionReason": string;
  /**
   * Timestamp of when the decision was deleted.
   */
  "deletedAt": Date;
  /**
   * The reason for requesting the decision.
   */
  "requestReason": string;
  /**
   * Timestamp of when the decision was requested.
   */
  "requestedAt": Date;

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
    changeRequestStatus: {
      baseName: "change_request_status",
      type: "ChangeRequestDecisionStatusType",
      required: true,
    },
    decidedAt: {
      baseName: "decided_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    decisionReason: {
      baseName: "decision_reason",
      type: "string",
      required: true,
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    requestReason: {
      baseName: "request_reason",
      type: "string",
      required: true,
    },
    requestedAt: {
      baseName: "requested_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return ChangeRequestDecisionResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
