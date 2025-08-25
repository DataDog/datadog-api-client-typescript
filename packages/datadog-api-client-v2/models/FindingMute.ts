/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingMuteReason } from "./FindingMuteReason";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about the mute status of this finding.
 */
export class FindingMute {
  /**
   * Additional information about the reason why this finding is muted or unmuted.
   */
  "description"?: string;
  /**
   * The expiration date of the mute or unmute action (Unix ms).
   */
  "expirationDate"?: number;
  /**
   * Whether this finding is muted or unmuted.
   */
  "muted"?: boolean;
  /**
   * The reason why this finding is muted or unmuted.
   */
  "reason"?: FindingMuteReason;
  /**
   * The start of the mute period.
   */
  "startDate"?: number;
  /**
   * The ID of the user who muted or unmuted this finding.
   */
  "uuid"?: string;

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
    expirationDate: {
      baseName: "expiration_date",
      type: "number",
      format: "int64",
    },
    muted: {
      baseName: "muted",
      type: "boolean",
    },
    reason: {
      baseName: "reason",
      type: "FindingMuteReason",
    },
    startDate: {
      baseName: "start_date",
      type: "number",
      format: "int64",
    },
    uuid: {
      baseName: "uuid",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FindingMute.attributeTypeMap;
  }

  public constructor() {}
}
