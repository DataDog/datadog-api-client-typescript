import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * WebSocket close frame information for WebSocket test responses.
 */
export class SyntheticsTestResultWebSocketClose {
  /**
   * Reason string received in the close frame.
   */
  "reason"?: string;
  /**
   * Status code received in the close frame.
   */
  "statusCode"?: number;
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
    reason: {
      baseName: "reason",
      type: "string",
    },
    statusCode: {
      baseName: "status_code",
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
    return SyntheticsTestResultWebSocketClose.attributeTypeMap;
  }

  public constructor() {}
}
