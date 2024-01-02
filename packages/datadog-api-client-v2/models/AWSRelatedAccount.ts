/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSRelatedAccountAttributes } from "./AWSRelatedAccountAttributes";
import { AWSRelatedAccountType } from "./AWSRelatedAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS related account.
 */
export class AWSRelatedAccount {
  /**
   * Attributes for an AWS related account.
   */
  "attributes"?: AWSRelatedAccountAttributes;
  /**
   * The AWS account ID.
   */
  "id": string;
  /**
   * Type of AWS related account.
   */
  "type": AWSRelatedAccountType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "AWSRelatedAccountAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSRelatedAccountType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSRelatedAccount.attributeTypeMap;
  }

  public constructor() {}
}
