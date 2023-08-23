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
export class MuteFindingResponseProperties {
  /**
   * Additional information about the reason why this finding is muted or unmuted.
   * This attribute will not be included in the response if the description is not provided in the request body.
   */
  "description"?: string;
  /**
   * The expiration date of the mute or unmute action.
   * If the expiration date is not provided in the request body, this attribute will not be included in the response and the finding will be muted or unmuted indefinitely.
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
  };
}
