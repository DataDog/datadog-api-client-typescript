/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Jira account
 */
export class JiraAccountAttributes {
  /**
   * The consumer key for the Jira account
   */
  "consumerKey": string;
  /**
   * The URL of the Jira instance
   */
  "instanceUrl": string;
  /**
   * Timestamp of the last webhook received
   */
  "lastWebhookTimestamp"?: Date;

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
    consumerKey: {
      baseName: "consumer_key",
      type: "string",
      required: true,
    },
    instanceUrl: {
      baseName: "instance_url",
      type: "string",
      required: true,
    },
    lastWebhookTimestamp: {
      baseName: "last_webhook_timestamp",
      type: "Date",
      format: "date-time",
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
    return JiraAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
