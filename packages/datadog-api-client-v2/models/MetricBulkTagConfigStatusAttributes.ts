/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Optional attributes for the status of a bulk tag configuration request.
 */
export class MetricBulkTagConfigStatusAttributes {
  /**
   * A list of account emails to notify when the configuration is applied.
   */
  "emails"?: Array<string>;
  /**
   * The status of the request.
   */
  "status"?: string;
  /**
   * A list of tag names to apply to the configuration.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    emails: {
      baseName: "emails",
      type: "Array<string>",
      format: "email",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };
}
