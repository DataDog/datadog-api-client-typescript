/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceAccountInfoPatch } from "./ServiceAccountInfoPatch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service account info.
 */
export class AccountPatchBody {
  /**
   * Info on your newly generated service account.
   */
  "data"?: ServiceAccountInfoPatch;

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
      type: "ServiceAccountInfoPatch",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountPatchBody.attributeTypeMap;
  }

  public constructor() {}
}
