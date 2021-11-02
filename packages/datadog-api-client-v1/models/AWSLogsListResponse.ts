/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSLogsLambda } from "./AWSLogsLambda";

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

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
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
  };

  static getAttributeTypeMap() {
    return AWSLogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
