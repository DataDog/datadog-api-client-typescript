/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DelegateAccountAttributes } from "./DelegateAccountAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Datadog principal service account info.
 */
export class DelegateInfo {
  /**
   * Your delegate account attributes.
   */
  "attributes"?: DelegateAccountAttributes;
  /**
   * The ID of the delegate service account.
   */
  "id"?: string;
  /**
   * The type of account.
   */
  "type"?: string;

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
      type: "DelegateAccountAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DelegateInfo.attributeTypeMap;
  }

  public constructor() {}
}
