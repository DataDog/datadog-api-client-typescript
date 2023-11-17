/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeysResponseMetaPage } from "./APIKeysResponseMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Additional information related to api keys response.
 */
export class APIKeysResponseMeta {
  /**
   * Max allowed number of API keys.
   */
  "maxAllowed"?: number;
  /**
   * Additional information related to the API keys response.
   */
  "page"?: APIKeysResponseMetaPage;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    maxAllowed: {
      baseName: "max_allowed",
      type: "number",
      format: "int64",
    },
    page: {
      baseName: "page",
      type: "APIKeysResponseMetaPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeysResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
