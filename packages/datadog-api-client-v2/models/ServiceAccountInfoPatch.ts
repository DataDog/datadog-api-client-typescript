/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccountAttributes } from "./AccountAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Info on your newly generated service account.
 */
export class ServiceAccountInfoPatch {
  /**
   * Attributes associated with your service account.
   */
  "attributes"?: AccountAttributes;
  /**
   * Your service account's unique ID.
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
      type: "AccountAttributes",
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
    return ServiceAccountInfoPatch.attributeTypeMap;
  }

  public constructor() {}
}
