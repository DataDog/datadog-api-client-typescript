/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Pagination } from "./Pagination";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing meta attributes of response.
 */
export class ResponseMetaAttributes {
  /**
   * Pagination object.
   */
  "page"?: Pagination;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      type: "Pagination",
    },
  };
}
