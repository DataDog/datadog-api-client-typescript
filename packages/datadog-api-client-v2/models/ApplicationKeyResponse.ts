/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyResponseIncludedItem } from "./ApplicationKeyResponseIncludedItem";
import { FullApplicationKey } from "./FullApplicationKey";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving an application key.
 */
export class ApplicationKeyResponse {
  /**
   * Datadog application key.
   */
  "data"?: FullApplicationKey;
  /**
   * Array of objects related to the application key.
   */
  "included"?: Array<ApplicationKeyResponseIncludedItem>;

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
      type: "FullApplicationKey",
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
    return ApplicationKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
