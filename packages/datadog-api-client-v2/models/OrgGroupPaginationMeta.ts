/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPaginationMetaPage } from "./OrgGroupPaginationMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata for org group list responses.
 */
export class OrgGroupPaginationMeta {
  /**
   * Page-based pagination details for org group list responses.
   */
  "page"?: OrgGroupPaginationMetaPage;

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
    page: {
      baseName: "page",
      type: "OrgGroupPaginationMetaPage",
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
    return OrgGroupPaginationMeta.attributeTypeMap;
  }

  public constructor() {}
}
