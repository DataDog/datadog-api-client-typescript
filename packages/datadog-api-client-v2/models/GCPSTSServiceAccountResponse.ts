/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPSTSServiceAccount } from "./GCPSTSServiceAccount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The account creation response.
 */
export class GCPSTSServiceAccountResponse {
  /**
   * Info on your service account.
   */
  "data"?: GCPSTSServiceAccount;

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
      type: "GCPSTSServiceAccount",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPSTSServiceAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
