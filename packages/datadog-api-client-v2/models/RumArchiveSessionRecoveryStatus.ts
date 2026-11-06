/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRecoverySessionStatus } from "./RumRecoverySessionStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Session recovery state. A missing recovery record can be represented as null. Optional request_id and recovered_at are omitted when unavailable.
 */
export class RumArchiveSessionRecoveryStatus {
  /**
   * Recovery timestamp, when available.
   */
  "recoveredAt"?: Date;
  /**
   * Associated recovery request ID.
   */
  "requestId"?: string;
  /**
   * Session availability or recovery state. `RECOVERED` indicates that the session is ready to query.
   */
  "status": RumRecoverySessionStatus;

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
    recoveredAt: {
      baseName: "recovered_at",
      type: "Date",
      format: "date-time",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "RumRecoverySessionStatus",
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
    return RumArchiveSessionRecoveryStatus.attributeTypeMap;
  }

  public constructor() {}
}
