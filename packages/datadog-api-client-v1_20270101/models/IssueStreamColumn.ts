/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueStreamColumn20270101Width } from "./IssueStreamColumn20270101Width";
import { IssueStreamColumnName } from "./IssueStreamColumnName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class IssueStreamColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "field": IssueStreamColumnName;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "width": IssueStreamColumn20270101Width;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "IssueStreamColumnName",
      required: true,
    },
    width: {
      baseName: "width",
      type: "IssueStreamColumn20270101Width",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IssueStreamColumn.attributeTypeMap;
  }

  public constructor() {}
}
