import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingMuteReason } from "./FindingMuteReason";

/**
 * Object containing the new mute properties of the findings.
 */
export class BulkMuteFindingsRequestProperties {
  /**
   * Additional information about the reason why those findings are muted or unmuted. This field has a maximum limit of 280 characters.
   */
  "description"?: string;
  /**
   * The expiration date of the mute or unmute action (Unix ms). It must be set to a value greater than the current timestamp.
   * If this field is not provided, the finding will be muted or unmuted indefinitely, which is equivalent to setting the expiration date to 9999999999999.
   */
  "expirationDate"?: number;
  /**
   * Whether those findings should be muted or unmuted.
   */
  "muted": boolean;
  /**
   * The reason why this finding is muted or unmuted.
   */
  "reason": FindingMuteReason;
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
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "FindingMuteReason",
      required: true,
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkMuteFindingsRequestProperties.attributeTypeMap;
  }

  public constructor() {}
}
