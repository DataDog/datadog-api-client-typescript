import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Request payload for executing a remediation.
 */
export class RemediationExecuteRequest {
  /**
   * The Action Platform AWS connection ID to execute through. Must carry the integration_aws connection prefix.
   */
  "connectionId": string;
  /**
   * The ID of the investigation to remediate.
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
    connectionId: {
      baseName: "connection_id",
      type: "string",
      required: true,
    },
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
    return RemediationExecuteRequest.attributeTypeMap;
  }

  public constructor() {}
}
