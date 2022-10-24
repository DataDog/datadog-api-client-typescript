/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyResponseIncludedItem } from "./ApplicationKeyResponseIncludedItem";
import { PartialApplicationKey } from "./PartialApplicationKey";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Response for a list of application keys.
 */
export class ListApplicationKeysResponse {
  /**
   * Array of application keys.
   */
  "data"?: Array<PartialApplicationKey>;
  /**
   * Array of objects related to the application key.
   */
  "included"?: Array<ApplicationKeyResponseIncludedItem>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<PartialApplicationKey>",
    },
    included: {
      baseName: "included",
      type: "Array<ApplicationKeyResponseIncludedItem>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListApplicationKeysResponse.attributeTypeMap;
  }

  public constructor() {}
}
