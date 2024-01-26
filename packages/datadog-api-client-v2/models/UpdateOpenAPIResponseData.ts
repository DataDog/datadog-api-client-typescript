/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateOpenAPIResponseAttributes } from "./UpdateOpenAPIResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for `UpdateOpenAPIResponse`.
 */
export class UpdateOpenAPIResponseData {
  /**
   * Attributes for `UpdateOpenAPI`.
   */
  "attributes"?: UpdateOpenAPIResponseAttributes;
  /**
   * API identifier.
   */
  "id"?: string;

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
      type: "UpdateOpenAPIResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UpdateOpenAPIResponseData.attributeTypeMap;
  }

  public constructor() {}
}
