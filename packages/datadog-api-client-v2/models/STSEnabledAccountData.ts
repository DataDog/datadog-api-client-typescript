/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPSTSAccounts } from "./GCPSTSAccounts";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing all your STS enabled accounts.
 */
export class STSEnabledAccountData {
  /**
   * Array of GCP STS enabled service accounts.
   */
  "data"?: Array<GCPSTSAccounts>;

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
      type: "Array<GCPSTSAccounts>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return STSEnabledAccountData.attributeTypeMap;
  }

  public constructor() {}
}
