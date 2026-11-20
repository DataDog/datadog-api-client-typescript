import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryDiscoveryStatus } from "./RUMRecoveryDiscoveryStatus";

/**
 * Batch cancellation acknowledgment.
 */
export class RUMRecoveryCancelResponseAttributes {
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
  "discoveryStatus": RUMRecoveryDiscoveryStatus;
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
      type: "RUMRecoveryDiscoveryStatus",
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
    return RUMRecoveryCancelResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
