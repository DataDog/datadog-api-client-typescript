/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostByOrg } from "./CostByOrg";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Chargeback Summary response.
 */
export class CostByOrgResponse {
  /**
   * Response containing Chargeback Summary.
   */
  "data"?: Array<CostByOrg>;

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
      type: "Array<CostByOrg>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CostByOrgResponse.attributeTypeMap;
  }

  public constructor() {}
}
