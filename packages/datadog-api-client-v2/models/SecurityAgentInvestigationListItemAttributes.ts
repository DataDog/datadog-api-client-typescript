/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationSignal } from "./SecurityAgentInvestigationSignal";
import { SecurityAgentInvestigationState } from "./SecurityAgentInvestigationState";
import { SecurityAgentInvestigationVerdict } from "./SecurityAgentInvestigationVerdict";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an investigation in a list. To get an investigation's full content, use the get investigation
 * endpoint.
 */
export class SecurityAgentInvestigationListItemAttributes {
  /**
   * When the investigation started.
   */
  "createdAt"?: Date;
  /**
   * Whether this is the latest investigation of the signal. Always true when `filter[signal_id]` isn't set.
   */
  "isLatest": boolean;
  /**
   * ID of the detection rule that generated the signal. It can be empty while the investigation runs.
   */
  "ruleId": string;
  /**
   * Summary of the signal the investigation is about.
   */
  "signal"?: SecurityAgentInvestigationSignal;
  /**
   * ID of the signal, in its V1 form.
   */
  "signalId": string;
  /**
   * State of the investigation: `investigating` while it runs, `completed` after it has a result, or `failed`
   * when it produced no result before its timeout.
   */
  "state": SecurityAgentInvestigationState;
  /**
   * When the investigation last changed.
   */
  "updatedAt"?: Date;
  /**
   * Verdict of the investigation. Only completed investigations have one.
   */
  "verdict"?: SecurityAgentInvestigationVerdict;

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
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    isLatest: {
      baseName: "is_latest",
      type: "boolean",
      required: true,
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
      required: true,
    },
    signal: {
      baseName: "signal",
      type: "SecurityAgentInvestigationSignal",
    },
    signalId: {
      baseName: "signal_id",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "SecurityAgentInvestigationState",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    verdict: {
      baseName: "verdict",
      type: "SecurityAgentInvestigationVerdict",
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
    return SecurityAgentInvestigationListItemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
