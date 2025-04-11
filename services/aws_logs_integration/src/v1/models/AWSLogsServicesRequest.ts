import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A list of current AWS services for which Datadog offers automatic log collection.
 */
export class AWSLogsServicesRequest {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId": string;
  /**
   * Array of services IDs set to enable automatic log collection. Discover the list of available services with the get list of AWS log ready services API endpoint.
   */
  "services": Array<string>;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    services: {
      baseName: "services",
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
    return AWSLogsServicesRequest.attributeTypeMap;
  }

  public constructor() {}
}
