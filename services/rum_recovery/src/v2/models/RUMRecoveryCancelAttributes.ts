import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCancelStatus } from "./RUMRecoveryCancelStatus";

/**
 * Batch cancellation.
 */
export class RUMRecoveryCancelAttributes {
  /**
   * Requested cancellation state.
   */
  "status": RUMRecoveryCancelStatus;
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
    status: {
      baseName: "status",
      type: "RUMRecoveryCancelStatus",
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
    return RUMRecoveryCancelAttributes.attributeTypeMap;
  }

  public constructor() {}
}
