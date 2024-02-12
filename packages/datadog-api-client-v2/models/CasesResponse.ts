/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Case } from "./Case";
import { CasesResponseMeta } from "./CasesResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with cases
 */
export class CasesResponse {
  /**
   * Cases response data
   */
  "data"?: Array<Case>;
  /**
   * Cases response metadata
   */
  "meta"?: CasesResponseMeta;

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
      type: "Array<Case>",
    },
    meta: {
      baseName: "meta",
      type: "CasesResponseMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CasesResponse.attributeTypeMap;
  }

  public constructor() {}
}
