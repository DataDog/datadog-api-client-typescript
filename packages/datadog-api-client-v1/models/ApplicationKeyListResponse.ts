/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKey } from "./ApplicationKey";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An application key response.
 */
export class ApplicationKeyListResponse {
  /**
   * Array of application keys.
   */
  "applicationKeys"?: Array<ApplicationKey>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    applicationKeys: {
      baseName: "application_keys",
      type: "Array<ApplicationKey>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKeyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
