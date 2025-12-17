/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFindingsSearchRequestPage } from "./SecurityFindingsSearchRequestPage";
import { SecurityFindingsSort } from "./SecurityFindingsSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request attributes for searching security findings.
 */
export class SecurityFindingsSearchRequestDataAttributes {
  /**
   * The search query following log search syntax.
   */
  "filter"?: string;
  /**
   * Pagination attributes for the search request.
   */
  "page"?: SecurityFindingsSearchRequestPage;
  /**
   * The sort parameters when querying security findings.
   */
  "sort"?: SecurityFindingsSort;

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
    filter: {
      baseName: "filter",
      type: "string",
    },
    page: {
      baseName: "page",
      type: "SecurityFindingsSearchRequestPage",
    },
    sort: {
      baseName: "sort",
      type: "SecurityFindingsSort",
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
    return SecurityFindingsSearchRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
