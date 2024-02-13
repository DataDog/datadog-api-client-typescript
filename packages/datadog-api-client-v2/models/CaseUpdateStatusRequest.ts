/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseUpdateStatus } from "./CaseUpdateStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case update status request
 */
export class CaseUpdateStatusRequest {
  /**
   * Case update status
   */
  "data": CaseUpdateStatus;

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
      type: "CaseUpdateStatus",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseUpdateStatusRequest.attributeTypeMap;
  }

  public constructor() {}
}
