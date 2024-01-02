/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSRelatedAccount } from "./AWSRelatedAccount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of AWS related accounts.
 */
export class AWSRelatedAccountsResponse {
  /**
   * An AWS related account.
   */
  "data"?: Array<AWSRelatedAccount>;

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
      type: "Array<AWSRelatedAccount>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSRelatedAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
