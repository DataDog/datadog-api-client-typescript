/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateOpenAPIResponseData } from "./CreateOpenAPIResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for `CreateOpenAPI` operation.
 */
export class CreateOpenAPIResponse {
  /**
   * Data envelope for `CreateOpenAPIResponse`.
   */
  "data"?: CreateOpenAPIResponseData;

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
      type: "CreateOpenAPIResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateOpenAPIResponse.attributeTypeMap;
  }

  public constructor() {}
}
