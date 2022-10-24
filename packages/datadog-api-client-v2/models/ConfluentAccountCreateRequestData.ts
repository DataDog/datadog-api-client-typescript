/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountCreateRequestAttributes } from "./ConfluentAccountCreateRequestAttributes";
import { ConfluentAccountType } from "./ConfluentAccountType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The data body for adding a Confluent account.
 */
export class ConfluentAccountCreateRequestData {
  /**
   * Attributes associated with the account creation request.
   */
  "attributes": ConfluentAccountCreateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `confluent-cloud-accounts`.
   */
  "type": ConfluentAccountType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "ConfluentAccountCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfluentAccountType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConfluentAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
