/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueStreamOrderingKey } from "./IssueStreamOrderingKey";
import { IssueStreamSortOrder } from "./IssueStreamSortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class IssueStreamSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": IssueStreamOrderingKey;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": IssueStreamSortOrder;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "IssueStreamOrderingKey",
      required: true,
    },
    order: {
      baseName: "order",
      type: "IssueStreamSortOrder",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IssueStreamSort.attributeTypeMap;
  }

  public constructor() {}
}
