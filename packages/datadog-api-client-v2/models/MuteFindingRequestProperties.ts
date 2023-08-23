/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingMuteReason } from "./FindingMuteReason";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the new mute properties of the finding.
 */
export class MuteFindingRequestProperties {
  /**
   * Additional information about the reason why this finding is muted or unmuted. This field has a maximum limit of 280 characters.
   */
  "description"?: string;
  /**
   * The expiration date of the mute or unmute action (Unix ms). It must be set to a value greater than the current timestamp.
   * If this field is not provided, the finding will be muted or unmuted indefinitely, which is equivalent to setting the expiration date to 9999999999999.
   */
  "expirationDate"?: number;
  /**
   * Whether this finding is muted or unmuted.
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
      type: "string",
    },
    expirationDate: {
      baseName: "expiration_date",
      type: "number",
      format: "int64",
    },
    muted: {
      type: "boolean",
      required: true,
    },
    reason: {
      type: "FindingMuteReason",
      required: true,
    },
  };
}
