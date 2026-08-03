import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a deployment cancellation response.
 */
export class FleetDeploymentV2CancelAttributes {
  /**
   * Human-readable message describing the outcome of the cancellation request.
   */
  "message"?: string;
  /**
   * Status of the deployment after the cancellation request.
   */
  "status"?: string;
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
    message: {
      baseName: "message",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return FleetDeploymentV2CancelAttributes.attributeTypeMap;
  }

  public constructor() {}
}
