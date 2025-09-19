/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlakyTestsPagination } from "./FlakyTestsPagination";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the flaky tests search response.
 */
export class FlakyTestsSearchResponseMeta {
  /**
   * Pagination metadata for flaky tests.
   */
  "pagination"?: FlakyTestsPagination;

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
    pagination: {
      baseName: "pagination",
      type: "FlakyTestsPagination",
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
    return FlakyTestsSearchResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
