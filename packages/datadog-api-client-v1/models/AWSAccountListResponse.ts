/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAccount } from "./AWSAccount";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * List of enabled AWS accounts.
 */
export class AWSAccountListResponse {
  /**
   * List of enabled AWS accounts.
   */
  "accounts"?: Array<AWSAccount>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accounts: {
      baseName: "accounts",
      type: "Array<AWSAccount>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSAccountListResponse.attributeTypeMap;
  }

  public constructor() {}
}
