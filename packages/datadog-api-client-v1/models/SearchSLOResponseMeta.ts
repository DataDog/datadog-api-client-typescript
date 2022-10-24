/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SearchSLOResponseMetaPage } from "./SearchSLOResponseMetaPage";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Searches metadata returned by the API.
 */
export class SearchSLOResponseMeta {
  /**
   * Pagination metadata returned by the API.
   */
  "pagination"?: SearchSLOResponseMetaPage;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pagination: {
      baseName: "pagination",
      type: "SearchSLOResponseMetaPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchSLOResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
