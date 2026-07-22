import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingMuteReason } from "./FindingMuteReason";

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
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FindingMute.attributeTypeMap;
  }

  public constructor() {}
}
