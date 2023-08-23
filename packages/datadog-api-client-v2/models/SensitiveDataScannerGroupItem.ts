/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGroupType } from "./SensitiveDataScannerGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to a Sensitive Data Scanner Group.
 */
export class SensitiveDataScannerGroupItem {
  /**
   * ID of the group.
   */
  "id"?: string;
  /**
   * Sensitive Data Scanner group type.
   */
  "type"?: SensitiveDataScannerGroupType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      type: "string",
    },
    type: {
      type: "SensitiveDataScannerGroupType",
    },
  };
}
