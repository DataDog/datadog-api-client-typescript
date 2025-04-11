import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Logs Services response body
 */
export class AWSLogsServicesResponseAttributes {
  /**
   * List of AWS services that can send logs to Datadog
   */
  "logsServices": Array<string>;
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
    logsServices: {
      baseName: "logs_services",
      type: "Array<string>",
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
    return AWSLogsServicesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
