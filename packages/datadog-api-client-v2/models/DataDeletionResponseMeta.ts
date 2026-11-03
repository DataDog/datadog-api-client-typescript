/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The metadata of the data deletion response.
 */
export class DataDeletionResponseMeta {
  /**
   * Number of additional deletion requests the current organization can create before reaching the concurrency limit. Requests with a `pending`, `in_progress`, or `deleting` status count toward the limit. This field is returned only when listing deletion requests, and is omitted if the value cannot be determined.
   */
  "availableSlots"?: Int64;
  /**
   * The total deletion requests created by product.
   */
  "countProduct"?: { [key: string]: Int64 };
  /**
   * The total deletion requests created by status.
   */
  "countStatus"?: { [key: string]: Int64 };
  /**
   * Maximum number of deletion requests with a `pending`, `in_progress`, or `deleting` status that the current organization can have at the same time. This field is returned only when listing deletion requests, and is omitted if the value cannot be determined.
   */
  "maxConcurrentRequests"?: Int64;
  /**
   * The next page when searching deletion requests created in the current organization.
   */
  "nextPage"?: string;
  /**
   * The product of the deletion request.
   */
  "product"?: string;
  /**
   * The status of the executed request.
   */
  "requestStatus"?: string;

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
    availableSlots: {
      baseName: "available_slots",
      type: "number",
      format: "int64",
    },
    countProduct: {
      baseName: "count_product",
      type: "{ [key: string]: number; }",
      format: "int64",
    },
    countStatus: {
      baseName: "count_status",
      type: "{ [key: string]: number; }",
      format: "int64",
    },
    maxConcurrentRequests: {
      baseName: "max_concurrent_requests",
      type: "number",
      format: "int64",
    },
    nextPage: {
      baseName: "next_page",
      type: "string",
    },
    product: {
      baseName: "product",
      type: "string",
    },
    requestStatus: {
      baseName: "request_status",
      type: "string",
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
    return DataDeletionResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
