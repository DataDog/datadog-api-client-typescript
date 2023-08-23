/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSLogsLambda } from "./AWSLogsLambda";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };
}
