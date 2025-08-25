/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilter } from "./SecurityFilter";
import { SecurityFilterMeta } from "./SecurityFilterMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "SecurityFilter",
    },
    meta: {
      baseName: "meta",
      type: "SecurityFilterMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
