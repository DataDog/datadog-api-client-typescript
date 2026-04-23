import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Health check information returned from a gRPC health check call.
 */
export class SyntheticsTestResultHealthCheck {
  /**
   * Raw health check message payload.
   */
  "message"?: { [key: string]: string };
  /**
   * Health check status code.
   */
  "status"?: number;
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
      type: "{ [key: string]: string; }",
    },
    status: {
      baseName: "status",
      type: "number",
      format: "int64",
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
    return SyntheticsTestResultHealthCheck.attributeTypeMap;
  }

  public constructor() {}
}
