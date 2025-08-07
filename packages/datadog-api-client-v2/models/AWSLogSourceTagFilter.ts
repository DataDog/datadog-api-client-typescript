/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS log source tag filter list. Defaults to `[]`.
 * Array of log source to AWS resource tag mappings. Each mapping contains a log source and its associated AWS resource tags (in `key:value` format) used to filter logs submitted to Datadog.
 * Tag filters are applied for tags on the AWS resource emitting logs; tags associated with the log storage entity (such as a CloudWatch Log Group or S3 Bucket) are not considered.
 * For more information on resource tag filter syntax, [see AWS resource exclusion](https://docs.datadoghq.com/account_management/billing/aws/#aws-resource-exclusion) in the AWS integration billing page.
 */
export class AWSLogSourceTagFilter {
  /**
   * The AWS log source to which the tag filters defined in `tags` are applied.
   */
  "source"?: string;
  /**
   * The AWS resource tags to filter on for the log source specified by `source`.
   */
  "tags"?: Array<string>;

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
    source: {
      baseName: "source",
      type: "string",
    },
    tags: {
      baseName: "tags",
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
    return AWSLogSourceTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
