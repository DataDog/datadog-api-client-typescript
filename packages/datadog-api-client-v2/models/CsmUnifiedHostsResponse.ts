/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmUnifiedHostData } from "./CsmUnifiedHostData";
import { CsmUnifiedHostsMeta } from "./CsmUnifiedHostsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response returned when listing unified hosts.
 */
export class CsmUnifiedHostsResponse {
  /**
   * The list of unified hosts for the current page.
   */
  "data": Array<CsmUnifiedHostData>;
  /**
   * Pagination metadata for a unified hosts list response.
   */
  "meta": CsmUnifiedHostsMeta;

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
      type: "Array<CsmUnifiedHostData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CsmUnifiedHostsMeta",
      required: true,
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
    return CsmUnifiedHostsResponse.attributeTypeMap;
  }

  public constructor() {}
}
