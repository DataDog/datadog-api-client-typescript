/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureUCConfigPostData } from "./AzureUCConfigPostData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Azure config Post Request.
 */
export class AzureUCConfigPostRequest {
  /**
   * Azure config Post data.
   */
  "data": AzureUCConfigPostData;

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
      type: "AzureUCConfigPostData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigPostRequest.attributeTypeMap;
  }

  public constructor() {}
}
