import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response payload for executing a remediation.
 */
export class RemediationExecuteResponse {
  /**
   * Echoes the investigation ID that the remediation runs against.
   */
  "investigationId": string;
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
    investigationId: {
      baseName: "investigation_id",
      type: "string",
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
    return RemediationExecuteResponse.attributeTypeMap;
  }

  public constructor() {}
}
