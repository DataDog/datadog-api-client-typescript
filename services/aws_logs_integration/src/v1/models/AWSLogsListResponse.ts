import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSLogsLambda } from "./AWSLogsLambda";

/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */
export class AWSLogsListResponse {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * List of ARNs configured in your Datadog account.
   */
  "lambdas"?: Array<AWSLogsLambda>;
  /**
   * Array of services IDs.
   */
  "services"?: Array<string>;
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
    },
    lambdas: {
      baseName: "lambdas",
      type: "Array<AWSLogsLambda>",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSLogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
