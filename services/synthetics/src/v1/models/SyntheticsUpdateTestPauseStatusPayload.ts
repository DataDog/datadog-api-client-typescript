import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

/**
 * Object to start or pause an existing Synthetic test.
 */
export class SyntheticsUpdateTestPauseStatusPayload {
  /**
   * Define whether you want to start (`live`) or pause (`paused`) a
   * Synthetic test.
   */
  "newStatus"?: SyntheticsTestPauseStatus;
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
    newStatus: {
      baseName: "new_status",
      type: "SyntheticsTestPauseStatus",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsUpdateTestPauseStatusPayload.attributeTypeMap;
  }

  public constructor() {}
}
