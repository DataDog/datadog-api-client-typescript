/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagChangeEvent } from "./FeatureFlagChangeEvent";
import { FeatureFlagHistoryPaginationMeta } from "./FeatureFlagHistoryPaginationMeta";
import { FeatureFlagsPaginationLinks } from "./FeatureFlagsPaginationLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing feature flag change events, newest first.
 */
export class ListFeatureFlagHistoryResponse {
  /**
   * The change events.
   */
  "data": Array<FeatureFlagChangeEvent>;
  /**
   * Pagination links. Follow `next` with the same authentication to retrieve the next page. Links use `page[limit]` and `page[offset]` and preserve the filters. Navigation links are omitted when not applicable.
   */
  "links"?: FeatureFlagsPaginationLinks;
  /**
   * Pagination metadata for feature flag change history.
   */
  "meta"?: FeatureFlagHistoryPaginationMeta;

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
    data: {
      baseName: "data",
      type: "Array<FeatureFlagChangeEvent>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "FeatureFlagsPaginationLinks",
    },
    meta: {
      baseName: "meta",
      type: "FeatureFlagHistoryPaginationMeta",
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
    return ListFeatureFlagHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
