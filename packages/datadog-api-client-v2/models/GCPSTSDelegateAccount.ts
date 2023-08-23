/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPSTSDelegateAccountAttributes } from "./GCPSTSDelegateAccountAttributes";
import { GCPSTSDelegateAccountType } from "./GCPSTSDelegateAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Datadog principal service account info.
 */
export class GCPSTSDelegateAccount {
  /**
   * Your delegate account attributes.
   */
  "attributes"?: GCPSTSDelegateAccountAttributes;
  /**
   * The ID of the delegate service account.
   */
  "id"?: string;
  /**
   * The type of account.
   */
  "type"?: GCPSTSDelegateAccountType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "GCPSTSDelegateAccountAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "GCPSTSDelegateAccountType",
    },
  };
}
