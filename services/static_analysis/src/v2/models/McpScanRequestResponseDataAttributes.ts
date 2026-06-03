import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes returned when a scan request has been accepted, containing the job identifier used to poll for results.
 */
export class McpScanRequestResponseDataAttributes {
  /**
   * The job identifier assigned to the scan, used to retrieve the scan result.
   */
  "jobId": string;
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
    jobId: {
      baseName: "job_id",
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
    return McpScanRequestResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
