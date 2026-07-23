import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationStrongLinkUpdateStatus } from "./RUMOperationStrongLinkUpdateStatus";

/**
 * Attributes for updating a RUM operation strong link.
 */
export class RUMOperationStrongLinkUpdateRequestAttributes {
  /**
   * The status of a RUM operation strong link. Can only be set to `CONFIRMED` or `REJECTED`.
   */
  "status": RUMOperationStrongLinkUpdateStatus;
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
      type: "RUMOperationStrongLinkUpdateStatus",
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
    return RUMOperationStrongLinkUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
