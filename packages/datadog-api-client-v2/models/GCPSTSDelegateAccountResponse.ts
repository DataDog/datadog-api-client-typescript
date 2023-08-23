/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPSTSDelegateAccount } from "./GCPSTSDelegateAccount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Your delegate service account response data.
 */
export class GCPSTSDelegateAccountResponse {
  /**
   * Datadog principal service account info.
   */
  "data"?: GCPSTSDelegateAccount;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "GCPSTSDelegateAccount",
    },
  };
}
