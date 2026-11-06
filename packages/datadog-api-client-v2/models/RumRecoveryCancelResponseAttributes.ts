/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRecoveryDiscoveryStatus } from "./RumRecoveryDiscoveryStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Batch cancellation acknowledgment.
 */
export class RumRecoveryCancelResponseAttributes {
  /**
   * Cancellation time.
   */
  "cancelledAt": Date;
  /**
   * Handle of the user who canceled the batch.
   */
  "cancelledBy": string;
  /**
   * Batch discovery state. QUEUED indicates that the request is waiting for processing capacity.
   */
  "discoveryStatus": RumRecoveryDiscoveryStatus;

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
    cancelledAt: {
      baseName: "cancelled_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    cancelledBy: {
      baseName: "cancelled_by",
      type: "string",
      required: true,
    },
    discoveryStatus: {
      baseName: "discovery_status",
      type: "RumRecoveryDiscoveryStatus",
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
    return RumRecoveryCancelResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
