/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilter } from "./SecurityFilter";
import { SecurityFilterMeta } from "./SecurityFilterMeta";

import { AttributeTypeMap } from "../util";

/**
 * Response object which includes a single security filter.
 */
export class SecurityFilterResponse {
  /**
   * The security filter's properties.
   */
  "data"?: SecurityFilter;
  /**
   * Optional metadata associated to the response.
   */
  "meta"?: SecurityFilterMeta;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "SecurityFilter",
    },
    meta: {
      baseName: "meta",
      type: "SecurityFilterMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
